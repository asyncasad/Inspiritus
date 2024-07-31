import { cn } from '@/lib/utils';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'outline' | 'green';
  label: string;
  fullWidth?: boolean;
  overRideCss?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'dark',
  label,
  fullWidth = false,
  overRideCss,
  ...props
}) => {
  return (
    <button
      className={cn(
        'py-5 text-center px-[35px] rounded-lg text-lg w-max',
        {
          'bg-dark text-white': variant === 'dark',
        },
        {
          'border border-dark text-dark':
            variant === 'outline',
        },
        {
          'bg-green text-dark': variant === 'green',
        },
        {
          'w-full': fullWidth,
        },
        overRideCss
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
