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
    <section id="impact" ref={ref} className="py-12 sm:py-16 border-y border-white/[0.08] bg-[#07070a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Powerful Distinct Metric Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {IMPACT_METRICS.map((metric, idx) => (
            <div
              key={idx}
              data-spotlight
              className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#11101d] via-[#0c0b14] to-[#07070b] border border-white/[0.08] hover:border-purple-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/30 shadow-lg group relative overflow-hidden"
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
                  background: 'radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 70%)'
                }}
              />

              {/* Ambient Corner Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/25 transition-all"></div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-tight group-hover:text-purple-300 transition-colors">
                    <AnimatedNumber value={metric.value} shouldAnimate={inView} delay={idx * 110} />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-purple-400/60 group-hover:bg-purple-400 group-hover:scale-125 transition-all"></span>
                </div>

                <h3 
                  className="text-sm sm:text-base font-bold text-zinc-200 mt-3 leading-snug transition-all duration-700"
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
                className="pt-4 mt-4 border-t border-white/[0.06] text-xs text-zinc-400 font-mono transition-all duration-700"
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
