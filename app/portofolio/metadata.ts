import { Metadata } from 'next';
import { SEO_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Portofolio Nara Sena Advertising | Hasil Karya Signage & Promosi di Bogor',
  description: 'Lihat portofolio dan hasil karya Nara Sena Advertising di Bogor: Signage, Neon Box, Huruf Timbul, Billboard, Pylon Sign & solusi promosi lainnya. 72+ proyek sukses di Jabodetabek.',
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/portofolio`,
  },
  openGraph: {
    title: 'Portofolio Nara Sena Advertising Bogor',
    description: 'Lihat portofolio dan hasil karya advertising di Bogor: Signage, Neon Box, Huruf Timbul, Billboard & promosi lainnya',
    url: `${SEO_CONFIG.siteUrl}/portofolio`,
    type: 'website',
  },
};
