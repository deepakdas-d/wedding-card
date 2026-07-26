import './floralBackground.css';

export default function FloralBackground() {
  return (
    <div className="floral-background" aria-hidden="true">
      <img
        className="floral-background__img"
        src="/floral-bg.png"
        alt=""
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
