import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import { profile } from '@/data/profile';
import './globals.css';

// next/font baixa a fonte no BUILD e serve junto com o site — zero request
// pro Google Fonts em produção. Mais rápido e bom pra privacidade.
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

// Metadata API do Next 13+: o `<head>` do site é gerado a partir desse objeto.
// Title, description, OG tags, favicon... tudo aqui.
export const metadata: Metadata = {
  title: `${profile.name} · software engineer`,
  description: profile.tagline,
  authors: [{ name: profile.name }],
  keywords: [
    'software engineer',
    'integrações',
    'react',
    'node',
    'n8n',
    'next.js',
    'devops',
    'belo horizonte',
    'cayo durães',
  ],
  openGraph: {
    title: `${profile.name} · software engineer`,
    description: profile.tagline,
    url: `https://${profile.siteName}`,
    siteName: profile.siteName,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} · software engineer`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={plexMono.variable}>
      <body className="font-mono antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
