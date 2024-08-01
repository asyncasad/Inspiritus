'use client';
import { cn } from '@/lib/utils';
import CircularLink from './ui/circular-link';
import Label from './ui/label';

interface ServiceCardProps {
  variant: 'green' | 'grey' | 'dark';
  labelVariant: 'green' | 'grey';
  labelOne: string;
  labelTwo: string;
  cardImage: string;
  linkVariant?: 'green' | 'dark';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  labelVariant,
  variant,
  labelOne,
  labelTwo,
  cardImage,
  linkVariant = 'green',
}) => {
  return (
    <div
      className={cn(
        'flex flex-col md:grid md:grid-cols-2 gap-5 h-[310px]   justify-center  rounded-[45px] border border-dark  p-[50px] transition duration-200 ease-in-out -translate-x-[5px] -translate-y-[5px] shadow-card',
        { 'bg-green': variant === 'green' },
        { 'bg-dark': variant === 'dark' },
        { 'bg-grey': variant === 'grey' }
      )}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col">
          <Label label={labelOne} variant={labelVariant} />
          <Label label={labelTwo} variant={labelVariant} />
        </div>
        <div className="md:flex flex-row gap-5 hidden">
          <CircularLink href="/" variant={linkVariant} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 md:flex md:items-center">
        <div className="flex flex-row items-end gap-5 md:hidden">
          <CircularLink href="/" variant={linkVariant} />
        </div>
        <img src={cardImage} />
      </div>
    </div>
  );
};

export default ServiceCard;
