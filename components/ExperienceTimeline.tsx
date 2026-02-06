
import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, Building2 } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative space-y-6">
      {/* Continuous Vertical Line */}
      <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-800/20 to-transparent"></div>

      {EXPERIENCE.map((exp, index) => (
        <div key={exp.id} className="relative pl-14 group">
          {/* Timeline Dot */}
          <div className="absolute left-5 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-emerald-950 border-2 border-emerald-500 group-hover:scale-125 group-hover:bg-emerald-500 transition-all duration-300 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)] mt-1.5"></div>

          {/* Content Card */}
          <div className="p-6 rounded-2xl bg-emerald-900/10 border border-emerald-800/30 hover:bg-emerald-900/20 hover:border-emerald-500/30 transition-all duration-300 group-hover:translate-x-1">
             <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-lime-400/90 font-medium text-sm mt-1">
                    <Building2 size={14} />
                    {exp.organization}
                  </div>
                </div>
                
                <div className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-xs font-mono text-emerald-400 whitespace-nowrap">
                  <Calendar size={12} />
                  {exp.period}
                </div>
             </div>
             
             <ul className="space-y-2 mt-4">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-3 text-emerald-200/70 text-sm leading-relaxed">
                  <span className="text-emerald-500 shrink-0 mt-1.5 text-xs">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
