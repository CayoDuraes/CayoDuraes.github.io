/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera site totalmente estático na pasta `out/` no build.
  // Necessário pra deploy no GitHub Pages.
  output: 'export',

  // Como é "user site" (cayoduraes.github.io), o site vai na raiz.
  // basePath SÓ é necessário se fosse "project site"
  // (ex: cayoduraes.github.io/portfolio).

  images: {
    // GitHub Pages não tem Image Optimization. Mantém simples.
    unoptimized: true,
  },

  // Garante que URLs como /work/santa-rita virem /work/santa-rita/index.html
  // (em vez de /work/santa-rita.html), o que é o padrão do GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
