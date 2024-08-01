import ServiceCard from './service-card';
import Label from './ui/label';

const Services = () => {
  return (
    <div className="mt-[60px] md:mt-[140px] ">
      <div className="flex flex-col md:flex-row items-center   gap-[30px] md:gap-10">
        <Label label="Services" />
        <p className="~text-[18px]/[20px] text-center md:text-left md:max-w-[680px] ">
          At our digital marketing agency, we offer a range
          of services to help businesses grow and succeed
          online. These services include:
        </p>
      </div>
      <div className="md:mt-20 mt-10 flex flex-col gap-[30px] md:grid grid-cols-2 md:gap-10">
        <ServiceCard
          variant="grey"
          labelVariant="green"
          labelOne="Search engine"
          labelTwo="optimization"
          cardImage="./seo.svg"
        />
        <ServiceCard
          variant="green"
          labelVariant="grey"
          labelOne="Pay-per-click"
          labelTwo="advertising"
          cardImage="./advertising.svg"
        />
        <ServiceCard
          variant="dark"
          labelVariant="grey"
          labelOne="Social media"
          labelTwo="marketing"
          cardImage="./smm.svg"
          linkVariant="dark"
        />
        <ServiceCard
          variant="grey"
          labelVariant="green"
          labelOne="Email"
          labelTwo="marketing"
          cardImage="./emailm.svg"
        />
        <ServiceCard
          variant="green"
          labelVariant="grey"
          labelOne="Content"
          labelTwo="creation"
          cardImage="./content.svg"
        />
        <ServiceCard
          variant="dark"
          labelVariant="green"
          labelOne="Analytics and"
          labelTwo="tracking"
          cardImage="./analytics.svg"
          linkVariant="dark"
        />
      </div>
    </div>
  );
};

export default Services;
