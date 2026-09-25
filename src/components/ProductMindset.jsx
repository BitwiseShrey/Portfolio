import React, { useState } from 'react';
import { PRODUCT_MINDSET_DATA } from '../data/portfolioData';
import { Plus, Minus, ArrowRight, Sparkles } from 'lucide-react';
import { useInView } from './ScrollReveal';

export default function ProductMindset() {
  const [activeStep, setActiveStep] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  const questions = [
    {
      step: "01",
      domain: "USER",
      question: "What problem are people actually facing?",
      desc: "Identifying genuine latent friction that users struggle with daily, rather than assuming user desires or building superficial feature requests.",
      execution: "Direct qualitative user interviews, observational workflow audits, and active pain-point mapping."
    },
    {
      step: "02",
      domain: "MARKET",
      question: "Is the problem large enough to matter?",
      desc: "Validating structural urgency, market acuity, and economic willingness to adopt before writing a single line of backend architecture.",
      execution: "Bottom-up TAM/SAM/SOM sizing models, regulatory driver forecasting, and competitor moat evaluation."
    },
    {
      step: "03",
      domain: "PRODUCT",
      question: "What is the simplest useful solution?",
      desc: "Crafting a focused MVP that solves the critical constraint with zero cognitive friction and unmistakable user delight.",
      execution: "User journey mapping, wireframe prototyping, and rapid usability test iterations."
    },
    {
      step: "04",
      domain: "TECHNOLOGY",
      question: "How should it be built?",
      desc: "Evaluating engineering feasibility, latency constraints, and distributed scalability without falling into technical over-engineering.",
      execution: "Edge AI inference, modular system pipelines, and resilient cloud infrastructure."
    },
    {
      step: "05",
      domain: "BUSINESS",
      question: "Can it create sustainable value?",
      desc: "Ensuring healthy unit economics, long-term defensibility, and organic network distribution advantages from Day 1.",
      execution: "Cost-to-serve analysis, defensible moat architecture, and community-led organic growth loops."
    }
  ];

  return (
    <section id="mindset" ref={ref} className="py-20 md:py-32 border-t border-[#DFB6B2]/10 bg-[#190019] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Statement Enters First with Typography Mask */}
        <div 
          className="max-w-3xl mb-14 space-y-3 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, -28px, 0)'
          }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#DFB6B2] font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFB6B2]"></span>
            <span>08 / PRODUCT PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal font-display text-[#FBE4D8] tracking-tight leading-[1.12]">
            "I don't just ask how to build it. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBE4D8] via-[#DFB6B2] to-[#854F6C]">I ask why it should exist.</span>"
          </h2>
          <p className="text-xs sm:text-sm text-[#DFB6B2]/80 max-w-xl leading-relaxed">
            A 5-step strategic discipline applied before and during product engineering.
          </p>
        </div>

        {/* 5 Cascading Principle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {questions.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={item.step}
                data-spotlight
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#35165E] via-[#2B124C] to-[#190019] border-2 border-[#854F6C]/60 shadow-xl shadow-black/60 -translate-y-1.5'
                    : 'bg-[#2B124C] border border-[#DFB6B2]/12 hover:border-[#854F6C]/60 hover:-translate-y-1.5 hover:shadow-lg'
                }`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 32px, 0)',
                  transitionDelay: `${250 + idx * 90}ms`
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
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#DFB6B2] uppercase tracking-wider">
                      {item.step} &bull; {item.domain}
                    </span>
                    <span className={`w-2 h-2 rounded-full transition-all ${
                      isSelected ? 'bg-[#DFB6B2] shadow-[0_0_8px_#DFB6B2]' : 'bg-white/10 group-hover:bg-[#DFB6B2]/50'
                    }`}></span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-[#FBE4D8] group-hover:text-[#DFB6B2] transition-colors leading-snug">
                    {item.question}
                  </h3>

                  <p className="text-xs text-[#DFB6B2]/80 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DFB6B2]/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#DFB6B2]/60 mb-1">
                    Execution
                  </div>
                  <p className="text-[11px] text-[#FBE4D8]/90 leading-relaxed font-mono">
                    {item.execution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
