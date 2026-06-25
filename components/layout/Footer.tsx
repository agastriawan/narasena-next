import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS } from '@/constants';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F0] border-t border-navy/10 px-[5%] pb-8 pt-14">
      {/* Footer Top */}
      <div className="grid gap-12 border-b border-navy/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="mb-4 inline-flex items-center">
            <div className="relative h-8 w-auto">
              <img src='/images/logo.png' alt='Nara Sena Logo' className='h-full w-auto object-contain' />
            </div>
          </Link>
          <p className="mt-4 max-w-[220px] text-[0.82rem] leading-relaxed text-navy/60">
            Spesialis signage, reklame & fabrikasi besi untuk bisnis yang ingin tampil profesional dan berkesan.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-orange">Layanan</h4>
          <ul className="space-y-2.5">
            <li><a href="#layanan" className="text-[0.82rem] text-navy/60 transition-colors hover:text-orange">Neon Box</a></li>
            <li><a href="#layanan" className="text-[0.82rem] text-navy/60 transition-colors hover:text-orange">Huruf Timbul</a></li>
            <li><a href="#layanan" className="text-[0.82rem] text-navy/60 transition-colors hover:text-orange">Billboard</a></li>
            <li><a href="#layanan" className="text-[0.82rem] text-navy/60 transition-colors hover:text-orange">Reklame</a></li>
            <li><a href="#layanan" className="text-[0.82rem] text-navy/60 transition-colors hover:text-orange">Pylon Sign</a></li>
            <li><a href="#layanan" className="text-[0.82rem] text-navy/60 transition-colors hover:text-orange">Backdrop</a></li>
            <li><a href="#layanan" className="text-[0.82rem] text-navy/60 transition-colors hover:text-orange">Relling & Kanopi</a></li>
            <li><a href="#layanan" className="text-[0.82rem] text-navy/60 transition-colors hover:text-orange">Pagar Besi</a></li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-orange">Navigasi</h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[0.82rem] text-navy/60 transition-colors hover:text-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-orange">Kontak</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-[15px] w-[15px] flex-shrink-0 stroke-orange" strokeWidth={1.8} />
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-[0.82rem] leading-relaxed text-navy/60">
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-[15px] w-[15px] flex-shrink-0 stroke-orange" strokeWidth={1.8} />
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-[0.82rem] leading-relaxed text-navy/60">
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-[15px] w-[15px] flex-shrink-0 stroke-orange" strokeWidth={1.8} />
              <span className="text-[0.82rem] leading-relaxed text-navy/60">
                Bogor, Jawa Barat,<br />Indonesia
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[0.75rem] text-navy/50">
          © {currentYear} <span className="text-orange">{SITE_CONFIG.name}</span>. Hak cipta dilindungi.
        </p>
        
        <div className="flex gap-3">
          {/* Instagram */}
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[34px] w-[34px] items-center justify-center border border-navy/20 transition-all hover:border-orange hover:bg-orange/10"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] stroke-navy/50 fill-none" strokeWidth={1.8}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[34px] w-[34px] items-center justify-center border border-navy/20 transition-all hover:border-orange hover:bg-orange/10"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] stroke-navy/50 fill-none" strokeWidth={1.8}>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[34px] w-[34px] items-center justify-center border border-navy/20 transition-all hover:border-orange hover:bg-orange/10"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] stroke-navy/50 fill-none" strokeWidth={1.8}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.67 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
