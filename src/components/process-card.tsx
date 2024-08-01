import { cn } from '@/lib/utils';
import { useState } from 'react';
import CircularButton from './ui/circular-button';

const ProcessCard = ({
  index,
  title,
  detail,
}: {
  index: number;
  title: string;
  detail: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        'rounded-[45px] border border-dark lg:py-[40px] lg:px-[60px] p-[30px]  bg-grey  -translate-x-[5px] -translate-y-[5px] shadow-card transition-all ease-in-out',
        {
          'bg-green': isOpen,
        }
      )}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-5">
          <h1 className="font-medium ~text-[30px]/[60px]">
            {index}
          </h1>
          <p className="~text-[18px]/[30px] font-medium">
            {title}
          </p>
        </div>
        <CircularButton
          isOpen={isOpen}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        />
      </div>
      {isOpen && (
        <div className="~mt-[15px]/[30px]">
          <hr className="border-0.5 border-dark"></hr>
          <div className="~mt-[15px]/[30px]">
            <p className="~text-[16px]/[18px]">{detail}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessCard;
