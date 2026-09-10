import { Pill } from "../../../shared/components/Pill";
import { skillGroups } from "../data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="mb-20">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
          <p className="mt-4 text-slate-300">
            I love bridging the gap between design and engineering. When I&apos;m not coding, you can find me travelling.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => <Pill key={skill} className={group.color}>{skill}</Pill>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
