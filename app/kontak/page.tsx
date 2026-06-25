import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function KontakPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] sm:min-h-[75vh] items-center overflow-hidden bg-navy pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy/60 via-navy/95 to-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,106,0,0.05),transparent_50%)] md:bg-[radial-gradient(circle_at_30%_50%,rgba(255,106,0,0.07),transparent_50%)]" />
        </div>
        
        <div className="diagonal-slash z-[1]" />
        <div className="grid-texture absolute inset-0 z-[1]" />

        <div className="relative z-[2] w-full px-[5%] max-w-[1400px] mx-auto">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            {/* Left Content */}
            <div className="max-w-[700px]">
              <p className="eyebrow mb-3 md:mb-4 reveal">Hubungi Kami</p>
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-4 md:mb-6 reveal reveal-delay-1">
                Mari <span className="text-orange">Diskusikan</span> Proyek Anda
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px] text-white/75 mb-6 md:mb-8 reveal reveal-delay-2">
                Tim kami siap membantu Anda mewujudkan signage & reklame impian. Konsultasi gratis dan tanpa komitmen.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 reveal reveal-delay-3">
                <a href="https://wa.me/6281234567890" className="btn-primary justify-center">
                  WhatsApp Langsung
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:+6281234567890" className="btn-outline justify-center">
                  Telepon Kami
                </a>
              </div>
            </div>

            {/* Right Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4 reveal reveal-delay-2">
              <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/[0.05] p-6 transition-all hover:border-orange/30 hover:bg-white/[0.06]">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-white">
                    24<span className="text-orange">/7</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Respon Cepat
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/[0.05] p-6 transition-all hover:border-orange/30 hover:bg-white/[0.06]">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-white">
                    Free
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Konsultasi
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/[0.05] p-6 transition-all hover:border-orange/30 hover:bg-white/[0.06]">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-white">
                    100<span className="text-orange">%</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Transparan
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/[0.05] p-6 transition-all hover:border-orange/30 hover:bg-white/[0.06]">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-white">
                    <span className="text-orange">✓</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Garansi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-navy-dark">
        <div className="mx-auto px-[5%] max-w-[1400px]">
          <div className="reveal">
            <h2 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 text-center">
              Informasi <span className="text-orange">Kontak</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Phone */}
              <div className="group flex flex-col items-center text-center border-l-2 sm:border-l-0 sm:border-t-2 border-transparent bg-white/[0.02] p-6 transition-all hover:border-orange hover:bg-orange/5">
                <div className="flex h-14 w-14 mb-4 items-center justify-center border border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                  <Phone className="h-6 w-6 stroke-orange" strokeWidth={2} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Telepon / WhatsApp</p>
                <a href="tel:+6281234567890" className="text-base font-bold hover:text-orange transition-colors">
                  +62 812-3456-7890
                </a>
              </div>

              {/* Email */}
              <div className="group flex flex-col items-center text-center border-l-2 sm:border-l-0 sm:border-t-2 border-transparent bg-white/[0.02] p-6 transition-all hover:border-orange hover:bg-orange/5">
                <div className="flex h-14 w-14 mb-4 items-center justify-center border border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                  <Mail className="h-6 w-6 stroke-orange" strokeWidth={2} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Email</p>
                <a href="mailto:info@narasena.com" className="text-base font-bold hover:text-orange transition-colors break-all">
                  info@narasena.com
                </a>
              </div>

              {/* Address */}
              <div className="group flex flex-col items-center text-center border-l-2 sm:border-l-0 sm:border-t-2 border-transparent bg-white/[0.02] p-6 transition-all hover:border-orange hover:bg-orange/5">
                <div className="flex h-14 w-14 mb-4 items-center justify-center border border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                  <MapPin className="h-6 w-6 stroke-orange" strokeWidth={2} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Alamat Workshop</p>
                <p className="text-base font-bold leading-snug">
                  Jl. Raya Industri No. 123<br />
                  Bogor, Jawa Barat 16610
                </p>
              </div>

              {/* Working Hours */}
              <div className="group flex flex-col items-center text-center border-l-2 sm:border-l-0 sm:border-t-2 border-transparent bg-white/[0.02] p-6 transition-all hover:border-orange hover:bg-orange/5">
                <div className="flex h-14 w-14 mb-4 items-center justify-center border border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                  <Clock className="h-6 w-6 stroke-orange" strokeWidth={2} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Jam Operasional</p>
                <p className="text-base font-bold leading-snug">
                  Senin - Sabtu: 08:00 - 18:00<br />
                  Minggu: <span className="text-white/40">Tutup</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,106,0,0.08),transparent_60%)]" />
        <div className="grid-texture absolute inset-0 opacity-30" />
        
        <div className="relative mx-auto px-[5%] max-w-[1400px]">
          <div className="max-w-[900px] mx-auto text-center reveal">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6">
              Siap Memulai <span className="text-orange">Proyek Anda?</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-8 md:mb-10 max-w-[700px] mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis. Tim profesional kami siap membantu mewujudkan signage & reklame impian Anda dengan kualitas terbaik dan harga kompetitif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/6281234567890" className="btn-primary justify-center min-w-[200px]">
                Chat WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+6281234567890" className="btn-outline justify-center min-w-[200px]">
                <Phone className="h-4 w-4" />
                Telepon Langsung
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12 pt-12 border-t border-white/10">
              <div>
                <p className="text-2xl md:text-3xl font-black text-orange mb-1">500+</p>
                <p className="text-xs md:text-sm text-white/60 font-semibold uppercase tracking-wider">Proyek Selesai</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-orange mb-1">10+</p>
                <p className="text-xs md:text-sm text-white/60 font-semibold uppercase tracking-wider">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-orange mb-1">98%</p>
                <p className="text-xs md:text-sm text-white/60 font-semibold uppercase tracking-wider">Kepuasan Klien</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] md:h-[500px] bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-dark via-[#1a2f4a] to-navy">
          <div className="grid-texture absolute inset-0 opacity-20" />
          <div className="relative text-center z-10">
            <div className="inline-flex items-center justify-center h-20 w-20 md:h-24 md:w-24 border-2 border-orange/30 bg-orange/5 mb-6 transition-all hover:border-orange hover:bg-orange/10">
              <MapPin className="h-10 w-10 md:h-12 md:w-12 stroke-orange" strokeWidth={1.5} />
            </div>
            <p className="text-white/60 text-sm md:text-base font-semibold mb-2">Lokasi Workshop Kami</p>
            <p className="text-white/40 text-xs md:text-sm max-w-[300px]">
              Google Maps akan ditampilkan di sini<br />untuk memudahkan Anda menemukan lokasi kami
            </p>
          </div>
        </div>
        
        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark via-navy-dark/95 to-transparent p-6 md:p-8">
          <div className="mx-auto px-[5%] max-w-[1400px]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 stroke-orange shrink-0" strokeWidth={2} />
                <div className="text-left">
                  <p className="font-bold text-sm md:text-base">Jl. Raya Industri No. 123</p>
                  <p className="text-white/60 text-xs md:text-sm">Bogor, Jawa Barat 16610</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=Bogor+Jawa+Barat" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Buka di Maps
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
