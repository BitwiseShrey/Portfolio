import React, { useState, useEffect } from 'react';
import { SELECTED_PROJECTS } from '../data/portfolioData';
import { ArrowRight, X, Layers, Cpu, Sparkles } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, once: true });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  // Diagonal/vertical staggered entrance transforms
  const getCardInitialTransform = (idx) => {
    if (idx === 0) return 'translate3d(-20px, 28px, 0)';
    if (idx === 1) return 'translate3d(0, 34px, 0) scale(0.97)';
    return 'translate3d(20px, 28px, 0)';
  };

  return (
    <section id="projects" ref={ref} className="py-16 md:py-24 border-t border-white/[0.08] bg-[#050507] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal */}
        <div 
          className="max-w-2xl mb-12 space-y-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -20px, 0)'
          }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            <span>04 / SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Applied Systems &amp; Engineering
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Focusing on risk prediction, edge intelligence, and computer vision safety systems.
          </p>
        </div>

        {/* 3 Perfectly Aligned Cards with Staggered Diagonal Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SELECTED_PROJECTS.map((project, idx) => {
            const isFeatured = project.id === 'nexus';
            return (
              <div
                key={project.id}
                data-spotlight
                data-cursor="view"
                onClick={() => setActiveProject(project)}
                className={`cursor-pointer rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#130f24] via-[#0d0c16] to-[#08080e] border-2 border-purple-500/40 hover:border-purple-400/80 shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-purple-900/30'
                    : 'bg-[#0d0d12] border border-white/[0.08] hover:border-purple-500/40 hover:shadow-xl hover:shadow-black/70 hover:bg-[#111118]'
                }`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translate3d(0, 0, 0) scale(1)' : getCardInitialTransform(idx),
                  transitionDelay: `${idx * 130 + 100}ms`
                }}
              >
                {/* Dynamic Cursor Spotlight Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: isFeatured
                      ? 'radial-gradient(circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(192, 132, 252, 0.15), transparent 70%)'
                      : 'radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
                  }}
                />

                {/* Featured Glow Highlight Line */}
                {isFeatured && (
                  <div className="absolute top-0 right-8 w-28 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                )}

                <div className="space-y-4">
                  {/* Header Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                      {isFeatured && (
                        <span className="text-[9px] font-mono font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className={`${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-display font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight`}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-300 font-medium mt-1.5 leading-snug">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Contribution */}
                  <div className="pt-2.5 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                      System Contribution
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                          isFeatured 
                            ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' 
                            : 'bg-white/[0.03] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-5 mt-5 border-t border-white/[0.06]">
                  <span
                    className={`text-xs font-semibold flex items-center gap-1 group/btn transition-colors ${
                      isFeatured ? 'text-purple-300 group-hover:text-white' : 'text-purple-400 group-hover:text-purple-300'
                    }`}
                  >
                    <span>Explore Project Case</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="absolute inset-0" onClick={() => setActiveProject(null)}></div>

          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0d16] border border-purple-500/30 p-6 sm:p-8 shadow-2xl z-10 space-y-4">
            
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-purple-400 font-semibold">
                  {activeProject.category} &bull; {activeProject.role}
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-0.5">
                  {activeProject.tagline}
                </p>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="font-mono text-purple-400 font-bold uppercase block text-xs">
                  Overview
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {activeProject.modalDetails.overview}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <span className="font-mono text-purple-400 font-bold uppercase block text-xs">
                  Key Engineering Challenge
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {activeProject.modalDetails.challenges}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 space-y-1">
                <span className="font-mono text-purple-300 font-bold uppercase block text-xs">
                  Outcome & Key Takeaway
                </span>
                <p className="text-zinc-200 leading-relaxed">
                  {activeProject.modalDetails.takeaway}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-300 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
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
