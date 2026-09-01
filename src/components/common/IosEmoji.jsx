/**
 * IosEmoji — Renders an emoji using Apple's official emoji images
 * sourced from the emoji-datasource-apple package via jsDelivr CDN.
 *
 * Usage:
 *   <IosEmoji emoji="😍" size={72} />
 *
 * Props:
 *   emoji  — The emoji character (e.g. "😍")
 *   size   — Width & height in px (default: 64)
 *   style  — Optional extra inline styles
 *   className — Optional className
 */

/**
 * Converts an emoji character to its hex codepoint string,
 * handling multi-codepoint sequences (e.g. flag emojis, ZWJ sequences).
 * Apple's dataset uses the full sequence joined by dashes, no variation selectors.
 */
function emojiToCodepoint(emoji) {
  const codePoints = [];
  for (const char of emoji) {
    const cp = char.codePointAt(0);
    // Skip variation selector-16 (U+FE0F) — Apple omits it in filenames
    if (cp === 0xfe0f) continue;
    codePoints.push(cp.toString(16).toLowerCase());
  }
  return codePoints.join('-');
}

const IosEmoji = ({ emoji, size = 64, style = {}, className = '' }) => {
  const src = `https://emojicdn.elk.sh/${emoji}?style=apple`;

  return (
    <img
      src={src}
      alt={emoji}
      width={size}
      height={size}
      draggable={false}
      className={className}
      style={{
        display: 'inline-block',
        userSelect: 'none',
        ...style,
      }}
    />
  );
};

export default IosEmoji;
