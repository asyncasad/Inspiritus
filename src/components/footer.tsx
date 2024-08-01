import Link from 'next/link';
import { Icons } from './icons';
import { NAV_LINKS } from './site-header/constants';
import Label from './ui/label';

const Footer = () => {
  return (
    <div className="mt-[90px] lg:mt-[140px] bg-dark rounded-t-[45px] ~p-[35px]/[45px]">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <Link
          href="/"
          className="flex flex-row gap-3 items-center"
        >
          <Icons.logo_icon className="text-white" />
          <h1 className="font-bold text-2xl text-white">
            Inspiritus
          </h1>
        </Link>
        <div className="mt-[30px] lg:mt-0 flex flex-col lg:flex-row gap-5 items-center">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-white"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-[30px] lg:mt-[60px] flex  flex-col items-center ">
        <Label size="sm" label="Contact us:" />
        <div className="mt-[30px] text-white flex flex-col gap-3 text-center  ~text-[16px]/[18px]">
          <p>Email: info@inspiritus.com</p>
          <p>Phone: 9090909090</p>
          <p>Address: 123 Main St. Moon street.</p>
        </div>
      </div>
      <div className="mt-[30px] lg:mt-[60px] flex flex-row gap-5 items-center justify-center">
        <Link href="/">
          <Icons.linkedin_icon />
        </Link>
        <Link href="/">
          <Icons.facebook_icon />
        </Link>
        <Link href="/">
          <Icons.twitter_icon />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
