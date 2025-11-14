"use client";

import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = [
    {
      id: "nutrifit",
      title: "NutriFit",
      category: "Full-Stack",
      description:
        "Health and wellness platform with nutrition tracking, meal planning, and 100+ workout database with AI-powered insights.",
      tech: ["Python", "Flask", "React", "SQLite", "USDA API"],
      github: "https://github.com/sareemmomin21/Nutri-Fit",
    },
    {
      id: "jpmorgan-hackathon",
      title: "AlumNet Platform",
      category: "Full-Stack",
      description:
        "Winning hackathon project for JPMorgan Chase Code For Good. Alumni engagement platform built for nonprofit organizations.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Drizzle ORM",
        "PostgreSQL",
      ],
      github: "https://github.com/cfgcolumbus24/Team-10",
    },
    {
      id: "myles-travel-ai",
      title: "Myles Travel AI",
      category: "AI/ML",
      description:
        "Won FactSet MESH hackathon. AI travel assistant integrating ChatGPT-4 with Yelp, Google Flights, and Reddit APIs for personalized recommendations.",
      tech: ["Python", "ChatGPT-4 API", "Yelp API", "Google Flights API"],
      github: null,
    },
  ];

  const otherProjects = [
    {
      id: "techknow",
      title: "TechKnow CLI",
      description: "Terminal-based LeetCode prep tool with Gemini AI feedback.",
      tech: ["Python", "Google Gemini API", "SQLite"],
      github: "https://github.com/keirannnelson/TechKnow",
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      description:
        "Real-time weather app with city search and dynamic visualization.",
      tech: ["React", "Weather API", "CSS"],
      github: "https://github.com/harith54/weather-app-react",
    },
    {
      id: "todo-app",
      title: "Task Manager",
      description: "Clean to-do list with completion tracking and persistence.",
      tech: ["React", "LocalStorage", "CSS"],
      github: "https://github.com/harith54/to-do-list-react",
    },
    {
      id: "tag-cloud",
      title: "Tag Cloud Generator",
      description:
        "Java app generating HTML tag clouds with frequency-based sizing.",
      tech: ["Java", "HTML", "File I/O"],
      github: null,
    },
    {
      id: "crypto-utils",
      title: "Cryptographic Utilities",
      description: "Mathematical tools for RSA and cryptographic algorithms.",
      tech: ["Java", "Number Theory"],
      github: null,
    },
    {
      id: "calculator",
      title: "Natural Number Calculator",
      description: "GUI calculator for arbitrarily large natural numbers.",
      tech: ["Java", "Swing", "MVC"],
      github: null,
    },
  ];

  const displayedOther = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #00a3a9 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-[#00a3a9] mb-4">
            <span className="text-[var(--accent-orange)]">03.</span> Projects
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-to-b from-[var(--accent-teal)] to-[var(--accent-orange)]" />
            Featured
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 hover:border-[#00a3a9]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a9]/10 flex flex-col"
              >
                <div className="mb-3">
                  <span className="px-3 py-1 bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-3 hover:text-[var(--accent-teal)] transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-muted)] rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-[var(--text-muted)] text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-to-b from-[var(--accent-purple)] to-[var(--accent-orange)]" />
            More Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedOther.map((project) => (
              <div
                key={project.id}
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-5 hover:border-[#00a3a9]/50 transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2 hover:text-[var(--accent-teal)] transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-[var(--text-secondary)] mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-muted)] rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Toggle button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-lg hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] transition-all duration-300 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              ) : (
                <>
                  View All Projects
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
