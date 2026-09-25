import React, { useEffect, useState, useRef, useCallback } from 'react';

/**
 * PortfolioIntroSequence
 * 
 * Full-Screen Editorial Title Sequence:
 * 1. Deep black/obsidian canvas (100vw × 100vh) with subtle violet atmosphere
 * 2. Identity kicker appears: "SHREYANSH UTTAM" + "PRODUCT × TECHNOLOGY × LEADERSHIP"
 * 3. Letters of "portfolio" assemble individually (opacity, vertical displacement, blur-to-sharp, scale settle)
 * 4. Realistic matte-charcoal digital stylus pen enters from RIGHT, weaving continuously
 *    between/through the letters (RIGHT -> LEFT) with genuine SVG layer depth
 * 5. Localized teal/azure illumination wash travels in sync with the pen
 * 6. Pen exits LEFT; wordmark subtly activates and reacts
 * 7. Cinematic forward zoom transition: the wordmark scales forward into the camera (scale 3.8+, blur),
 *    becoming the gateway through which the viewer enters the live portfolio Hero
 * 8. Unmounts completely from DOM, restores scroll, runs once on initial load only
 */
export default function PortfolioIntroSequence({ onComplete }) {
  const [phase, setPhase] = useState(0); 
  // Phases:
  // 0: Initial black (0 - 700ms)
  // 1: Identity kicker reveals (700ms - 1200ms)
  // 2: Letters assemble individually (1200ms - 2700ms)
  // 3: Brief hold on assembled wordmark (2700ms - 3200ms)
  // 4: Pen glides continuously RIGHT -> LEFT (3200ms - 5500ms)
  // 5: Pen exits, wordmark activates (5500ms - 5800ms)
  // 6: Camera forward zoom transition (5800ms - 6800ms)
  // 7: Done / unmount (6800ms+)

  const [penX, setPenX] = useState(1050); // Starts off-screen right
  const [penGlowOpacity, setPenGlowOpacity] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);

  const animFrameRef = useRef(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsCompleted(true);
      if (onComplete) onComplete();
      return;
    }

    // Lock body scroll while intro is playing
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Phase 1: Identity kicker reveals
    const t1 = setTimeout(() => setPhase(1), 700);

    // Phase 2: Letters assemble individually
    const t2 = setTimeout(() => setPhase(2), 1200);

    // Phase 3: Hold complete wordmark
    const t3 = setTimeout(() => setPhase(3), 2700);

    // Phase 4: Stylus enters from RIGHT and glides continuously across wordmark
    const t4 = setTimeout(() => {
      setPhase(4);
      setPenGlowOpacity(1);

      const sweepDuration = 2300; // ms
      const startX = 1000;
      const endX = -320;
      const startTimestamp = performance.now();

      const animatePen = (now) => {
        const elapsed = now - startTimestamp;
        const rawProgress = Math.min(elapsed / sweepDuration, 1);
        
        // Smoothstep curve for seamless physical motion
        const smoothProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);
        const currentX = startX + (endX - startX) * smoothProgress;

        setPenX(currentX);

        if (rawProgress < 1) {
          animFrameRef.current = requestAnimationFrame(animatePen);
        } else {
          // Pen finished sweep and exited left
          setPhase(5); // Wordmark activation
        }
      };

      animFrameRef.current = requestAnimationFrame(animatePen);
    }, 3200);

    // Phase 6: Camera forward zoom transition (flying through the wordmark)
    const t6 = setTimeout(() => setPhase(6), 5700);

    // Phase 7: Clean unmount and restore scroll
    const t7 = setTimeout(() => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      setIsCompleted(true);
      if (onComplete) onComplete();
    }, 6800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t6);
      clearTimeout(t7);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [onComplete]);

  // Handle Skip button & Escape key
  const handleSkip = useCallback(() => {
    setIsSkipping(true);
    setPhase(6);
    setTimeout(() => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      setIsCompleted(true);
      if (onComplete) onComplete();
    }, 350);
  }, [onComplete]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSkip]);

  if (isCompleted) return null;

  // Individual letter assembly definitions
  // Varied displacement vectors & delays for physical construction feel
  const letterSpecs = [
    { char: 'p', x: 85,  layer: 'back',  initialY: 32,  initialX: -10, delay: 0 },
    { char: 'o', x: 180, layer: 'front', initialY: -26, initialX: 8,   delay: 90 },
    { char: 'r', x: 275, layer: 'back',  initialY: 30,  initialX: -8,  delay: 170 },
    { char: 't', x: 352, layer: 'front', initialY: -34, initialX: 6,   delay: 240 },
    { char: 'f', x: 416, layer: 'back',  initialY: 38,  initialX: -6,  delay: 320 },
    { char: 'o', x: 486, layer: 'front', initialY: -28, initialX: 8,   delay: 390 },
    { char: 'l', x: 578, layer: 'back',  initialY: 34,  initialX: -8,  delay: 460 },
    { char: 'i', x: 632, layer: 'front', initialY: -30, initialX: 6,   delay: 530 },
    { char: 'o', x: 688, layer: 'back',  initialY: 28,  initialX: -8,  delay: 600 }
  ];

  const isAssembled = phase >= 2;
  const isWordmarkActivated = phase >= 5;
  const isZoomingForward = phase === 6 || isSkipping;

  return (
    <div 
      className={`fixed inset-0 z-[10000] w-full h-full bg-[#190019] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden select-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isZoomingForward ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Portfolio Cinematic Title Sequence"
    >
      {/* 1. Subtle Radial Ambient Atmosphere */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full blur-[170px] pointer-events-none transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(133, 79, 108, 0.16) 0%, rgba(82, 43, 91, 0.08) 50%, transparent 70%)',
          opacity: phase >= 1 ? 1 : 0
        }}
      />

      {/* 2. Top Header Bar: Identity & Skip Control */}
      <div className="w-full flex items-start justify-between relative z-20">
        
        {/* Creator Identity Kicker */}
        <div 
          className="space-y-1 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: phase >= 1 && !isZoomingForward ? 1 : 0,
            transform: phase >= 1 && !isZoomingForward ? 'translate3d(0, 0, 0)' : 'translate3d(0, -16px, 0)'
          }}
        >
          <h1 className="text-xs sm:text-sm font-extrabold text-[#FBE4D8] uppercase tracking-[0.25em] font-sans">
            Shreyansh Uttam
          </h1>
          <p className="text-[10px] sm:text-xs font-mono text-[#DFB6B2] tracking-wider">
            Product × Technology × Leadership
          </p>
        </div>

        {/* Discreet Skip Intro Button */}
        <button
          onClick={handleSkip}
          className="px-3.5 py-1.5 rounded-full bg-[#2B124C] hover:bg-[#35165E] border border-[#DFB6B2]/20 hover:border-[#DFB6B2]/50 text-xs font-mono text-[#DFB6B2] hover:text-[#FBE4D8] transition-all backdrop-blur-md flex items-center gap-1.5 cursor-pointer shadow-lg"
          title="Skip title sequence"
        >
          <span>Skip intro</span>
          <span className="text-[#FBE4D8]">&rarr;</span>
        </button>

      </div>

      {/* 3. Center: Massive Editorial "portfolio" Wordmark with Stylus Weave */}
      <div 
        className="my-auto relative flex items-center justify-center w-full will-change-transform"
        style={{
          perspective: '800px',
          transformStyle: 'preserve-3d',
          transform: isZoomingForward 
            ? 'translate3d(0, 0, 480px) scale(4.2)' 
            : 'translate3d(0, 0, 0) scale(1)',
          filter: isZoomingForward ? 'blur(12px)' : 'none',
          opacity: isZoomingForward ? 0 : 1,
          transition: isSkipping 
            ? 'all 350ms ease-out' 
            : 'transform 1050ms cubic-bezier(0.16, 1, 0.3, 1), filter 950ms ease-out, opacity 850ms ease-out'
        }}
      >
        <svg 
          viewBox="0 0 880 260" 
          className="w-full h-auto max-w-[1020px] overflow-visible select-none"
          style={{
            filter: isWordmarkActivated 
              ? 'drop-shadow(0 0 35px rgba(223, 182, 178, 0.35))' 
              : 'drop-shadow(0 15px 25px rgba(0,0,0,0.8))',
            transition: 'filter 600ms ease-out'
          }}
        >
          <defs>
            {/* Base Text Linear Gradient (Muted Purple to Deep Plum) */}
            <linearGradient id="baseTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#522B5B" />
              <stop offset="60%" stopColor="#2B124C" />
              <stop offset="100%" stopColor="#190019" />
            </linearGradient>

            {/* Front Overlapping Text Gradient (Mauve to Violet) */}
            <linearGradient id="frontTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#854F6C" />
              <stop offset="60%" stopColor="#522B5B" />
              <stop offset="100%" stopColor="#2B124C" />
            </linearGradient>

            {/* Pen Metallic Barrel Gradient (Violet to Plum) */}
            <linearGradient id="penBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#522B5B" />
              <stop offset="25%" stopColor="#35165E" />
              <stop offset="70%" stopColor="#2B124C" />
              <stop offset="100%" stopColor="#190019" />
            </linearGradient>

            {/* Pen Nib Titanium Gradient */}
            <linearGradient id="penNibGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#854F6C" />
              <stop offset="50%" stopColor="#522B5B" />
              <stop offset="100%" stopColor="#2B124C" />
            </linearGradient>

            {/* Localized Warm Cream/Blush Illumination Wash */}
            <radialGradient 
              id="penIllumination" 
              cx={`${penX + 60}`} 
              cy="132" 
              r="230" 
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FBE4D8" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#DFB6B2" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#854F6C" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#190019" stopOpacity="0" />
            </radialGradient>

            {/* Realistic Pen Drop Shadow */}
            <filter id="penShadow" x="-20%" y="-40%" width="140%" height="200%">
              <feDropShadow dx="-2" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* ---------------------------------------------------- */}
          {/* SVG LAYER 1: BASE TYPOGRAPHY (Individual Letters)    */}
          {/* ---------------------------------------------------- */}
          <g 
            style={{
              fontFamily: "'Aveton', 'Syne', sans-serif",
              fontWeight: 900,
              fontSize: '150px',
              letterSpacing: '-3px'
            }}
            fill="url(#baseTextGrad)"
            stroke="rgba(223, 182, 178, 0.12)"
            strokeWidth="1.2"
          >
            {letterSpecs.map((item, idx) => (
              <text 
                key={idx} 
                x={item.x} 
                y="180"
                style={{
                  transform: isAssembled 
                    ? 'translate3d(0, 0, 0) scale(1)' 
                    : `translate3d(${item.initialX}px, ${item.initialY}px, 0) scale(0.92)`,
                  opacity: isAssembled ? 1 : 0,
                  filter: isAssembled ? 'blur(0px)' : 'blur(8px)',
                  transition: `all 850ms cubic-bezier(0.16, 1, 0.3, 1)`,
                  transitionDelay: `${item.delay}ms`,
                  willChange: 'transform, opacity, filter'
                }}
              >
                {item.char}
              </text>
            ))}
          </g>

          {/* ---------------------------------------------------- */}
          {/* SVG LAYER 2: LOCALIZED BLUSH/CREAM ILLUMINATION WASH */}
          {/* ---------------------------------------------------- */}
          <g 
            style={{
              fontFamily: "'Aveton', 'Syne', sans-serif",
              fontWeight: 900,
              fontSize: '150px',
              letterSpacing: '-3px',
              opacity: penGlowOpacity
            }}
            fill="url(#penIllumination)"
            stroke="#DFB6B2"
            strokeWidth="0.8"
            strokeOpacity="0.55"
            pointerEvents="none"
          >
            {letterSpecs.map((item, idx) => (
              <text key={`glow-${idx}`} x={item.x} y="180">
                {item.char}
              </text>
            ))}
          </g>

          {/* ---------------------------------------------------- */}
          {/* SVG LAYER 3: THE DIGITAL STYLUS (Smooth Continuous)  */}
          {/* ---------------------------------------------------- */}
          <g 
            transform={`translate(${penX}, 0)`}
            filter="url(#penShadow)"
            style={{ opacity: phase >= 4 && phase <= 5 ? 1 : 0 }}
            className="transition-opacity duration-300"
          >
            {/* 3A. Ambient Soft Violet Halo Following Nib */}
            <circle 
              cx="50" 
              cy="132" 
              r="75" 
              fill="url(#penIllumination)" 
              opacity="0.35" 
              pointerEvents="none" 
            />

            {/* 3B. Stylus Pointed Drawing Nib (Facing LEFT) */}
            <path 
              d="M 0 132 L 14 129.5 L 14 134.5 Z" 
              fill="#190019" 
              stroke="#522B5B" 
              strokeWidth="0.5" 
            />
            
            {/* Nib Conical Collar */}
            <path 
              d="M 14 129.5 L 36 124 L 36 140 L 14 134.5 Z" 
              fill="url(#penNibGrad)" 
              stroke="#522B5B" 
              strokeWidth="0.6" 
            />

            {/* Nib Chrome Ring Accent */}
            <rect 
              x="36" 
              y="123" 
              width="4" 
              height="18" 
              rx="1" 
              fill="#DFB6B2" 
            />

            {/* 3C. Ergonomic Matte Grip Section */}
            <path 
              d="M 40 123 L 95 122 L 95 142 L 40 141 Z" 
              fill="#2B124C" 
              stroke="#522B5B" 
              strokeWidth="0.5" 
            />

            {/* Dual Rocker Switch Button on Grip */}
            <rect 
              x="54" 
              y="120" 
              width="26" 
              height="3.5" 
              rx="1.5" 
              fill="#35165E" 
              stroke="#854F6C" 
              strokeWidth="0.5" 
            />
            <line x1="67" y1="120" x2="67" y2="123.5" stroke="#190019" strokeWidth="0.8" />

            {/* 3D. Main Cylindrical Barrel Body */}
            <path 
              d="M 95 122 L 275 124 L 275 140 L 95 142 Z" 
              fill="url(#penBodyGrad)" 
              stroke="#522B5B" 
              strokeWidth="0.6" 
            />

            {/* Top Specular Reflection Highlight Line */}
            <line 
              x1="95" 
              y1="123.5" 
              x2="275" 
              y2="125" 
              stroke="rgba(251, 228, 216, 0.45)" 
              strokeWidth="0.8" 
            />

            {/* Subtle Reflected Light on Underbelly */}
            <line 
              x1="95" 
              y1="140.5" 
              x2="275" 
              y2="139" 
              stroke="#DFB6B2" 
              strokeWidth="0.8" 
              strokeOpacity="0.45" 
            />

            {/* 3E. Rounded Metallic Tail Cap */}
            <path 
              d="M 275 124 Q 288 124 290 132 Q 288 140 275 140 Z" 
              fill="#2B124C" 
              stroke="#522B5B" 
              strokeWidth="0.6" 
            />
          </g>

          {/* ---------------------------------------------------- */}
          {/* SVG LAYER 4: FOREGROUND OVERLAPPING LETTERS          */}
          {/* GENUINE PHYSICAL WEAVE: BEHIND -> IN FRONT -> BEHIND */}
          {/* Specific letters sit ON TOP of the pen!              */}
          {/* ---------------------------------------------------- */}
          <g 
            style={{
              fontFamily: "'Aveton', 'Syne', sans-serif",
              fontWeight: 900,
              fontSize: '150px',
              letterSpacing: '-3px'
            }}
            fill="url(#frontTextGrad)"
            stroke="rgba(223, 182, 178, 0.18)"
            strokeWidth="1.2"
            pointerEvents="none"
          >
            <text 
              x="180" 
              y="180"
              style={{
                transform: isAssembled ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(8px, -26px, 0) scale(0.92)',
                opacity: isAssembled ? 1 : 0,
                filter: isAssembled ? 'blur(0px)' : 'blur(8px)',
                transition: 'all 850ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '90ms'
              }}
            >
              o
            </text>
            <text 
              x="352" 
              y="180"
              style={{
                transform: isAssembled ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(6px, -34px, 0) scale(0.92)',
                opacity: isAssembled ? 1 : 0,
                filter: isAssembled ? 'blur(0px)' : 'blur(8px)',
                transition: 'all 850ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '240ms'
              }}
            >
              t
            </text>
            <text 
              x="486" 
              y="180"
              style={{
                transform: isAssembled ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(8px, -28px, 0) scale(0.92)',
                opacity: isAssembled ? 1 : 0,
                filter: isAssembled ? 'blur(0px)' : 'blur(8px)',
                transition: 'all 850ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '390ms'
              }}
            >
              o
            </text>
            <text 
              x="632" 
              y="180"
              style={{
                transform: isAssembled ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(6px, -30px, 0) scale(0.92)',
                opacity: isAssembled ? 1 : 0,
                filter: isAssembled ? 'blur(0px)' : 'blur(8px)',
                transition: 'all 850ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '530ms'
              }}
            >
              i
            </text>
          </g>

          {/* ---------------------------------------------------- */}
          {/* SVG LAYER 5: FOREGROUND LETTER AMBIENT WASH          */}
          {/* ---------------------------------------------------- */}
          <g 
            style={{
              fontFamily: "'Aveton', 'Syne', sans-serif",
              fontWeight: 900,
              fontSize: '150px',
              letterSpacing: '-3px',
              opacity: penGlowOpacity
            }}
            fill="url(#penIllumination)"
            stroke="#DFB6B2"
            strokeWidth="0.8"
            strokeOpacity="0.55"
            pointerEvents="none"
          >
            <text x="180" y="180">o</text>
            <text x="352" y="180">t</text>
            <text x="486" y="180">o</text>
            <text x="632" y="180">i</text>
          </g>

        </svg>
      </div>

      {/* 4. Bottom Footer Markings */}
      <div 
        className="w-full flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#DFB6B2]/70 pt-4 border-t border-[#DFB6B2]/10 relative z-20 transition-all duration-800"
        style={{
          opacity: phase >= 1 && !isZoomingForward ? 1 : 0,
          transform: phase >= 1 && !isZoomingForward ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)'
        }}
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>INITIALIZING DIGITAL ARCHIVE</span>
        </span>
        <span className="text-[#DFB6B2]/50 hidden sm:inline">AUTHENTIC DIGITAL LAB</span>
        <span>23.25° N · 77.41° E</span>
      </div>

    </div>
  );
}
