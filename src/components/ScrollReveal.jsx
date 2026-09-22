import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom Hook: useInView
 * Detects when an element scrolls into the viewport using IntersectionObserver.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // If reduced motion is preferred, immediately mark as visible
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once !== false) {
          observer.unobserve(element);
        }
      } else if (options.once === false) {
        setIsInView(false);
      }
    }, {
      threshold: options.threshold ?? 0.12,
      rootMargin: options.rootMargin ?? '0px 0px -40px 0px'
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isInView];
}

/**
 * Reusable Reveal Container Component
 */
export default function Reveal({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'mask-slide' | 'fade'
  delay = 0, // delay in ms
  duration = 700, // duration in ms
  className = '',
  style = {},
  threshold = 0.12,
  as: Component = 'div',
  ...rest
}) {
  const [ref, inView] = useInView({ threshold, once: true });

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), clip-path ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;

    const defaultTransitionStyle = {
      transition: baseTransition,
      transitionDelay: `${delay}ms`,
      willChange: 'opacity, transform',
      ...style
    };

    if (inView) {
      return {
        ...defaultTransitionStyle,
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        clipPath: 'inset(0% 0% 0% 0%)'
      };
    }

    switch (animation) {
      case 'fade-up':
        return {
          ...defaultTransitionStyle,
          opacity: 0,
          transform: 'translate3d(0, 28px, 0)'
        };
      case 'fade-down':
        return {
          ...defaultTransitionStyle,
          opacity: 0,
          transform: 'translate3d(0, -28px, 0)'
        };
      case 'fade-left':
        return {
          ...defaultTransitionStyle,
          opacity: 0,
          transform: 'translate3d(-32px, 0, 0)'
        };
      case 'fade-right':
        return {
          ...defaultTransitionStyle,
          opacity: 0,
          transform: 'translate3d(32px, 0, 0)'
        };
      case 'scale-in':
        return {
          ...defaultTransitionStyle,
          opacity: 0,
          transform: 'translate3d(0, 16px, 0) scale(0.96)'
        };
      case 'mask-slide':
        return {
          ...defaultTransitionStyle,
          opacity: 0,
          transform: 'translate3d(0, 20px, 0)',
          clipPath: 'inset(100% 0% 0% 0%)'
        };
      case 'fade':
      default:
        return {
          ...defaultTransitionStyle,
          opacity: 0
        };
    }
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={getAnimationStyles()}
      {...rest}
    >
      {children}
    </Component>
  );
}
