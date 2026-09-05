import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const TerminalIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

export const CodeIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export const CpuIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

export const LayersIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export const ServerIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

export const DatabaseIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const SendIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const CopyIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);


// ============================================================
// Technology / Tool Icons
// These are added separately so the existing icons above remain
// unchanged and backward-compatible.
// ============================================================

type TechnologyIconData = {
  path: string;
  title: string;
};

const TechnologyIcon: React.FC<
  IconProps & { icon: TechnologyIconData }
> = ({ icon, size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label={icon.title}
    role="img"
    className={className}
    {...props}
  >
    <path d={icon.path} />
  </svg>
);

// React
export const ReactIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'React',
      path: 'M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-7.5c1.3 0 2.5 1.9 3.3 4.8 2.9.3 5.2 1.1 6.4 2.5 1.1 1.2 1.1 2.7 0 3.9-1.2 1.4-3.5 2.2-6.4 2.5-.8 2.9-2 4.8-3.3 4.8s-2.5-1.9-3.3-4.8c-2.9-.3-5.2-1.1-6.4-2.5-1.1-1.2-1.1-2.7 0-3.9 1.2-1.4 3.5-2.2 6.4-2.5C9.5 3.9 10.7 2 12 2Zm-2.2 5.1c.7-.1 1.4-.1 2.2-.1s1.5 0 2.2.1C13.7 4.9 12.8 3.5 12 3.5s-1.7 1.4-2.2 3.6Zm4.9 1.6c.2.8.3 1.7.4 2.8.1 1.1 0 2.1-.1 3 .9-.1 1.8-.3 2.6-.6 1.9-.6 3.2-1.5 3.7-2.2.4-.5.4-.9 0-1.4-.5-.7-1.8-1.6-3.7-2.2-.9-.3-1.8-.5-2.9-.6Zm-5.4 0c-1 .1-2 .3-2.8.6-1.9.6-3.2 1.5-3.7 2.2-.4.5-.4.9 0 1.4.5.7 1.8 1.6 3.7 2.2.8.3 1.7.5 2.6.6-.1-.9-.1-1.9-.1-3s.1-2 .3-2.8Zm.2 8.1c.7 2.2 1.5 3.6 2.3 3.6s1.6-1.4 2.2-3.6c-.7.1-1.5.1-2.2.1s-1.6 0-2.3-.1Z'
    }}
    {...props}
  />
);

// Next.js
export const NextJsIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'Next.js',
      path: 'M11.5 2h1C18.9 2 23 6.1 23 12s-4.1 10-10.5 10S2 18 2 12 6.1 2 11.5 2Zm.5 2.1A7.9 7.9 0 1 0 12 19.9 7.9 7.9 0 0 0 12 4.1Zm-3.2 4h2.1l4.2 5.7V8.1h1.6v8h-2l-4.3-5.8v5.8H8.8v-8Z'
    }}
    {...props}
  />
);

// TypeScript
export const TypeScriptIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'TypeScript',
      path: 'M3 3h18v18H3V3Zm3.2 7.5h3v7.1h1.9v-7.1h3V8.8H6.2v1.7Zm9.1 7.1c2 0 3.2-.9 3.2-2.5 0-1.4-.8-2.1-2.5-2.7l-.6-.2c-.8-.3-1.1-.5-1.1-.9 0-.3.3-.6.9-.6.7 0 1.1.3 1.6.8l1.3-1c-.7-.9-1.6-1.3-2.9-1.3-1.7 0-2.8.9-2.8 2.3 0 1.3.8 2.1 2.5 2.6l.6.2c.8.3 1.1.5 1.1.9 0 .4-.4.7-1.1.7-.8 0-1.4-.3-1.9-.9l-1.3 1c.7 1 1.8 1.6 3 1.6Z'
    }}
    {...props}
  />
);

// JavaScript
export const JavaScriptIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'JavaScript',
      path: 'M3 3h18v18H3V3Zm9.7 13.9c.5.9 1.2 1.4 2.1 1.4.8 0 1.3-.4 1.3-.9 0-.6-.4-.8-1.3-1.2l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1.1-2.4 2.7-2.4 1.2 0 2.1.4 2.8 1.5l-1.5 1c-.3-.6-.7-.8-1.3-.8-.6 0-.9.3-.9.7 0 .5.3.7 1.1 1.1l.5.2c1.7.7 2.6 1.4 2.6 2.9 0 1.7-1.3 2.7-3.2 2.7-1.8 0-3-.9-3.6-2l1.5-1.1Zm-5.1.1c.3.6.8 1.1 1.4 1.1.6 0 .9-.3.9-1.1v-5.8h1.9v5.8c0 1.9-1 2.9-2.7 2.9-1.5 0-2.5-.8-3-1.8l1.5-1.1Z'
    }}
    {...props}
  />
);

