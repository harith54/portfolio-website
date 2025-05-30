"use client";

import { useEffect, useState } from "react";

export default function Typewriter() {
  const fullText = "Hi, my name is Harith Madani";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-mono text-teal-400">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
