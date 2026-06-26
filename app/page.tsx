import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Stack } from '@/components/Stack';
import { Contact } from '@/components/Contact';
import { StatusBar } from '@/components/StatusBar';

// A home é estática (SSG) — no `next build` ela vira HTML puro.
// Lighthouse 100 garantido se a gente não enfiar besteira aqui.

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6">
        <Hero />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <StatusBar />
    </>
  );
}
