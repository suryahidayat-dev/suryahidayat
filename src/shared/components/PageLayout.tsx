import type { PropsWithChildren } from "react";

export function PageLayout({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-12">{children}</div>;
}
