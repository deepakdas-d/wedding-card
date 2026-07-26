import { useMemo } from 'react';
import './sakuraPetals.css';

export default function SakuraPetals() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const count = isMobile ? 14 : 26;

  const petals = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 10,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * -14,
      drift: (Math.random() - 0.5) * 120,
      rotateStart: Math.random() * 360,
    })), [count]);

  return (
    <div className="sakura-container" aria-hidden="true">
      {petals.map(p => (
        <span
          key={p.id}
          className="sakura-petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
            '--rot-start': `${p.rotateStart}deg`,
          }}
        />
      ))}
    </div>
  );
}
