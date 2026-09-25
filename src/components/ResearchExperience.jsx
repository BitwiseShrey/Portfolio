import React, { useState, useEffect } from 'react';
import { RESEARCH_EXPERIENCE_DATA } from '../data/portfolioData';
import { Eye, X, CheckCircle2, ArrowUpRight, FileText } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function ResearchExperience() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsZoomOpen(false);
    };
    if (isZoomOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomOpen]);

  const sectors = [
    "Acoustic AI & Audio",
    "Sensor Fusion & Telemetry",
    "Cloud & Infrastructure",
    "Automotive Safety Systems",
    "Supply Chain Intelligence",
    "Edge Machine Learning",
    "Digital Healthcare"
  ];

  return (
    <section id="research" ref={ref} className="py-20 md:py-32 border-t border-[#DFB6B2]/10 bg-[#190019] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Section Header with Reveal */}
        <div 
          className="max-w-3xl mb-12 space-y-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -20px, 0)'
          }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#DFB6B2] font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFB6B2]"></span>
            <span>07 / RESEARCH &amp; ANALYSIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-display text-[#FBE4D8] tracking-tight">
            Quantitative Research &amp; Market Sizing
          </h2>
          <p className="text-xs sm:text-sm text-[#DFB6B2]/80 mt-2 max-w-xl leading-relaxed">
            Synthesizing market dynamics, competitive moats, and financial models across emerging tech sectors.
          </p>
        </div>

        {/* 2-Column Balanced Grid with Data Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
          
          {/* Left Column: Metric & Experience Meta (6 cols) */}
          <div 
            className="lg:col-span-6 space-y-5 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-28px, 0, 0)',
              transitionDelay: '100ms'
            }}
          >
            <div 
              data-spotlight
              className="p-6 rounded-2xl bg-[#2B124C] border border-[#DFB6B2]/12 hover:border-[#854F6C]/60 space-y-3 relative overflow-hidden group shadow-lg transition-all duration-300"
            >
              {/* Dynamic Cursor Spotlight Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle 160px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(223, 182, 178, 0.10), transparent 70%)'
                }}
              />

              {/* Data Synthesis Scanline Accent */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB6B2]/40 to-transparent"></div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-6xl font-extrabold text-[#FBE4D8] font-mono tracking-tighter">
                  100+
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#DFB6B2] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Market Reports Authored
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold font-display text-[#FBE4D8] group-hover:text-[#DFB6B2] transition-colors">
                  {RESEARCH_EXPERIENCE_DATA.company}
                </h3>
                <p className="text-xs font-mono text-[#DFB6B2]/75 mt-0.5">
                  {RESEARCH_EXPERIENCE_DATA.title}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#DFB6B2]/85 leading-relaxed">
                {RESEARCH_EXPERIENCE_DATA.summary}
              </p>
            </div>

            {/* 3 Capabilities Cascading In */}
            <div className="space-y-2.5">
              {RESEARCH_EXPERIENCE_DATA.capabilities.map((cap, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 text-xs text-[#DFB6B2]/80 p-3 rounded-xl bg-[#190019]/60 border border-[#DFB6B2]/10 hover:border-[#854F6C]/40 transition-all duration-500"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
                    transitionDelay: `${250 + idx * 100}ms`
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB6B2] mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-[#FBE4D8] font-semibold">{cap.title}: </strong>
                    <span className="text-[#DFB6B2]/80">{cap.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Research Deliverable Preview (6 cols) */}
          <div 
            className="lg:col-span-6 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(28px, 0, 0) scale(0.97)',
              transitionDelay: '180ms'
            }}
          >
            <div 
              data-spotlight
              data-cursor="view"
              onClick={() => setIsZoomOpen(true)}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#2B124C] border border-[#DFB6B2]/12 hover:border-[#854F6C]/50 p-2.5 shadow-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Dynamic Cursor Spotlight Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: 'radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(223, 182, 178, 0.10), transparent 70%)'
                }}
              />

              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black">
                <img
                  src={RESEARCH_EXPERIENCE_DATA.previewImage}
                  alt="Market Research Report Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Inspection Pill */}
                <div className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-xl bg-[#190019]/80 backdrop-blur-md border border-[#DFB6B2]/20 text-xs text-[#FBE4D8] flex items-center gap-1.5 font-mono shadow-lg group-hover:border-[#DFB6B2]/50 transition-colors">
                  <Eye className="w-3.5 h-3.5 text-[#DFB6B2]" />
                  <span>Inspect Sample</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sectors Covered with Cascading Staggered Entrance */}
        <div className="pt-6 border-t border-[#DFB6B2]/10">
          <div className="flex items-center justify-between text-xs font-mono text-[#DFB6B2]/70 mb-3">
            <span className="font-semibold uppercase tracking-wider">Industrial &amp; Tech Sectors Analyzed</span>
            <span className="text-[#DFB6B2]">7+ Sectors Covered</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {sectors.map((sec, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-[#2B124C] border border-[#DFB6B2]/12 text-xs font-mono text-[#FBE4D8] hover:border-[#854F6C]/50 hover:text-[#DFB6B2] transition-all duration-300"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 14px, 0)',
                  transitionDelay: `${400 + idx * 45}ms`
                }}
              >
                {sec}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Artifact Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in">
          <div className="absolute inset-0" onClick={() => setIsZoomOpen(false)}></div>

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#2B124C] border border-[#854F6C]/50 p-4 sm:p-6 shadow-2xl z-10 space-y-4">
            <div className="flex items-center justify-between border-b border-[#DFB6B2]/15 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-display text-[#FBE4D8]">
                  Sample Market Research Deliverable &amp; Valuation Model
                </h3>
                <p className="text-xs text-[#DFB6B2]/70 font-mono">
                  100+ Validated Reports &bull; TAM/SAM/SOM Framework &bull; MRFR / Wanstats
                </p>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#DFB6B2] hover:text-[#FBE4D8] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-black/90 border border-white/10 flex items-center justify-center">
              <img
                src={RESEARCH_EXPERIENCE_DATA.previewImage}
                alt="Expanded Report Sample"
                className="w-full h-auto max-h-[72vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
