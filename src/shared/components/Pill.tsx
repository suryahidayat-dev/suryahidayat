import type { PropsWithChildren } from "react";

interface PillProps extends PropsWithChildren {
  className?: string;
}

export function Pill({ children, className = "" }: PillProps) {
  return (
    <span className={`inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 transition duration-200 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 ${className}`}>
      {children}
    </span>
  );
}
