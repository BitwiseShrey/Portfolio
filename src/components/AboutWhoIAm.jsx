import React from 'react';
import { ABOUT_ME, PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, Compass, Layers, Users, TrendingUp } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function AboutWhoIAm() {
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  const getIdentityIcon = (title) => {
    switch (title) {
      case 'PRODUCT': return <Compass className="w-4 h-4 text-purple-400" />;
      case 'TECHNOLOGY': return <Layers className="w-4 h-4 text-purple-400" />;
      case 'LEADERSHIP': return <Users className="w-4 h-4 text-purple-400" />;
      case 'ENTREPRENEURSHIP': return <TrendingUp className="w-4 h-4 text-purple-400" />;
      default: return null;
    }
  };

  const pillars = ABOUT_ME.labels || ABOUT_ME.fourPillars || [];

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 border-t border-white/[0.08] bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Navigation Micro-Label */}
        <div 
          className="mb-8 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -10px, 0)'
          }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            <span>02 / ABOUT ME</span>
          </div>
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline tracking-wider">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-[1.15]">
              "{ABOUT_ME.opening}"
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {ABOUT_ME.paragraphs.map((p, idx) => (
                <p 
                  key={idx}
                  style={{
                    transitionDelay: `${idx * 120 + 200}ms`
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Workstation Photography with Ambient Border Glow */}
          <div 
            className="lg:col-span-5 flex justify-center transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(36px, 0, 0) scale(0.96)',
              transitionDelay: '150ms'
            }}
          >
            <div 
              data-spotlight
              className="rounded-2xl overflow-hidden bg-[#0d0d14] border border-white/10 hover:border-purple-500/40 p-2 shadow-xl hover:shadow-2xl hover:shadow-purple-950/20 transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60">
                <img
                  src={PERSONAL_INFO.workstationPhoto}
                  alt="Shreyansh Uttam at Workstation"
                  className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                  <span className="text-purple-300 font-semibold">Building &amp; Prototyping</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Convergence (Grid with Cascading Reveal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              data-spotlight
              className="p-5 rounded-2xl bg-[#0b0b10] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-purple-950/20 flex flex-col justify-between group relative overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
                transitionDelay: `${idx * 100 + 400}ms`
              }}
            >
              {/* Dynamic Cursor Spotlight */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle 140px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
                }}
              />

              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/40 group-hover:bg-purple-500/10 flex items-center justify-center transition-colors">
                    {getIdentityIcon(item.title)}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-purple-300 group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
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
