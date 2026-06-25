import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function KontakPage() {
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
              <p className="eyebrow mb-3 md:mb-4 reveal">Hubungi Kami</p>
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-4 md:mb-6 reveal reveal-delay-1 text-navy">
                Mari <span className="text-orange">Diskusikan</span> Proyek Anda
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-[540px] text-navy/70 mb-6 md:mb-8 reveal reveal-delay-2">
                Tim kami siap membantu mewujudkan signage impian Anda. Konsultasi gratis!
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
              <div className="group relative overflow-hidden bg-gradient-to-br from-navy/[0.04] to-navy/[0.02] border border-navy/10 p-6 transition-all hover:border-orange/30 hover:bg-white">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">
                    24<span className="text-orange">/7</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Respon Cepat
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-navy/[0.04] to-navy/[0.02] border border-navy/10 p-6 transition-all hover:border-orange/30 hover:bg-white">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">
                    Free
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Konsultasi
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-6 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">100<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Transparan
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-6 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">
                    5<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Garansi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="mx-auto px-[5%] max-w-[1400px]">
          <div className="reveal">
            <h2 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 text-center text-navy">
              Informasi <span className="text-orange">Kontak</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {/* Phone */}
              <div className="group flex flex-col items-center text-center border-l-2 sm:border-l-0 sm:border-t-2 border-transparent bg-navy/[0.03] p-6 transition-all hover:border-orange hover:bg-orange/5">
                <div className="flex h-14 w-14 mb-4 items-center justify-center border border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                  <Phone className="h-6 w-6 stroke-orange" strokeWidth={2} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-2">Telepon / WhatsApp</p>
                <a href="tel:+6281234567890" className="text-base font-bold hover:text-orange transition-colors">
                  +62 812-3456-7890
                </a>
              </div>

              {/* Email */}
              <div className="group flex flex-col items-center text-center border-l-2 sm:border-l-0 sm:border-t-2 border-transparent bg-navy/[0.03] p-6 transition-all hover:border-orange hover:bg-orange/5">
                <div className="flex h-14 w-14 mb-4 items-center justify-center border border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                  <Mail className="h-6 w-6 stroke-orange" strokeWidth={2} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-2">Email</p>
                <a href="mailto:info@narasena.com" className="text-base font-bold hover:text-orange transition-colors break-all">
                  info@narasena.com
                </a>
              </div>

              {/* Address */}
              <div className="group flex flex-col items-center text-center border-l-2 sm:border-l-0 sm:border-t-2 border-transparent bg-navy/[0.03] p-6 transition-all hover:border-orange hover:bg-orange/5">
                <div className="flex h-14 w-14 mb-4 items-center justify-center border border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                  <MapPin className="h-6 w-6 stroke-orange" strokeWidth={2} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-2">Alamat Workshop</p>
                <p className="text-base font-bold leading-snug">
                  Jl. Raya Industri No. 123<br />
                  Bogor, Jawa Barat 16610
                </p>
              </div>

              {/* Working Hours */}
              <div className="group flex flex-col items-center text-center border-l-2 sm:border-l-0 sm:border-t-2 border-transparent bg-navy/[0.03] p-6 transition-all hover:border-orange hover:bg-orange/5">
                <div className="flex h-14 w-14 mb-4 items-center justify-center border border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                  <Clock className="h-6 w-6 stroke-orange" strokeWidth={2} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-2">Jam Operasional</p>
                <p className="text-base font-bold leading-snug">
                  Senin - Sabtu: 08:00 - 18:00<br />
                  Minggu: <span className="text-navy/50">Tutup</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#F5F5F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,106,0,0.08),transparent_60%)]" />
        <div className="grid-texture absolute inset-0 opacity-30" />
        
        <div className="relative mx-auto px-[5%] max-w-[1400px]">
          <div className="max-w-[900px] mx-auto text-center reveal">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-navy">
              Siap Memulai <span className="text-orange">Proyek Anda?</span>
            </h2>
            <p className="text-base md:text-lg text-navy/70 mb-8 md:mb-10 max-w-[700px] mx-auto">
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
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12 pt-12 border-t border-navy/20">
              <div>
                <p className="text-2xl md:text-3xl font-black text-orange mb-1">500+</p>
                <p className="text-xs md:text-sm text-navy/60 font-semibold uppercase tracking-wider">Proyek Selesai</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-orange mb-1">10+</p>
                <p className="text-xs md:text-sm text-navy/60 font-semibold uppercase tracking-wider">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-orange mb-1">98%</p>
                <p className="text-xs md:text-sm text-navy/60 font-semibold uppercase tracking-wider">Kepuasan Klien</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-white overflow-hidden">
        {/* Google Maps Iframe */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6436038484644!2d106.88091507401023!3d-6.439794162970433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eaeb5ad2e223%3A0x202422049ad3bc3b!2sSMKN%201%20Depok!5e0!3m2!1sid!2sid!4v1782380470701!5m2!1sid!2sid"
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        
        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/90 to-transparent p-4 md:p-6 lg:p-8 pointer-events-none">
          <div className="mx-auto px-[5%] max-w-[1400px] pointer-events-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/95 backdrop-blur-sm border border-navy/10 p-4 md:p-5 shadow-lg">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 stroke-orange shrink-0 mt-0.5" strokeWidth={2} />
                <div className="text-left">
                  <p className="font-bold text-sm md:text-base text-navy">SMKN 1 Depok</p>
                  <p className="text-navy/60 text-xs md:text-sm">Jl. Raya Muchtar, Depok, Jawa Barat</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=-6.439794162970433,106.88091507401023&destination_place_id=ChIJI-LSWuvpay4RO7yjCQQiAiA" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm whitespace-nowrap"
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
