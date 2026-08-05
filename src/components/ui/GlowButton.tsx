import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  glow = true,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-bold shadow-lg border border-amber-400/30 hover:from-amber-400 hover:to-yellow-500',
    secondary:
      'bg-slate-800/90 text-slate-100 border border-slate-700 hover:bg-slate-700/90 hover:border-slate-600',
    outline:
      'bg-slate-950/60 backdrop-blur-md text-amber-400 border border-amber-500/40 hover:border-amber-400 hover:bg-amber-500/10 hover:text-amber-300',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-medium transition-all duration-300 focus:outline-none cursor-pointer',
        sizeClasses[size],
        variantClasses[variant],
        glow && variant === 'primary' ? 'shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)]' : '',
        className
      )}
      {...props}
    >
      {/* Shimmer overlay effect */}
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      )}
      
      {icon && <span className="relative z-10 flex items-center">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
