import { ArrowRight, ExternalLink } from 'lucide-react';

export default function PortofolioPage() {
  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'neon', label: 'Neon Box' },
    { id: 'huruf', label: 'Huruf Timbul' },
    { id: 'billboard', label: 'Billboard' },
    { id: 'pylon', label: 'Pylon Sign' },
    { id: 'other', label: 'Lainnya' }
  ];

  const projects = [
    {
      id: 1,
      category: 'neon',
      title: 'Restoran Modern Bandung',
      client: 'Warung Nusantara',
      location: 'Bandung, Jawa Barat',
      year: '2024',
      type: 'Neon Box',
      description: 'Neon box custom 4x2 meter dengan LED full color untuk tampilan eksterior restoran modern.',
      image: '/images/portfolio/project-1.jpg',
      featured: true
    },
    {
      id: 2,
      category: 'huruf',
      title: 'Kantor Pusat Jakarta',
      client: 'PT Maju Jaya',
      location: 'Jakarta Selatan',
      year: '2024',
      type: 'Huruf Timbul',
      description: 'Huruf timbul stainless steel mirror dengan backlight LED di fasad gedung 3 lantai.',
      image: '/images/portfolio/project-2.jpg',
      featured: true
    },
    {
      id: 3,
      category: 'billboard',
      title: 'Billboard Jalan Protokol',
      client: 'Brand Fashion X',
      location: 'Bogor, Jawa Barat',
      year: '2023',
      type: 'Billboard',
      description: 'Billboard ukuran 4x6 meter di lokasi strategis jalan protokol dengan pencahayaan LED.',
      image: '/images/portfolio/project-3.jpg',
      featured: false
    },
    {
      id: 4,
      category: 'pylon',
      title: 'Mall Pusat Perbelanjaan',
      client: 'Plaza Senayan',
      location: 'Depok, Jawa Barat',
      year: '2023',
      type: 'Pylon Sign',
      description: 'Pylon sign setinggi 12 meter dengan panel akrilik backlit untuk identitas mall.',
      image: '/images/portfolio/project-4.jpg',
      featured: true
    },
    {
      id: 5,
      category: 'other',
      title: 'Toko Ritel Modern',
      client: 'Store Modern',
      location: 'Bogor Selatan',
      year: '2023',
      type: 'Kanopi Besi',
      description: 'Kanopi besi hollow dengan atap polycarbonate untuk area parkir dan teras toko.',
      image: '/images/portfolio/project-5.jpg',
      featured: false
    },
    {
      id: 6,
      category: 'neon',
      title: 'Cafe & Resto Minimalis',
      client: 'Kopi Kita',
      location: 'Tangerang',
      year: '2024',
      type: 'Neon Box',
      description: 'Neon box minimalis dengan desain custom logo dan brand identity yang kuat.',
      image: '/images/portfolio/project-6.jpg',
      featured: false
    },
    {
      id: 7,
      category: 'huruf',
      title: 'Showroom Otomotif',
      client: 'Auto Premium',
      location: 'Jakarta Utara',
      year: '2023',
      type: 'Huruf Timbul',
      description: 'Huruf timbul galvanis dengan LED module untuk showroom otomotif premium.',
      image: '/images/portfolio/project-7.jpg',
      featured: false
    },
    {
      id: 8,
      category: 'billboard',
      title: 'Campaign Billboard Series',
      client: 'Brand Elektronik',
      location: 'Jakarta - Bandung',
      year: '2023',
      type: 'Billboard',
      description: 'Series billboard di 5 lokasi strategis untuk kampanye produk elektronik.',
      image: '/images/portfolio/project-8.jpg',
      featured: true
    }
  ];

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
              <p className="eyebrow mb-3 md:mb-4 reveal">Hasil Kerja Kami</p>
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-4 md:mb-6 reveal reveal-delay-1">
                Portofolio <span className="text-orange">Proyek</span> Terbaik Kami
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px] text-white/75 mb-6 md:mb-8 reveal reveal-delay-2">
                Lebih dari 100 proyek signage & reklame telah kami selesaikan dengan standar kualitas tinggi dan kepuasan klien yang terjamin.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 reveal reveal-delay-3">
                <a href="#kontak" className="btn-primary justify-center">
                  Konsultasi Gratis
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://wa.me/6281234567890" className="btn-outline justify-center">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4 reveal reveal-delay-2">
              <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/[0.05] p-6 transition-all hover:border-orange/30 hover:bg-white/[0.06]">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-white">
                    100<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Proyek Selesai
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/[0.05] p-6 transition-all hover:border-orange/30 hover:bg-white/[0.06]">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-white">
                    5<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Tahun Pengalaman
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/[0.05] p-6 transition-all hover:border-orange/30 hover:bg-white/[0.06]">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-white">
                    50<span className="text-orange">+</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Klien Aktif
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/[0.05] p-6 transition-all hover:border-orange/30 hover:bg-white/[0.06]">
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange/10 transition-all group-hover:scale-110 group-hover:bg-orange/20" />
                <div className="relative">
                  <p className="mb-2 text-3xl font-black leading-none text-white">
                    98<span className="text-orange">%</span>
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Kepuasan Klien
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="sticky top-[72px] z-[10] bg-navy-dark/95 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto px-[5%] max-w-[1400px] py-4 md:py-6">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="whitespace-nowrap px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-semibold rounded-full border border-white/10 transition-all hover:border-orange hover:bg-orange/10 hover:text-orange"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-navy-dark">
        <div className="mx-auto px-[5%] max-w-[1400px]">
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black mb-2 reveal">
              Proyek <span className="text-orange">Unggulan</span>
            </h2>
            <p className="text-xs md:text-sm text-white/60 reveal reveal-delay-1">
              Showcase proyek terpilih dengan hasil terbaik
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-navy border border-white/5 transition-all hover:border-orange/30 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-[280px] sm:h-[320px] md:h-[380px] overflow-hidden bg-gradient-to-br from-[#1a2f4a] to-[#0d1f35]">
                  <div className="flex h-full items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-16 w-16 stroke-orange/20 fill-none" strokeWidth={1.5}>
                      <rect x="2" y="6" width="20" height="12" rx="1"/>
                      <path d="M6 10h12M6 14h8"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                  
                  {/* Overlay Hover */}
                  <div className="absolute inset-0 bg-orange/0 transition-all group-hover:bg-orange/10" />
                  
                  {/* View Project Badge */}
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 backdrop-blur-sm opacity-0 transition-all group-hover:opacity-100">
                    <ExternalLink className="h-4 w-4 text-orange" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-7">
                  <div className="mb-3 flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-wider bg-orange/10 text-orange border border-orange/20">
                      {project.type}
                    </span>
                    <span className="text-[0.65rem] md:text-[0.7rem] text-white/40">•</span>
                    <span className="text-[0.65rem] md:text-[0.7rem] text-white/60">{project.year}</span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-black mb-2 group-hover:text-orange transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="mb-3 flex items-center gap-4 text-[0.75rem] md:text-[0.8rem] text-white/50">
                    <span className="flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 stroke-current fill-none" strokeWidth={2}>
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
                      </svg>
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 stroke-current fill-none" strokeWidth={2}>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      {project.client}
                    </span>
                  </div>
                  
                  <p className="text-[0.8rem] md:text-[0.85rem] leading-relaxed text-white/60 mb-4">
                    {project.description}
                  </p>

                  <button className="flex items-center gap-2 text-[0.8rem] md:text-[0.85rem] font-semibold text-orange group-hover:gap-3 transition-all">
                    Lihat Detail
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="section-padding bg-navy">
        <div className="mx-auto px-[5%] max-w-[1400px]">
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black mb-2 reveal">
              Semua <span className="text-orange">Proyek</span>
            </h2>
            <p className="text-xs md:text-sm text-white/60 reveal reveal-delay-1">
              Eksplorasi lebih banyak proyek yang telah kami kerjakan
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-navy border border-white/5 transition-all hover:border-orange/30 hover:-translate-y-1 reveal"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="relative h-[200px] md:h-[240px] overflow-hidden bg-gradient-to-br from-[#1a2f4a] to-[#0d1f35]">
                  <div className="flex h-full items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 stroke-orange/20 fill-none" strokeWidth={1.5}>
                      <rect x="2" y="6" width="20" height="12" rx="1"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider bg-navy/90 backdrop-blur-sm text-orange border border-orange/30">
                      {project.type}
                    </span>
                  </div>

                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-orange/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/90 backdrop-blur-sm">
                      <ExternalLink className="h-5 w-5 text-orange" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <h3 className="text-sm md:text-base font-bold mb-1.5 group-hover:text-orange transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-[0.7rem] md:text-[0.75rem] text-white/50 mb-2 line-clamp-1">
                    {project.client} • {project.year}
                  </p>
                  
                  <p className="text-[0.7rem] md:text-[0.75rem] leading-relaxed text-white/60 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-10 md:mt-12 text-center reveal">
            <button className="btn-outline">
              Muat Lebih Banyak
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-orange via-orange-dim to-orange">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative z-[2] mx-auto px-[5%] max-w-[900px] text-center">
          <h2 className="text-[1.75rem] sm:text-[2rem] md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.15] mb-4 md:mb-5 text-white reveal">
            Proyek Anda Selanjutnya?
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-white/90 max-w-[600px] mx-auto reveal reveal-delay-1">
            Mari wujudkan proyek signage & reklame impian Anda bersama tim profesional kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center reveal reveal-delay-2">
            <a href="/kontak" className="btn-white">
              Mulai Proyek
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/6281234567890" className="btn-outline border-white text-white hover:bg-white hover:text-orange">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
