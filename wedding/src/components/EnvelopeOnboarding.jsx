import { useState, useEffect, useRef, useCallback } from 'react';
import './envelopeOnboarding.css';

const TOTAL_FRAMES = 30;
const FPS = 24;
const FRAME_INTERVAL = 1000 / FPS; // ~41.67ms per frame

/**
 * Build the URL for a given frame number (1-indexed).
 */
function getFrameUrl(frameNum) {
  const padded = String(frameNum).padStart(3, '0');
  return `/envelope-frames/frame_${padded}.webp`;
}

/**
 * EnvelopeOnboarding — Displays a closed envelope that plays a
 * 30-frame opening animation on click, then fires onComplete.
 *
 * Props:
 *   onComplete – callback when the animation finishes
 */
export default function EnvelopeOnboarding({ onComplete, isExiting = false }) {
  const [isReady, setIsReady] = useState(false);   // all frames preloaded
  const [isPlaying, setIsPlaying] = useState(false); // animation in progress
  const [currentFrame, setCurrentFrame] = useState(1);

  const imagesRef = useRef([]);    // preloaded Image objects
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const frameIndexRef = useRef(0); // 0-indexed during playback
  const completedRef = useRef(false);

  // Preload all frames on mount
  useEffect(() => {
    let cancelled = false;
    const images = [];

    const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve; // continue even on error
        img.src = getFrameUrl(i + 1);
        images[i] = img;
      });
    });

    Promise.all(promises).then(() => {
      if (!cancelled) {
        imagesRef.current = images;
        setIsReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Animation loop using requestAnimationFrame
  const animate = useCallback(
    (timestamp) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastTimeRef.current;

      if (elapsed >= FRAME_INTERVAL) {
        lastTimeRef.current = timestamp - (elapsed % FRAME_INTERVAL);
        frameIndexRef.current += 1;

        const nextFrame = frameIndexRef.current + 1; // 1-indexed

        if (nextFrame > TOTAL_FRAMES) {
          // Animation complete
          if (onComplete && !completedRef.current) {
            completedRef.current = true;
            onComplete();
          }
          return;
        }

        setCurrentFrame(nextFrame);
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [onComplete]
  );

  // Start playback
  const handleClick = useCallback(() => {
    if (isPlaying || !isReady) return;

    // Handle prefers-reduced-motion
    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setCurrentFrame(TOTAL_FRAMES);
      if (onComplete && !completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
      return;
    }

    setIsPlaying(true);
    frameIndexRef.current = 0;
    lastTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(animate);
  }, [isPlaying, isReady, animate, onComplete]);

  // Cleanup rAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const frameSrc = getFrameUrl(currentFrame);

  return (
    <div
      className={`envelope-onboarding${isExiting ? ' envelope-onboarding--exiting' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Tap to open the wedding invitation envelope"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="envelope-onboarding__frame-wrap">
        <img
          className="envelope-onboarding__frame"
          src={frameSrc}
          alt="Wedding invitation envelope"
          draggable={false}
        />
        {/* Shimmer overlay — only visible before click */}
        {!isPlaying && isReady && (
          <div className="envelope-onboarding__shimmer" />
        )}
      </div>

      {/* Tap-to-open prompt — hidden during playback */}
      <div
        className={`envelope-onboarding__prompt${
          isPlaying ? ' envelope-onboarding__prompt--hidden' : ''
        }`}
      >
        <span className="envelope-onboarding__prompt-text">
          {isReady ? 'Tap to Open' : 'Loading…'}
        </span>
        <span className="envelope-onboarding__prompt-line" />
      </div>
    </div>
  );
}
