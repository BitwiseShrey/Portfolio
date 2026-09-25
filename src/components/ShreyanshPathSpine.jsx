import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Start' },
  { id: 'impact', label: 'Impact' },
  { id: 'about', label: 'About' },
  { id: 'svias', label: 'SVIAS' },
  { id: 'projects', label: 'Projects' },
  { id: 'aws-leadership', label: 'Leadership' },
  { id: 'events', label: 'Events' },
  { id: 'research', label: 'Research' },
  { id: 'mindset', label: 'Mindset' },
  { id: 'contact', label: 'Contact' }
];

export default function ShreyanshPathSpine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(progress);
      }

      // Check current section
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Top Trajectory Path with Glowing Comet Head */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-white/[0.04]"
        aria-hidden="true"
      >
        {/* Progress Beam */}
        <div 
          className="h-full bg-gradient-to-r from-[#854F6C] via-[#DFB6B2] to-[#FBE4D8] relative transition-all duration-75 ease-out shadow-[0_0_10px_rgba(223,182,178,0.7)]"
          style={{ width: `${scrollProgress * 100}%` }}
        >
          {/* Glowing Warm Cream Comet Head */}
          <div 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#FBE4D8] shadow-[0_0_10px_#DFB6B2,0_0_20px_#854F6C]"
          >
            <div className="absolute inset-0 rounded-full bg-[#DFB6B2] animate-ping opacity-75"></div>
          </div>
        </div>
      </div>

      {/* 2. Side Trajectory Node Spine (Subtle Desktop Minimalist Waypoint Track) */}
      <nav 
        aria-label="Section Navigation"
        className="fixed right-5 sm:right-7 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center gap-3.5 py-4 px-2 rounded-full bg-[#190019]/85 backdrop-blur-md border border-[#DFB6B2]/15 shadow-xl"
      >
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="group relative flex items-center justify-center p-1"
              title={sec.label}
            >
              {/* Waypoint Dot */}
              <div 
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2 h-4 bg-[#DFB6B2] shadow-[0_0_10px_#DFB6B2]'
                    : 'w-1.5 h-1.5 bg-[#522B5B] group-hover:bg-[#DFB6B2] group-hover:scale-125'
                }`}
              />

              {/* Flyout Label on Hover */}
              <span className="absolute right-7 px-2.5 py-1 rounded-md bg-[#2B124C] border border-[#DFB6B2]/30 text-[10px] font-mono text-[#FBE4D8] tracking-wider uppercase opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg whitespace-nowrap">
                {sec.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
