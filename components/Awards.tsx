
import React from 'react';
import { Trophy, Star, Medal, GraduationCap, Award as AwardIcon, Scroll } from 'lucide-react';
import { AWARDS } from '../constants';
import { Award } from '../types';

const AwardCard: React.FC<{ award: Award }> = ({ award }) => {
  const getStyle = (type: Award['type']) => {
    switch (type) {
      case 'gold':
        return {
          border: 'border-yellow-500/50',
          bg: 'bg-yellow-950/20',
          iconColor: 'text-yellow-400',
          iconBg: 'bg-yellow-400/10',
          icon: <Trophy size={22} />,
          badge: 'text-yellow-300'
        };
      case 'silver':
        return {
          border: 'border-slate-400/50',
          bg: 'bg-slate-800/20',
          iconColor: 'text-slate-300',
          iconBg: 'bg-slate-400/10',
          icon: <Medal size={22} />,
          badge: 'text-slate-300'
        };
      case 'scholarship':
        return {
          border: 'border-emerald-500/50',
          bg: 'bg-emerald-900/20',
          iconColor: 'text-emerald-400',
          iconBg: 'bg-emerald-400/10',
          icon: <Scroll size={22} />,
          badge: 'text-emerald-300'
        };
      case 'honor':
        return {
          border: 'border-purple-500/50',
          bg: 'bg-purple-900/20',
          iconColor: 'text-purple-400',
          iconBg: 'bg-purple-400/10',
          icon: <GraduationCap size={22} />,
          badge: 'text-purple-300'
        };
      default:
        return {
          border: 'border-emerald-800/50',
          bg: 'bg-emerald-900/20',
          iconColor: 'text-emerald-400',
          iconBg: 'bg-emerald-400/10',
          icon: <AwardIcon size={22} />,
          badge: 'text-emerald-500/70'
        };
    }
  };

  const style = getStyle(award.type);

  // Helper to dynamically convert text color class to bg color for bullets
  const getBulletColor = (badgeClass: string) => {
    return badgeClass.replace('text-', 'bg-');
  };

  return (
    <div className={`group relative p-6 rounded-2xl ${style.bg} border ${style.border} hover:bg-opacity-40 transition-all duration-300 overflow-hidden flex flex-col h-full`}>
      {/* Decorative Background Icon */}
      <div className={`absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity ${style.iconColor}`}>
        {award.type === 'gold' || award.type === 'silver' ? <Trophy size={100} /> : <AwardIcon size={100} />}
      </div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`w-10 h-10 rounded-xl ${style.iconBg} flex items-center justify-center ${style.iconColor} shadow-inner`}>
          {style.icon}
        </div>
        <span className={`text-xs font-mono font-bold ${style.badge} px-2 py-1 rounded bg-black/20 backdrop-blur-sm`}>
          {award.year}
        </span>
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <h3 className={`text-lg font-bold text-white mb-1 group-hover:${style.iconColor} transition-colors`}>
          {award.title}
        </h3>
        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${style.badge} opacity-80`}>
          {award.issuer}
        </p>
        
        {award.description && award.description.some(d => d && d.trim()) && (
          <ul className="mt-auto border-t border-white/5 pt-3 space-y-2">
            {award.description.map((desc, index) => (
              desc && desc.trim() && (
                <li key={index} className="flex gap-2 text-sm text-emerald-100/60 leading-relaxed items-start">
                   <span className={`mt-2 w-1 h-1 rounded-full ${getBulletColor(style.badge)} shrink-0 opacity-70`}></span>
                   <span>{desc}</span>
                </li>
              )
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Awards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {AWARDS.map((award) => (
        <AwardCard key={award.id} award={award} />
      ))}
    </div>
  );
};

export default Awards;
