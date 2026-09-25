import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, ShieldCheck, QrCode, Cpu, RotateCcw, RefreshCw, MapPin, Mail, Award, ExternalLink } from 'lucide-react';

export default function HangingIDCard() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  
  // Physics State in ref for silky-smooth 60/120fps performance
  const stateRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    rot: 0,
    vRot: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    glareX: 50,
    glareY: 50,
    idleTime: 0
  });

  const [renderPos, setRenderPos] = useState({ x: 0, y: 0, rot: 0, glareX: 50, glareY: 50 });
  const [isDraggingState, setIsDraggingState] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Physics animation loop
  useEffect(() => {
    let animId;
    let prevTimestamp = performance.now();

    const updatePhysics = (timestamp) => {
      const dt = Math.min((timestamp - prevTimestamp) / 1000, 0.05);
      prevTimestamp = timestamp;

      const s = stateRef.current;

      if (!s.isDragging) {
        // Natural ambient sway when resting
        s.idleTime += dt;
        const ambientSway = Math.sin(s.idleTime * 1.5) * 2.2;
        const ambientX = Math.sin(s.idleTime * 1.5) * 3.5;

        // Spring return forces
        const k = 44; // stiffness
        const d = 5.8; // damping

        const fx = -k * (s.x - ambientX) - d * s.vx;
        const fy = -k * s.y - d * s.vy;

        s.vx += fx * dt;
        s.vy += fy * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;

        // Pendulum tilt
        const targetRot = (s.x * 0.17) + (s.vx * 0.03) + ambientSway;
        const kRot = 36;
        const dRot = 6.2;
        const fRot = -kRot * (s.rot - targetRot) - dRot * s.vRot;

        s.vRot += fRot * dt;
        s.rot += s.vRot * dt;
      }

      setRenderPos({
        x: s.x,
        y: s.y,
        rot: s.rot,
        glareX: s.glareX,
        glareY: s.glareY
      });

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer Down
  const handlePointerDown = (e) => {
    // Avoid triggering drag when clicking the flip button
    if (e.target.closest('.no-drag')) return;

    const clientX = e.clientX ?? (e.touches ? e.touches[0].clientX : 0);
    const clientY = e.clientY ?? (e.touches ? e.touches[0].clientY : 0);

    const s = stateRef.current;
    s.isDragging = true;
    s.startX = clientX - s.x;
    s.startY = clientY - s.y;
    s.lastX = clientX;
    s.lastY = clientY;
    s.lastTime = performance.now();
    s.vx = 0;
    s.vy = 0;
    s.vRot = 0;

    setIsDraggingState(true);
    setHasInteracted(true);
  };

  // Pointer Move
  const handlePointerMove = useCallback((e) => {
    const s = stateRef.current;
    const clientX = e.clientX ?? (e.touches ? e.touches[0].clientX : 0);
    const clientY = e.clientY ?? (e.touches ? e.touches[0].clientY : 0);

    if (!s.isDragging) {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const gx = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
        const gy = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
        s.glareX = gx;
        s.glareY = gy;
      }
      return;
    }

    const now = performance.now();
    const dt = Math.max((now - s.lastTime) / 1000, 0.008);

    let targetX = clientX - s.startX;
    let targetY = clientY - s.startY;

    // Bounds limit with elastic resistance (responsive to screen width)
    const isMobile = window.innerWidth < 640;
    const maxDistX = isMobile ? 80 : 140;
    const maxDistY = isMobile ? 70 : 110;
    targetX = Math.max(-maxDistX, Math.min(maxDistX, targetX));
    targetY = Math.max(-30, Math.min(maxDistY, targetY));

    s.vx = ((clientX - s.lastX) / dt) * 0.35;
    s.vy = ((clientY - s.lastY) / dt) * 0.35;
    s.lastX = clientX;
    s.lastY = clientY;
    s.lastTime = now;

    s.x = targetX;
    s.y = targetY;
    s.rot = (targetX / maxDistX) * (isMobile ? 20 : 26) + (s.vx * 0.02);

    s.glareX = Math.max(10, Math.min(90, 50 + (targetX / maxDistX) * 40));
    s.glareY = Math.max(10, Math.min(90, 50 + (targetY / maxDistY) * 40));
  }, []);

  // Pointer Up
  const handlePointerUp = useCallback(() => {
    const s = stateRef.current;
    if (s.isDragging) {
      s.isDragging = false;
      setIsDraggingState(false);
      s.vRot = s.vx * 0.12; // Angular kick on toss
    }
  }, []);

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  const handleReset = (e) => {
    if (e) e.stopPropagation();
    const s = stateRef.current;
    s.x = 0;
    s.y = 0;
    s.vx = 0;
    s.vy = 0;
    s.rot = 0;
    s.vRot = 0;
    setIsFlipped(false);
  };

  const toggleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(prev => !prev);
    setHasInteracted(true);
  };

  // Mathematically Centered Coordinate System (origin (0,0) is horizontal center at top)
  const anchorX = 0;
  const anchorY = -25;
  const clipX = renderPos.x;
  const clipY = 65 + renderPos.y;
  const midX = (anchorX + clipX) / 2 + (renderPos.rot * 0.7);
  const midY = (anchorY + clipY) / 2 - 8;

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[360px] h-[590px] sm:h-[630px] flex flex-col items-center select-none touch-none py-2"
    >
      {/* Ambient Wall Shadow that follows the card in 3D space */}
      <div 
        className="absolute top-28 w-[240px] h-[340px] rounded-[40px] bg-purple-950/20 blur-3xl pointer-events-none transition-transform duration-100 -z-10"
        style={{
          transform: `translate3d(${renderPos.x * 0.5}px, ${renderPos.y * 0.4}px, 0) scale(${1 - renderPos.y * 0.001})`
        }}
      />

      {/* Top Fixed Ceiling / Lanyard Hardware Mount */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        {/* Metal ceiling mount bracket */}
        <div className="w-14 h-3.5 rounded-full bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 border border-white/20 shadow-md flex items-center justify-center">
          <div className="w-6 h-1 rounded-full bg-zinc-950/80"></div>
        </div>
        <div className="w-3.5 h-3 bg-zinc-800 border-x border-white/20 -mt-0.5"></div>
      </div>

      {/* SVG Lanyard Ribbon with Zero Centering Offset */}
      <svg 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[160px] pointer-events-none z-20 overflow-visible"
        viewBox="-170 0 340 160"
      >
        <defs>
          <linearGradient id="lanyardRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="45%" stopColor="#4c1d95" />
            <stop offset="85%" stopColor="#1e0b38" />
            <stop offset="100%" stopColor="#0c0417" />
          </linearGradient>

          <linearGradient id="lanyardStitch" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
          </linearGradient>

          <filter id="ribbonShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.65" />
          </filter>
        </defs>

        {/* Dynamic Curved Ribbon Fabric */}
        <path
          d={`M ${anchorX - 9} ${anchorY} Q ${midX - 7} ${midY} ${clipX - 8} ${clipY} L ${clipX + 8} ${clipY} Q ${midX + 7} ${midY} ${anchorX + 9} ${anchorY} Z`}
          fill="url(#lanyardRibbon)"
          filter="url(#ribbonShadow)"
        />

        {/* Twin Contrast Stitching along edges */}
        <path
          d={`M ${anchorX - 6.5} ${anchorY} Q ${midX - 5} ${midY} ${clipX - 6} ${clipY}`}
          stroke="url(#lanyardStitch)"
          strokeWidth="1.2"
          strokeDasharray="3,2"
          fill="none"
        />
        <path
          d={`M ${anchorX + 6.5} ${anchorY} Q ${midX + 5} ${midY} ${clipX + 6} ${clipY}`}
          stroke="url(#lanyardStitch)"
          strokeWidth="1.2"
          strokeDasharray="3,2"
          fill="none"
        />
      </svg>

      {/* Physics-Driven Swinging Container */}
      <div
        ref={cardRef}
        onPointerDown={handlePointerDown}
        className={`absolute top-10 left-1/2 z-20 w-[285px] sm:w-[325px] transition-shadow duration-300 ${
          isDraggingState ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          transform: `translate3d(calc(-50% + ${renderPos.x}px), ${renderPos.y}px, 0) rotate(${renderPos.rot}deg)`,
          transformOrigin: '50% -15px',
          willChange: 'transform'
        }}
      >
        {/* Metal Swivel Clasp Assembly */}
        <div className="flex flex-col items-center -mb-2 relative z-30 pointer-events-none">
          {/* Swivel Ring */}
          <div className="w-5 h-6 rounded-sm bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 border border-white/60 shadow-lg flex items-center justify-center">
            <div className="w-2.5 h-3 rounded-full border-2 border-zinc-700 bg-transparent"></div>
          </div>
          {/* Lobster Claw Metal Hook */}
          <div className="w-7 h-2.5 rounded-full bg-zinc-800 border border-zinc-500 shadow-sm -mt-0.5"></div>
        </div>

        {/* 3D Flippable Card Perspective Wrapper */}
        <div 
          className="relative w-full transition-transform duration-700 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `perspective(1000px) rotateY(${isFlipped ? 180 : 0}deg)`
          }}
        >
          {/* ======================================================== */}
          {/* FRONT OF BADGE: Authentic Keynote / Pass Identity       */}
          {/* ======================================================== */}
          <div 
            className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#161522] via-[#0d0c15] to-[#07070b] border-2 border-purple-500/40 p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_0_30px_rgba(168,85,247,0.18)]"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Interactive Dynamic Holographic Foil Glare */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-3xl opacity-40 mix-blend-color-dodge transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 240px at ${renderPos.glareX}% ${renderPos.glareY}%, rgba(192,132,252,0.45), rgba(56,189,248,0.25), transparent 70%)`
              }}
            />

            {/* Frosted Glass Diagonal Sheen */}
            <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none transform rotate-45" />

            {/* Top Lanyard Slot Punch Hole */}
            <div className="w-12 h-2.5 mx-auto -mt-1 mb-3 rounded-full bg-[#050508] border border-white/20 shadow-inner flex items-center justify-center">
              <div className="w-8 h-1 rounded-full bg-black"></div>
            </div>

            {/* Badge Top Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-purple-600 flex items-center justify-center font-bold text-[10px] text-white">
                  SU
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 font-bold">
                  VIT BHOPAL PASS
                </span>
              </div>

              {/* Flip Button */}
              <button
                onClick={toggleFlip}
                className="no-drag flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white/5 hover:bg-white/15 border border-purple-400/30 text-[9px] font-mono text-purple-300 transition-colors"
                title="Flip to view access chip"
              >
                <RefreshCw className="w-2.5 h-2.5" />
                <span>FLIP</span>
              </button>
            </div>

            {/* Badge Portrait Container */}
            <div className="relative aspect-[4/4.2] rounded-2xl overflow-hidden bg-black/80 border border-white/15 mb-3.5 group">
              <img
                src={PERSONAL_INFO.profilePhoto}
                alt="Shreyansh Uttam"
                className="w-full h-full object-cover object-[center_16%] filter brightness-[0.98] contrast-[1.02] pointer-events-none"
                draggable="false"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c15] via-transparent to-transparent opacity-60 pointer-events-none"></div>

              {/* Live Status Ribbon */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-between text-[10px] font-mono text-white shadow-lg">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold text-emerald-300">Active Prototyper</span>
                </div>
                <span className="text-zinc-400 font-bold">SVIAS · AWS SBG</span>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-1 text-left px-0.5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center justify-between">
                <span>{PERSONAL_INFO.role}</span>
                <span className="text-zinc-500 font-normal">#SU-PASS</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-normal font-display text-white tracking-tight leading-none">
                {PERSONAL_INFO.name}
              </h3>

              <p className="text-[11px] text-zinc-300 font-medium">
                Product • Technology • Leadership
              </p>

              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>VIT Bhopal University</span>
                <span className="text-purple-300 font-semibold">{PERSONAL_INFO.education.degree}</span>
              </div>
            </div>

            {/* Bottom Barcode & Serial */}
            <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-[2px] h-6 opacity-75">
                {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6].map((w, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white h-full"
                    style={{ width: `${(w % 3) + 1}px` }}
                  />
                ))}
              </div>

              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-tighter text-right">
                <div>BATCH 2023–27</div>
                <div className="text-purple-400 font-bold">KANPUR / BHOPAL</div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* BACK OF BADGE: NFC / Credentials / Access Pass           */}
          {/* ======================================================== */}
          <div 
            className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-b from-[#141220] via-[#0e0c18] to-[#08070e] border-2 border-purple-500/40 p-4 shadow-2xl flex flex-col justify-between"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            {/* Holographic foil glare on back */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-3xl opacity-30 mix-blend-color-dodge"
              style={{
                background: `radial-gradient(circle 240px at ${100 - renderPos.glareX}% ${renderPos.glareY}%, rgba(192,132,252,0.4), rgba(56,189,248,0.2), transparent 70%)`
              }}
            />

            {/* Top Lanyard Slot Punch Hole */}
            <div className="w-12 h-2.5 mx-auto -mt-1 rounded-full bg-[#050508] border border-white/20 shadow-inner flex items-center justify-center">
              <div className="w-8 h-1 rounded-full bg-black"></div>
            </div>

            {/* Magnetic Stripe */}
            <div className="w-full h-8 bg-black/90 border-y border-white/10 rounded my-2 flex items-center px-3 justify-between text-[8px] font-mono text-zinc-600">
              <span>MAG-STRIPE // 2026-VITB</span>
              <span>ENC-CHIP // OK</span>
            </div>

            {/* Access Chip Details */}
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>Verified Credentials</span>
                </div>
                <button
                  onClick={toggleFlip}
                  className="no-drag px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 border border-purple-400/30 text-[9px] font-mono text-purple-300 transition-colors"
                >
                  FLIP BACK
                </button>
              </div>

              {/* 3 Quick Highlights */}
              <div className="space-y-1.5 text-[11px] font-mono">
                <div className="p-2 rounded-xl bg-black/40 border border-white/10 flex justify-between">
                  <span className="text-zinc-400">Leadership:</span>
                  <span className="text-purple-300 font-bold">AWS SBG Leader</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/10 flex justify-between">
                  <span className="text-zinc-400">Flagship:</span>
                  <span className="text-emerald-300 font-bold">SVIAS Concept</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/10 flex justify-between">
                  <span className="text-zinc-400">Market Research:</span>
                  <span className="text-white font-bold">100+ Reports</span>
                </div>
              </div>
            </div>

            {/* QR Code & Direct Connect */}
            <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-purple-300 font-bold uppercase">
                  DIRECT CONTACT
                </div>
                <div className="text-[11px] text-zinc-200 font-medium">
                  {PERSONAL_INFO.email}
                </div>
                <div className="text-[9px] font-mono text-zinc-500">
                  Kanpur / Bhopal, India
                </div>
              </div>

              {/* Visual QR Pattern Icon */}
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                <QrCode className="w-10 h-10 text-black" />
              </div>
            </div>

            {/* Back Footer */}
            <div className="text-[9px] font-mono text-zinc-500 flex items-center justify-between border-t border-white/10 pt-2">
              <span>STATUS: ALL ACCESS PASS</span>
              <span className="text-purple-400 font-semibold">AUTHENTICATED</span>
            </div>

          </div>

        </div>

      </div>

      {/* Helper Interaction Prompt */}
      <div className="absolute bottom-2 z-10 flex items-center gap-2">
        <div className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-300 flex items-center gap-1.5 border shadow-lg ${
          isDraggingState 
            ? 'bg-purple-500/25 border-purple-400/50 text-purple-200' 
            : 'bg-black/60 backdrop-blur-md border-white/10 text-zinc-400'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
          <span>{isDraggingState ? 'Swinging Badge...' : 'Drag badge to swing • Flip for NFC pass'}</span>
        </div>

        {hasInteracted && (
          <button
            onClick={handleReset}
            className="p-1.5 rounded-full bg-black/60 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
            title="Reset badge position"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

    </div>
  );
}
