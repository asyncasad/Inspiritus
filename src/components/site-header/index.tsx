import MainNav from './main-nav';
import MobileNav from './mobile-nav';

const SiteHeader = () => {
  return (
    <div className="h-16 flex items-center">
      <MainNav />
      <MobileNav />
    </div>
  );
};

export default SiteHeader;