// Tailwind CSS
export const TailwindIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'Tailwind CSS',
      path: 'M12 5.2c-2.7 0-4.4 1.3-5.2 3.9 1-1.3 2.1-1.8 3.4-1.5.7.2 1.2.7 1.8 1.2.9.9 2 1.9 4.1 1.9 2.7 0 4.4-1.3 5.2-3.9-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.2-.7-1.8-1.2-.9-.9-2-1.9-4.1-1.9ZM6.8 12.4c-2.7 0-4.4 1.3-5.2 3.9 1-1.3 2.1-1.8 3.4-1.5.7.2 1.2.7 1.8 1.2.9.9 2 1.9 4.1 1.9 2.7 0 4.4-1.3 5.2-3.9-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.2-.7-1.8-1.2-.9-.9-2-1.9-4.1-1.9Z'
    }}
    {...props}
  />
);

// HTML5
export const HtmlIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'HTML5',
      path: 'M3 2h18l-1.6 18.2L12 22l-7.4-1.8L3 2Zm3.5 4 .2 2.1h10.6l-.3 3.2H7l.3 2.1h9.4l-.3 3.1-4.4 1.1-4.4-1.1-.2-2.1H5.3l.3 4 6.4 1.6 6.4-1.6L20 6H6.5Z'
    }}
    {...props}
  />
);

// CSS3
export const CssIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'CSS3',
      path: 'M3 2h18l-1.6 18.2L12 22l-7.4-1.8L3 2Zm3.4 4 .2 2h10.8l-.2 2H6.8l.2 2h10l-.2 2.7-4.8 1.3-4.8-1.3-.2-1.8H5.1l.3 3.4 6.6 1.7 6.6-1.7L20 6H6.4Z'
    }}
    {...props}
  />
);

// Node.js
export const NodeJsIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'Node.js',
      path: 'M12 2.2 21 7.4v9.2L12 21.8 3 16.6V7.4L12 2.2Zm0 2.1L5 8.4v7.2l7 4.1 7-4.1V8.4l-7-4.1Zm-1 3.5h2v8.1c0 1.6-.8 2.5-2.3 2.5-1.2 0-2.1-.5-2.6-1.6l1.5-.9c.3.6.6.8 1.1.8.3 0 .3-.2.3-.8V7.8Zm4.2 0h2v7.8h-2V7.8Z'
    }}
    {...props}
  />
);

// Express.js
export const ExpressIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'Express.js',
      path: 'M2 6.5h20v1.6H2V6.5Zm0 4.7h16.5v1.6H2v-1.6Zm0 4.7h13v1.6H2v-1.6Z'
    }}
    {...props}
  />
);

// Python
export const PythonIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'Python',
      path: 'M12 2c-5 0-4.7 2.2-4.7 2.2v2.3h4.8v.7H5.4C2.5 7.2 2 10.1 2 12c0 1.9.5 4.8 3.4 4.8h2v-2.7c0-2.2 1.9-4.1 4.1-4.1h4.1c2.1 0 3.8-1.7 3.8-3.8V5c0-2.7-2.4-3-7.4-3Zm-2.6 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9Zm2.6 18.6c5 0 4.7-2.2 4.7-2.2v-2.3h-4.8v-.7h6.7c2.9 0 3.4-2.9 3.4-4.8 0-1.9-.5-4.8-3.4-4.8h-2v2.7c0 2.2-1.9 4.1-4.1 4.1H8.4c-2.1 0-3.8 1.7-3.8 3.8V19c0 2.7 2.4 3 7.4 3Zm2.6-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Z'
    }}
    {...props}
  />
);

