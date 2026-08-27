function Star({ style }: { style: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style} aria-hidden="true">
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
    </svg>
  );
}

/**
 * Renders a fractional rating precisely, by clipping a filled row of stars
 * over an empty one. 4.8 becomes a row filled to exactly 96%.
 */
export default function Stars({
  value,
  size = 16,
}: {
  value: number;
  size?: number;
}) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const dims = { width: size, height: size, flexShrink: 0 };

  return (
    <span
      className="relative inline-flex"
      style={{ gap: size * 0.12 }}
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} style={{ ...dims, color: "var(--color-line)" }} />
      ))}
      <span
        className="absolute inset-0 inline-flex overflow-hidden"
        style={{ width: `${pct}%`, gap: size * 0.12 }}
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} style={{ ...dims, color: "var(--color-accent)" }} />
        ))}
      </span>
    </span>
  );
}
