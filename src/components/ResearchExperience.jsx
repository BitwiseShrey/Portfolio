import React, { useState } from 'react';
import { RESEARCH_EXPERIENCE_DATA } from '../data/portfolioData';
import { TrendingUp, FileText, CheckCircle2, Eye, X } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function ResearchExperience() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.15, once: true });

  const sectors = [
    'Semiconductors & Edge Compute',
    'Industrial IoT & Cyber-Physical Systems',
    'Sensors, Actuators & MEMS',
    'Aerospace & Defense Logistics',
    'Healthcare Diagnostics Hardware',
    'Energy Storage & Grid Electronics',
    'Autonomous Mobility & Robotics'
  ];

  return (
    <section 
      id="research" 
      ref={ref}
      className="py-16 md:py-24 border-t border-white/[0.08] bg-[#050507] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left-Aligned Tag */}
        <div 
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -20px, 0)'
          }}
        >
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Industry Research &amp; Market Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              Market Research &amp; Commercialization
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              100+ authored deep-tech valuation models and commercial feasibility studies across hardware, IoT, and aerospace.
            </p>
          </div>

          <div 
            className="flex items-center gap-3 text-xs font-mono text-zinc-300 bg-white/[0.04] px-4 py-2.5 rounded-xl border border-white/[0.08] self-start sm:self-auto shrink-0 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(20px, 0, 0)',
              transitionDelay: '150ms'
            }}
          >
            <div><span className="text-purple-300 font-bold">100+</span> Reports</div>
            <span className="text-zinc-700">&bull;</span>
            <div><span className="text-purple-300 font-bold">7+</span> Tech Sectors</div>
            <span className="text-zinc-700">&bull;</span>
            <div><span className="text-purple-300 font-bold">TAM/SAM/SOM</span></div>
          </div>
        </div>

        {/* 2-Column Balanced Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Left Column: Role Details & Core Competencies (7 cols) with Slide-in */}
          <div 
            className="lg:col-span-7 space-y-5 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-24px, 0, 0)',
              transitionDelay: '100ms'
            }}
          >
            <div 
              data-spotlight
              className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#09090f] border border-white/[0.08] hover:border-purple-500/40 shadow-xl transition-all duration-300 group relative overflow-hidden space-y-4"
            >
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
                }}
              />
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Market Reports Authored
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                  {RESEARCH_EXPERIENCE_DATA.company}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  {RESEARCH_EXPERIENCE_DATA.title}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {RESEARCH_EXPERIENCE_DATA.summary}
              </p>
            </div>

            {/* 3 Capabilities Cards with Sequential Slide-up */}
            <div className="space-y-2.5">
              {RESEARCH_EXPERIENCE_DATA.capabilities.map((cap, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 text-xs text-zinc-300 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 transition-all duration-500"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
                    transitionDelay: `${250 + idx * 100}ms`
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white font-semibold">{cap.title}: </strong>
                    <span className="text-zinc-400">{cap.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Inspectable Deliverable Preview (5 cols) with Zoom Hover */}
          <div 
            className="lg:col-span-5 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(24px, 0, 0) scale(0.97)',
              transitionDelay: '150ms'
            }}
          >
            <div 
              data-spotlight
              data-cursor="view"
              onClick={() => setIsZoomOpen(true)}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#09090f] border border-white/10 hover:border-purple-500/40 p-2.5 shadow-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Dynamic Cursor Spotlight Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: 'radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
                }}
              />

              <div className="relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/40">
                <img
                  src={RESEARCH_EXPERIENCE_DATA.reportSample}
                  alt="Market Research Analysis Deliverable"
                  className="w-full h-full object-contain filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Inspection Pill */}
                <div className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs text-white flex items-center gap-1.5 font-mono shadow-lg group-hover:border-purple-500/50 transition-colors">
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  <span>Inspect Sample</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sectors Covered with Cascading Staggered Entrance */}
        <div className="pt-6 border-t border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
            <span className="font-semibold uppercase tracking-wider">Industrial &amp; Tech Sectors Analyzed</span>
            <span className="text-purple-400">7+ Sectors Covered</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {sectors.map((sec, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-[#09090f] border border-white/[0.08] text-xs font-mono text-zinc-300 hover:border-purple-500/40 hover:text-white transition-all duration-300"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 14px, 0)',
                  transitionDelay: `${300 + idx * 45}ms`
                }}
              >
                {sec}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Report Zoom Lightbox Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in">
          <div className="absolute inset-0" onClick={() => setIsZoomOpen(false)}></div>

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d0c14] border border-purple-500/40 p-4 sm:p-6 shadow-2xl z-10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  Sample Market Research Deliverable &amp; Valuation Model
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  100+ Validated Reports &bull; TAM/SAM/SOM Framework &bull; MRFR / Wanstats
                </p>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden bg-black/60 border border-white/10 max-h-[70vh] flex items-center justify-center p-2">
              <img
                src={RESEARCH_EXPERIENCE_DATA.reportSample}
                alt="Market Research Deliverable Enlarged"
                className="w-full h-auto max-h-[66vh] object-contain rounded-xl"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pt-2">
              <span>Primary Source: MRFR Market Intelligence</span>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
