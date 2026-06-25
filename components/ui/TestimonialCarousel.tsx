'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote: "Hasil kerjanya rapi dan presisi. Neon box kami jadi stand out banget di jalan raya. Pelayanan fast response, harga oke!",
    name: "Budi Santoso",
    title: "Owner, Warung Kopi Nusantara"
  },
  {
    quote: "Huruf timbul stainless-nya awet dan berkelas. Investasi terbaik untuk branding kantor kami. Highly recommended!",
    name: "Siti Nurhaliza",
    title: "Marketing Manager, PT Maju Jaya"
  },
  {
    quote: "Pylon sign kami jadi landmark di kawasan ini. Tim profesional, hasil memuaskan. Terima kasih Nara Sena!",
    name: "Ahmad Ridwan",
    title: "Developer, Plaza Senayan"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/[0.05] border-l-2 border-l-orange/40">
        <svg viewBox="0 0 24 24" className="absolute right-4 top-4 md:right-6 md:top-6 h-8 w-8 md:h-12 md:w-12 fill-orange z-10">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
        </svg>
        
        {/* Testimonial Content */}
        <div className="px-6 py-8 md:px-10 md:py-12 min-h-[220px] md:min-h-[260px] flex flex-col justify-center">
          <div className="transition-opacity duration-300">
            <p className="text-[0.88rem] md:text-[0.98rem] leading-[1.65] md:leading-[1.7] text-white/75 mb-5 md:mb-7 italic pr-6 md:pr-8">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="text-[0.85rem] md:text-[0.92rem] font-bold text-white">{testimonials[currentIndex].name}</p>
              <p className="text-[0.7rem] md:text-[0.75rem] text-orange mt-1">{testimonials[currentIndex].title}</p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center bg-white/[0.06] border border-white/[0.08] hover:bg-orange hover:border-orange transition-all z-20"
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 md:h-4 md:w-4 stroke-white fill-none" strokeWidth={2.5}>
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center bg-white/[0.06] border border-white/[0.08] hover:bg-orange hover:border-orange transition-all z-20"
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 md:h-4 md:w-4 stroke-white fill-none" strokeWidth={2.5}>
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 md:gap-2.5 pb-5 md:pb-7">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 transition-all ${
                index === currentIndex ? 'bg-orange w-6 md:w-8' : 'bg-white/25 w-1.5 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
