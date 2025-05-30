"use client";

import { useState, useEffect } from "react";

export default function Typewriter() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, my name is Harith Madani.";
  const speed = 100;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, speed]);

  return (
    <h1 className="text-2xl md:text-3xl font-mono text-[var(--accent-teal)]">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
