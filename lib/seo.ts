// SEO Configuration for Nara Sena Advertising
export const SEO_CONFIG = {
  defaultTitle: 'Nara Sena Advertising Bogor | Jasa Signage, Neon Box, Huruf Timbul, Billboard',
  defaultDescription: 'Nara Sena Advertising - Jasa advertising profesional di Bogor: Signage, Neon Box, Huruf Timbul, Billboard, Reklame, Pylon Sign & Solusi Promosi Lainnya. ☎️ 0812-8600-3110. Gratis konsultasi.',
  siteName: 'Nara Sena Advertising',
  siteUrl: 'https://narasena.com',
  
  // Local Business Information
  business: {
    name: 'Nara Sena Advertising',
    type: 'SignShop',
    address: {
      streetAddress: 'Jl. Sirojul Munir No. 215 C, Nanggewer',
      addressLocality: 'Cibinong',
      addressRegion: 'Bogor',
      postalCode: '16912',
      addressCountry: 'ID',
    },
    geo: {
      latitude: '-6.4813',
      longitude: '106.8540',
    },
    phone: '+62 812-8600-3110',
    email: 'narasenaadv79@gmail.com',
    priceRange: '$$',
    openingHours: 'Mo-Sa 07:00-21:00',
    areaServed: ['Bogor', 'Jakarta', 'Depok', 'Tangerang', 'Bekasi', 'Jabodetabek'],
  },

  // Primary Keywords (Long-tail & Local)
  primaryKeywords: [
    'jasa pembuatan signage bogor',
    'jasa signage bogor',
    'pembuatan neon box bogor',
    'jasa huruf timbul bogor',
    'jasa billboard bogor',
    'jasa reklame bogor',
    'advertising bogor',
    'jasa pylon sign bogor',
    'pembuatan papan nama bogor',
    'jasa neon sign bogor',
  ],

  // Secondary Keywords
  secondaryKeywords: [
    'signage murah bogor',
    'neon box cibinong',
    'huruf timbul stainless bogor',
    'billboard outdoor bogor',
    'jasa pasang reklame bogor',
    'pembuatan signage profesional',
    'advertising agency bogor',
    'backdrop bogor',
    'kanopi bogor',
    'relling bogor',
  ],

  // Service-specific Keywords
  serviceKeywords: {
    neonBox: [
      'jasa neon box bogor',
      'pembuatan neon box murah',
      'neon box akrilik bogor',
      'neon box galvanis bogor',
      'pasang neon box bogor',
    ],
    hurufTimbul: [
      'jasa huruf timbul bogor',
      'huruf timbul stainless',
      'huruf timbul akrilik',
      'huruf timbul led bogor',
      'pembuatan huruf timbul murah',
    ],
    billboard: [
      'jasa billboard bogor',
      'billboard outdoor bogor',
      'pasang billboard murah',
      'billboard jalan tol bogor',
    ],
    reklame: [
      'jasa reklame bogor',
      'pembuatan reklame outdoor',
      'papan reklame bogor',
      'izin reklame bogor',
    ],
  },

  // Default Open Graph Images
  ogImage: {
    url: '/images/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Nara Sena Advertising - Jasa Signage Profesional Bogor',
  },
} as const;

// Generate JSON-LD Schema for Local Business
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SEO_CONFIG.siteUrl,
    name: SEO_CONFIG.business.name,
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage.url}`,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.business.phone,
    email: SEO_CONFIG.business.email,
    priceRange: SEO_CONFIG.business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONFIG.business.address.streetAddress,
      addressLocality: SEO_CONFIG.business.address.addressLocality,
      addressRegion: SEO_CONFIG.business.address.addressRegion,
      postalCode: SEO_CONFIG.business.address.postalCode,
      addressCountry: SEO_CONFIG.business.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SEO_CONFIG.business.geo.latitude,
      longitude: SEO_CONFIG.business.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '21:00',
    },
    areaServed: SEO_CONFIG.business.areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    sameAs: [
      'https://www.facebook.com/narasenaadvertising',
      'https://www.instagram.com/narasenaadvertising',
    ],
  };
}

// Generate JSON-LD Schema for Organization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.business.name,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SEO_CONFIG.business.phone,
      contactType: 'Customer Service',
      areaServed: 'ID',
      availableLanguage: 'Indonesian',
    },
  };
}

// Generate JSON-LD Schema for Service
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: SEO_CONFIG.business.name,
      url: SEO_CONFIG.siteUrl,
    },
    description: service.description,
    url: service.url,
    areaServed: SEO_CONFIG.business.areaServed,
  };
}

// Generate JSON-LD Schema for BreadcrumbList
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
