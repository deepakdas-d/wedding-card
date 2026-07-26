import './archCard.css';

/**
 * ArchCard — Reusable pointed-arch (mihrab-shape) card frame.
 *
 * Props:
 *   children       – Card content
 *   showFlourish   – Show gold flourish at arch peak (default: true)
 *   className      – Additional CSS class
 *   id             – HTML id attribute
 */
export default function ArchCard({ children, showFlourish = true, className = '', id }) {
  return (
    <div className={`arch-card ${className}`} id={id}>
      {/* SVG arch frame — double gold hairline pointed-arch */}
      <div className="arch-card__frame" aria-hidden="true">
        <svg viewBox="0 0 400 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer arch stroke */}
          <path
            d="M 16 600 L 16 220 Q 16 60 200 16 Q 384 60 384 220 L 384 600"
            stroke="#B9945B"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Inner arch stroke (double-line effect) */}
          <path
            d="M 24 600 L 24 224 Q 24 72 200 28 Q 376 72 376 224 L 376 600"
            stroke="#B9945B"
            strokeWidth="0.8"
            fill="none"
            opacity="0.7"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="arch-card__content">
        {/* Gold flourish / crest at arch peak */}
        {showFlourish && (
          <div className="arch-card__flourish" aria-hidden="true">
            <svg viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ornamental flourish — symmetrical scroll motif */}
              <path
                d="M50 4 C45 4 40 8 38 14 C36 8 30 2 24 2 C18 2 14 8 14 14 C14 20 18 24 22 26 C16 28 10 26 6 22 C4 24 4 28 6 32 C10 38 20 40 28 36 C24 40 22 44 22 46 L28 46 C28 42 30 38 34 36 C38 42 42 44 50 44 C58 44 62 42 66 36 C70 38 72 42 72 46 L78 46 C78 44 76 40 72 36 C80 40 90 38 94 32 C96 28 96 24 94 22 C90 26 84 28 78 26 C82 24 86 20 86 14 C86 8 82 2 76 2 C70 2 64 8 62 14 C60 8 55 4 50 4Z"
                fill="currentColor"
                opacity="0.85"
              />
              {/* Central diamond */}
              <rect x="47" y="20" width="6" height="6" rx="1" transform="rotate(45 50 23)" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
