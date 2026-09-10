import { AboutSection } from "../features/portfolio/components/AboutSection";
import { HeroSection } from "../features/portfolio/components/HeroSection";
import { SiteFooter } from "../features/portfolio/components/SiteFooter";
import { PageLayout } from "../shared/components/PageLayout";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <PageLayout>
        <HeroSection />
        <AboutSection />
        <SiteFooter />
      </PageLayout>
    </main>
  );
}

export default App;
