import { ArrowRight } from 'lucide-react';

export default function LayananPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] sm:min-h-[75vh] items-center overflow-hidden bg-[#F5F5F0] pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#F5F5F0]/60 via-[#F5F5F0]/95 to-[#F5F5F0]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,106,0,0.05),transparent_50%)] md:bg-[radial-gradient(circle_at_30%_50%,rgba(255,106,0,0.07),transparent_50%)]" />
        </div>
        
        <div className="diagonal-slash z-[1]" />
        <div className="grid-texture absolute inset-0 z-[1]" />

        <div className="relative z-[2] w-full px-[5%] max-w-[1400px] mx-auto">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            {/* Left Content */}
            <div className="max-w-[700px]">
              <p className="eyebrow mb-3 md:mb-4 reveal">Layanan Lengkap</p>
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-4 md:mb-6 reveal reveal-delay-1 text-navy">
                Solusi <span className="text-orange">Signage</span> Profesional
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-[540px] text-navy/70 mb-6 md:mb-8 reveal reveal-delay-2">
                Dari konsep hingga pemasangan, visual advertising berkualitas untuk brand Anda.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 reveal reveal-delay-3">
                <a href="#kontak" className="btn-primary justify-center">
                  Konsultasi Gratis
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://wa.me/6281286003110" className="btn-outline justify-center">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4 reveal reveal-delay-2">
              <div className="group relative overflow-hidden bg-gradient-to-br from-navy/[0.04] to-navy/[0.02] border border-navy/10 p-6 transition-all hover:border-orange/30 hover:bg-white">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">100<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Proyek Selesai
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-navy/[0.04] to-navy/[0.02] border border-navy/10 p-6 transition-all hover:border-orange/30 hover:bg-white">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">
                    5<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Tahun Pengalaman
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-navy/[0.04] to-navy/[0.02] border border-navy/10 p-6 transition-all hover:border-orange/30 hover:bg-white">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">
                    50<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Klien Aktif
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-navy/[0.04] to-navy/[0.02] border border-navy/10 p-6 transition-all hover:border-orange/30 hover:bg-white">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">
                    98<span className="text-orange">%</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Kepuasan Klien
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto px-[5%] max-w-[1400px]">
          <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Neon Box */}
            <div className="group relative overflow-hidden bg-[#F5F5F0] p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
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
            <div className="group relative overflow-hidden bg-[#F5F5F0] p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-1">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
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
            <div className="group relative overflow-hidden bg-[#F5F5F0] p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-2">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
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
            <div className="group relative overflow-hidden bg-[#F5F5F0] p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
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
            <div className="group relative overflow-hidden bg-[#F5F5F0] p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-1">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
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
            <div className="group relative overflow-hidden bg-[#F5F5F0] p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-2">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
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
            <div className="group relative overflow-hidden bg-[#F5F5F0] p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
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
            <div className="group relative overflow-hidden bg-[#F5F5F0] p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer reveal reveal-delay-1">
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange transition-[width] duration-350 ease-out group-hover:w-full" />
              <div className="mb-3 sm:mb-4 md:mb-5 flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 stroke-orange fill-none" strokeWidth={1.8}>
                  <path d="M4 4v16M8 4v16M12 4v16M16 4v16M20 4v16M2 7h20M2 17h20"/>
                </svg>
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base font-bold tracking-tight text-navy">Pagar Besi</h3>
              <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] leading-relaxed text-navy/60">
                Fabrikasi dan pemasangan pagar besi custom - elegan, tahan lama, dan sesuai konsep desain bangunan Anda.
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

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-orange via-orange-dim to-orange">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative z-[2] mx-auto px-[5%] max-w-[900px] text-center">
          <h2 className="text-[1.75rem] sm:text-[2rem] md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.15] mb-4 md:mb-5 text-white reveal">
            Siap Wujudkan Brand Impian Anda?
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-white/80 max-w-[600px] mx-auto reveal reveal-delay-1">
            Konsultasikan kebutuhan signage & reklame Anda dengan tim ahli kami. Gratis survey & penawaran terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center reveal reveal-delay-2">
            <a href="/kontak" className="btn-white">
              Hubungi Kami
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/6281286003110" className="btn-outline border-white text-white hover:bg-white hover:text-orange">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
