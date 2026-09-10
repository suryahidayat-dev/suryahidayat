import { ContactLinks } from "./ContactLinks";

export function SiteFooter() {
  return (
    <footer className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <ContactLinks />
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Surya Satria Hidayat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
