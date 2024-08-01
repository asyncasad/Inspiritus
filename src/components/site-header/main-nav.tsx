'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '../icons';
import { NAV_LINKS } from './constants';

const MainNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden w-full md:flex flex-row items-center justify-between">
      <Link
        href="/"
        className="flex flex-row gap-4 items-center"
      >
        <Icons.logo_icon />
        <h1 className="font-bold text-3xl">Inspiritus</h1>
      </Link>
      <nav className="flex items-center gap-4 text-lg lg:gap-10">
        {NAV_LINKS.map((link) => {
          return (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MainNav;
