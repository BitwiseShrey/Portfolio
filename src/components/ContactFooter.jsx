import React, { useState } from 'react';
import { CONTACT_DATA } from '../data/portfolioData';
import { Mail, ArrowUpRight, FileDown, Copy, Check, MapPin } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.15, once: true });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" ref={ref} className="py-20 md:py-32 border-t border-white/[0.08] bg-[#050507] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Center Stage with Reveal */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 mb-16">
          
          {/* Status Tag */}
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -16px, 0)'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
            <span>Available for Product &amp; Technology Roles</span>
          </div>

          {/* Core Call to Action */}
          <div
            className="transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(0, 24px, 0) scale(0.96)',
              transitionDelay: '120ms'
            }}
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.05] max-w-3xl">
              LET'S BUILD <br />
              <span className="text-gradient-purple">SOMETHING</span> <br />
              MEANINGFUL.
            </h2>
          </div>

          {/* 4 Identity Pillars */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-zinc-400 pt-3 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transitionDelay: '260ms'
            }}
          >
            <span className="text-purple-300 font-semibold">PRODUCT</span>
            <span className="text-zinc-700">&bull;</span>
            <span className="text-purple-300 font-semibold">TECHNOLOGY</span>
            <span className="text-zinc-700">&bull;</span>
            <span className="text-purple-300 font-semibold">COMMUNITY</span>
            <span className="text-zinc-700">&bull;</span>
            <span className="text-purple-300 font-semibold">ENTREPRENEURSHIP</span>
          </div>

          {/* Action Buttons: Connect, LinkedIn, Resume, Email */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 pt-4 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
              transitionDelay: '380ms'
            }}
          >
            {/* Direct Copy Email */}
            <button
              onClick={handleCopyEmail}
              data-cursor="interactive"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-purple-200" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>

            {/* LinkedIn */}
            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/40 text-white font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-purple-400" />
            </a>

            {/* Resume */}
            <a
              href={CONTACT_DATA.resumeUrl}
              download="Shreyansh_Uttam_Resume.pdf"
              data-cursor="open"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/40 text-white font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Download Resume</span>
              <FileDown className="w-4 h-4 text-purple-400" />
            </a>

            {/* Direct Mailto */}
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              data-cursor="open"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/40 text-white font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>Send Email</span>
            </a>

          </div>

          {/* Location & Closing Tagline */}
          <div 
            className="pt-6 space-y-2 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transitionDelay: '500ms'
            }}
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>{CONTACT_DATA.location}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 italic">
              "{CONTACT_DATA.closing}"
            </p>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-600">
          <div>
            &copy; {new Date().getFullYear()} Shreyansh Uttam &bull; Personal Digital Lab &amp; Archive
          </div>
          <div>
            <a href="#hero" className="hover:text-purple-300 transition-colors">Return to top &uarr;</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
