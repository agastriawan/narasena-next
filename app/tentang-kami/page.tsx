import { ArrowRight, Target, Eye, Award, Users, Clock, Shield } from 'lucide-react';
import Image from 'next/image';

export default function TentangKamiPage() {
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
              <p className="eyebrow mb-3 md:mb-4 reveal">Mengenal Kami</p>
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-4 md:mb-6 reveal reveal-delay-1 text-navy">
                Partner <span className="text-orange">Terpercaya</span> Anda
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-[540px] text-navy/70 mb-6 md:mb-8 reveal reveal-delay-2">
                3+ tahun pengalaman membantu ratusan bisnis tampil profesional.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 reveal reveal-delay-3">
                <a href="#kontak" className="btn-primary justify-center">
                  Hubungi Kami
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/portofolio" className="btn-outline justify-center">
                  Lihat Portofolio
                </a>
              </div>
            </div>

            {/* Right Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4 reveal reveal-delay-2">
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-6 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">72<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Proyek Selesai
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-6 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-navy">
                    3<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy/60">
                    Tahun Pengalaman
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-6 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
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
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#F5F5F0]/[0.04] to-[#F5F5F0]/[0.02] border border-navy/[0.1] p-6 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg">
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

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto px-[5%] max-w-[1400px]">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-2 items-center">
            {/* Left - Image */}
            <div className="relative reveal">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden border border-navy/10">
                <Image
                  src="/images/portfolio/Tempat Usaha Nara Sena.png"
                  alt="Tempat Usaha Nara Sena"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="reveal reveal-delay-1">
              <p className="eyebrow mb-3 md:mb-4">Cerita Kami</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.15] mb-4 md:mb-6 text-navy">
                Dari <span className="text-orange">Workshop Kecil</span> Menjadi Partner Terpercaya
              </h2>
              <div className="space-y-4 text-sm md:text-base leading-relaxed text-navy/70">
                <p>
                  Nara Sena dimulai dari workshop kecil dengan satu visi: membantu bisnis lokal tampil lebih profesional melalui signage berkualitas tinggi. Kami percaya bahwa visual yang kuat adalah investasi terbaik untuk brand awareness.
                </p>
                <p>
                  Selama lebih dari 3 tahun, kami telah berkembang menjadi partner terpercaya bagi ratusan klien — dari UMKM hingga perusahaan besar. Setiap proyek kami tangani dengan standar kualitas yang sama: presisi, ketepatan waktu, dan kepuasan pelanggan.
                </p>
                <p>
                  Tim kami terdiri dari desainer, teknisi, dan installer berpengalaman yang siap mewujudkan visi visual Anda dari konsep hingga pemasangan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-[#F5F5F0]">
        <div className="mx-auto px-[5%] max-w-[1400px]">
          <div className="mb-10 md:mb-14 text-center">
            <p className="eyebrow mb-3 md:mb-4 reveal justify-center">Visi & Misi</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.15] reveal reveal-delay-1 text-navy">
              Komitmen <span className="text-orange">Kami</span>
            </h2>
          </div>

          <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2">
            {/* Vision */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-navy/[0.04] to-navy/[0.02] border border-navy/10 p-8 md:p-10 transition-all hover:border-orange/30 reveal">
              <div className="mb-5 flex h-14 w-14 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <Eye className="h-7 w-7 stroke-orange" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-navy">Visi</h3>
              <p className="text-sm md:text-base leading-relaxed text-navy/60">
                Menjadi perusahaan signage & reklame terdepan di Indonesia yang dikenal dengan standar kualitas tinggi, inovasi desain, dan kepercayaan pelanggan.
              </p>
            </div>

            {/* Mission */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-navy/[0.04] to-navy/[0.02] border border-navy/10 p-8 md:p-10 transition-all hover:border-orange/30 reveal reveal-delay-1">
              <div className="mb-5 flex h-14 w-14 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <Target className="h-7 w-7 stroke-orange" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-navy">Misi</h3>
              <p className="text-sm md:text-base leading-relaxed text-navy/60">
                Memberikan solusi visual advertising yang profesional, inovatif, dan terjangkau untuk membantu setiap bisnis meningkatkan brand presence dan kredibilitas mereka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="mx-auto px-[5%] max-w-[1400px]">
          <div className="mb-10 md:mb-14 text-center">
            <p className="eyebrow mb-3 md:mb-4 reveal justify-center">Nilai Kami</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.15] reveal reveal-delay-1 text-navy">
              Prinsip yang <span className="text-orange">Kami Pegang</span>
            </h2>
          </div>

          <div className="grid gap-5 md:gap-6 lg:gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-6 md:p-7 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg reveal">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <Award className="h-6 w-6 stroke-orange" strokeWidth={1.8} />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 text-navy">Kualitas Tinggi</h3>
              <p className="text-[0.8rem] md:text-[0.85rem] leading-relaxed text-navy/60">
                Standar kerja presisi dengan material premium di setiap proyek.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-6 md:p-7 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg reveal reveal-delay-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <Clock className="h-6 w-6 stroke-orange" strokeWidth={1.8} />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 text-navy">Tepat Waktu</h3>
              <p className="text-[0.8rem] md:text-[0.85rem] leading-relaxed text-navy/60">
                Komitmen deadline yang jelas dan konsisten tanpa kompromi.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-6 md:p-7 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg reveal reveal-delay-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <Shield className="h-6 w-6 stroke-orange" strokeWidth={1.8} />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 text-navy">Terpercaya</h3>
              <p className="text-[0.8rem] md:text-[0.85rem] leading-relaxed text-navy/60">
                Transparansi harga dan garansi untuk kepuasan pelanggan.
              </p>
            </div>

            {/* Value 4 */}
            <div className="group relative overflow-hidden bg-white border border-navy/10 p-6 md:p-7 transition-all hover:border-orange/30 hover:bg-white hover:shadow-lg reveal reveal-delay-3">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border-[1.5px] border-orange/30 transition-all group-hover:border-orange group-hover:bg-orange/10">
                <Users className="h-6 w-6 stroke-orange" strokeWidth={1.8} />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 text-navy">Customer First</h3>
              <p className="text-[0.8rem] md:text-[0.85rem] leading-relaxed text-navy/60">
                Kepuasan dan kebutuhan pelanggan adalah prioritas utama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-orange via-orange-dim to-orange">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative z-[2] mx-auto px-[5%] max-w-[900px] text-center">
          <h2 className="text-[1.75rem] sm:text-[2rem] md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.15] mb-4 md:mb-5 text-white reveal">
            Mari Bekerja Sama!
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-white/80 max-w-[600px] mx-auto reveal reveal-delay-1">
            Ceritakan kebutuhan signage & reklame Anda. Tim kami siap memberikan solusi terbaik.
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
