import React from 'react';
import { BEYOND_RESUME_DATA } from '../data/portfolioData';
import { Trophy, Gamepad2, Compass, Users, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function BeyondResume() {
  const [ref, inView] = useInView({ threshold: 0.1, once: true });

  const getPersonalIcon = (title) => {
    if (title.includes('Cricket')) return <Trophy className="w-4 h-4 text-purple-400" />;
    if (title.includes('Gaming')) return <Gamepad2 className="w-4 h-4 text-purple-400" />;
    if (title.includes('Travel') || title.includes('Expeditions')) return <Compass className="w-4 h-4 text-purple-400" />;
    return <Users className="w-4 h-4 text-purple-400" />;
  };

  return (
    <section id="beyond" ref={ref} className="py-20 md:py-32 border-t border-white/[0.08] bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header with Reveal */}
        <div 
          className="max-w-2xl mb-12 space-y-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -20px, 0)'
          }}
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            <span>Personal Dimension &amp; Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Interests, Academics &amp; Credentials
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Disciplines, strategic instincts, and verified foundations that shape how I operate.
          </p>
        </div>

        {/* 4 Personal Cards matching the card system with Staggered Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {BEYOND_RESUME_DATA.personal.map((item, idx) => (
            <div
              key={idx}
              data-spotlight
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#09090f] border border-white/[0.08] hover:border-purple-500/40 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/20 flex flex-col justify-between group relative overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
                transitionDelay: `${idx * 100 + 100}ms`
              }}
            >
              {/* Dynamic Cursor Spotlight Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle 140px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
                }}
              />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:bg-purple-500/20 flex items-center justify-center shrink-0 transition-colors">
                    {getPersonalIcon(item.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono text-purple-300 font-medium">
                  {item.tagline}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Compact Credentials with Dual Directional Slide In */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Education Block (5 cols) */}
          <div 
            data-spotlight
            className="lg:col-span-5 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#09090f] border border-white/[0.08] hover:border-purple-500/30 flex flex-col justify-between space-y-4 transition-all duration-800 relative overflow-hidden group shadow-lg"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(-24px, 0, 0)',
              transitionDelay: '350ms'
            }}
          >
            {/* Dynamic Cursor Spotlight Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle 160px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
              }}
            />

            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-purple-400 uppercase tracking-widest mb-3 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Education</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {BEYOND_RESUME_DATA.education.institution}
              </h3>

              <p className="text-sm text-zinc-300 font-medium mt-1">
                {BEYOND_RESUME_DATA.education.degree}
              </p>
              <p className="text-xs font-mono text-zinc-500 mt-1">
                {BEYOND_RESUME_DATA.education.period}
              </p>
            </div>
          </div>

          {/* Compact Credentials (7 cols) */}
          <div 
            data-spotlight
            className="lg:col-span-7 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#09090f] border border-white/[0.08] hover:border-purple-500/30 flex flex-col justify-between space-y-4 transition-all duration-800 relative overflow-hidden group shadow-lg"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(24px, 0, 0)',
              transitionDelay: '420ms'
            }}
          >
            {/* Dynamic Cursor Spotlight Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
              }}
            />

            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[11px] font-mono text-purple-400 uppercase tracking-widest font-semibold">
                  <Award className="w-4 h-4" />
                  <span>5 Verified Credentials</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">Industry Certifications</span>
              </div>

              {/* 5 Compact Rows */}
              <div className="space-y-2">
                {BEYOND_RESUME_DATA.credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/[0.06] hover:border-purple-500/30 flex items-center justify-between gap-3 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[10px] font-mono font-bold text-purple-300 uppercase px-2 py-0.5 rounded bg-purple-500/10 shrink-0">
                        {cred.issuer}
                      </span>
                      <span className="text-zinc-200 font-medium truncate">
                        {cred.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 text-[11px] font-mono text-zinc-500">
                      <span>{cred.year}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-500">
              Credentials in Project Management, Business Strategy, DevOps, and Market Research.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
