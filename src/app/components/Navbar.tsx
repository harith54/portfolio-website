"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-color)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-[var(--accent-teal)] text-xl font-semibold hover:text-[var(--accent-teal-dark)] transition-colors font-mono"
        >
          <span className="text-[var(--text-primary)]">{"<"}</span>
          HarithM
          <span className="text-[var(--text-primary)]">{"/>"}</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a
            href="#about"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors relative group"
          >
            <span className="text-[var(--accent-orange)]">01.</span> About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-teal)] group-hover:w-full transition-all duration-300"></span>
          </a>

          <a
            href="#experience"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors relative group"
          >
            <span className="text-[var(--accent-orange)]">02.</span> Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-teal)] group-hover:w-full transition-all duration-300"></span>
          </a>

          <Link
            href="/projects"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors relative group"
          >
            <span className="text-[var(--accent-orange)]">03.</span> Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-teal)] group-hover:w-full transition-all duration-300"></span>
          </Link>

          <a
            href="#contact"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors relative group"
          >
            <span className="text-[var(--accent-orange)]">04.</span> Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-teal)] group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-[var(--accent-teal)] hover:text-[var(--accent-teal-dark)] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-[var(--bg-secondary)]/95 backdrop-blur-md border-b border-[var(--border-color)] text-sm font-medium">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors py-2"
          >
            <span className="text-[var(--accent-orange)]">01.</span> About
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors py-2"
          >
            <span className="text-[var(--accent-orange)]">02.</span> Experience
          </a>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors py-2"
          >
            <span className="text-[var(--accent-orange)]">03.</span> Projects
          </Link>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors py-2"
          >
            <span className="text-[var(--accent-orange)]">04.</span> Contact
          </a>
        </div>
      )}
    </nav>
  );
}
