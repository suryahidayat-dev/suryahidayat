import { highlights } from "../data/portfolio";
import { Typewriter } from "./Typewriter";

export function HeroSection() {
  return (
    <header className="mb-20">
      <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/90 dark:shadow-[0_40px_120px_-40px_rgba(15,23,42,0.8)]">
        <p className="mb-4 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
          Full-stack engineering + product feeling
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
          Hi, I&apos;m Surya <span aria-hidden="true" className="inline-block text-cyan-500 dark:text-cyan-300">👋</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          I build polished digital experiences with a focus on reliability,
          performance, and thoughtful design. <Typewriter />
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/20">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">{highlight.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </header>
  );
}
