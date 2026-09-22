import React from 'react';
import { CURRENTLY_BUILDING } from '../data/portfolioData';
import { Sparkles, Activity, ArrowUpRight, Cpu, Users, Compass } from 'lucide-react';

export default function CurrentlyBuilding() {
  const getIcon = (id) => {
    switch(id) {
      case 'svias': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'aws-sbg': return <Users className="w-5 h-5 text-purple-400" />;
      default: return <Compass className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="building" className="py-16 md:py-24 border-t border-white/[0.06] bg-[#09090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>ACTIVE SPRINTS & FOCUS AREAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Currently Building & Leading
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              A personal brand in motion. Here is what I am actively prototyping, scaling, and researching right now.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-400 hidden md:block">
            Updated September 2026
          </div>
        </div>

        {/* 3-Column Living Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRENTLY_BUILDING.map((item, idx) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-[#101017] border border-white/[0.08] hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 group"
            >
              <div>
                {/* Top Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{item.status}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    {getIcon(item.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1 font-medium">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                {/* Active Focus Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mt-3 pt-3 border-t border-white/[0.06]">
                  {item.focus}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-4 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                <span>View deep dive</span>
                <a 
                  href={item.link} 
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
