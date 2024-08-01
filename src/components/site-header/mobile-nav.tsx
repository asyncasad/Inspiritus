import Link from 'next/link';
import { Icons } from '../icons';

const MobileNav = () => {
  return (
    <div className="w-full md:hidden flex items-center justify-between">
      <Link
        href="/"
        className="flex flex-row gap-4 items-center"
      >
        <Icons.logo_icon />
        <h1 className="font-bold text-3xl">Inspiritus</h1>
      </Link>
    </div>
  );
};

export default MobileNav;
