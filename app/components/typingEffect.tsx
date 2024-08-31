// components/TypingEffect.tsx
"use client";

import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';

const TypingEffect: React.FC = () => {
  const { text } = useTypingEffect(
    ["a Software Developer.", "an AI Engineer.", "an ML Engineer.", "a Data Analyst."],
    150,
    2000
  );

  return (
    <h1 className="text-center text-lg font-semibold">
        {text}
    </h1>
  );
};

export default TypingEffect;
