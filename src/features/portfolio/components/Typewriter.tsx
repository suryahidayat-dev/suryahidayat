import { roles } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";

export function Typewriter() {
  const text = useTypewriter({ words: roles });

  return (
    <span aria-live="polite" className="border-r-[0.08em] border-current pr-1">
      {text}
    </span>
  );
}
