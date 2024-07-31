import Button from './ui/button';

const Banner = () => {
  return (
    <div className="mt-[30px] md:mt-[70px] flex flex-col md:grid grid-cols-[2fr_3fr] gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold ~text-[43px]/[60px]">
          Navigating the digital landscape for success
        </h1>
        <img
          className="md:hidden aspect-square justify-self-end"
          src="./banner.svg"
        />
        <p className="~text-[16px]/[20px]">
          Our digital marketing agency helps businesses grow
          and succeed online through a range of services
          including SEO, PPC, social media marketing, and
          content creation.
        </p>
        <Button
          label="Book a consultation"
          variant="dark"
          overRideCss="w-full md:w-max"
        />
      </div>
      <img
        className="hidden md:inline-block aspect-square justify-self-end"
        src="./banner.svg"
      />
    </div>
  );
};

export default Banner;
