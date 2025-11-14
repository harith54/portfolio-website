"use client";

import Image from "next/image";
import Typewriter from "./Typewriter";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-16 bg-[var(--bg-primary)] text-[var(--text-primary)] relative"
    >
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #00a3a9 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10 max-w-2xl">
        <Typewriter />

        <div className="space-y-4 mt-12 lg:mt-16">
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light">
            <span className="text-[var(--accent-purple)]">
              Computer Science & Engineering
            </span>
            <br />
            <span className="text-[var(--text-muted)]">@</span> The Ohio State
            University
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 text-base">
            <span className="px-3 py-1 bg-[var(--bg-tertiary)] rounded-full border border-[var(--border-color)] text-[var(--text-secondary)]">
              Class of{" "}
              <span className="text-[var(--accent-teal)] font-medium">
                2027
              </span>
            </span>
            <span className="px-3 py-1 bg-[var(--bg-tertiary)] rounded-full border border-[var(--border-color)] text-[var(--text-secondary)]">
              GPA:{" "}
              <span className="text-[var(--accent-orange)] font-medium">
                3.93
              </span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/harithmadani"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-lg flex items-center justify-center hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#0077b5] transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 bg-[#0077b5] blur-sm transition-opacity duration-300"></div>
            </a>

            <a
              href="https://github.com/harith54"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-lg flex items-center justify-center hover:border-[var(--accent-purple)] hover:bg-[var(--accent-purple)]/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-purple)] transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 bg-[var(--accent-purple)] blur-sm transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center z-10">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#00a3a9] shadow-2xl transition-all duration-300 relative">
            <Image
              src="/headshot.JPG"
              alt="Harith Madani"
              width={384}
              height={384}
              className="object-cover object-top w-full h-full scale-110"
              priority
            />
          </div>

          {/* Simple floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--accent-orange)] rounded-full opacity-60"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[var(--accent-purple)] rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