// Go
export const GoIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'Go',
      path: 'M2 11.2h12.5l-1.2 1.7H2.5L2 11.2Zm2.2-3h8.9l-1.2 1.7H3.1l1.1-1.7Zm-.7 6h7.8l-1.2 1.7H4.6l-1.1-1.7ZM16 7.5c2.8 0 5.1 1.1 6 3.1-.9-.4-1.8-.6-2.8-.6-2.6 0-4.7 1.5-5.5 3.8-.2.5-.3 1.1-.3 1.7 0 .9.2 1.7.6 2.4-1.2-.8-2-2.1-2-3.6 0-3.8 1.7-6.8 4-6.8Zm1.5 2.3c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2Z'
    }}
    {...props}
  />
);

// PostgreSQL
export const PostgreSqlIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'PostgreSQL',
      path: 'M12 2c-3.5 0-6 2.1-6 5.4 0 1.1.3 2.1.8 3-.5 1.2-.8 2.6-.8 4.1 0 3.3 2 5.5 5 5.5 1.1 0 2.1-.3 3-.9.8.5 1.7.7 2.6.7 2.2 0 3.4-1.3 3.4-3.1 0-.8-.3-1.5-.8-2.1.9-1.4 1.4-3.1 1.4-5C20.6 4.7 17.1 2 12 2Zm0 2c3.8 0 6.6 1.9 6.6 5.6 0 2.3-.8 4.1-2 5.3l-.5.5c.5.4.8.8.8 1.4 0 .7-.5 1.2-1.4 1.2-.8 0-1.6-.3-2.3-.8l-.8-.6-.8.6c-.7.5-1.6.8-2.5.8-1.9 0-3-1.4-3-3.5 0-1.3.3-2.5.8-3.5l.3-.6-.3-.6c-.4-.8-.6-1.7-.6-2.7C6.3 5.6 8.2 4 12 4Z'
    }}
    {...props}
  />
);

// Prisma
export const PrismaIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'Prisma',
      path: 'm15.3 3.2 6.2 14.4-3.1 3.2-9.9 1.7-5-10.4L11.4 2l3.9 1.2Zm-3.1 2.2-5.8 7.2 3.9 7.9 7.4-1.3-5.5-13.8Z'
    }}
    {...props}
  />
);

// Drizzle
export const DrizzleIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'Drizzle',
      path: 'M4 4h16v3H4V4Zm-2 5h20v3H2V9Zm2 5h16v3H4v-3Zm3 5h10v2H7v-2Z'
    }}
    {...props}
  />
);

// GraphQL
export const GraphQLIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'GraphQL',
      path: 'M12 2.5 20.2 7v10L12 21.5 3.8 17V7L12 2.5Zm0 2.2L5.7 8.2v7.6l6.3 3.5 6.3-3.5V8.2L12 4.7Zm0 3.2 4.5 2.6v5L12 18l-4.5-2.5v-5L12 7.9Zm0 2.1-2.5 1.4v2.2l2.5 1.4 2.5-1.4v-2.2L12 10Z'
    }}
    {...props}
  />
);

// Django
export const DjangoIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'Django',
      path: 'M6 4h4v10.8c0 2.1.8 3.2 2.5 3.2.7 0 1.3-.1 1.8-.3V4h4v16.3c-1.6.5-3.3.7-5.1.7-4.4 0-7.2-2.2-7.2-6.6V4Zm-2 0h2v3H4V4Z'
    }}
    {...props}
  />
);

// PyTorch
export const PyTorchIcon: React.FC<IconProps> = (props) => (
  <TechnologyIcon
    icon={{
      title: 'PyTorch',
      path: 'M12 2a10 10 0 1 0 7.1 17.1l-2.1-2.1A7 7 0 1 1 9 5v3l3-3-3-3v3A10 10 0 0 0 12 2Zm3.8 4.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z'
    }}
    {...props}
  />
);

// Docker
export const DockerIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'Docker',
      path: 'M2 11h3V8h3v3h3V8h3v3h3.2c.2-1.1.9-2 1.9-2.4.7-.3 1.4-.2 2 .1-.2.7-.6 1.4-1.2 1.8.9.1 1.7.5 2.2 1.2-.8 1.1-2.1 1.7-3.5 1.7H5.8c-.5 3-2.3 5.1-5.3 5.1-.4 0-.7 0-1-.1.8-1.5 1.6-2.8 2.5-4.1V11Z'
    }}
    {...props}
  />
);

