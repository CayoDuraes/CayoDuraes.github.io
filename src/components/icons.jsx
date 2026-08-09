// Ícones inline (SVG). Sem dependências externas; herdam a cor via currentColor.
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Arrow = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...S} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Mail = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...S} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Github = (p) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>
);
export const Linkedin = (p) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21H21v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H13V9Z" /></svg>
);
export const Pin = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...S} {...p}><path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const Globe = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...S} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>
);
export const Remote = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...S} {...p}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
);
export const Grad = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...S} {...p}><path d="M22 9 12 5 2 9l10 4 10-4Z" /><path d="M6 10.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5" /><path d="M22 9v5" /></svg>
);
export const Terminal = (p) => (
  <svg width="26" height="26" viewBox="0 0 24 24" {...S} {...p}><path d="m6 8 4 4-4 4M13 16h5" /></svg>
);
export const Problem = (p) => (
  <svg width="15" height="15" viewBox="0 0 24 24" {...S} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
);
export const Result = (p) => (
  <svg width="15" height="15" viewBox="0 0 24 24" {...S} {...p}><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
);
export const Tech = (p) => (
  <svg width="15" height="15" viewBox="0 0 24 24" {...S} {...p}><path d="m9 8-4 4 4 4M15 8l4 4-4 4" /></svg>
);
export const Send = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...S} {...p}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" /></svg>
);
export const Infra = (p) => (
  <svg width="26" height="26" viewBox="0 0 24 24" {...S} {...p}><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></svg>
);
export const User = (p) => (
  <svg viewBox="0 0 24 24" {...S} strokeWidth="1.2" {...p}><circle cx="12" cy="9" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" /></svg>
);
