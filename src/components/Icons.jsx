const paths = {
  home: (
    <>
      <path d="M3.5 10.7 12 3.5l8.5 7.2" />
      <path d="M5.5 9.5v10h13v-10" />
      <path d="M9.5 19.5v-5h5v5" />
    </>
  ),
  learn: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z" />
      <path d="M4 5.5v13.9" />
      <path d="M8 7h8M8 10.5h6" />
    </>
  ),
  practice: (
    <>
      <path d="m4 20 4.3-1 10.9-10.9a2.1 2.1 0 0 0-3-3L5.3 16Z" />
      <path d="m14.8 6.6 3 3" />
      <path d="M4 20h16" />
    </>
  ),
  progress: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      <path d="m4 6 6-3 6 9 6-5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 5 5" />
    </>
  ),
  flame: (
    <>
      <path d="M12.2 2.8c.5 4.2-2.5 5.2-2.5 8.1 0 1.3.8 2.3 2 2.3 1.5 0 2.4-1.3 2.1-3.1 2.5 2 4 4.4 4 7a5.9 5.9 0 0 1-11.8.2c0-4.8 4.4-7.1 6.2-14.5Z" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M20 12H4" />
      <path d="m10 6-6 6 6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7M8 7h9v9" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 7v5.4l3.5 2.1" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2.8c.6 5.5 3.7 8.6 9.2 9.2-5.5.6-8.6 3.7-9.2 9.2-.6-5.5-3.7-8.6-9.2-9.2 5.5-.6 8.6-3.7 9.2-9.2Z" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0Z" />
      <path d="M7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5A3.5 3.5 0 0 1 16.5 11" />
      <path d="M12 14v4M9 21h6M9.5 18h5" />
    </>
  ),
  play: <path d="M8 5.5v13l10-6.5Z" />,
  lightbulb: (
    <>
      <path d="M9 15c-1.7-1.2-2.8-3.1-2.8-5.2a5.8 5.8 0 0 1 11.6 0c0 2.1-1.1 4-2.8 5.2-.6.5-.9 1.1-.9 1.8H9.9c0-.7-.3-1.3-.9-1.8Z" />
      <path d="M9.8 20h4.4M10.4 22h3.2" />
    </>
  ),
  lock: (
    <>
      <rect x="4.8" y="10" width="14.4" height="10.5" rx="2" />
      <path d="M8 10V7.8a4 4 0 0 1 8 0V10M12 14v2.8" />
    </>
  ),
  reset: (
    <>
      <path d="M4 10a8 8 0 1 1 .5 5" />
      <path d="M4 4v6h6" />
    </>
  ),
  number: (
    <>
      <circle cx="6.5" cy="6.5" r="2.2" />
      <circle cx="17.5" cy="6.5" r="2.2" />
      <circle cx="6.5" cy="17.5" r="2.2" />
      <circle cx="17.5" cy="17.5" r="2.2" />
    </>
  ),
  shape: (
    <>
      <path d="m8.5 3 4.7 8H3.8Z" />
      <rect x="12" y="13" width="8" height="8" rx="1" />
      <circle cx="7" cy="17" r="3.5" />
    </>
  ),
  ruler: (
    <>
      <rect x="2.8" y="8.2" width="18.4" height="7.6" rx="1.4" transform="rotate(-35 12 12)" />
      <path d="m7.4 13.7 1.5 2.1M10.4 11.6l1.1 1.6M13.3 9.5l1.5 2.1M16.2 7.4l1.1 1.6" />
    </>
  ),
  data: (
    <>
      <path d="M4 20V4M4 20h16" />
      <rect x="7" y="13" width="3" height="4" />
      <rect x="12" y="9" width="3" height="8" />
      <rect x="17" y="6" width="3" height="11" />
    </>
  ),
  algebra: (
    <>
      <path d="m6 7 10 10M16 7 6 17" />
      <path d="M3.5 4.5h4M18.5 4.5h2" />
      <path d="M19.5 19.5h2" />
    </>
  ),
  ratio: (
    <>
      <circle cx="7" cy="7" r="2.2" />
      <circle cx="17" cy="17" r="2.2" />
      <path d="m18 5-5 6M6 13l-1 1" />
    </>
  ),
  function: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M6.5 17c3.2 0 4.4-3.3 5.4-7.1C12.9 6.2 14 4.5 16.5 5" />
      <path d="M17.5 16.5h.1" />
    </>
  ),
  calculus: (
    <>
      <path d="M16.5 4.5c-2.2 0-2.8 1.5-3.4 4.8l-1.8 8.2c-.5 2.6-1.4 4-3.3 4" />
      <path d="M7 9h8M9.5 16h7" />
    </>
  ),
  advanced: (
    <>
      <path d="M4 18 18.5 5.5" />
      <path d="M12.5 5.5h6v6" />
      <path d="M5.5 5.5 4 7l1.5 1.5L7 7Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  bookOpen: (
    <>
      <path d="M12 6.5C10.4 4.9 8.2 4 5.5 4H3v14h3c2.3 0 4.3.8 6 2.4 1.7-1.6 3.7-2.4 6-2.4h3V4h-2.5c-2.7 0-4.9.9-6.5 2.5Z" />
      <path d="M12 6.5V21" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H13a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6" />
    </>
  ),
};

export function Icon({ name, size = 20, className = "", strokeWidth = 1.7 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.spark}
    </svg>
  );
}

export function BrandMark({ size = 40 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
    >
      <rect width="40" height="40" rx="11" fill="var(--forest)" />
      <path
        d="M10.5 27.5c0-7.7 5.8-13.5 13.5-13.5"
        stroke="var(--paper)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 27.5c0-3.9 2.9-6.8 6.8-6.8"
        stroke="var(--coral)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="29" cy="11" r="2.2" fill="var(--gold)" />
    </svg>
  );
}

export function Logo({ compact = false }) {
  return (
    <span className="logo">
      <BrandMark size={compact ? 34 : 38} />
      <span className="logo-type">
        <span className="logo-word">summa<span className="logo-dot">.</span></span>
        {!compact && <span className="logo-sub">從數數到微積分</span>}
      </span>
    </span>
  );
}

export function ProgressRing({ value, size = 88, stroke = 7, children }) {
  const radius = (size - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--ring-track)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--coral)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (clamped / 100) * circumference}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="ring-progress"
        />
      </svg>
      <span className="ring-label">{children}</span>
    </div>
  );
}
