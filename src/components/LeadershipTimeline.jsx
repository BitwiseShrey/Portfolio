import React, { useState } from 'react';
import { LEADERSHIP_TIMELINE } from '../data/portfolioData';
import { Calendar, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LeadershipTimeline() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="timeline" className="py-24 md:py-36 border-t border-white/[0.06] bg-[#08080d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            <span>PROGRESSION & MILESTONES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Chronological Leadership Journey
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A continuous path of ownership: from early digital storytelling to executive club secretary, lead hackathon coordination, market research, and leading the AWS Student Builder Group.
          </p>
        </div>

        {/* Interactive Vertical Timeline Spine */}
        <div className="relative pl-6 sm:pl-10 md:pl-32 border-l border-purple-500/25 space-y-12">
          {LEADERSHIP_TIMELINE.map((item, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setActiveItem(idx)}
              onMouseLeave={() => setActiveItem(null)}
              className="relative group transition-all duration-300"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[135px] top-1.5 flex items-center gap-3">
                <span className="hidden md:block font-mono text-xs font-bold text-purple-400 w-16 text-right">
                  {item.year}
                </span>
                <div className="w-4 h-4 rounded-full bg-[#08080d] border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 group-hover:border-purple-300 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                </div>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0f0f18] border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-950/20">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-md bg-purple-500/15 text-purple-300 font-semibold border border-purple-500/20">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {item.month} {item.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                  {item.summary}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
