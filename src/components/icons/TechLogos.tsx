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

export function PythonLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path fill="#3776ab" d="M31.9 2c-7 0-6.6 3-6.6 3v3.2h6.7v.9H22.2s-4.5-.5-4.5 6.5 3.9 6.7 3.9 6.7H25v-3.4s-.2-3.9 3.8-3.9h6.6s3.7.1 3.7-3.6V5.7S39.6 2 31.9 2zm-3.7 2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
      <path fill="#ffd43b" d="M32.1 62c7 0 6.6-3 6.6-3v-3.2H32v-.9h9.8s4.5.5 4.5-6.5-3.9-6.7-3.9-6.7H39v3.4s.2 3.9-3.8 3.9h-6.6s-3.7-.1-3.7 3.6v6.7s-.6 3.7 7.2 3.7zm3.7-2.1a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"/>
    </svg>
  );
}

export function JavaScriptLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" aria-hidden="true">
      <rect width="256" height="256" fill="#f7df1e" rx="24"/>
      <path fill="#000" d="M67 213c5 10 14 18 31 18 19 0 32-10 32-32v-69h-21v68c0 10-4 13-11 13-7 0-10-5-13-11zm68-2c6 12 19 21 39 21 21 0 36-11 36-30 0-18-10-26-29-34l-5-2c-9-4-13-7-13-13 0-5 4-9 10-9 7 0 10 3 13 9l16-10c-7-12-16-16-29-16-18 0-30 12-30 27 0 18 10 26 27 33l5 2c10 5 16 7 16 14 0 6-5 10-13 10-9 0-15-5-19-12z"/>
    </svg>
  );
}

export function HTML5Logo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" aria-hidden="true">
      <path fill="#e44d26" d="M19.04 0l8.2 91.94L63.95 102l36.81-10.07L108.96 0z"/>
      <path fill="#f16529" d="M64 94.21l29.74-8.24 6.36-71.27H64z"/>
      <path fill="#fff" d="M64 38.78H49.13l-1.03-11.5H64v-11.2H35.84l.27 3 2.76 30.94H64zm0 29.07-12.55-3.39-.8-9H39.4l1.58 17.69L64 79.65z"/>
      <path fill="#ebebeb" d="M64 38.78v11.24h13.83l-1.31 14.61L64 68.07v11.58l22.66-6.27.17-1.87 2.6-29.06.27-2.96.81-9.71H64zm0-22.7v11.2h27.13l.23-2.52.51-5.68.27-3z"/>
    </svg>
  );
}

export function CSS3Logo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" aria-hidden="true">
      <path fill="#1572b6" d="M19.67 0h88.66l-8.07 91.78L63.91 102l-36.21-10.21z"/>
      <path fill="#33a9dc" d="M64 94.32l29.32-8.12 6.9-77.32H64z"/>
      <path fill="#fff" d="M64 47.83H49.32L48.31 36.7H64V25.83H36.4l.26 2.94 2.7 30.27H64zm0 28.27-12.51-3.38-.8-8.96H39.6l1.57 17.66L64 87.84z"/>
      <path fill="#ebebeb" d="M64 47.83V58.7h13.62l-1.28 14.34L64 76.43v11.32l22.65-6.28.17-1.87 2.6-29.1.27-2.95H64zm0-21.92v10.79h26.69l.22-2.49.51-5.36.27-2.94H64z"/>
    </svg>
  );
}

export function GraphQLLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" aria-hidden="true">
      <g fill="none" stroke="#e535ab" strokeWidth="8">
        <path d="M128 16l108 62v100l-108 62L20 178V78z"/>
        <path d="M128 16v224M20 78l216 124M20 178l216-124"/>
      </g>
      <g fill="#e535ab">
        <circle cx="128" cy="16" r="14"/>
        <circle cx="236" cy="78" r="14"/>
        <circle cx="236" cy="178" r="14"/>
        <circle cx="128" cy="240" r="14"/>
        <circle cx="20" cy="178" r="14"/>
        <circle cx="20" cy="78" r="14"/>
      </g>
    </svg>
  );
}

export function DockerLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path fill="#2496ed" d="M62 26.7s-2.6-2.4-8 .4c.6-4.6-4.6-7-4.6-7s-2.4 2.7-2 6.6c.2 2 1 2.8 1 2.8H4s-1.4 9 5.6 14.5c4.6 3.6 11 4.7 17 4.7C40.6 48.7 51 42.4 56 33c1.7.1 5.4.1 7-3.5 0 0-.4-1-1-2.8zM33 27h6v6h-6zm-8 0h6v6h-6zm-8 0h6v6h-6zm-8 0h6v6H9zm8-8h6v6h-6zm8 0h6v6h-6zm8 0h6v6h-6zm0-8h6v6h-6z"/>
    </svg>
  );
}

export function ViteLogo({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 410 404" aria-hidden="true">
      <defs>
        <linearGradient id="vg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#41d1ff"/>
          <stop offset="1" stopColor="#bd34fe"/>
        </linearGradient>
        <linearGradient id="vg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffea83"/>
          <stop offset="0.5" stopColor="#ffdd35"/>
          <stop offset="1" stopColor="#ffa800"/>
        </linearGradient>
      </defs>
      <path fill="url(#vg1)" d="M399 60 215 391c-4 7-13 7-17 0L6 60c-4-7 2-15 10-14l190 34c1 0 3 0 4 0l185-34c8-1 14 7 10 14z"/>
      <path fill="url(#vg2)" d="M292 7 154 35c-2 0-4 2-4 5l-9 145c0 3 3 6 6 5l38-9c4-1 8 2 7 6l-12 56c-1 4 4 7 8 4l86-104c2-3 0-7-4-7l-39 8c-3 1-6-3-5-6l25-87c1-3-2-7-5-6z"/>
    </svg>
  );
}
