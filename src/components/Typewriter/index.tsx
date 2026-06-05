import React from 'react';
import { useTypewriter } from './useTypewriter';

const Typewriter: React.FC = () => {
  // Tip: Since you are putting "I'm " outside the component, 
  // you might want to update the words so it reads correctly!
  const words = [
    "an A.",
  ];
  
  const text = useTypewriter(words, 2000);

  return (
    <span className="border-r-[0.08em] border-current pr-1">
      {text}
    </span>
  );
};

export default Typewriter;