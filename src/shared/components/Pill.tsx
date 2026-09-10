import type { PropsWithChildren } from "react";

interface PillProps extends PropsWithChildren {
  className?: string;
}

export function Pill({ children, className = "" }: PillProps) {
  return (
    <span className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-slate-100 transition duration-200 hover:bg-white/10 ${className}`}>
      {children}
    </span>
  );
}
