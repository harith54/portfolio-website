// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-teal-400 text-xl font-semibold">
          MyPortfolio
        </Link>

        <div className="hidden md:flex gap-6 text-sm">
          <a
            href="#about"
            className="hover:text-[var(--accent-teal)] transition"
          >
            About
          </a>

          <a href="#experience" className="hover:text-teal-400 transition">
            Experience
          </a>
          <Link href="/projects" className="hover:text-teal-400 transition">
            Projects
          </Link>
          <a href="#contact" className="hover:text-teal-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
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
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-gray-900 text-sm">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-teal-400"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="hover:text-teal-400"
          >
            Experience
          </a>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-teal-400"
          >
            Projects
          </Link>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-teal-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
