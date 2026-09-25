import React from 'react';
import { CREDENTIALS } from '../data/portfolioData';
import { Award, ArrowUpRight, CheckCircle2, BookmarkCheck } from 'lucide-react';

export default function CredentialsSection() {
  return (
    <section className="py-16 md:py-24 border-t border-white/[0.06] bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono mb-2">
              <BookmarkCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>CONTINUOUS LEARNING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Learning & Credentials
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400">
            *Focused credentials in Project Management, Business & Market Research
          </p>
        </div>

        {/* Compact Credential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              className="rounded-2xl bg-[#0d0d14] border border-white/[0.08] hover:border-teal-500/30 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg group"
            >
              <div className="space-y-3">
                
                {/* Issuer Badge & Year */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-teal-300 uppercase tracking-wider px-2.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                    {cred.issuer}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {cred.year}
                  </span>
                </div>

                {/* Credential Name */}
                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                  {cred.title}
                </h3>

                {/* Domain Tag */}
                <p className="text-xs text-zinc-400">
                  {cred.domain}
                </p>

              </div>

              {/* View Credential Link */}
              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified
                </span>
                
                {cred.link && cred.link !== '#' ? (
                  <a
                    href={cred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-semibold"
                  >
                    <span>View Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-zinc-400 cursor-default flex items-center gap-1">
                    <span>View Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

