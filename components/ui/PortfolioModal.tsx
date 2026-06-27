'use client';

import { X, MapPin, User, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { PortfolioItem } from '@/types';

interface PortfolioModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ project, isOpen, onClose }: PortfolioModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-navy/90 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[85vh] overflow-hidden bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable Container */}
        <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 z-20 ml-auto mr-4 mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-navy/10 text-navy hover:bg-orange hover:text-white hover:border-orange transition-all shadow-xl hover:scale-110 hover:rotate-90 duration-300"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full bg-gradient-to-br from-[#F5F5F0] to-white overflow-hidden -mt-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute bottom-6 left-6">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm md:text-base font-bold uppercase tracking-wider bg-orange text-white shadow-xl rounded-full">
                <Tag className="h-4 w-4" />
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 text-navy leading-tight">
                {project.title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-orange to-orange-dim rounded-full"></div>
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-8 pb-8 border-b-2 border-navy/10">
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#F5F5F0] to-white hover:shadow-md transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 group-hover:bg-orange/20 transition-colors">
                  <User className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy/50 mb-1.5">
                    Klien
                  </p>
                  <p className="text-base md:text-lg font-black text-navy">
                    {project.client}
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#F5F5F0] to-white hover:shadow-md transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 group-hover:bg-orange/20 transition-colors">
                  <MapPin className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy/50 mb-1.5">
                    Lokasi
                  </p>
                  <p className="text-base md:text-lg font-black text-navy">
                    {project.location}
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#F5F5F0] to-white hover:shadow-md transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 group-hover:bg-orange/20 transition-colors">
                  <Calendar className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy/50 mb-1.5">
                    Tahun
                  </p>
                  <p className="text-base md:text-lg font-black text-navy">
                    {project.year}
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#F5F5F0] to-white hover:shadow-md transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 group-hover:bg-orange/20 transition-colors">
                  <Tag className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-navy/50 mb-1.5">
                    Kategori
                  </p>
                  <p className="text-base md:text-lg font-black text-navy">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-black mb-4 text-navy flex items-center gap-3">
                <span className="h-8 w-1 bg-orange rounded-full"></span>
                Deskripsi Proyek
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-navy/70 pl-4">
                {project.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t-2 border-navy/10">
              <a 
                href="https://wa.me/6281286003110"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center flex-1 text-base md:text-lg py-4"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Konsultasi Proyek Serupa
              </a>
              <a 
                href="/kontak"
                className="btn-outline justify-center flex-1 text-base md:text-lg py-4"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
