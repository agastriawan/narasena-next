import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Layanan Signage Lengkap Bogor | Neon Box, Huruf Timbul, Billboard',
  description: 'Layanan pembuatan signage lengkap di Bogor: Neon Box, Huruf Timbul, Billboard, Reklame, Pylon Sign, Backdrop, LED Display. Konsultasi gratis ☎️ 0812-8600-3110',
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/layanan`,
  },
  openGraph: {
    title: 'Layanan Signage Lengkap Bogor | Neon Box, Huruf Timbul, Billboard',
    description: 'Layanan pembuatan signage lengkap di Bogor: Neon Box, Huruf Timbul, Billboard, Reklame, Pylon Sign, Backdrop, LED Display. Konsultasi gratis',
    url: `${SEO_CONFIG.siteUrl}/layanan`,
    type: 'website',
  },
};

export default function LayananPage() {
  return (
    <>
      {/* Original content stays the same */}
    </>
  );
}
