export type IconName = "linkedin" | "github" | "instagram" | "email";

export interface Highlight { title: string; description: string }
export interface SkillGroup { title: string; color: string; skills: readonly string[] }
export interface SocialLink { name: string; icon: IconName; href: string; color: string }

export const roles = ["a Software Developer", "a Physicist"] as const;

export const highlights: readonly Highlight[] = [
  { title: "Design-led", description: "Readable interfaces, clean motion, and pixel-perfect polish." },
  { title: "Reliable", description: "Modern architecture with fast load times and clear structure." },
  { title: "Growth-ready", description: "Cloud-ready tooling and strong engineering practices." },
];

export const skillGroups: readonly SkillGroup[] = [
  { title: "Frontend & Mobile", color: "bg-cyan-500/10 text-cyan-200", skills: ["JSF (PrimeFaces)", "React (JS/TS)", "Flutter (Android/iOS)"] },
  { title: "Backend & Languages", color: "bg-emerald-500/10 text-emerald-200", skills: ["Java (Core/Spring Boot/Quarkus)", "Node.js (Express)", "Kotlin", "Go (Gin)"] },
  { title: "Data & Infrastructure", color: "bg-violet-500/10 text-violet-200", skills: ["RDBMS (PostgreSQL/MySQL)", "NoSQL (Apache Solr)", "Cache (Redis/Memcached)", "Message Broker (Apache Kafka/RabbitMQ)", "Docker", "Linux"] },
];

export const socialLinks: readonly SocialLink[] = [
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/suryasatriah/", color: "bg-blue-600" },
  { name: "GitHub", icon: "github", href: "https://github.com/suryahidayat-dev", color: "bg-gray-800" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/suryasatriah/", color: "bg-pink-600" },
  { name: "Email", icon: "email", href: "mailto:hello.suryahidayat@gmail.com", color: "bg-red-500" },
];
