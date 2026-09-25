import React from 'react';
import { BEYOND_RESUME_DATA } from '../data/portfolioData';
import { Trophy, Gamepad2, Compass, Users, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function BeyondResume() {
  const [ref, inView] = useInView({ threshold: 0.1, once: true });

  const getPersonalIcon = (title) => {
    if (title.includes('Cricket')) return <Trophy className="w-4 h-4 text-[#DFB6B2]" />;
    if (title.includes('Gaming')) return <Gamepad2 className="w-4 h-4 text-[#DFB6B2]" />;
    if (title.includes('Travel') || title.includes('Expeditions')) return <Compass className="w-4 h-4 text-[#DFB6B2]" />;
    return <Users className="w-4 h-4 text-[#DFB6B2]" />;
  };

  return (
    <section id="beyond" ref={ref} className="py-20 md:py-32 border-t border-[#DFB6B2]/10 bg-[#190019] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header with Reveal */}
        <div 
          className="max-w-2xl mb-12 space-y-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -20px, 0)'
          }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#DFB6B2] font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFB6B2]"></span>
            <span>09 / FOUNDATIONS &amp; HORIZONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-display text-[#FBE4D8] tracking-tight">
            Interests, Academics &amp; Credentials
          </h2>
          <p className="text-xs sm:text-sm text-[#DFB6B2]/80 leading-relaxed">
            Disciplines, strategic instincts, and verified foundations that shape how I operate.
          </p>
        </div>

        {/* 4 Personal Cards matching the card system with Staggered Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {BEYOND_RESUME_DATA.personal.map((item, idx) => (
            <div
              key={idx}
              data-spotlight
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#2B124C] border border-[#DFB6B2]/12 hover:border-[#854F6C]/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/70 flex flex-col justify-between group relative overflow-hidden"
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
                  background: 'radial-gradient(circle 140px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(223, 182, 178, 0.10), transparent 70%)'
                }}
              />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#522B5B] border border-[#854F6C]/40 group-hover:border-[#DFB6B2]/40 group-hover:bg-[#854F6C]/30 flex items-center justify-center shrink-0 transition-colors">
                    {getPersonalIcon(item.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-[#FBE4D8] group-hover:text-[#DFB6B2] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#DFB6B2] font-medium">
                  {item.tagline}
                </div>

                <p className="text-xs text-[#DFB6B2]/80 leading-relaxed pt-1">
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
            className="lg:col-span-5 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#2B124C] border border-[#DFB6B2]/12 hover:border-[#854F6C]/50 flex flex-col justify-between space-y-4 transition-all duration-800 relative overflow-hidden group shadow-lg"
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
                background: 'radial-gradient(circle 160px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(223, 182, 178, 0.10), transparent 70%)'
              }}
            />

            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#DFB6B2] uppercase tracking-widest mb-3 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Education</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-[#FBE4D8]">
                {BEYOND_RESUME_DATA.education.institution}
              </h3>

              <p className="text-sm text-[#FBE4D8]/90 font-medium mt-1">
                {BEYOND_RESUME_DATA.education.degree}
              </p>
              <p className="text-xs font-mono text-[#DFB6B2]/75 mt-1">
                {BEYOND_RESUME_DATA.education.period}
              </p>
            </div>
          </div>

          {/* Compact Credentials (7 cols) */}
          <div 
            data-spotlight
            className="lg:col-span-7 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#2B124C] border border-[#DFB6B2]/12 hover:border-[#854F6C]/50 flex flex-col justify-between space-y-4 transition-all duration-800 relative overflow-hidden group shadow-lg"
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
                background: 'radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(223, 182, 178, 0.10), transparent 70%)'
              }}
            />

            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#DFB6B2] uppercase tracking-widest font-semibold">
                  <Award className="w-4 h-4" />
                  <span>5 Verified Credentials</span>
                </div>
                <span className="text-[11px] font-mono text-[#DFB6B2]/70">Industry Certifications</span>
              </div>

              {/* 5 Compact Rows */}
              <div className="space-y-2">
                {BEYOND_RESUME_DATA.credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-[#190019]/60 border border-[#DFB6B2]/10 hover:border-[#854F6C]/40 flex items-center justify-between gap-3 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[10px] font-mono font-bold text-[#FBE4D8] uppercase px-2 py-0.5 rounded bg-[#522B5B] border border-[#854F6C]/40 shrink-0">
                        {cred.issuer}
                      </span>
                      <span className="text-[#FBE4D8] font-medium truncate">
                        {cred.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 text-[11px] font-mono text-[#DFB6B2]/70">
                      <span>{cred.year}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#DFB6B2]/70">
              Credentials in Project Management, Business Strategy, DevOps, and Market Research.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
