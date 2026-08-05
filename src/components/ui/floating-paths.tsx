"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingPathsBackground({
  position = -1,
  children,
  className,
}: {
  position?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const paths = useMemo(() => {
    return Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      width: 0.8 + (i % 8) * 0.15,
      duration: 18 + (i % 6) * 3,
    }));
  }, [position]);

  return (
    <div className={cn("w-full relative overflow-hidden bg-black", className)}>
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full text-amber-500/25"
          viewBox="0 0 696 316"
          fill="none"
        >
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={0.12 + (path.id % 4) * 0.05}
              initial={{ pathLength: 0.35, pathOffset: 0, opacity: 0.45 }}
              animate={{
                pathOffset: [0, 1],
              }}
              transition={{
                duration: path.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
