import { Icons } from '../icons';

const MobileNav = () => {
  return (
    <div className="w-full md:hidden flex items-center justify-between">
      <Icons.logo />
      <button>
        <Icons.burger_icon />
      </button>
    </div>
  );
};

export default MobileNav;
