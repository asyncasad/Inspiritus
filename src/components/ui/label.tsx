import { cn } from '@/lib/utils';

interface LabelProps {
  label: string;
  variant?: 'grey' | 'green';
}

const Label: React.FC<LabelProps> = ({
  label,
  variant = 'green',
}) => {
  return (
    <div
      className={cn(
        'rounded-xl px-[7px] ~text-[26px]/[30px] font-medium w-max',
        { 'bg-green': variant === 'green' },
        { 'bg-grey': variant === 'grey' }
      )}
    >
      {label}
    </div>
  );
};

export default Label;
