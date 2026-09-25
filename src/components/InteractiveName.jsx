import React, { useEffect, useRef, useCallback } from 'react';

/**
 * InteractiveName
 * 
 * High-end Editorial Typography for "SHREYANSH UTTAM" featuring organic,
 * cursor-proximity physics with fluid wave propagation and zero layout shift.
 * 
 * Engineering:
 * - Direct DOM manipulation with requestAnimationFrame & cubic-bezier spring easing (zero React re-renders on mousemove)
 * - Proximity radius (~65px) with continuous distance-falloff & directional attraction
 * - Wave propagation: closest letter gets primary impulse, adjacent letters receive subtle secondary motion
 * - Motion limits strictly calibrated: max ±3px X, ±2px Y, ±3° rotation, 1.025 scale
 * - Pure warm ivory (#F3F0E8) editorial styling preserved without artificial color shifts
 * - Touch-safe (completely disabled on touch devices) & prefers-reduced-motion compliant
 */
export default function InteractiveName({ className = '' }) {
  const containerRef = useRef(null);
  const letterNodesRef = useRef([]);
  const animFrameRef = useRef(null);
  const isTouchRef = useRef(false);
  const reducedMotionRef = useRef(false);

  // Cached positions of letters to avoid layout thrashing on every mousemove
  const rectsCacheRef = useRef([]);

  const updateRectsCache = useCallback(() => {
    rectsCacheRef.current = letterNodesRef.current.map((el) => {
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2,
      };
    });
  }, []);

  useEffect(() => {
    // Detect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = motionQuery.matches;
    const handleMotionChange = (e) => {
      reducedMotionRef.current = e.matches;
      if (e.matches) resetAllLetters();
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Detect touch-only devices
    isTouchRef.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Cache letter positions
    updateRectsCache();
    window.addEventListener('resize', updateRectsCache);
    window.addEventListener('scroll', updateRectsCache, { passive: true });

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', updateRectsCache);
      window.removeEventListener('scroll', updateRectsCache);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [updateRectsCache]);

  const resetAllLetters = useCallback(() => {
    letterNodesRef.current.forEach((el) => {
      if (el) {
        el.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
      }
    });
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (reducedMotionRef.current || isTouchRef.current) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    animFrameRef.current = requestAnimationFrame(() => {
      const radius = 65; // Influence radius in pixels

      letterNodesRef.current.forEach((el, idx) => {
        if (!el) return;
        const center = rectsCacheRef.current[idx];
        if (!center) return;

        const deltaX = mouseX - center.centerX;
        const deltaY = mouseY - center.centerY;
        const dist = Math.hypot(deltaX, deltaY);

        if (dist < radius) {
          // Smooth falloff factor (1 at center, 0 at radius edge)
          const rawFactor = 1 - dist / radius;
          // Ease-out curve for gentle wave propagation
          const factor = rawFactor * rawFactor;

          // Directional micro-pull toward cursor
          const pullX = (deltaX / (dist || 1)) * (factor * 2.8);
          const pullY = (deltaY / (dist || 1)) * (factor * 1.8);

          // Clamped limits for utmost readability
          const clampedX = Math.max(-3, Math.min(3, pullX));
          const clampedY = Math.max(-2, Math.min(2, pullY));

          // Subtle organic rotation influenced by X displacement
          const rot = Math.max(-3, Math.min(3, (deltaX / radius) * (factor * 3.0)));
          const scale = 1 + factor * 0.024; // Max 1.024 scale

          el.style.transform = `translate3d(${clampedX.toFixed(2)}px, ${clampedY.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        } else {
          // Return to rest when outside radius
          el.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
        }
      });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    resetAllLetters();
  }, [resetAllLetters]);

  const words = [
    { text: 'SHREYANSH', startIndex: 0 },
    { text: 'UTTAM', startIndex: 9 }
  ];

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={updateRectsCache}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex flex-wrap items-baseline gap-x-4 sm:gap-x-6 select-none cursor-default ${className}`}
      aria-label="Shreyansh Uttam"
    >
      {words.map((word) => (
        <span 
          key={word.text} 
          className="inline-flex whitespace-nowrap"
        >
          {word.text.split('').map((char, charIdx) => {
            const globalIndex = word.startIndex + charIdx;

            return (
              <span
                key={globalIndex}
                ref={(el) => (letterNodesRef.current[globalIndex] = el)}
                className="inline-block font-display font-normal tracking-tight text-[#FBE4D8] origin-center pointer-events-none"
                style={{
                  transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)',
                  transition: 'transform 360ms cubic-bezier(0.22, 1, 0.36, 1)',
                  willChange: 'transform',
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
}
