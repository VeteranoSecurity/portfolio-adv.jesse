import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export const AnimatedInput: React.FC<AnimatedInputProps> = ({
  label,
  icon,
  error,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value !== undefined && value !== '';

  return (
    <div className="relative my-3 w-full">
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 peer-focus:text-amber-400">
            {icon}
          </div>
        )}
        <input
          {...props}
          value={value}
          onChange={onChange}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          className={cn(
            'peer w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3.5 text-sm text-slate-100 placeholder-transparent outline-none transition-all duration-300',
            'focus:border-amber-500/80 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)]',
            icon ? 'pl-11' : 'pl-4',
            error ? 'border-red-500/80 focus:border-red-500' : '',
            className
          )}
          placeholder={label}
        />
        <motion.label
          initial={false}
          animate={{
            y: isFocused || hasValue ? -26 : 0,
            x: isFocused || hasValue ? (icon ? -8 : 0) : 0,
            scale: isFocused || hasValue ? 0.85 : 1,
            color: isFocused ? '#F59E0B' : hasValue ? '#94A3B8' : '#64748B',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={cn(
            'pointer-events-none absolute origin-left text-sm font-medium transition-all duration-200',
            icon ? 'left-11' : 'left-4',
            isFocused || hasValue ? 'top-2 bg-slate-950 px-1 py-0.5 rounded text-xs' : 'top-3.5'
          )}
        >
          {label}
        </motion.label>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-xs text-red-400 pl-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

interface AnimatedTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export const AnimatedTextArea: React.FC<AnimatedTextAreaProps> = ({
  label,
  icon,
  error,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value !== undefined && value !== '';

  return (
    <div className="relative my-3 w-full">
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-4 text-slate-400 transition-colors duration-200 peer-focus:text-amber-400">
            {icon}
          </div>
        )}
        <textarea
          {...props}
          value={value}
          onChange={onChange}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          rows={4}
          className={cn(
            'peer w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3.5 text-sm text-slate-100 placeholder-transparent outline-none transition-all duration-300',
            'focus:border-amber-500/80 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)]',
            icon ? 'pl-11' : 'pl-4',
            error ? 'border-red-500/80 focus:border-red-500' : '',
            className
          )}
          placeholder={label}
        />
        <motion.label
          initial={false}
          animate={{
            y: isFocused || hasValue ? -26 : 0,
            x: isFocused || hasValue ? (icon ? -8 : 0) : 0,
            scale: isFocused || hasValue ? 0.85 : 1,
            color: isFocused ? '#F59E0B' : hasValue ? '#94A3B8' : '#64748B',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={cn(
            'pointer-events-none absolute origin-left text-sm font-medium transition-all duration-200',
            icon ? 'left-11' : 'left-4',
            isFocused || hasValue ? 'top-2 bg-slate-950 px-1 py-0.5 rounded text-xs' : 'top-3.5'
          )}
        >
          {label}
        </motion.label>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-xs text-red-400 pl-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};
