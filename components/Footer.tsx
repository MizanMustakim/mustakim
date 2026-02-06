
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-emerald-900/50 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
        <p className="text-emerald-500/70 text-sm text-center md:text-left">
          © {new Date().getFullYear()} MD Mizanur Rahman Mustakim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
