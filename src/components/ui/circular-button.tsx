import React from 'react';
import { Icons } from '../icons';

interface CircularButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
}

const CircularButton: React.FC<CircularButtonProps> = ({
  isOpen = false,
  ...props
}) => {
  return (
    <button
      className="~h-[30px]/[58px] ~w-[30px]/[58px] flex items-center justify-center border border-dark rounded-full p-2"
      {...props}
    >
      {!isOpen ? <Icons.plus_icon /> : <Icons.minus_icon />}
    </button>
  );
};

export default CircularButton;
