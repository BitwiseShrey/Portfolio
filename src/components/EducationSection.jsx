import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';

export default function EducationSection() {
  const { education } = PERSONAL_INFO;

  return (
    <section className="py-20 md:py-28 border-t border-white/[0.06] bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Background
          </h2>
        </div>

        {/* 2-Card Academic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* University Card */}
          <div className="rounded-3xl bg-[#0f0f18] border border-white/10 p-7 sm:p-8 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase px-3 py-1 rounded-md bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30">
                Undergraduate
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {education.duration}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                {education.university}
              </h3>
              <p className="text-sm text-teal-200 mt-1 font-medium">
                {education.degree}
              </p>
            </div>
          </div>

          {/* Schooling Card */}
          <div className="rounded-3xl bg-[#0f0f18] border border-white/10 p-7 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase px-3 py-1 rounded-md bg-white/10 text-white font-semibold">
                High School & Intermediate
              </span>
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Kanpur, India
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                {education.school.name}
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Senior Secondary & Secondary Education
              </p>
            </div>

            <div className="pt-3 border-t border-white/[0.08] grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[11px] text-zinc-400 font-mono">Class 12th Board</div>
                <div className="text-base font-bold text-white font-mono mt-0.5">{education.school.grade12}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[11px] text-zinc-400 font-mono">Class 10th Board</div>
                <div className="text-base font-bold text-white font-mono mt-0.5">{education.school.grade10}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

