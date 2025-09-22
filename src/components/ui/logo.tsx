import React from 'react';
import { cn } from '@/lib/utils';
interface LogoProps {
  className?: string;
  wrapperClassName?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  wrapperClassName = '',
}) => {


  return (
    <div className={cn(``, wrapperClassName)}>
      <a href="/" className={cn(`relative block w-25 h-6`, className)}>
        <img
          src="/layout/nordic_charge_logo.png"
          alt="Nordic Charge Logo"
          className="object-contain size-full"
        />
    
     </a>
    </div>
  );
};

export default Logo;
