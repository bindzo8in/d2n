"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoImage from '@/public/img/d2n_logo.webp';
import ButtonWithIcon from '@/components/shadcn-space/button/button-01';
import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/data/services';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const PublicHeader = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <header className='bg-background/80 h-16 sticky top-6 mx-auto w-[95%] md:w-8/10 rounded-2xl shadow-2xl backdrop-blur-md border border-border overflow-visible flex justify-between p-2 px-4 items-center z-99 transition-all'>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image src={LogoImage} alt='logo' className='w-auto h-10 md:h-12 object-contain' quality={75} loading="eager" priority />
          </Link>
          <nav className='text-md hidden md:block'>
              <ul className='flex gap-6 font-medium text-muted-foreground items-center'>
                  <li className='hover:text-foreground transition-colors'>
                    <Link href="/">Home</Link>
                  </li>
                  
                  {/* Services Dropdown */}
                  <li className='relative group'>
                    <Link 
                      href="/services"
                      className="flex items-center gap-1 hover:text-foreground transition-colors py-2"
                    >
                      Services
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    
                    {/* Dropdown Menu Wrapper (with invisible bridge) */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                      <div className="flex flex-col bg-background border border-border rounded-xl shadow-xl p-2">
                        {SERVICES_DATA.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="px-4 py-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors text-sm text-left truncate"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>

                  <li className='hover:text-foreground transition-colors'>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className='hover:text-foreground transition-colors'>
                    <Link href="/about">About</Link>
                  </li>
                  
              </ul>
          </nav>
          <div className="hidden md:block">
            <ButtonWithIcon content='Contact Us' href="/contact" />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
      </header>

      {/* Mobile Menu — full-screen overlay rendered outside header so it's always scrollable */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-200 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute inset-x-4 top-4 bottom-4 bg-background border border-border rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Panel header */}
            <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image src={LogoImage} alt="D2N logo" className="w-auto h-9 object-contain" quality={75} />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable nav links */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/"
                    className="block font-semibold text-lg p-3 rounded-xl hover:bg-muted hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                {/* Services group */}
                <li>
                  <p className="font-semibold text-lg p-3 pb-1 text-foreground">Services</p>
                  <ul className="flex flex-col border-l-2 border-primary/20 ml-5 pl-3 gap-1">
                    {SERVICES_DATA.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary py-2 px-2 rounded-lg hover:bg-muted transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="block font-semibold text-lg p-3 rounded-xl hover:bg-muted hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block font-semibold text-lg p-3 rounded-xl hover:bg-muted hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block font-semibold text-lg p-3 rounded-xl hover:bg-muted hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* CTA at bottom */}
            <div className="p-4 border-t border-border shrink-0">
              <ButtonWithIcon content='Get Free Consultation' href="/contact" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PublicHeader;