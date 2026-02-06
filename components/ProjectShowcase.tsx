
import React, { useState, useEffect } from 'react';
import { ExternalLink, Trophy, ArrowRight, GitBranch } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

// Helper to check for video file extensions
const isVideo = (url: string) => {
  return /\.(mp4|webm|ogg|mov)($|\?)/i.test(url);
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [project.images.length, isHovered]);

  return (
    <div 
      className="group flex flex-col h-full bg-emerald-950 rounded-2xl border border-emerald-900 overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image/Video Section - aspect-video (16:9 ratio) */}
      <div className="relative w-full aspect-video overflow-hidden bg-emerald-950">
        {project.images.map((mediaUrl, index) => {
          const isVideoFile = isVideo(mediaUrl);
          const isActive = index === currentImageIndex;

          return isVideoFile ? (
            <video
              key={index}
              src={mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ) : (
            <img 
              key={index}
              src={mediaUrl} 
              alt={`${project.title} - view ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          );
        })}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {project.images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 rounded-full transition-all duration-300 shadow-sm ${
                idx === currentImageIndex 
                  ? 'w-6 bg-white' 
                  : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Subtle Gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-emerald-950/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Floating Award Badge */}
        {project.award && (
          <div className="absolute top-4 right-4 z-20">
             <div className="px-3 py-1.5 rounded-lg bg-emerald-500/90 text-white text-[10px] font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <Trophy size={12} className="text-yellow-300" />
              {project.award}
            </div>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow relative z-20 bg-emerald-950">
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
              {project.title}
            </h3>
            {project.link && (
              <a href={project.link} className="text-emerald-500 hover:text-white transition-colors p-1 bg-emerald-900/50 rounded-full">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          <div className="h-1 w-12 bg-emerald-600 rounded-full group-hover:w-full transition-all duration-500 ease-out"></div>
        </div>
        
        {/* Description List */}
        <ul className="space-y-3 mb-8 flex-grow">
          {project.description.map((item, i) => (
            <li key={i} className="flex gap-3 text-emerald-200/70 text-sm leading-relaxed group/item">
              <span className="text-emerald-500/50 group-hover/item:text-emerald-400 mt-1 transition-colors">
                <ArrowRight size={14} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        
        {/* Tags Footer */}
        <div className="pt-6 border-t border-emerald-900/50 flex flex-col gap-3">
           <div className="flex items-center gap-2 text-xs font-mono text-emerald-500/60 uppercase tracking-widest mb-1">
             <GitBranch size={12} />
             <span>Tech Stack</span>
           </div>
           <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded bg-emerald-900/40 text-emerald-300 border border-emerald-800/50 group-hover:border-emerald-500/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectShowcase;
