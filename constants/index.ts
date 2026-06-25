// Site Configuration
export const SITE_CONFIG = {
  name: 'Nara Sena Advertising',
  description: 'Solusi Advertising & Signage Profesional untuk Bisnis Anda',
  url: 'https://narasena.com',
  tagline: 'Advertising Profesional, Hasil Maksimal',
} as const;

// Contact Information
export const CONTACT_INFO = {
  phone: '+62 812-3456-7890',
  whatsapp: '6281234567890',
  email: 'info@narasena.com',
  address: 'Jl. Raya Industri, Jakarta',
  workingHours: 'Senin - Sabtu: 08:00 - 17:00',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/kontak', label: 'Kontak' },
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  whatsapp: `https://wa.me/${CONTACT_INFO.whatsapp}`,
} as const;

// Company Stats
export const COMPANY_STATS = [
  { value: '15+', label: 'Tahun Pengalaman' },
  { value: '800+', label: 'Project Selesai' },
  { value: '500+', label: 'Client Puas' },
  { value: '60+', label: 'Tim Profesional' },
] as const;

// Service Categories
export const SERVICE_CATEGORIES = [
  'Neon Box',
  'Huruf Timbul',
  'Billboard',
  'Reklame',
  'Pylon Sign',
  'Backdrop',
  'Relling & Kanopi',
] as const;

// Portfolio Categories
export const PORTFOLIO_CATEGORIES = [
  'All',
  'Signage',
  'Neon Box',
  'Letter Sign',
  'Billboard',
  'LED Display',
] as const;

// Why Choose Us Points
export const WHY_CHOOSE_US = [
  {
    title: 'Material Berkualitas',
    description: 'Menggunakan material premium yang tahan lama',
  },
  {
    title: 'Pengerjaan Cepat',
    description: 'Proses produksi yang efisien dan tepat waktu',
  },
  {
    title: 'Harga Kompetitif',
    description: 'Harga terbaik dengan kualitas terjamin',
  },
  {
    title: 'Custom Design',
    description: 'Desain sesuai kebutuhan dan identitas brand Anda',
  },
  {
    title: 'Konsultasi Gratis',
    description: 'Konsultasi tanpa biaya untuk kebutuhan signage Anda',
  },
  {
    title: 'Instalasi Profesional',
    description: 'Tim berpengalaman untuk instalasi yang rapi dan aman',
  },
] as const;

// Work Process Steps
export const WORK_PROCESS = [
  {
    step: 1,
    title: 'Konsultasi',
    description: 'Diskusi kebutuhan dan budget dengan tim kami',
  },
  {
    step: 2,
    title: 'Survey Lokasi',
    description: 'Kunjungan lokasi untuk pengukuran dan analisis',
  },
  {
    step: 3,
    title: 'Design Mockup',
    description: 'Pembuatan desain sesuai spesifikasi',
  },
  {
    step: 4,
    title: 'Produksi',
    description: 'Proses produksi dengan quality control ketat',
  },
  {
    step: 5,
    title: 'Instalasi',
    description: 'Pemasangan profesional di lokasi Anda',
  },
] as const;

// Breakpoints
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;
