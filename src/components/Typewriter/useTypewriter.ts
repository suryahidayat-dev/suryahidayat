import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (words: string[], period: number = 2000) => {
  const [text, setText] = useState('');
  
  // Refs to track state without triggering re-renders during calculations
  const isDeleting = useRef(false);
  const loopNum = useRef(0);
  const typingSpeed = useRef(500);

  useEffect(() => {
    let timer: number;

    const handleType = () => {
      const i = loopNum.current % words.length;
      const fullText = words[i];

      setText((currentText) => {
        // Determine if we are adding or removing a character
        const nextText = isDeleting.current
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);

        // Replicate original speed logic: random delay between 100ms and 200ms
        let delta = 200 - Math.random() * 100;

        if (isDeleting.current) {
          delta /= 2; // Delete twice as fast
        }

        // Check if word is complete (pause before deleting)
        if (!isDeleting.current && nextText === fullText) {
          delta = period;
          isDeleting.current = true;
        } 
        // Check if word is fully deleted (pause before typing next)
        else if (isDeleting.current && nextText === '') {
          isDeleting.current = false;
          loopNum.current++;
          delta = 500;
        }

        typingSpeed.current = delta;
        return nextText;
      });

      // Schedule the next tick
      timer = globalThis.setTimeout(handleType, typingSpeed.current);
    };

    // Start the typing loop
    timer = globalThis.setTimeout(handleType, typingSpeed.current);

    // Cleanup function to prevent memory leaks if component unmounts
    return () => globalThis.clearTimeout(timer);
  }, [words, period]); // Dependencies for the effect

  return text;
};