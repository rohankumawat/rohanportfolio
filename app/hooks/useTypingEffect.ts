// hooks/useTypingEffect.ts

import { useState, useEffect } from 'react';

const useTypingEffect = (
  phrases: string[],
  typingSpeed: number = 150,
  delay: number = 2000
) => {
  const [index, setIndex] = useState(0); // To keep track of the current phrase
  const [subIndex, setSubIndex] = useState(0); // To keep track of the character index within the current phrase
  const [isDeleting, setIsDeleting] = useState(false); // To determine if it's currently deleting
  const [blink, setBlink] = useState(true); // To manage cursor blinking effect

  const staticText = "I'm "; // Static text that stays constant

  useEffect(() => {
    if (index === phrases.length) return;

    // When the full phrase is typed out and not deleting, start the deleting phase after a delay
    if (subIndex === phrases[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (subIndex === 0 && isDeleting) {
      // When deletion is complete, move to the next phrase
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    // Adjust typing speed for typing vs. deleting
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    // Clear timeout on cleanup to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, phrases, typingSpeed, delay]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // The return value now always includes the static text "I'm " before the dynamic typing text
  return { text: `${staticText}${phrases[index].substring(0, subIndex)}${blink ? "|" : " "}` };
};

export default useTypingEffect;
