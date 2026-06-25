'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-[99] flex flex-col items-center justify-center bg-white transition-all duration-300 lg:hidden',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,106,0,0.08),transparent_70%)]" />
        <div className="grid-texture absolute inset-0 opacity-20" />
        
        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className='absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center border border-navy/20 bg-[#F5F5F0]/5 text-navy transition-all hover:border-orange hover:bg-orange/10'
          aria-label='Close menu'
        >
          <X className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="absolute left-6 top-6 z-10">
          <Link href='/' onClick={() => setIsMobileMenuOpen(false)}>
            <div className='relative h-7 w-auto'>
              <img src='/images/logo.png' alt='Nara Sena Logo' className='h-full w-auto object-contain' />
            </div>
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="relative z-10 flex flex-col items-center gap-2 px-8">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'group relative w-full text-center py-4 px-6 text-xl font-bold uppercase tracking-wider transition-all',
                pathname === link.href 
                  ? 'text-orange' 
                  : 'text-navy hover:text-orange'
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{link.label}</span>
              {pathname === link.href && (
                <div className="absolute inset-0 border-l-2 border-orange bg-orange/5" />
              )}
              {pathname !== link.href && (
                <div className="absolute inset-0 border-l-2 border-transparent bg-[#F5F5F0]/0 transition-all group-hover:border-orange/50 group-hover:bg-orange/5" />
              )}
            </Link>
          ))}
          
          {/* CTA Button */}
          <Link
            href='#kontak'
            onClick={() => setIsMobileMenuOpen(false)}
            className='mt-6 w-full bg-orange px-8 py-4 text-center text-lg font-bold uppercase tracking-wider text-white transition-all hover:bg-orange/90'
          >
            Hubungi Kami
          </Link>
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center">
          <p className="text-sm text-navy/40">© 2024 Nara Sena Creative</p>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={cn(
          'fixed left-0 right-0 top-0 z-[100] flex items-center justify-between px-[5%] py-5 transition-all duration-400',
          isScrolled
            ? 'glass border-b border-orange/15'
            : 'bg-transparent',
          isMobileMenuOpen && 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto'
        )}
      >
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <div className='relative h-8 w-auto'>
            <img src='/images/logo.png' alt='Nara Sena Logo' className='h-full w-auto object-contain' />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden items-center gap-8 lg:flex'>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-[0.85rem] font-medium tracking-wider transition-colors hover:text-orange relative',
                  pathname === link.href 
                    ? 'text-orange after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-orange' 
                    : 'text-navy/75'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href='#kontak'
          className='hidden bg-orange px-6 py-3 text-[0.82rem] font-bold uppercase tracking-[0.06em] text-white transition-all hover:bg-orange-dim hover:-translate-y-0.5 lg:block'
        >
          Hubungi Kami
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='flex flex-col gap-[5px] p-1 lg:hidden'
          aria-label='Toggle menu'
        >
          <span className='block h-[2px] w-6 bg-navy transition-all'></span>
          <span className='block h-[2px] w-6 bg-navy transition-all'></span>
          <span className='block h-[2px] w-6 bg-navy transition-all'></span>
        </button>
      </nav>
    </>
  );
}
