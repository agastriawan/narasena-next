import { Container } from '@/components/ui/Container';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { PortfolioCard } from '@/components/ui/PortfolioCard';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { servicesData } from '@/data/services';
import { portfolioData } from '@/data/portfolio';
import { ArrowRight, MessageCircle, Lightbulb, Type, Frame, Square, MonitorPlay, ImageIcon, Fence, Box } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#F5F5F0] py-20 md:py-0">
        {/* Background Elements */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#F5F5F0]/60 via-[#F5F5F0]/95 to-[#F5F5F0]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,106,0,0.05),transparent_50%)] md:bg-[radial-gradient(circle_at_30%_50%,rgba(255,106,0,0.07),transparent_50%)]" />
        </div>
        
        {/* Diagonal Slash */}
        <div className="diagonal-slash z-[1]" />
        
        {/* Grid Texture */}
        <div className="grid-texture absolute inset-0 z-[1]" />

        {/* Hero Content */}
        <div className="relative z-[2] w-full px-[5%] max-w-[1400px] mx-auto">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left Content */}
            <div className="max-w-[700px]">
              {/* Eyebrow */}
              <p className="eyebrow mb-3 md:mb-4 reveal text-xs md:text-sm">Advertising</p>

              {/* Headline */}
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-4 md:mb-6 reveal reveal-delay-1 text-navy">
                Wujudkan Brand<br />
                <span className="text-orange">Anda Terlihat</span><br />
                Nyata
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-[480px] text-navy/70 reveal reveal-delay-2">
                Spesialis signage & reklame profesional — dari neon box, huruf timbul, hingga billboard. Kami buat bisnis Anda tampil dominan dan berkesan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 reveal reveal-delay-3">
                <a href="#layanan" className="btn-primary justify-center">
                  Lihat Layanan
                  <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                </a>
                <a href="#kontak" className="btn-outline justify-center">
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block reveal reveal-delay-2">
              <div className="relative">
                <img 
                  src="/images/hero-image.png" 
                  alt="Nara Sena Projects" 
                  className="w-full h-auto object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#F5F5F0]/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Stats - Desktop */}
        <div className="absolute bottom-8 md:bottom-12 right-[5%] z-[2] hidden md:flex gap-6 lg:gap-10">
          <div className="text-right">
            <span className="block text-4xl font-black leading-none text-navy">
              8<span className="text-orange">+</span>
            </span>
            <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-navy/60">
              Jenis Layanan
            </span>
          </div>
          <div className="text-right">
            <span className="block text-4xl font-black leading-none text-navy">100<span className="text-orange">+</span>
            </span>
            <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-navy/60">
              Proyek Selesai
            </span>
          </div>
          <div className="text-right">
            <span className="block text-4xl font-black leading-none text-navy">
              5<span className="text-orange">+</span>
            </span>
            <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-navy/60">
              Tahun Pengalaman
            </span>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="absolute bottom-6 left-0 right-0 z-[2] flex justify-center gap-6 px-[5%] md:hidden">
          <div className="text-center">
            <span className="block text-xl font-black leading-none text-navy">
              8<span className="text-orange">+</span>
            </span>
            <span className="mt-1 block text-[0.55rem] font-medium uppercase tracking-[0.12em] text-navy/60">
              Jenis Layanan
            </span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-black leading-none text-navy">100<span className="text-orange">+</span>
            </span>
            <span className="mt-1 block text-[0.55rem] font-medium uppercase tracking-[0.12em] text-navy/60">
              Proyek Selesai
            </span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-black leading-none text-navy">
              5<span className="text-orange">+</span>
            </span>
            <span className="mt-1 block text-[0.55rem] font-medium uppercase tracking-[0.12em] text-navy/60">
              Tahun Pengalaman
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="section-padding bg-white">
        <div className="mx-auto px-[5%] max-w-[1400px]">
          {/* Services Header */}
          <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:flex-wrap items-start md:items-end justify-between gap-4 md:gap-6">
            <div>
              <p className="eyebrow mb-2 md:mb-3 reveal">Apa yang Kami Tawarkan</p>
              <h2 className="text-[1.75rem] sm:text-[2rem] md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.15] mb-2 md:mb-3 reveal reveal-delay-1 text-navy">
                Layanan <span className="text-orange">Unggulan</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed reveal reveal-delay-2 max-w-[500px] text-navy/70">
                Solusi visual terbaik untuk meningkatkan kehadiran merek Anda di ruang publik.
              </p>
            </div>
            <a href="#kontak" className="btn-outline reveal text-xs sm:text-sm md:text-base px-4 py-2.5 md:px-8 md:py-4">
              Tanya Harga →
            </a>
          </div>

          {/* Services Grid */}
          <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Neon Box */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
                  <rect x="2" y="6" width="20" height="12" rx="1"/>
                  <path d="M6 10h12M6 14h8"/>
                </svg>
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold tracking-tight text-navy">Neon Box</h3>
              <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed text-navy/60">
                Tampilan visual yang cerah dan mencolok untuk toko, restoran, dan kantor Anda. Tahan cuaca dan hemat energi.
              </p>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center opacity-0 translate-x-[-4px] translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 stroke-orange fill-none" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Huruf Timbul */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-1">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
                  <path d="M4 17V7l4 6 4-6v10M14 17V7l3 5 3-5"/>
                </svg>
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold tracking-tight text-navy">Huruf Timbul</h3>
              <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed text-navy/60">
                Karakter 3D presisi tinggi dari stainless, akrilik, atau aluminium. Kesan premium yang abadi untuk fasad gedung Anda.
              </p>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center opacity-0 translate-x-[-4px] translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 stroke-orange fill-none" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Billboard */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-2">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
                  <rect x="3" y="3" width="18" height="11" rx="1"/>
                  <path d="M8 21l4-7 4 7M3 14h18"/>
                </svg>
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold tracking-tight text-navy">Billboard</h3>
              <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed text-navy/60">
                Struktur billboard kokoh dengan visual berdampak tinggi. Tempatkan merek Anda di titik strategis dengan jangkauan luas.
              </p>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center opacity-0 translate-x-[-4px] translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 stroke-orange fill-none" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Reklame */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
                  <path d="M2 12h20M6 7l6-4 6 4M6 17l6 4 6-4"/>
                </svg>
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold tracking-tight text-navy">Reklame</h3>
              <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed text-navy/60">
                Pemasangan reklame resmi dan berperizinan di lokasi premium. Maksimalkan visibilitas kampanye iklan Anda.
              </p>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center opacity-0 translate-x-[-4px] translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 stroke-orange fill-none" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Pylon Sign */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-1">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
                  <rect x="8" y="2" width="8" height="8" rx="1"/>
                  <path d="M12 10v12M7 22h10"/>
                </svg>
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold tracking-tight text-navy">Pylon Sign</h3>
              <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed text-navy/60">
                Tiang signage megah untuk kompleks bisnis, mall, dan kawasan industri. Identitas lokasi yang terlihat dari kejauhan.
              </p>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center opacity-0 translate-x-[-4px] translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 stroke-orange fill-none" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Backdrop */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-2">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
                  <rect x="2" y="4" width="20" height="14" rx="1"/>
                  <path d="M2 18l5-5 4 4 4-5 7 6"/>
                </svg>
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold tracking-tight text-navy">Backdrop</h3>
              <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed text-navy/60">
                Backdrop event berkualitas cetak tajam untuk pameran, konferensi, dan pesta. Kesan profesional di setiap momen penting.
              </p>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center opacity-0 translate-x-[-4px] translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 stroke-orange fill-none" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Relling & Kanopi */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
                  <path d="M3 8h18M3 16h18M6 8v8M12 8v8M18 8v8"/>
                </svg>
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold tracking-tight text-navy">Relling & Kanopi</h3>
              <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed text-navy/60">
                Pemasangan relling estetik dan kanopi besi yang kuat. Solusi pelindung dan perindah eksterior bangunan Anda.
              </p>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center opacity-0 translate-x-[-4px] translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 stroke-orange fill-none" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Pagar Besi */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-1">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
                  <path d="M4 4v16M8 4v16M12 4v16M16 4v16M20 4v16M2 7h20M2 17h20"/>
                </svg>
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold tracking-tight text-navy">Pagar Besi</h3>
              <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed text-navy/60">
                Fabrikasi dan pemasangan pagar besi custom — elegan, tahan lama, dan sesuai konsep desain bangunan Anda.
              </p>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 flex h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 items-center justify-center opacity-0 translate-x-[-4px] translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 stroke-orange fill-none" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="mengapa" className="section-padding relative overflow-hidden bg-[#F5F5F0]">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-[10%] -top-[40%] h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(255,106,0,0.06)_0%,transparent_70%)]" />
        
        <div className="mx-auto px-[5%]">
          <div className="grid items-start gap-10 md:gap-16 lg:grid-cols-[1fr_1.1fr]">
            {/* Left Content */}
            <div>
              <p className="eyebrow mb-3 md:mb-4 reveal">Keunggulan Kami</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.15] mb-6 md:mb-10 reveal reveal-delay-1 text-navy">
                Mengapa Memilih <span className="text-orange">Nara Sena?</span>
              </h2>

              <div className="space-y-4 md:space-y-5">
                {/* Item 1 */}
                <div className="group flex gap-5 border-l-2 border-transparent bg-[#F5F5F0]/[0.03] p-6 transition-all hover:border-orange hover:bg-orange/5 reveal">
                  <span className="pt-1 text-[0.65rem] font-bold tracking-[0.1em] text-orange">01</span>
                  <div>
                    <p className="mb-1 text-[0.92rem] font-bold text-navy">Pengerjaan Profesional & Terstandar</p>
                    <p className="text-[0.8rem] leading-relaxed text-navy/60">
                      Tim berpengalaman dengan standar kerja rapi, presisi, dan hasil yang konsisten setiap proyek.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="group flex gap-5 border-l-2 border-transparent bg-[#F5F5F0]/[0.03] p-6 transition-all hover:border-orange hover:bg-orange/5 reveal reveal-delay-1">
                  <span className="pt-1 text-[0.65rem] font-bold tracking-[0.1em] text-orange">02</span>
                  <div>
                    <p className="mb-1 text-[0.92rem] font-bold text-navy">Material Premium, Harga Bersaing</p>
                    <p className="text-[0.8rem] leading-relaxed text-navy/60">
                      Kami menggunakan bahan berkualitas tinggi dengan harga yang transparan dan kompetitif.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="group flex gap-5 border-l-2 border-transparent bg-[#F5F5F0]/[0.03] p-6 transition-all hover:border-orange hover:bg-orange/5 reveal reveal-delay-2">
                  <span className="pt-1 text-[0.65rem] font-bold tracking-[0.1em] text-orange">03</span>
                  <div>
                    <p className="mb-1 text-[0.92rem] font-bold text-navy">Garansi & After-Sales Service</p>
                    <p className="text-[0.8rem] leading-relaxed text-navy/60">
                      Setiap pekerjaan dilengkapi garansi dan dukungan purna jual untuk ketenangan pikiran Anda.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="group flex gap-5 border-l-2 border-transparent bg-[#F5F5F0]/[0.03] p-6 transition-all hover:border-orange hover:bg-orange/5 reveal reveal-delay-3">
                  <span className="pt-1 text-[0.65rem] font-bold tracking-[0.1em] text-orange">04</span>
                  <div>
                    <p className="mb-1 text-[0.92rem] font-bold text-navy">Desain Gratis & Konsultasi Awal</p>
                    <p className="text-[0.8rem] leading-relaxed text-navy/60">
                      Dapatkan desain mock-up gratis dan konsultasi kebutuhan sebelum Anda memutuskan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stats & Testimonials */}
            <div className="reveal reveal-delay-2">
              <p className="text-[0.95rem] md:text-[1.05rem] leading-relaxed mb-6 md:mb-8 text-navy/80">
                Kami bukan sekadar vendor — kami partner pertumbuhan visual bisnis Anda.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
                {/* Card 1 */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-5 md:p-7 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
                  <div className="absolute right-2 top-2 md:right-3 md:top-3 h-8 w-8 md:h-10 md:w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                  <div className="relative">
                    <p className="mb-1 md:mb-2 text-3xl md:text-4xl font-black leading-none text-navy">100<span className="text-orange">+</span>
                    </p>
                    <p className="text-[0.62rem] md:text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                      Proyek Selesai
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-7 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
                  <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                  <div className="relative">
                    <p className="mb-2 text-4xl font-black leading-none text-navy">
                      5<span className="text-orange">+</span>
                    </p>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                      Tahun Pengalaman
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-7 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
                  <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                  <div className="relative">
                    <p className="mb-2 text-4xl font-black leading-none text-navy">
                      50<span className="text-orange">+</span>
                    </p>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                      Klien Aktif
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-7 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
                  <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                  <div className="relative">
                    <p className="mb-2 text-4xl font-black leading-none text-navy">
                      98<span className="text-orange">%</span>
                    </p>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                      Kepuasan Klien
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonials Carousel */}
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portofolio" className="section-padding bg-white">
        <div className="mx-auto px-[5%]">
          {/* Portfolio Header */}
          <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:flex-wrap items-start md:items-end justify-between gap-4 md:gap-6">
            <div>
              <p className="eyebrow mb-3 md:mb-4 reveal">Hasil Kerja Kami</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.15] reveal reveal-delay-1 text-navy">
                Portofolio <span className="text-orange">Proyek</span>
              </h2>
            </div>
            <a href="#kontak" className="btn-outline reveal">
              Diskusikan Proyek Anda →
            </a>
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-4 md:gap-5 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Item 1 - Tall */}
            <div className="group relative h-[480px] cursor-pointer overflow-hidden bg-gray md:row-span-2 reveal">
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F5F5F0] to-white transition-all group-hover:brightness-105">
                <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-orange/40 fill-none" strokeWidth={1.5}>
                  <rect x="2" y="6" width="20" height="12" rx="1"/>
                  <path d="M6 10h12M6 14h8"/>
                </svg>
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-navy/40">
                  Neon Box – Resto Bandung
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#F5F5F0]/95 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100 lg:opacity-100">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-orange">Neon Box</p>
                <p className="text-base font-bold text-navy">Restoran Modern Bandung</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group relative h-60 cursor-pointer overflow-hidden bg-gray reveal reveal-delay-1">
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F5F5F0] to-white transition-all group-hover:brightness-105">
                <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-orange/40 fill-none" strokeWidth={1.5}>
                  <path d="M4 17V7l4 6 4-6v10M14 17V7l3 5 3-5"/>
                </svg>
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-navy/40">
                  Huruf Timbul – Office
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#F5F5F0]/95 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100 lg:opacity-100">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-orange">Huruf Timbul</p>
                <p className="text-base font-bold text-navy">Kantor Pusat Jakarta</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group relative h-60 cursor-pointer overflow-hidden bg-gray reveal reveal-delay-2">
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F5F5F0] to-white transition-all group-hover:brightness-105">
                <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-orange/40 fill-none" strokeWidth={1.5}>
                  <rect x="3" y="3" width="18" height="11" rx="1"/>
                  <path d="M8 21l4-7 4 7M3 14h18"/>
                </svg>
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-navy/40">
                  Billboard – Jalan Raya
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#F5F5F0]/95 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100 lg:opacity-100">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-orange">Billboard</p>
                <p className="text-base font-bold text-navy">Jalan Protokol Bogor</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="group relative h-60 cursor-pointer overflow-hidden bg-gray reveal reveal-delay-1">
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F5F5F0] to-white transition-all group-hover:brightness-105">
                <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-orange/40 fill-none" strokeWidth={1.5}>
                  <rect x="8" y="2" width="8" height="8" rx="1"/>
                  <path d="M12 10v12M7 22h10"/>
                </svg>
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-navy/40">
                  Pylon Sign – Mall
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#F5F5F0]/95 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100 lg:opacity-100">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-orange">Pylon Sign</p>
                <p className="text-base font-bold text-navy">Pusat Perbelanjaan Depok</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="group relative h-60 cursor-pointer overflow-hidden bg-gray reveal reveal-delay-2">
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F5F5F0] to-white transition-all group-hover:brightness-105">
                <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-orange/40 fill-none" strokeWidth={1.5}>
                  <path d="M3 8h18M3 16h18M6 8v8M12 8v8M18 8v8"/>
                </svg>
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-navy/40">
                  Kanopi – Toko Ritel
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#F5F5F0]/95 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100 lg:opacity-100">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-orange">Kanopi Besi</p>
                <p className="text-base font-bold text-navy">Toko Ritel Bogor Selatan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proses" className="section-padding bg-[#F5F5F0]">
        <div className="mx-auto px-[5%]">
          <div className="mb-2 text-center">
            <p className="eyebrow mb-3 md:mb-4 reveal mx-auto">Cara Kerja Kami</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.15] reveal reveal-delay-1 mx-auto text-navy">
              Proses <span className="text-orange">Mudah</span> & Transparan
            </h2>
          </div>

          {/* Process Steps */}
          <div className="relative mt-10 md:mt-14">
            {/* Mobile: Timeline Style */}
            <div className="lg:hidden space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4 reveal">
                <div className="flex flex-col items-center">
                  <div className="relative z-[1] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange shadow-lg">
                    <MessageCircle className="h-5 w-5 stroke-white" strokeWidth={2} />
                  </div>
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-orange to-orange/20 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-white border border-navy/10 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange/10 text-[0.7rem] font-bold text-orange">1</span>
                      <h3 className="text-[0.95rem] font-bold text-navy">Konsultasi</h3>
                    </div>
                    <p className="text-[0.8rem] leading-relaxed text-navy/60">
                      Diskusikan kebutuhan, lokasi, dan anggaran Anda bersama tim kami secara gratis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 reveal reveal-delay-1">
                <div className="flex flex-col items-center">
                  <div className="relative z-[1] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange shadow-lg">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-white fill-none" strokeWidth={2}>
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                    </svg>
                  </div>
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-orange to-orange/20 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-white border border-navy/10 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange/10 text-[0.7rem] font-bold text-orange">2</span>
                      <h3 className="text-[0.95rem] font-bold text-navy">Desain & Mock-up</h3>
                    </div>
                    <p className="text-[0.8rem] leading-relaxed text-navy/60">
                      Tim desainer kami menyiapkan visual preview untuk persetujuan Anda sebelum produksi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 reveal reveal-delay-2">
                <div className="flex flex-col items-center">
                  <div className="relative z-[1] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange shadow-lg">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-white fill-none" strokeWidth={2}>
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-orange to-orange/20 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-white border border-navy/10 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange/10 text-[0.7rem] font-bold text-orange">3</span>
                      <h3 className="text-[0.95rem] font-bold text-navy">Produksi</h3>
                    </div>
                    <p className="text-[0.8rem] leading-relaxed text-navy/60">
                      Pembuatan dikerjakan dengan material terpilih dan quality control ketat di workshop kami.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4 reveal reveal-delay-3">
                <div className="flex flex-col items-center">
                  <div className="relative z-[1] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange shadow-lg">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-white fill-none" strokeWidth={2}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white border border-navy/10 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange/10 text-[0.7rem] font-bold text-orange">4</span>
                      <h3 className="text-[0.95rem] font-bold text-navy">Pemasangan</h3>
                    </div>
                    <p className="text-[0.8rem] leading-relaxed text-navy/60">
                      Instalasi profesional di lokasi Anda. Bersih, tepat wakat, dan siap pakai.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Grid Style */}
            <div className="hidden lg:grid gap-6 md:gap-8 grid-cols-4 relative">
              {/* Connecting Line - Desktop */}
              <div className="absolute left-[12.5%] right-[12.5%] top-7 h-[2px] bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

              {/* Step 1 */}
              <div className="reveal text-center px-4 relative">
                <div className="relative z-[1] mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-orange/40 bg-white transition-all hover:border-orange hover:bg-orange/5 hover:scale-110 shadow-md">
                  <MessageCircle className="h-6 w-6 stroke-orange" strokeWidth={1.8} />
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-orange text-[0.65rem] font-extrabold text-white shadow-lg">1</span>
                </div>
                <h3 className="mb-2 text-[0.95rem] font-bold text-navy">Konsultasi</h3>
                <p className="text-[0.8rem] leading-relaxed text-navy/60">
                  Diskusikan kebutuhan, lokasi, dan anggaran Anda bersama tim kami secara gratis.
                </p>
              </div>

              {/* Step 2 */}
              <div className="reveal reveal-delay-1 text-center px-4 relative">
                <div className="relative z-[1] mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-orange/40 bg-white transition-all hover:border-orange hover:bg-orange/5 hover:scale-110 shadow-md">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-orange fill-none" strokeWidth={1.8}>
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                  </svg>
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-orange text-[0.65rem] font-extrabold text-white shadow-lg">2</span>
                </div>
                <h3 className="mb-2 text-[0.95rem] font-bold text-navy">Desain & Mock-up</h3>
                <p className="text-[0.8rem] leading-relaxed text-navy/60">
                  Tim desainer kami menyiapkan visual preview untuk persetujuan Anda sebelum produksi.
                </p>
              </div>

              {/* Step 3 */}
              <div className="reveal reveal-delay-2 text-center px-4 relative">
                <div className="relative z-[1] mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-orange/40 bg-white transition-all hover:border-orange hover:bg-orange/5 hover:scale-110 shadow-md">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-orange fill-none" strokeWidth={1.8}>
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-orange text-[0.65rem] font-extrabold text-white shadow-lg">3</span>
                </div>
                <h3 className="mb-2 text-[0.95rem] font-bold text-navy">Produksi</h3>
                <p className="text-[0.8rem] leading-relaxed text-navy/60">
                  Pembuatan dikerjakan dengan material terpilih dan quality control ketat di workshop kami.
                </p>
              </div>

              {/* Step 4 */}
              <div className="reveal reveal-delay-3 text-center px-4 relative">
                <div className="relative z-[1] mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-orange/40 bg-white transition-all hover:border-orange hover:bg-orange/5 hover:scale-110 shadow-md">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-orange fill-none" strokeWidth={1.8}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-orange text-[0.65rem] font-extrabold text-white shadow-lg">4</span>
                </div>
                <h3 className="mb-2 text-[0.95rem] font-bold text-navy">Pemasangan</h3>
                <p className="text-[0.8rem] leading-relaxed text-navy/60">
                  Instalasi profesional di lokasi Anda. Bersih, tepat waktu, dan siap pakai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontak" className="relative overflow-hidden bg-gradient-to-br from-orange to-[#e85500] py-12 md:py-16 lg:py-20">
        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-[20%] -top-[30%] h-[400px] w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] rounded-full bg-white opacity-10" />
        
        <Container>
          <div className="relative z-[1] flex flex-col items-start justify-between gap-6 md:gap-8 lg:flex-row lg:items-center">
            <div className="max-w-full lg:max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] mb-3 md:mb-4 text-white">
                Siap Tingkatkan<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Tampilan Bisnis Anda?
              </h2>
              <p className="text-sm md:text-base lg:text-lg opacity-90 text-white leading-relaxed">
                Hubungi kami sekarang dan dapatkan konsultasi serta desain gratis.
              </p>
            </div>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Nara%20Sena%2C%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20signage%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.67 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              WhatsApp Sekarang
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}


