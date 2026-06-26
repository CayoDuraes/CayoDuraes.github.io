import type { Config } from 'tailwindcss';

// Paleta phosphor green (CRT vibe). Trocar aqui muda tudo.
// As cores que você mais vai mexer:
//   accent.DEFAULT  → o verde principal
//   bg              → fundo da página
//   fg.bright       → texto de destaque (nome, títulos)
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080b08',
        surface: '#0c130c',
        line: {
          DEFAULT: '#1a2a1a',
          strong: '#2a4a2a',
        },
        fg: {
          DEFAULT: '#a8d4a8',
          bright: '#d8eed8',
          dim: '#6a9a6a',
          muted: '#4a7a4a',
          subtle: '#2a4a2a',
        },
        accent: {
          DEFAULT: '#3aff7e',
          dim: '#1aa84e',
        },
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        wider: '0.08em',
        widest: '0.16em',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
