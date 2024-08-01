import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Icons } from '../icons';

const CircularLink = ({
  href,
  variant,
}: {
  href: string;
  variant: 'green' | 'dark';
}) => {
  return (
    <Link
      className={cn(
        `h-10 w-10 rounded-full cursor-pointer flex items-center justify-center bg-dark`,
        {
          'bg-grey': variant === 'dark',
        }
      )}
      href={href}
    >
      <Icons.arrow_icon
        className={cn(
          {
            'text-green ': variant === 'green',
          },
          {
            'text-dark ': variant === 'dark',
          }
        )}
      />
    </Link>
  );
};

export default CircularLink;
