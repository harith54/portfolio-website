"use client";

import { useState, useEffect } from "react";

export default function Typewriter() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const line1 = "Hi!";
  const line2 = "My name is Harith Madani!";
  const fullText = line1 + line2;
  const speed = 120;
  const pauseDuration = 800; // Pause after "Hi!"

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);

        // Pause after typing "Hi,"
        if (currentIndex + 1 === line1.length) {
          setIsPaused(true);
        }
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Hide cursor after 5 seconds of completion
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 5000);

      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, fullText, isPaused]);

  const displayLine1 = text.slice(0, line1.length);
  const displayLine2 = text.slice(line1.length);
  const cursorOnLine1 = currentIndex <= line1.length;

  return (
    <div className="h-[5rem] md:h-[6rem] lg:h-[7rem] flex flex-col justify-start mb-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-medium leading-tight">
        <span className="text-[var(--accent-teal)]">
          {displayLine1}
          {showCursor && cursorOnLine1 && (
            <span className="animate-pulse text-[var(--accent-orange)] ml-1">
              |
            </span>
          )}
        </span>
        <br />
        <span className="text-[var(--accent-teal)]">
          {displayLine2}
          {showCursor && !cursorOnLine1 && (
            <span className="animate-pulse text-[var(--accent-orange)] ml-1">
              |
            </span>
          )}
        </span>
      </h1>
    </div>
  );
}
