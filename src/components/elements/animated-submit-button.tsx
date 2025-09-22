'use client';

import * as React from 'react';
import { useRef, useState, useEffect } from 'react';

import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Round = 'md' | 'full';

export interface AnimatedSubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderColor?: string;
  borderWidth?: number;
  animationDuration?: number;
  gap?: number; // (reserved for future layout use)
  rounded?: Round;
  asChild?: boolean;
  wrapperClassName?: string;
  loading?: boolean; // optional: show loading state
}

export default function AnimatedSubmitButton({
  children,
  className,
  borderColor = 'var(--primary)',
  borderWidth = 2,
  animationDuration = 0.25,
  rounded = 'full',
  asChild = false,
  wrapperClassName,
  loading = false,
  type = 'button', // IMPORTANT: default remains "button"; pass type="submit" in forms
  disabled,
  onMouseEnter,
  onMouseLeave,
  ...buttonProps
}: AnimatedSubmitButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const pathRef = useRef<SVGRectElement>(null);
  const [, setPathLength] = useState(0);

  const borderRadius = rounded === 'full' ? '32' : '6';

  useEffect(() => {
    if (pathRef.current) {
      const box = pathRef.current.getBBox();
      const length = box.width * 2 + box.height * 2;
      setPathLength(length);
    }
  }, []);

  return (
    <div
      className={cn('relative transition-transform', wrapperClassName)}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {/* Outer SVG Border */}
      <div className="pointer-events-none absolute -inset-1">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <motion.rect
            ref={pathRef}
            x={borderWidth / 2}
            y={borderWidth / 2}
            width={`calc(100% - ${borderWidth}px)`}
            height={`calc(100% - ${borderWidth}px)`}
            rx={borderRadius}
            ry={borderRadius}
            fill="none"
            stroke={borderColor}
            strokeWidth={borderWidth}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: animationDuration, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <Button
        size="lg"
        className={cn(
          'w-full',
          rounded === 'full' ? 'rounded-full' : 'rounded-md',
          className,
        )}
        asChild={asChild}
        type={type}
        disabled={disabled || loading}
        {...buttonProps}
      >
        {/* If you want a spinner, replace with your spinner component */}
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <span className="animate-pulse">Sending…</span>
          </span>
        ) : (
          children
        )}
      </Button>
    </div>
  );
}
