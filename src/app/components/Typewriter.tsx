"use client";

import { useState, useEffect } from "react";

export default function Typewriter() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, my name is Harith Madani!";
  const speed = 80;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Hide cursor after 5 seconds of completion
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 5000);

      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, fullText, speed]);

  return (
    <div className="h-[3.5rem] md:h-[4rem] lg:h-[5rem] flex items-start">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-[var(--accent-teal)] font-medium leading-tight">
        {text}
        {showCursor && (
          <span className="animate-pulse text-[var(--accent-orange)] ml-1">
            |
          </span>
        )}
      </h1>
    </div>
  );
}
