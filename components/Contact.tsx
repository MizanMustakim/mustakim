
import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailLink = SOCIAL_LINKS.find(link => link.name === 'Email');
  // Filter out Email from social links to display it separately
  const socialProfiles = SOCIAL_LINKS.filter(link => link.name !== 'Email');
  
  // Fallback email if not found in constants
  const emailAddress = emailLink ? emailLink.url.replace('mailto:', '') : 'mustakim.mizan@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-emerald-950/30 border border-emerald-500/20 backdrop-blur-sm isolate shadow-2xl p-8 md:p-16 text-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 -z-10"></div>
        
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">Connect</span>
        </h3>
        
        <p className="text-emerald-200/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
           Whether you have a question about my research, a collaboration proposal, or just want to say hi, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email Card - Spans full width on mobile, full width on desktop if desired, or maybe span 2 */}
          <div className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-emerald-900/20 border border-emerald-800/50 hover:border-emerald-500/50 transition-all group flex flex-col items-center justify-center gap-4 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform relative z-10">
              <Mail size={32} />
            </div>
            <div className="text-center relative z-10">
              <p className="text-sm font-mono text-emerald-500/50 uppercase tracking-wider mb-2">Drop me an email</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={`mailto:${emailAddress}`} className="text-xl md:text-2xl font-bold text-emerald-100 hover:text-white transition-colors">
                    {emailAddress}
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-emerald-950/50 hover:bg-emerald-500/20 text-emerald-400 transition-colors border border-emerald-800/50 hover:border-emerald-500/50"
                  title="Copy Email"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          {socialProfiles.map((link) => (
             <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-emerald-900/20 border border-emerald-800/50 hover:border-emerald-500/50 hover:bg-emerald-900/40 transition-all group flex flex-col items-center justify-center gap-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform relative z-10">
                {link.icon}
              </div>
              <div className="flex items-center gap-2 relative z-10">
                <span className="text-lg font-bold text-emerald-100">{link.name}</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
