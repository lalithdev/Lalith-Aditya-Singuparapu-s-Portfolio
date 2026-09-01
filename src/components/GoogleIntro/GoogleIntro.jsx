/**
 * GoogleIntro.jsx — Orchestrator
 *
 * Single entry point for the full Google Search intro animation.
 * All sub-components live in the same GoogleIntro/ folder.
 *
 * Stages:
 *   0  → Idle — homepage renders
 *   1  → Search box receives focus + cursor blinks
 *   2  → Autocomplete suggestions animate in
 *   3  → Human-paced typing begins (Lalith Aditya)
 *   4  → Suggestions dismiss, page morph begins
 *   5  → Results page visible + knowledge panel
 *   6  → Cursor appears at screen centre
 *   7  → Cursor animates to result #1 (getBoundingClientRect)
 *   8  → Hover state (underline, blue-brighter) + hover pause
 *   9  → Click: ripple + visited-purple flash
 *  10  → Zoom-into-result sequence
 *  11  → Portfolio dissolve — onComplete()
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchHomePage from './SearchHomePage';
import SearchResults from './SearchResults';
import AnimatedCursor from './AnimatedCursor';
import { humanTypingDelay } from './constants';
import { overlayZoomExit } from './animations';

const SEARCH_QUERY = 'Lalith Aditya';

const GoogleIntro = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const [cursorTarget, setCursorTarget] = useState({ x: '50vw', y: '55vh' });

  // Ref forwarded to result card #1 for getBoundingClientRect
  const firstResultRef = useRef(null);

  // ── Stage machine ────────────────────────────────────────────────────────
  useEffect(() => {
    let t;

    switch (stage) {
      // Stage 0 — short idle before focus
      case 0:
        t = setTimeout(() => setStage(1), 700);
        break;

      // Stage 1 — focused; wait a beat then show suggestions
      case 1:
        t = setTimeout(() => setStage(2), 550);
        break;

      // Stage 2 — suggestions visible; wait then start typing
      case 2:
        t = setTimeout(() => setStage(3), 700);
        break;

      // Stage 3 — human-paced typing
      case 3: {
        if (typedText.length < SEARCH_QUERY.length) {
          const nextChar = SEARCH_QUERY[typedText.length];
          const delay = humanTypingDelay(nextChar, typedText.length);
          t = setTimeout(
            () => setTypedText(SEARCH_QUERY.slice(0, typedText.length + 1)),
            delay
          );
        } else {
          // Typing complete — pause, then trigger search
          t = setTimeout(() => setStage(4), 420);
        }
        break;
      }

      // Stage 4 — page morph: homepage exits, results enter
      case 4:
        t = setTimeout(() => {
          setShowResults(true);
          setStage(5);
        }, 350);
        break;

      // Stage 5 — results page visible; wait for render then compute cursor target
      case 5:
        t = setTimeout(() => {
          if (firstResultRef.current) {
            const rect = firstResultRef.current.getBoundingClientRect();
            // Aim at the title of result #1 (title is ~60px below top of card)
            setCursorTarget({ x: rect.left + 12, y: rect.top + 62 });
          }
          setStage(6);
        }, 600);
        break;

      // Stage 6 — cursor appears; immediately start moving to target
      case 6:
        t = setTimeout(() => setStage(7), 120);
        break;

      // Stage 7 — cursor travelling to result; hover pause
      case 7:
        t = setTimeout(() => setStage(8), 1400);
        break;

      // Stage 8 — hover state (underline + bright); pause before click
      case 8:
        t = setTimeout(() => {
          setShowRipple(true);
          setStage(9);
        }, 600);
        break;

      // Stage 9 — click (ripple + purple); brief pause
      case 9:
        t = setTimeout(() => {
          setShowRipple(false);
          setStage(10);
        }, 350);
        break;

      // Stage 10 — cinematic whole-overlay zoom+blur exit
      case 10:
        // Duration matches overlayZoomExit transition (850ms)
        t = setTimeout(() => setStage(11), 860);
        break;

      // Stage 11 — overlay has already faded; call onComplete immediately
      case 11:
        t = setTimeout(() => onComplete(), 50);
        break;

      default:
        break;
    }

    return () => clearTimeout(t);
  }, [stage, typedText, onComplete]);

  // ── Cursor target: recompute on window resize ────────────────────────────
  useEffect(() => {
    if (stage < 5) return;
    const handleResize = () => {
      if (firstResultRef.current) {
        const rect = firstResultRef.current.getBoundingClientRect();
        setCursorTarget({ x: rect.left + 12, y: rect.top + 62 });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [stage]);

  // ── Skip handler ─────────────────────────────────────────────────────────
  const handleSkip = useCallback(() => onComplete(), [onComplete]);

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* Inject blink-cursor keyframes */}
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

      <AnimatePresence>
        {stage < 12 && (
          <motion.div
            key="google-intro"
            variants={overlayZoomExit}
            initial="idle"
            animate={stage >= 10 ? 'exiting' : 'idle'}
            className="fixed inset-0 z-[100] overflow-hidden"
            style={{
              background: '#3c3c3c',
              fontFamily: "'Google Sans', Arial, sans-serif",
              color: '#e8eaed',
              willChange: 'transform, opacity, filter',
            }}
          >
            {/* ── Homepage ── */}
            <SearchHomePage stage={stage} typedText={typedText} />

            {/* ── Results Page ── */}
            <SearchResults
              stage={stage}
              visible={showResults}
              onResultRef={firstResultRef}
            />

            {/* ── Animated Cursor ── */}
            <AnimatedCursor
              stage={stage}
              targetX={cursorTarget.x}
              targetY={cursorTarget.y}
              showRipple={showRipple}
            />

            {/* ── Skip Button ── */}
            <div className="absolute bottom-5 right-5 z-[150]">
              <button
                id="google-intro-skip"
                onClick={handleSkip}
                className="text-[13px] font-medium transition-all"
                style={{
                  color: '#9aa0a6',
                  background: '#303134',
                  border: '1px solid #5f6368',
                  borderRadius: '20px',
                  padding: '7px 18px',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#e8eaed';
                  e.currentTarget.style.background = '#3c4043';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9aa0a6';
                  e.currentTarget.style.background = '#303134';
                }}
              >
                Skip →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GoogleIntro;
