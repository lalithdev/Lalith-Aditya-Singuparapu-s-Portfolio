import React from 'react';
import { motion } from 'framer-motion';
import { KNOWLEDGE_PANEL } from './constants';
import { knowledgePanelVariants } from './animations';

const skillColors = [
  '#8ab4f8', '#81c995', '#f28b82', '#fdd663', '#c58af9',
  '#8ab4f8', '#81c995', '#fdd663',
];

const KnowledgePanel = ({ visible }) => {
  if (!visible) return null;

  return (
    <motion.div
      variants={knowledgePanelVariants}
      initial="hidden"
      animate="visible"
      className="flex-shrink-0 w-[300px] xl:w-[340px]"
    >
      <div
        className="rounded-xl overflow-hidden"
        style={{
          border: '1px solid #3c4043',
          background: '#292a2d',
        }}
      >
        {/* Header section */}
        <div
          className="px-5 py-5"
          style={{ borderBottom: '1px solid #3c4043' }}
        >
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center text-xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #8ab4f8 0%, #c58af9 100%)',
                color: '#202124',
                letterSpacing: '-0.5px',
              }}
            >
              {KNOWLEDGE_PANEL.initials}
            </div>
            <div className="flex-1 min-w-0">
              <h2
                className="text-[18px] font-medium leading-snug"
                style={{ color: '#e8eaed' }}
              >
                {KNOWLEDGE_PANEL.name}
              </h2>
              <p className="text-[13px] mt-[2px]" style={{ color: '#9aa0a6' }}>
                {KNOWLEDGE_PANEL.title}
              </p>
            </div>
          </div>

          <p className="text-[13px] mt-3" style={{ color: '#bdc1c6' }}>
            {KNOWLEDGE_PANEL.subtitle}
          </p>
          <p className="text-[12px] mt-1" style={{ color: '#9aa0a6' }}>
            {KNOWLEDGE_PANEL.university}
          </p>
        </div>

        {/* Skills section */}
        <div className="px-5 py-4" style={{ borderBottom: '1px solid #3c4043' }}>
          <h3 className="text-[12px] uppercase tracking-widest mb-3" style={{ color: '#9aa0a6' }}>
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {KNOWLEDGE_PANEL.skills.map((skill, i) => (
              <span
                key={skill}
                className="text-[12px] px-2 py-[3px] rounded"
                style={{
                  background: 'rgba(138, 180, 248, 0.08)',
                  border: `1px solid ${skillColors[i % skillColors.length]}30`,
                  color: skillColors[i % skillColors.length],
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Links section */}
        <div className="px-5 py-4">
          <h3 className="text-[12px] uppercase tracking-widest mb-3" style={{ color: '#9aa0a6' }}>
            Profiles
          </h3>
          <div className="flex flex-col gap-[10px]">
            {KNOWLEDGE_PANEL.links.map((link) => (
              <div key={link.label} className="flex items-center gap-2">
                <div
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                  style={{ background: link.color }}
                />
                <span
                  className="text-[13px] cursor-pointer hover:underline"
                  style={{ color: link.color }}
                >
                  {link.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "People also search for" style footer */}
      <div
        className="mt-3 px-4 py-3 rounded-lg text-[12px]"
        style={{
          border: '1px solid #3c4043',
          background: '#292a2d',
          color: '#9aa0a6',
        }}
      >
        <span className="font-medium" style={{ color: '#bdc1c6' }}>Related searches: </span>
        full stack engineer portfolio · AI engineer India · Spring Boot developer
      </div>
    </motion.div>
  );
};

export default KnowledgePanel;
