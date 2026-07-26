import { useState, useEffect, useRef } from 'react';
import './CardSplitOpen.css';

/**
 * CardSplitOpen – Two-phase onboarding animation:
 *   Phase 1: Card halves rotate open fully at the center seam.
 *   Phase 2: Cinematic zoom-through — camera dives into the opening.
 *
 * Props:
 *   imageUrl     – URL to the card image (transparent PNG)
 *   width        – Card width: number (px) or string (CSS value). Optional.
 *   height       – Card height: number (px) or string (CSS value). Optional.
 *   openAngle    – Degrees each half rotates outward (default: 75)
 *   duration     – Card open animation duration in ms (default: 1200)
 *   zoomDuration – Zoom-through duration in ms (default: 800)
 *   delay        – Delay before animation starts in ms (default: 300)
 *   onComplete   – Callback fired once after entire sequence completes
 */
export default function CardSplitOpen({
  imageUrl,
  width,
  height,
  openAngle = 75,
  duration = 1200,
  zoomDuration = 800,
  delay = 300,
  onComplete,
}) {
  // Phase: 'closed' → 'opening' → 'zooming' → done
  const [phase, setPhase] = useState('closed');
  const completedRef = useRef(false);
  const timersRef = useRef([]);

  const addTimer = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  };

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setPhase('zooming');
      if (onComplete && !completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
      return;
    }

    // Phase 1: After delay, start opening
    addTimer(() => {
      setPhase('opening');

      // Phase 2: After card fully opens, start zoom-through
      addTimer(() => {
        setPhase('zooming');

        // Done: After zoom completes, fire onComplete
        addTimer(() => {
          if (onComplete && !completedRef.current) {
            completedRef.current = true;
            onComplete();
          }
        }, zoomDuration);
      }, duration);
    }, delay);

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [delay, duration, zoomDuration, onComplete]);

  // Build card container style
  const cardStyle = {};
  if (width != null) {
    cardStyle.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height != null) {
    cardStyle.height = typeof height === 'number' ? `${height}px` : height;
  }

  const isOpen = phase === 'opening' || phase === 'zooming';
  const isZooming = phase === 'zooming';

  const halfStyle = {
    backgroundImage: `url(${imageUrl})`,
    transitionDuration: `${duration}ms`,
  };

  const wrapperClass = [
    'card-split-open',
    isZooming ? 'card-split-open--zooming' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const leftHalfClass = [
    'card-split-open__half',
    'card-split-open__half--left',
    isOpen ? 'card-split-open__half--open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const rightHalfClass = [
    'card-split-open__half',
    'card-split-open__half--right',
    isOpen ? 'card-split-open__half--open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={wrapperClass}
      role="img"
      aria-label="Wedding invitation card opening"
      style={{ transitionDuration: `${zoomDuration}ms` }}
    >
      <div className="card-split-open__card" style={cardStyle}>
        {/* Dark burgundy interior behind the halves */}
        <div className="card-split-open__interior" />

        {/* Left half */}
        <div
          className={leftHalfClass}
          style={{
            ...halfStyle,
            transform: isOpen ? `rotateY(${openAngle}deg)` : 'rotateY(0deg)',
          }}
        />

        {/* Right half */}
        <div
          className={rightHalfClass}
          style={{
            ...halfStyle,
            transform: isOpen ? `rotateY(-${openAngle}deg)` : 'rotateY(0deg)',
          }}
        />
      </div>
    </div>
  );
}
