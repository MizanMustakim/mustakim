
import React from 'react';
import { FileText, Calendar, User, ExternalLink } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <div className="space-y-6">
      {PUBLICATIONS.map((pub) => (
        <div key={pub.id} className="p-6 rounded-2xl bg-emerald-900/20 border border-emerald-800/50 flex flex-col md:flex-row gap-6 hover:bg-emerald-900/40 transition-colors group">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
            <FileText size={24} />
          </div>
          
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${pub.status === 'In Review' ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                {pub.status || 'Published'}
              </span>
              <span className="text-emerald-500/70 text-xs flex items-center gap-1">
                <Calendar size={12} /> {pub.year}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-emerald-50 mb-2 leading-snug">
              {pub.link ? (
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 hover:underline transition-colors inline-flex items-start gap-2"
                >
                  {pub.title}
                  <ExternalLink size={14} className="mt-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                pub.title
              )}
            </h3>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <div className="flex items-center gap-1.5 text-sm text-emerald-200/60">
                <User size={14} className="text-emerald-500" />
                {pub.authors}
              </div>
              <div className="text-sm font-medium text-lime-400 italic">
                {pub.journal}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publications;
