import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/constants';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEO_CONFIG, generateLocalBusinessSchema, generateOrganizationSchema } from '@/lib/seo';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: [
    // Primary local keywords
    ...SEO_CONFIG.primaryKeywords,
    // Secondary keywords
    ...SEO_CONFIG.secondaryKeywords,
    // General keywords
    'signage profesional',
    'jasa advertising',
    'pembuatan plang nama',
    'nara sena advertising',
  ],
  authors: [{ name: SEO_CONFIG.siteName }],
  creator: SEO_CONFIG.siteName,
  publisher: SEO_CONFIG.siteName,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SEO_CONFIG.siteUrl,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: SEO_CONFIG.ogImage.url,
        width: SEO_CONFIG.ogImage.width,
        height: SEO_CONFIG.ogImage.height,
        alt: SEO_CONFIG.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/portfolio/logo_transparant.png',
    shortcut: '/images/portfolio/logo_transparant.png',
    apple: '/images/portfolio/logo_transparant.png',
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },
  verification: {
    google: 'your-google-verification-code', // Ganti dengan verification code dari Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="id" className={poppins.variable}>
      <head>
        {/* JSON-LD Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* JSON-LD Schema Markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={poppins.className}>
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
