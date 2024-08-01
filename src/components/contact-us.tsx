import Button from './ui/button';

const ContactUs = () => {
  return (
    <div className="md:mt-[120px] mt-[70px] ~p-[30px]/[50px] relative bg-grey rounded-[45px] lg:grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-6">
        <h3 className="font-medium ~text-[26px]/[30px]">
          Let&apos;s make things happen
        </h3>
        <p className="~text-[16px]/[18px]">
          Contact us today to learn more about how our
          digital marketing services can help your business
          grow and succeed online.
        </p>
        <Button label="Get your free proposal" />
      </div>
      <img
        className="hidden lg:flex absolute right-[60px] -top-5"
        src="./contact-illustration.svg"
      />
    </div>
  );
};

export default ContactUs;
