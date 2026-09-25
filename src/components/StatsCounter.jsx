import React, { useEffect, useState } from 'react';
import { IMPACT_METRICS } from '../data/portfolioData';
import { useInView } from './ScrollReveal';

// Helper component for counting up numbers smoothly without flicker
function AnimatedNumber({ value, shouldAnimate, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!shouldAnimate) return;

    // Check if value is a pure number with suffix like "400+" or "100+" or range "20–25"
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2] || '';

    // If it's a range like "20–25", handle gracefully
    if (value.includes('–') || value.includes('-')) {
      const timer = setTimeout(() => setDisplayValue(value), delay + 200);
      return () => clearTimeout(timer);
    }

    let start = 0;
    const duration = 900;
    const startTime = performance.now() + delay;

    let animId;
    const step = (now) => {
      if (now < startTime) {
        animId = requestAnimationFrame(step);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Gentle ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetNum);

      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [value, shouldAnimate, delay]);

  return <span>{displayValue}</span>;
}

export default function StatsCounter() {
  const [ref, inView] = useInView({ threshold: 0.15, once: true });

  return (
    <section id="impact" ref={ref} className="py-16 sm:py-20 border-y border-white/[0.08] bg-[#08090A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Navigation Micro-Label */}
        <div 
          className="mb-8 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -10px, 0)'
          }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#6FE7E1] font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FE7E1]"></span>
            <span>01 / IMPACT &amp; SCALE</span>
          </div>
          <span className="text-xs font-mono text-[#A7AAA8]/70 hidden sm:inline tracking-wider">
            DATA SPREAD · ARCHIVE METRICS
          </span>
        </div>

        {/* 4 Powerful Distinct Metric Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {IMPACT_METRICS.map((metric, idx) => (
            <div
              key={idx}
              data-spotlight
              className="rounded-2xl sm:rounded-3xl bg-[#101214] border border-white/[0.08] hover:border-[#6FE7E1]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 shadow-lg group relative overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(0, 24px, 0) scale(0.96)',
                transitionDelay: `${idx * 110}ms`,
                transitionProperty: 'opacity, transform, border-color, box-shadow'
              }}
            >
              {/* Dynamic Cursor Spotlight Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(111, 231, 225, 0.12), transparent 70%)'
                }}
              />

              {/* Restrained Accent Line on Top */}
              <div className="w-8 h-[2px] bg-[#6FE7E1]/30 group-hover:w-14 group-hover:bg-[#6FE7E1] transition-all duration-500 mb-6" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F3F0E8] font-mono tracking-tight group-hover:text-[#6FE7E1] transition-colors">
                    <AnimatedNumber value={metric.value} shouldAnimate={inView} delay={idx * 110} />
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FE7E1]/50 group-hover:bg-[#6FE7E1] transition-all"></span>
                </div>

                <h3 
                  className="text-sm sm:text-base font-bold text-[#F3F0E8]/90 mt-3 leading-snug transition-all duration-700"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(8px)',
                    transitionDelay: `${idx * 110 + 150}ms`
                  }}
                >
                  {metric.label}
                </h3>
              </div>

              <div 
                className="pt-4 mt-4 border-t border-white/[0.06] text-xs text-[#A7AAA8] font-mono transition-all duration-700"
                style={{
                  opacity: inView ? 1 : 0,
                  transitionDelay: `${idx * 110 + 250}ms`
                }}
              >
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
