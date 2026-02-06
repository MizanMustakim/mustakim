
import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-5xl w-full text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-800 text-xs font-mono text-emerald-400 mb-4 animate-bounce">
          <BrainCircuit size={14} />
          <span>Innovating Medical AI & NLP</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Hi, I'm <span className="text-cyber">MD Mizanur Rahman Mustakim</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-emerald-200/70 max-w-3xl mx-auto leading-relaxed">
          <span className="text-emerald-100 font-semibold">Medical AI & NLP Researcher</span> and Honor Graduate from 
          <span className="text-emerald-100 font-semibold"> Beijing Institute of Technology</span>. 
          Specializing in deep learning, Computer Vision, and NLP.
        </p>

        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-emerald-300">CSC</span>
            <span className="text-xs uppercase tracking-widest mt-2 text-emerald-200/60">Scholar</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-emerald-300">BIT</span>
            <span className="text-xs uppercase tracking-widest mt-2 text-emerald-200/60">Honor Graduate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-emerald-300">2</span>
            <span className="text-xs uppercase tracking-widest mt-2 text-emerald-200/60">Publications</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-emerald-300">3</span>
            <span className="text-xs uppercase tracking-widest mt-2 text-emerald-200/60">Tech Awards</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
