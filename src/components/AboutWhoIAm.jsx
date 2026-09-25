import React from 'react';
import { ABOUT_ME, PERSONAL_INFO } from '../data/portfolioData';
import { Compass, Layers, Users, TrendingUp, Sparkles } from 'lucide-react';
import Reveal, { useInView } from './ScrollReveal';

export default function AboutWhoIAm() {
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  const getIdentityIcon = (title) => {
    switch (title) {
      case 'PRODUCT': return <Compass className="w-4 h-4 text-[#DFB6B2]" />;
      case 'TECHNOLOGY': return <Layers className="w-4 h-4 text-[#DFB6B2]" />;
      case 'LEADERSHIP': return <Users className="w-4 h-4 text-[#DFB6B2]" />;
      case 'ENTREPRENEURSHIP': return <TrendingUp className="w-4 h-4 text-[#DFB6B2]" />;
      default: return null;
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 border-t border-[#DFB6B2]/10 bg-[#190019] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Navigation Micro-Label */}
        <div 
          className="mb-8 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -10px, 0)'
          }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#DFB6B2] font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFB6B2]"></span>
            <span>02 / ABOUT ME</span>
          </div>
          <span className="text-xs font-mono text-[#DFB6B2]/60 hidden sm:inline tracking-wider">
            PROFILE &amp; CONVERGENCE SPECTRUM
          </span>
        </div>

        {/* Story Grid with Opposite Directional Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16">
          
          {/* Story Text slides smoothly from left */}
          <div 
            className="lg:col-span-7 space-y-6 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-36px, 0, 0)'
            }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-display text-[#FBE4D8] tracking-tight leading-[1.15]">
              "{ABOUT_ME.opening}"
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#DFB6B2]/90 leading-relaxed font-normal">
              {ABOUT_ME.paragraphs.map((p, idx) => (
                <p 
                  key={idx}
                  className="transition-all duration-700"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(10px)',
                    transitionDelay: `${200 + idx * 100}ms`
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Workstation Photo slides smoothly from right with subtle scale */}
          <div 
            className="lg:col-span-5 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(36px, 0, 0) scale(0.97)',
              transitionDelay: '150ms'
            }}
          >
            <div 
              data-spotlight
              className="rounded-2xl overflow-hidden bg-[#2B124C] border border-[#DFB6B2]/15 hover:border-[#854F6C]/60 p-2 shadow-xl hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60">
                <img
                  src={PERSONAL_INFO.workstationPhoto}
                  alt="Shreyansh Uttam at Workstation"
                  className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#190019] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3 text-[11px] font-mono text-[#FBE4D8] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB6B2] animate-pulse"></span>
                  <span className="text-[#DFB6B2] font-semibold">Building &amp; Prototyping</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Clean Labels with Cascading Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_ME.labels.map((item, idx) => (
            <div
              key={item.title}
              data-spotlight
              className="p-5 rounded-2xl bg-[#2B124C] border border-[#DFB6B2]/12 hover:border-[#854F6C]/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/60 flex flex-col justify-between group relative overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
                transitionDelay: `${350 + idx * 100}ms`
              }}
            >
              {/* Dynamic Cursor Spotlight Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle 140px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(223, 182, 178, 0.12), transparent 70%)'
                }}
              />

              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#522B5B] border border-[#854F6C]/40 group-hover:border-[#DFB6B2]/50 group-hover:bg-[#854F6C]/30 flex items-center justify-center transition-colors">
                    {getIdentityIcon(item.title)}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#DFB6B2] group-hover:text-[#FBE4D8] transition-colors">
                    {item.title}
                  </span>
                </div>

                <p className="text-xs text-[#DFB6B2]/80 leading-relaxed">
                  {item.sentence}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
