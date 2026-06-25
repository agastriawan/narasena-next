'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset semua reveal elements saat route berubah
    const allRevealElements = document.querySelectorAll('.reveal');
    allRevealElements.forEach((el) => {
      el.classList.remove('visible');
    });

    // Delay untuk memastikan DOM sudah terupdate
    const timeoutId = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      revealElements.forEach((el) => observer.observe(el));

      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
      };
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
