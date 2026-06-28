'use client';

import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "Hasil kerjanya rapi dan presisi. Neon box kami jadi stand out banget. Huruf timbul nyala belakangnya juga keren, pelayanan fast response!",
    name: "Bapak Suhardi Setiawan & Ibu Utin",
    title: "Graha ASP"
  },
  {
    quote: "Huruf timbulnya berkualitas tinggi dan pemasangannya profesional. Hasil memuaskan untuk sekolah kami. Highly recommended!",
    name: "Bapak Amir",
    title: "SMA Negeri 3 Cibinong"
  },
  {
    quote: "Tim yang sangat profesional dalam branding produk kami. Hasil memuaskan dan sesuai standar perusahaan. Terima kasih Nara Sena!",
    name: "Bapak Helmi & Ibu Atin",
    title: "Branding Air Minum Cleo"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right - previous
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  return (
    <div className="relative">
      <div 
        className="relative overflow-hidden bg-gradient-to-br from-navy/[0.04] to-navy/[0.02] border border-navy/10 border-l-2 border-l-orange/40 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <svg viewBox="0 0 24 24" className="absolute right-4 top-4 md:right-6 md:top-6 h-8 w-8 md:h-12 md:w-12 fill-orange z-10">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
        </svg>
        
        {/* Testimonial Content */}
        <div className="px-6 py-8 md:px-10 md:py-12 min-h-[220px] md:min-h-[260px] flex flex-col justify-center">
          <div className="transition-opacity duration-500">
            <p className="text-[0.88rem] md:text-[0.98rem] leading-[1.65] md:leading-[1.7] text-navy/70 mb-5 md:mb-7 italic pr-6 md:pr-8">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="text-[0.85rem] md:text-[0.92rem] font-bold text-navy">{testimonials[currentIndex].name}</p>
              <p className="text-[0.7rem] md:text-[0.75rem] text-orange mt-1">{testimonials[currentIndex].title}</p>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 md:gap-2.5 pb-5 md:pb-7">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 transition-all ${
                index === currentIndex ? 'bg-orange w-6 md:w-8' : 'bg-navy/25 w-1.5 hover:bg-navy/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
