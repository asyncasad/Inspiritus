import { cn } from '@/lib/utils';

interface LabelProps {
  label: string;
  variant?: 'grey' | 'green';
  size?: 'sm' | 'regular';
}

const Label: React.FC<LabelProps> = ({
  label,
  variant = 'green',
  size = 'regular',
}) => {
  return (
    <div
      className={cn(
        'rounded-xl px-[7px] ~text-[26px]/[30px] font-medium w-max',
        { 'bg-green': variant === 'green' },
        { 'bg-grey': variant === 'grey' },
        { '~text-[16px]/[17px]': size === 'sm' }
      )}
    >
      {label}
    </div>
  );
};

export default Label;
