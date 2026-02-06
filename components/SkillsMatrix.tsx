
import React from 'react';
import { SKILLS } from '../constants';

const SkillsMatrix: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {SKILLS.map((category) => (
        <div key={category.title} className="p-8 rounded-2xl bg-emerald-900/20 border border-emerald-800/50 hover:border-emerald-500/30 transition-all">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 rounded-lg bg-emerald-950 border border-emerald-900 text-emerald-200/80 text-sm font-medium hover:bg-emerald-900 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsMatrix;
