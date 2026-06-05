import React from 'react';
import { useTypewriter } from './useTypewriter';

const Typewriter: React.FC = () => {
  const words = [
    "a Software Developer",
    "a Physicist"
  ];
  
  const text = useTypewriter(words, 2000);

  return (
    <span className="border-r-[0.08em] border-current pr-1">
      {text}
    </span>
  );
};

export default Typewriter;