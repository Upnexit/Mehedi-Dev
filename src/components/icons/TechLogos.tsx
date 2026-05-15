type IconProps = { size?: number };

/* Each logo renders a recognizable simplified mark inside its viewBox.
   Wrapped in a chip by the parent, so we just draw the mark + brand color. */

export function VSCodeLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="#0098FF"
        d="M23.15 2.587 8.5 16.5 2.85 11.91a1.5 1.5 0 0 0-2.07.13l-.55.6a1.5 1.5 0 0 0 0 2.04L4.94 19l-4.71 4.32a1.5 1.5 0 0 0 0 2.04l.55.6a1.5 1.5 0 0 0 2.07.13L8.5 21.5l14.65 13.913a2 2 0 0 0 2.32.21l5.4-2.6A2 2 0 0 0 32 31.21V6.79a2 2 0 0 0-1.13-1.81l-5.4-2.6a2 2 0 0 0-2.32.207ZM24 11.2 14.6 19l9.4 7.8V11.2Z"
      />
    </svg>
  );
}

export function FigmaLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" aria-hidden="true">
      <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  );
}

export function ReactLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" aria-hidden="true">
      <circle r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" aria-hidden="true">
      <rect width="256" height="256" rx="40" fill="#3178c6" />
      <path
        fill="#fff"
        d="M150 200v-22h54v-19H79v19h54v22c-26 2-49 9-49 21 0 13 25 21 64 21s64-8 64-21c0-12-23-19-49-21z"
      />
      <path fill="#fff" d="M148 138h-26v-31h-22v-19h70v19h-22z" />
    </svg>
  );
}

export function NodeLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#539e43" aria-hidden="true">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.7.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.48c-.13 0-.23.1-.23.22v8.46c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.12-.21V7.71c0-.09.05-.17.12-.21l7.44-4.29c.07-.04.16-.04.23 0l7.44 4.29c.07.05.12.12.12.21v8.58c0 .08-.05.16-.12.21l-7.44 4.29c-.07.04-.16.04-.23 0l-1.91-1.13c-.06-.04-.13-.04-.18-.01-.53.3-.63.34-1.12.51-.13.04-.31.11.05.32l2.5 1.48c.24.14.5.21.78.21s.55-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.55-.3-1.07-.78-1.35l-7.44-4.31c-.23-.13-.5-.2-.78-.2zm2 6.43c-2.12 0-3.39.89-3.39 2.39 0 1.62 1.25 2.07 3.29 2.27 2.43.24 2.62.6 2.62 1.07 0 .83-.66 1.18-2.23 1.18-1.97 0-2.4-.49-2.55-1.47-.02-.1-.1-.18-.21-.18H10.4a.23.23 0 0 0-.22.23c0 1.25.68 2.74 3.91 2.74 2.36 0 3.71-.93 3.71-2.55 0-1.61-1.08-2.04-3.37-2.34-2.31-.31-2.54-.46-2.54-1 0-.45.2-1.04 1.91-1.04 1.52 0 2.09.33 2.32 1.36.02.1.11.17.21.17h1.13c.06 0 .12-.02.16-.07.04-.04.06-.1.06-.16-.18-2.07-1.56-3.04-3.88-3.04z" />
    </svg>
  );
}

export function TailwindLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 154" aria-hidden="true">
      <path
        fill="#38bdf8"
        d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
      />
    </svg>
  );
}

export function NextLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" aria-hidden="true">
      <circle cx="90" cy="90" r="90" fill="#000" />
      <path
        d="M149.5 157.5 69.1 54H54v72h12.1V69.4l73.9 95.5a90.3 90.3 0 0 0 9.5-7.4z"
        fill="#fff"
      />
      <rect x="115" y="54" width="12" height="72" fill="#fff" />
    </svg>
  );
}

export function GitHubLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}
