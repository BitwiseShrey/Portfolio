import React from 'react';
import { ABOUT_ME, PERSONAL_INFO } from '../data/portfolioData';
import { Compass, Layers, Users, TrendingUp, Sparkles } from 'lucide-react';
import Reveal, { useInView } from './ScrollReveal';

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

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 border-t border-white/[0.08] bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header with Reveal */}
        <Reveal animation="fade-down" delay={50}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-8">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ABOUT ME</span>
          </div>
        </Reveal>

        {/* Story Grid with Opposite Directional Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Story Text slides smoothly from left */}
          <div 
            className="lg:col-span-7 space-y-4 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-36px, 0, 0)'
            }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              "{ABOUT_ME.opening}"
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
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

        {/* 4 Clean Labels with Cascading Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_ME.labels.map((item, idx) => (
            <div
              key={item.title}
              data-spotlight
              className="p-5 rounded-2xl bg-[#0b0b10] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-purple-950/20 flex flex-col justify-between group relative overflow-hidden"
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
