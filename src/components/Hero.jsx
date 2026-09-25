import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import HangingIDCard from './HangingIDCard';
import InteractiveName from './InteractiveName';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger smooth staggered entrance on mount
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden bg-[#190019]"
    >
      {/* Subtle Ambient Background Glow with gentle breathing */}
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#854F6C]/12 rounded-full blur-[140px] pointer-events-none -z-10 transition-opacity duration-1000 ease-out"
        style={{ opacity: mounted ? 1 : 0 }}
      />
      <div 
        className="absolute bottom-1/4 left-1/6 w-[450px] h-[450px] bg-[#522B5B]/15 rounded-full blur-[150px] pointer-events-none -z-10 transition-opacity duration-1000 ease-out"
        style={{ opacity: mounted ? 1 : 0 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Typography & Brand Positioning (7 cols) */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8">
            
            {/* Identity & Positioning */}
            <div className="space-y-4">
              {/* 1. Name reveals first with interactive individual letters */}
              <div 
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mounted ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-6 blur-[2px]'
                }`}
                style={{ transitionDelay: '80ms' }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#FBE4D8] font-display leading-none">
                  <InteractiveName />
                </h1>
              </div>
              
              {/* 2. Positioning badge follows */}
              <div 
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#522B5B]/70 border border-[#854F6C]/50 text-[#DFB6B2] text-xs sm:text-sm font-mono tracking-wide transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ transitionDelay: '220ms' }}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DFB6B2] shrink-0" />
                <span>Product × Technology × Leadership</span>
              </div>
            </div>

            {/* 3. Core Value Statement follows with mask clip & translate */}
            <div 
              className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '380ms' }}
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#FBE4D8] tracking-tight leading-snug max-w-xl">
                I build ideas into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBE4D8] via-[#DFB6B2] to-[#854F6C] font-semibold">
                  products,
                </span>{" "}
                communities &amp; experiences.
              </p>
            </div>

            {/* 4. Action CTAs reveal afterward */}
            <div 
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '520ms' }}
            >
              <a
                href="#svias"
                data-cursor="explore"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FBE4D8] hover:bg-[#DFB6B2] text-[#190019] font-semibold text-sm shadow-lg shadow-black/25 hover:shadow-black/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore my work</span>
                <ArrowRight className="w-4 h-4 text-[#190019] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                data-cursor="open"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2B124C] hover:bg-[#35165E] border border-[#DFB6B2]/20 hover:border-[#DFB6B2]/50 text-[#FBE4D8] font-medium text-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Let's connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#DFB6B2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* 5. Metadata appears subtly */}
            <div 
              className={`pt-4 border-t border-[#DFB6B2]/10 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-mono text-[#DFB6B2]/75 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '680ms' }}
            >
              <span className="text-[#FBE4D8]">VIT Bhopal</span>
              <span className="text-[#DFB6B2]/60">·</span>
              <span className="text-[#FBE4D8]">CSE (AI &amp; ML)</span>
              <span className="text-[#DFB6B2]/60">·</span>
              <span className="text-[#FBE4D8]">India</span>
            </div>

          </div>

          {/* Right: Modern Hanging Movable ID Card (5 cols) */}
          <div 
            className={`lg:col-span-5 flex items-center justify-center relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <HangingIDCard />
          </div>

        </div>
      </div>
    </section>
  );
}
