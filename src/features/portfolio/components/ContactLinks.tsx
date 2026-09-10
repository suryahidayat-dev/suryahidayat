import { socialLinks } from "../data/portfolio";

export function ContactLinks() {
  return (
    <nav aria-label="Social links" className="flex gap-4">
      {socialLinks.map(({ name, icon: Icon, href, color }) => (
        <a
          key={name}
          aria-label={name}
          className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${color}`}
          href={href}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          target={href.startsWith("http") ? "_blank" : undefined}
        >
          <Icon aria-hidden="true" size={22} />
        </a>
      ))}
    </nav>
  );
}
