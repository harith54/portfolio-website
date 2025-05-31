"use client";

import Image from "next/image";
import Typewriter from "./Typewriter";

export default function About() {
  // Enhanced smooth scroll function
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navHeight = 80; // Height of the fixed navbar
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle click events for smooth scrolling
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };

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

        <div className="space-y-4">
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
        </div>

        <p className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed font-light">
          Passionate about building innovative solutions through code.
          <span className="text-[var(--accent-teal)]">
            {" "}
            Currently exploring
          </span>{" "}
          full-stack development, machine learning, and system design while
          pursuing my degree at OSU.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#experience"
            onClick={(e) => handleSectionClick(e, "experience")}
            className="group px-8 py-3 bg-transparent border-2 border-[#00a3a9] text-[#00a3a9] rounded-lg hover:bg-[#00a3a9] hover:text-black transition-all duration-300 font-medium text-center cursor-pointer"
          >
            <span className="flex items-center justify-center gap-2">
              View My Experience
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleSectionClick(e, "contact")}
            className="px-8 py-3 bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] text-[var(--text-primary)] rounded-lg hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)] transition-all duration-300 font-medium text-center cursor-pointer"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center z-10">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#00a3a9] shadow-2xl hover:scale-105 transition-all duration-500 relative">
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
