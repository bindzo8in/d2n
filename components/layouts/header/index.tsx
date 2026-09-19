"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoImage from '@/public/img/d2n_logo.webp';
import ButtonWithIcon from '@/components/shadcn-space/button/button-01';
import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/data/services';
import { ChevronDown } from 'lucide-react';

const PublicHeader = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <header className='bg-background/80 h-16 sticky top-6 mx-auto w-8/10 rounded-2xl shadow-2xl backdrop-blur-md border border-border overflow-visible flex justify-between p-2 items-center z-99'>
        <Link href="/">
          <Image src={LogoImage} alt='logo' className='w-auto h-12 object-contain' quality={75} loading="eager" priority />
        </Link>
        <nav className='text-md'>
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
                  <Link href="/about">About</Link>
                </li>
                <li className='hover:text-foreground transition-colors'>
                  <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <ButtonWithIcon content='Contact Us' href="/contact" />
    </header>
  )
}

export default PublicHeader