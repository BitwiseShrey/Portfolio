import React from 'react';
import { AWS_LEADERSHIP_DATA } from '../data/portfolioData';
import { Cloud, CheckCircle2, ArrowRight } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function AWSLeadership() {
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  return (
    <section 
      id="aws-leadership" 
      ref={ref}
      className="py-20 md:py-32 border-t border-white/[0.08] bg-[#050508] relative overflow-hidden"
    >
      {/* Background radial purple wash */}
      <div 
        className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10 transition-opacity duration-1000"
        style={{ opacity: inView ? 1 : 0 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header with Reveal */}
        <div 
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -20px, 0)'
          }}
        >
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Community Leadership · VIT Bhopal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              AWS Student Builder Group Leader
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              Heading the official campus student cloud community, empowering student builders, and hosting flagship cloud summits.
            </p>
          </div>

          {/* Verified Metrics Pill */}
          <div 
            className="flex items-center gap-3 text-xs font-mono text-zinc-300 bg-white/[0.04] px-4 py-2.5 rounded-xl border border-white/[0.08] self-start sm:self-auto shrink-0 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(20px, 0, 0)',
              transitionDelay: '150ms'
            }}
          >
            <div><span className="text-purple-300 font-bold">400+</span> Students</div>
            <span className="text-zinc-700">&bull;</span>
            <div><span className="text-purple-300 font-bold">20–25</span> Core Team</div>
            <span className="text-zinc-700">&bull;</span>
            <div><span className="text-purple-300 font-bold">500+</span> Attendees</div>
          </div>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Stage Photograph (7 cols) with Slide-in */}
          <div 
            className="lg:col-span-7 space-y-3 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(-28px, 0, 0) scale(0.97)',
              transitionDelay: '100ms'
            }}
          >
            <div 
              data-spotlight
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 border border-white/10 hover:border-purple-500/40 shadow-2xl transition-all duration-300 group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={AWS_LEADERSHIP_DATA.image}
                  alt="AWS Student Builder Group Stage Keynote with 500+ Attendees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-purple-300">
                  Campus Cloud Summit &bull; 500+ Attendees
                </div>

                {/* Chapter Emblem Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/85 backdrop-blur-md border border-purple-500/30 p-1.5 shadow-2xl">
                  <img
                    src={AWS_LEADERSHIP_DATA.logo}
                    alt="AWS SBG Chapter Emblem"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-xs text-zinc-300 backdrop-blur-md bg-black/60 px-4 py-2.5 rounded-xl border border-white/10">
                  <span className="font-semibold text-white">Flagship Stage Keynote:</span> Convening students, cloud practitioners, and AWS representatives.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights & Trajectory (5 cols) with Sequential Illumination */}
          <div className="lg:col-span-5 space-y-5">
            {/* 3 Concise Focus Cards */}
            <div className="space-y-3">
              {AWS_LEADERSHIP_DATA.highlights.map((h, idx) => (
                <div
                  key={idx}
                  data-spotlight
                  className="p-4 sm:p-5 rounded-2xl bg-[#09090f] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(24px, 0, 0)',
                    transitionDelay: `${200 + idx * 100}ms`
                  }}
                >
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle 140px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
                    }}
                  />
                  <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>{h.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed pl-3.5">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Leadership Trajectory with Sequential Node Illumination */}
            <div 
              data-spotlight
              className="p-5 rounded-2xl bg-[#09090f] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transitionDelay: '500ms'
              }}
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold flex items-center justify-between">
                <span>Leadership Trajectory</span>
                <span className="text-[10px] text-purple-400 font-mono">2023 → PRESENT</span>
              </div>
              
              <div className="space-y-4 relative pl-4 border-l border-purple-500/30">
                {AWS_LEADERSHIP_DATA.progression.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="relative transition-all duration-700 ease-out"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(12px, 0, 0)',
                      transitionDelay: `${550 + idx * 140}ms`
                    }}
                  >
                    {/* Animated Pulsing Node */}
                    <div className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full transition-all duration-700 ${
                      idx === 2 
                        ? 'bg-purple-400 shadow-[0_0_12px_#a855f7]' 
                        : 'bg-zinc-600'
                    }`}>
                      {idx === 2 && inView && (
                        <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-60"></div>
                      )}
                    </div>

                    <div className="text-xs font-mono font-bold text-white">{step.stage}</div>
                    <div className="text-[11px] text-zinc-400">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
