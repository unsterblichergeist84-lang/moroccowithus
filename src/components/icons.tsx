import type { SVGProps } from "react";

/**
 * Small inline icon set (24x24, stroke = currentColor). No dependency.
 * Pass className to size/colour, e.g. <Icon.MapPin className="h-5 w-5" />.
 */

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function MapPin(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function Calendar(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </svg>
  );
}

function Users(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 20c0-2.4-1-4-2.8-4.6" />
    </svg>
  );
}

function Compass(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

function ShieldCheck(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Clock(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function Route(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H14a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5" />
    </svg>
  );
}

function Sparkles(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4.5 13.6 9 18 10.5 13.6 12 12 16.5 10.4 12 6 10.5 10.4 9 12 4.5Z" />
      <path d="M18.5 15.5 19.2 17.5 21 18.2 19.2 19 18.5 21 17.8 19 16 18.2 17.8 17.5 18.5 15.5Z" />
    </svg>
  );
}

function Check(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

function Minus(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6 12h12" />
    </svg>
  );
}

function Mail(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function Instagram(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Sun(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </svg>
  );
}

function WhatsApp(p: P) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.34-.5.04-.98.22-3.3-.7-2.78-1.1-4.56-3.94-4.7-4.12-.14-.18-1.12-1.5-1.12-2.86 0-1.36.72-2.02.98-2.3.24-.26.52-.32.7-.32.18 0 .36 0 .52.01.16.01.4-.06.62.48.24.56.82 1.94.9 2.08.08.14.12.3.02.48-.1.18-.16.3-.3.46-.14.16-.3.36-.44.48-.14.14-.3.29-.13.57.16.28.72 1.18 1.54 1.92 1.06.94 1.94 1.24 2.22 1.38.28.14.44.12.6-.07.16-.18.7-.82.88-1.1.18-.28.36-.23.62-.14.26.1 1.64.78 1.92.92.28.14.46.21.52.32.06.11.06.65-.18 1.33Z" />
    </svg>
  );
}

export const Icon = {
  MapPin,
  Calendar,
  Users,
  Compass,
  ShieldCheck,
  Clock,
  Route,
  Sparkles,
  Check,
  Minus,
  Mail,
  Instagram,
  Sun,
  WhatsApp,
};