// Linux
export const LinuxIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'Linux',
      path: 'M12 2c-3 0-4.5 2.8-4.5 5.7 0 1.8-.8 3.1-2.1 4.5-1.5 1.6-2.4 3.3-1.7 4.8.5 1.1 1.7 1.5 3 1.2-.3 1.1-.1 2 .7 2.5.8.5 1.9.1 2.7-.7.6.5 1.2.8 1.9.8s1.4-.3 2-.8c.8.8 1.9 1.2 2.7.7.8-.5 1-1.4.7-2.5 1.3.3 2.5-.1 3-1.2.7-1.5-.2-3.2-1.7-4.8-1.3-1.4-2.1-2.7-2.1-4.5C16.5 4.8 15 2 12 2Zm-2.3 8.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Zm4.6 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Z'
    }}
    {...props}
  />
);

// Vercel
export const VercelIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'Vercel',
      path: 'M12 3 22 21H2L12 3Z'
    }}
    {...props}
  />
);

// Redis
export const RedisIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'Redis',
      path: 'm12 3 9 4.1v9.8L12 21l-9-4.1V7.1L12 3Zm0 2.2L5.2 8.3 12 11.4l6.8-3.1L12 5.2Zm-7 5v5.4l6 2.7v-5.2l-6-2.9Zm8 2.9v5.2l6-2.7v-5.4l-6 2.9Z'
    }}
    {...props}
  />
);

// MySQL
export const MySqlIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'MySQL',
      path: 'M3 7c0-2.2 4-4 9-4s9 1.8 9 4v10c0 2.2-4 4-9 4s-9-1.8-9-4V7Zm2 0c0 .8 2.7 2 7 2s7-1.2 7-2-2.7-2-7-2-7 1.2-7 2Zm0 5c1.5 1 4.2 1.5 7 1.5s5.5-.5 7-1.5V9.8c-1.6.9-4.2 1.4-7 1.4s-5.4-.5-7-1.4V12Zm0 5c1.5 1 4.2 1.5 7 1.5s5.5-.5 7-1.5v-2.2c-1.6.9-4.2 1.4-7 1.4s-5.4-.5-7-1.4V17Z'
    }}
    {...props}
  />
);

// SQLite
export const SqliteIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'SQLite',
      path: 'M4 4h16v16H4V4Zm3 3v10h10V7H7Zm2 2h6v2H9V9Zm0 3h6v2H9v-2Z'
    }}
    {...props}
  />
);

// Postman
export const PostmanIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'Postman',
      path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 5.5-2.3 2.3 1.9 1.9-2.1 2.1-1.9-1.9-4.8 4.8-.8-.8 4.8-4.8-1.9-1.9 2.1-2.1 1.9 1.9 2.3-2.3 1.8.8-.2 1.8-1.8-.8.8-.8 1.8.8Z'
    }}
    {...props}
  />
);

// npm
export const NpmIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'npm',
      path: 'M2 5h20v14H2V5Zm3 3v8h3v-5h2v5h2V8H5Zm11 0v8h3V8h-3Z'
    }}
    {...props}
  />
);

// pnpm
export const PnpmIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'pnpm',
      path: 'M3 3h5v5H3V3Zm6.5 0h5v5h-5V3ZM16 3h5v5h-5V3ZM3 9.5h5v5H3v-5Zm6.5 0h5v5h-5v-5Zm6.5 0h5v5h-5v-5ZM3 16h5v5H3v-5Zm6.5 0h5v5h-5v-5Zm6.5 0h5v5h-5v-5Z'
    }}
    {...props}
  />
);

// Git
export const GitIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'Git',
      path: 'm21.6 10.6-8.2-8.2a2 2 0 0 0-2.8 0l-1.7 1.7 2.1 2.1a2.5 2.5 0 0 1 3.1 3.1l2 2a2.5 2.5 0 1 1-1.5 1.5l-2-2v5.3a2.5 2.5 0 1 1-2 0v-5.4a2.5 2.5 0 0 1-1.5-3.1L7 5.5 2.4 10a2 2 0 0 0 0 2.8l8.2 8.2a2 2 0 0 0 2.8 0l8.2-8.2a2 2 0 0 0 0-2.8Z'
    }}
    {...props}
  />
);

// GitHub technology logo
export const GithubTechIcon = (props: IconProps) => (
  <TechnologyIcon
    icon={{
      title: 'GitHub',
      path: 'M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 22 12C22 6.5 17.5 2 12 2Z'
    }}
    {...props}
  />
);
