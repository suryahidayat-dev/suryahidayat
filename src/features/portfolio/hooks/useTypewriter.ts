import { useEffect, useState } from "react";

interface TypewriterOptions {
  words: readonly string[];
  pauseDuration?: number;
  typingDuration?: number;
  deletingDuration?: number;
}

export function useTypewriter({
  words,
  pauseDuration = 2_000,
  typingDuration = 150,
  deletingDuration = 75,
}: TypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex] ?? "";

  useEffect(() => {
    if (words.length === 0) return;

    const wordIsComplete = characterCount === currentWord.length;
    const wordIsDeleted = characterCount === 0;
    const delay = wordIsComplete && !isDeleting
      ? pauseDuration
      : isDeleting
        ? deletingDuration
        : typingDuration;

    const timer = globalThis.setTimeout(() => {
      if (wordIsComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (wordIsDeleted && isDeleting) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setCharacterCount((count) => count + (isDeleting ? -1 : 1));
    }, delay);

    return () => globalThis.clearTimeout(timer);
  }, [characterCount, currentWord, deletingDuration, isDeleting, pauseDuration, typingDuration, words]);

  return currentWord.slice(0, characterCount);
}
