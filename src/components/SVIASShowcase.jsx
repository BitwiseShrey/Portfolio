import React, { useState } from 'react';
import { SVIAS_DATA } from '../data/portfolioData';
import { ArrowRight, X, Lock, Eye, ShieldCheck } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function SVIASShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  return (
    <section 
      id="svias" 
      ref={ref}
      className="py-20 md:py-28 border-t border-purple-500/20 bg-[#06060a] relative overflow-hidden"
    >
      {/* Cinematic Ambient Scanning Beam */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none transition-opacity duration-1000"
        style={{ opacity: inView ? 1 : 0 }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Status Pill with Reveal */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -14px, 0)'
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-emerald-400 font-semibold">{SVIAS_DATA.status}</span>
        </div>

        {/* Central Logo Emblem with Scale & Glow Reveal */}
        <div 
          className="flex justify-center transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(0, 20px, 0) scale(0.9)',
            transitionDelay: '120ms'
          }}
        >
          <div 
            data-spotlight
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-black/80 border border-purple-500/30 hover:border-purple-400/60 p-3 shadow-2xl hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] flex items-center justify-center transition-all duration-300 group"
          >
            <img
              src={SVIAS_DATA.logo}
              alt="SVIAS Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.35)] group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Title & Tagline with Cinematic Fade & Mask */}
        <div 
          className="space-y-2 max-w-2xl mx-auto transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
            transitionDelay: '240ms'
          }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {SVIAS_DATA.title}
          </h2>

          <p className="text-sm font-mono text-purple-300">
            {SVIAS_DATA.fullTitle}
          </p>

          <p className="text-lg sm:text-xl text-zinc-300 font-medium italic pt-2">
            "{SVIAS_DATA.tagline}"
          </p>
        </div>

        {/* Problem & Vision Cards with Staggered Slide In */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left pt-2">
          {/* Card 1: Problem */}
          <div 
            data-spotlight
            className="p-5 rounded-2xl bg-[#090910] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20 group relative overflow-hidden"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-24px, 0, 0)',
              transitionDelay: '360ms'
            }}
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle 140px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
              }}
            />
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-1">
              THE PROBLEM
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {SVIAS_DATA.problem} {SVIAS_DATA.problemElaboration}
            </p>
          </div>

          {/* Card 2: Vision */}
          <div 
            data-spotlight
            className="p-5 rounded-2xl bg-[#090910] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20 group relative overflow-hidden"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(24px, 0, 0)',
              transitionDelay: '460ms'
            }}
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle 140px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
              }}
            />
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-1">
              THE VISION
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {SVIAS_DATA.vision} {SVIAS_DATA.visionElaboration}
            </p>
          </div>
        </div>

        {/* Primary CTA with Reveal & Cursor View */}
        <div 
          className="pt-2 flex justify-center transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
            transitionDelay: '580ms'
          }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            data-cursor="view"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Eye className="w-4 h-4 text-purple-200" />
            <span>Explore Concept</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Confidential Case Study Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>

          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b0a12] border border-purple-500/40 p-6 sm:p-8 shadow-2xl z-10 space-y-4">
            
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">
                  Confidential Product Concept
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {SVIAS_DATA.title} — Product Concept
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  {SVIAS_DATA.status}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="font-mono text-[11px] text-purple-400 uppercase font-bold block">
                  1. The Problem
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {SVIAS_DATA.modalDetails.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="font-mono text-[11px] text-purple-400 uppercase font-bold block">
                  2. The Vision
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {SVIAS_DATA.modalDetails.vision}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="font-mono text-[11px] text-purple-400 uppercase font-bold block">
                  3. Current Stage
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {SVIAS_DATA.modalDetails.stage}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="font-mono text-[11px] text-purple-400 uppercase font-bold block">
                  4. My Role
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {SVIAS_DATA.modalDetails.role}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/25 space-y-1">
                <span className="font-mono text-[11px] text-purple-300 uppercase font-bold block">
                  5. What I'm Exploring
                </span>
                <p className="text-zinc-200 leading-relaxed">
                  {SVIAS_DATA.modalDetails.exploring}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Proprietary IP Protected</span>
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
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
