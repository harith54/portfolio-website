"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

      // Close mobile menu after click
      setIsOpen(false);

      // Update active section
      setActiveSection(elementId);
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-color)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-[var(--accent-teal)] text-xl font-semibold hover:text-[var(--accent-teal-dark)] transition-colors font-mono"
        >
          <span className="text-[var(--text-primary)]">{"<"}</span>
          HarithM
          <span className="text-[var(--text-primary)]">{"/>"}</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a
            href="#about"
            onClick={(e) => handleSectionClick(e, "about")}
            className={`text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors relative group ${
              activeSection === "about" ? "text-[var(--accent-teal)]" : ""
            }`}
          >
            <span className="text-[var(--accent-orange)]">01.</span> About
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[var(--accent-teal)] transition-all duration-300 ${
                activeSection === "about" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>

          <a
            href="#experience"
            onClick={(e) => handleSectionClick(e, "experience")}
            className={`text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors relative group ${
              activeSection === "experience" ? "text-[var(--accent-teal)]" : ""
            }`}
          >
            <span className="text-[var(--accent-orange)]">02.</span> Experience
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[var(--accent-teal)] transition-all duration-300 ${
                activeSection === "experience"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>

          <a
            href="#skills"
            onClick={(e) => handleSectionClick(e, "skills")}
            className={`text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors relative group ${
              activeSection === "skills" ? "text-[var(--accent-teal)]" : ""
            }`}
          >
            <span className="text-[var(--accent-orange)]">03.</span> Skills
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[var(--accent-teal)] transition-all duration-300 ${
                activeSection === "skills" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>

          <a
            href="#projects"
            onClick={(e) => handleSectionClick(e, "projects")}
            className={`text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors relative group ${
              activeSection === "projects" ? "text-[var(--accent-teal)]" : ""
            }`}
          >
            <span className="text-[var(--accent-orange)]">04.</span> Projects
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[var(--accent-teal)] transition-all duration-300 ${
                activeSection === "projects"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleSectionClick(e, "contact")}
            className={`text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors relative group ${
              activeSection === "contact" ? "text-[var(--accent-teal)]" : ""
            }`}
          >
            <span className="text-[var(--accent-orange)]">05.</span> Contact
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[var(--accent-teal)] transition-all duration-300 ${
                activeSection === "contact"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-[var(--accent-teal)] hover:text-[var(--accent-teal-dark)] transition-all duration-300 relative group w-8 h-8 flex items-center justify-center"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "rotate-45 translate-y-0 top-2.5"
                    : "rotate-0 translate-y-0 top-1"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out top-2.5 ${
                  isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "-rotate-45 translate-y-0 top-2.5"
                    : "rotate-0 translate-y-0 top-4"
                }`}
              ></span>
            </div>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 bg-gradient-to-r from-[var(--accent-teal)] to-[var(--accent-orange)] blur-sm transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with smooth slide animation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 transform -translate-y-2"
        } overflow-hidden`}
      >
        <div className="bg-[var(--bg-secondary)]/98 backdrop-blur-lg border-b border-[var(--border-color)] shadow-xl">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-teal)]/5 via-transparent to-[var(--accent-orange)]/5"></div>

          {/* Floating dots animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-4 left-8 w-1 h-1 bg-[var(--accent-teal)]/40 rounded-full animate-bounce"></div>
            <div
              className="absolute top-8 right-12 w-1.5 h-1.5 bg-[var(--accent-orange)]/30 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-6 left-12 w-1 h-1 bg-[var(--accent-purple)]/40 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute bottom-4 right-8 w-2 h-2 bg-[var(--accent-teal)]/20 rounded-full animate-pulse"></div>
          </div>

          <div className="relative px-6 pb-8 pt-4 flex flex-col gap-2 text-sm font-medium">
            {[
              {
                href: "#about",
                number: "01",
                text: "About",
                sectionId: "about",
              },
              {
                href: "#experience",
                number: "02",
                text: "Experience",
                sectionId: "experience",
              },
              {
                href: "#skills",
                number: "03",
                text: "Skills",
                sectionId: "skills",
              },
              {
                href: "#projects",
                number: "04",
                text: "Projects",
                sectionId: "projects",
              },
              {
                href: "#contact",
                number: "05",
                text: "Contact",
                sectionId: "contact",
              },
            ].map((item, index) => (
              <div
                key={item.text}
                className={`transform transition-all duration-400 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[-20px] opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 80 + 150}ms` : "0ms",
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleSectionClick(e, item.sectionId)}
                  className={`group relative block py-3 px-4 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-teal)] hover:bg-[var(--bg-tertiary)]/50 transition-all duration-300 border border-transparent hover:border-[var(--accent-teal)]/20 ${
                    activeSection === item.sectionId
                      ? "text-[var(--accent-teal)] border-[var(--accent-teal)]/20"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent-orange)] font-mono text-xs">
                      {item.number}.
                    </span>
                    <span className="relative">
                      {item.text}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[var(--accent-teal)] transition-all duration-300 ${
                          activeSection === item.sectionId
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-gradient-to-r from-[var(--accent-teal)] to-[var(--accent-orange)] transition-opacity duration-300"></div>
                </a>
              </div>
            ))}

            {/* Bottom accent line */}
            <div
              className={`mt-4 h-0.5 bg-gradient-to-r from-[var(--accent-teal)] via-[var(--accent-purple)] to-[var(--accent-orange)] transform transition-all duration-500 ${
                isOpen ? "scale-x-100 opacity-60" : "scale-x-0 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
