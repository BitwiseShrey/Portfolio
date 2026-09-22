import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Position refs for 60/120fps RAF lerp loop
  const posRef = useRef({
    targetX: -100,
    targetY: -100,
    currentX: -100,
    currentY: -100,
    isVisible: false,
    hoverType: null, // 'interactive' | 'view' | 'open' | 'explore' | null
    isClicking: false
  });

  const [cursorState, setCursorState] = useState({
    isVisible: false,
    hoverType: null,
    isClicking: false
  });

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    document.documentElement.classList.add('custom-cursor-enabled');

    let animId;
    const pos = posRef.current;

    // Smooth Lerp Animation Loop
    const render = () => {
      const lerp = 0.16;
      pos.currentX += (pos.targetX - pos.currentX) * lerp;
      pos.currentY += (pos.targetY - pos.currentY) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.targetX}px, ${pos.targetY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.currentX}px, ${pos.currentY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleMouseMove = (e) => {
      pos.targetX = e.clientX;
      pos.targetY = e.clientY;
      if (!pos.isVisible) {
        pos.isVisible = true;
        setCursorState((s) => ({ ...s, isVisible: true }));
      }

      // Check if mouse is hovering over spotlight cards to supply dynamic coordinates
      const spotlightCard = e.target.closest('[data-spotlight], .spotlight-card');
      if (spotlightCard) {
        const rect = spotlightCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlightCard.style.setProperty('--mouse-x', `${x}px`);
        spotlightCard.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const handleMouseOver = (e) => {
      // Check for contextual triggers
      const target = e.target;
      const viewEl = target.closest('[data-cursor="view"]');
      const openEl = target.closest('[data-cursor="open"]');
      const exploreEl = target.closest('[data-cursor="explore"]');
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, .cursor-interactive');

      let nextType = null;
      if (viewEl) nextType = 'view';
      else if (openEl) nextType = 'open';
      else if (exploreEl) nextType = 'explore';
      else if (interactiveEl) nextType = 'interactive';

      if (pos.hoverType !== nextType) {
        pos.hoverType = nextType;
        setCursorState((s) => ({ ...s, hoverType: nextType }));
      }
    };

    const handleMouseDown = () => {
      pos.isClicking = true;
      setCursorState((s) => ({ ...s, isClicking: true }));
    };

    const handleMouseUp = () => {
      pos.isClicking = false;
      setCursorState((s) => ({ ...s, isClicking: false }));
    };

    const handleMouseLeave = () => {
      pos.isVisible = false;
      setCursorState((s) => ({ ...s, isVisible: false }));
    };

    const handleMouseEnter = () => {
      pos.isVisible = true;
      setCursorState((s) => ({ ...s, isVisible: true }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!cursorState.isVisible) return null;

  const isInteractive = Boolean(cursorState.hoverType);
  const labelMap = {
    view: 'VIEW ↗',
    open: 'OPEN ↗',
    explore: 'EXPLORE →'
  };
  const label = labelMap[cursorState.hoverType] || null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full bg-purple-300 transition-all duration-150 ease-out pointer-events-none shadow-[0_0_10px_rgba(168,85,247,0.8)] ${
          isInteractive ? 'w-2 h-2 opacity-80' : 'w-2 h-2 opacity-100'
        } ${cursorState.isClicking ? 'scale-75' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      />

      {/* Fluid Trailing Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none flex items-center justify-center transition-all duration-200 ease-out ${
          label
            ? 'w-16 h-16 bg-purple-950/70 border-purple-400/80 backdrop-blur-sm shadow-[0_0_25px_rgba(168,85,247,0.35)]'
            : isInteractive
            ? 'w-11 h-11 bg-purple-500/15 border-purple-400/60 shadow-[0_0_16px_rgba(168,85,247,0.25)]'
            : 'w-7 h-7 bg-transparent border-purple-500/35'
        } ${cursorState.isClicking ? 'scale-90' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      >
        {label && (
          <span className="text-[9px] font-mono font-bold tracking-wider text-purple-200 uppercase select-none animate-fade-in">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
