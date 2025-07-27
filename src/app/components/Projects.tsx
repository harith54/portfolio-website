"use client";
import React, { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projectCategories = [
    { id: "all", label: "All Projects", count: 16 },
    { id: "fullstack", label: "Full-Stack", count: 3 },
    { id: "ai", label: "AI/ML", count: 3 },
    { id: "academic", label: "Academic", count: 8 },
    { id: "frontend", label: "Frontend", count: 3 },
  ];

  const featuredProjects = [
    {
      id: "nutrifit",
      title: "NutriFit",
      category: "fullstack",
      featured: true,
      description:
        "Comprehensive health and wellness platform combining nutrition tracking with fitness management",
      longDescription:
        "Full-stack application with personalized recommendations, meal planning, 100+ workout database, and AI-powered insights",
      tech: ["Python", "Flask", "React", "SQLite", "USDA API"],
      highlights: [
        "Comprehensive nutrition tracking system",
        "Extensive workout database with routines",
        "Personalized meal planning features",
        "REST API with 30+ endpoints",
      ],
      links: {
        github: "https://github.com/harith54/nutrifit",
      },
    },
    {
      id: "jpmorgan-hackathon",
      title: "AlumNet Platform",
      category: "fullstack",
      featured: true,
      description:
        "Code For Good Hackathon project - Alumni engagement platform for nonprofit organizations",
      longDescription:
        "Built during JPMorgan Chase Code For Good Hackathon. Full-stack platform addressing operational and engagement challenges for nonprofit organizations",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Drizzle ORM",
        "PostgreSQL",
      ],
      highlights: [
        "Won hackathon competition",
        "Real nonprofit partner collaboration",
        "Social-style feed interface",
        "Complete user authentication system",
      ],
      links: {
        github: "https://github.com/harith54/code-for-good",
      },
    },
    {
      id: "myles-travel-ai",
      title: "Myles Travel AI",
      category: "ai",
      featured: true,
      description:
        "AI-powered travel assistant using ChatGPT-4 API with specialized travel data sources",
      longDescription:
        "Intelligent travel planning assistant that integrates ChatGPT-4 with multiple APIs including language, Yelp, Reddit, and culture APIs to provide accurate, personalized recommendations beyond standard chatbot capabilities",
      tech: [
        "Python",
        "ChatGPT-4 API",
        "Yelp API",
        "Google Flights API",
        "Reddit API",
      ],
      highlights: [
        "Multi-API integration for comprehensive travel data",
        "Cultural norms and social insights discovery",
        "Integrated cheap flight finder functionality",
        "Won FactSet MESH Externship hackathon",
      ],
      links: {},
    },
    {
      id: "techknow",
      title: "TechKnow CLI",
      category: "ai",
      featured: true,
      description:
        "AI-powered LeetCode preparation tool with intelligent feedback system",
      longDescription:
        "Terminal-based technical interview prep tool integrating Google's Gemini API for personalized feedback on coding problems",
      tech: ["Python", "Google Gemini API", "SQLite", "CLI"],
      highlights: [
        "AI-driven feedback system",
        "LeetCode-style problems database",
        "Difficulty-based questioning",
        "Modular Python architecture",
      ],
      links: {
        github: "https://github.com/harith54/techknow",
      },
    },
  ];

  const otherProjects = [
    {
      id: "tag-cloud",
      title: "Tag Cloud Generator",
      category: "academic",
      description:
        "Java application that processes text files and generates HTML tag clouds with frequency-based sizing",
      tech: ["Java", "HTML", "File I/O"],
      links: {},
      highlights: [
        "Word frequency analysis",
        "HTML generation",
        "Visual data representation",
      ],
    },
    {
      id: "crypto-utils",
      title: "Cryptographic Utilities",
      category: "academic",
      description:
        "Mathematical tools for cryptographic algorithms including modular arithmetic and primality testing",
      tech: ["Java", "Number Theory", "Cryptography"],
      links: {},
      highlights: [
        "RSA algorithm support",
        "Efficient exponentiation",
        "Prime number generation",
      ],
    },
    {
      id: "calculator",
      title: "Natural Number Calculator",
      category: "academic",
      description:
        "GUI calculator supporting arithmetic operations on arbitrarily large natural numbers",
      tech: ["Java", "Swing", "MVC Pattern"],
      links: {},
      highlights: [
        "Large number handling",
        "MVC architecture",
        "Interactive GUI",
      ],
    },
    {
      id: "rss-aggregator",
      title: "RSS Aggregator",
      category: "academic",
      description:
        "Multi-feed RSS parser that compiles news from various sources into a unified HTML dashboard",
      tech: ["Java", "XML Parsing", "HTML"],
      links: {},
      highlights: ["Multi-feed support", "XML DOM parsing", "News compilation"],
    },
    {
      id: "glossary",
      title: "Interactive Glossary",
      category: "academic",
      description:
        "HTML glossary generator with automatic cross-referencing and alphabetical organization",
      tech: ["Java", "HTML", "String Processing"],
      links: {},
      highlights: ["Automatic linking", "HTML generation", "Cross-referencing"],
    },
    {
      id: "sorting-machine",
      title: "HeapSort Machine",
      category: "academic",
      description:
        "Custom data structure implementing efficient sorting using heap-based algorithms",
      tech: ["Java", "Data Structures", "Algorithms"],
      links: {},
      highlights: [
        "Custom heap implementation",
        "Batch sorting optimization",
        "ADT design",
      ],
    },
    {
      id: "bl-parser",
      title: "BL Language Parser",
      category: "academic",
      description:
        "Recursive descent parser for a custom block language with tokenization and AST generation",
      tech: ["Java", "Compiler Design", "Parsing"],
      links: {},
      highlights: [
        "Recursive descent parsing",
        "AST generation",
        "Language interpreter",
      ],
    },
    {
      id: "assembly-labs",
      title: "Assembly Programming Labs",
      category: "academic",
      description:
        "Collection of x86-64 assembly programs exploring low-level operations and system integration",
      tech: ["Assembly", "C", "x86-64"],
      links: {},
      highlights: [
        "Low-level programming",
        "C-Assembly integration",
        "System-level operations",
      ],
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      category: "frontend",
      description:
        "Real-time weather application with city search and dynamic weather data visualization",
      tech: ["React", "Weather API", "CSS"],
      links: { github: "https://github.com/harith54/weather-app-react" },
      highlights: [
        "Real-time API integration",
        "Dynamic UI updates",
        "Responsive design",
      ],
    },
    {
      id: "trivia-game",
      title: "Interactive Trivia Game",
      category: "frontend",
      description:
        "Quiz application with multiple-choice questions, score tracking, and immediate feedback",
      tech: ["React", "JavaScript", "CSS"],
      links: {},
      highlights: [
        "Interactive gameplay",
        "Score tracking",
        "Dynamic question flow",
      ],
    },
    {
      id: "todo-app",
      title: "Task Management App",
      category: "frontend",
      description:
        "Clean and functional to-do list manager with task completion and persistence features",
      tech: ["React", "LocalStorage", "CSS"],
      links: { github: "https://github.com/harith54/to-do-list-react" },
      highlights: ["CRUD operations", "State management", "Local persistence"],
    },
  ];

  const filteredFeatured = featuredProjects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const filteredOther = otherProjects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const GitHubContributions = () => {
    return (
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 hover:border-[#00a3a9]/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-[var(--accent-teal)]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">
            GitHub Activity
          </h3>
        </div>

        {/* Placeholder for GitHub contribution graph */}
        <div className="bg-[var(--bg-tertiary)] border border-[var(--border-color)]/50 rounded-lg p-6 text-center">
          <p className="text-[var(--text-secondary)] mb-4">
            View my coding activity and contribution patterns
          </p>
          <div className="grid grid-cols-12 gap-1 mb-4">
            {[...Array(84)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-sm ${
                  Math.random() > 0.7
                    ? "bg-[var(--accent-teal)]"
                    : Math.random() > 0.5
                    ? "bg-[var(--accent-teal)]/60"
                    : Math.random() > 0.3
                    ? "bg-[var(--accent-teal)]/30"
                    : "bg-[var(--bg-secondary)]"
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-[var(--text-muted)]">
            <span>Less</span>
            <span>More</span>
          </div>
          <a
            href="https://github.com/harith54"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] transition-all duration-300 text-sm"
          >
            View on GitHub
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden"
    >
      {/* Animated background */}
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

      {/* Floating elements */}
      <div
        className="absolute top-20 left-10 w-4 h-4 border border-[var(--accent-purple)]/30 rotate-45 animate-spin"
        style={{ animationDuration: "15s" }}
      />
      <div className="absolute top-1/3 right-8 w-6 h-6 border border-[var(--accent-orange)]/40 rounded-full animate-pulse" />
      <div
        className="absolute bottom-1/4 left-12 w-3 h-3 bg-[var(--accent-teal)]/30 animate-bounce"
        style={{ animationDuration: "4s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-[#00a3a9] mb-4">
            <span className="text-[var(--accent-orange)]">04.</span> Projects
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            From full-stack applications to AI-powered tools, here&apos;s a
            showcase of my technical journey
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium ${
                activeFilter === category.id
                  ? "bg-[var(--accent-teal)] text-black border-[var(--accent-teal)]"
                  : "bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)]"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {filteredFeatured.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[var(--accent-teal)] to-[var(--accent-orange)]" />
              Featured Projects
            </h3>

            <div className="grid gap-8">
              {filteredFeatured.map((project, index) => (
                <div
                  key={project.id}
                  className={`group bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:border-[#00a3a9]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00a3a9]/10 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex flex-col lg:flex`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project image/preview */}
                  <div className="lg:w-1/2 bg-[var(--bg-tertiary)] relative overflow-hidden">
                    <div className="aspect-video lg:aspect-square flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[var(--accent-teal)] to-[var(--accent-orange)] rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-black">
                            {project.title.substring(0, 2)}
                          </span>
                        </div>
                        {/* <p className="text-[var(--text-muted)] text-sm">
                          Project Preview
                        </p> */}
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-[var(--accent-teal)]/20 via-transparent to-[var(--accent-orange)]/20 transition-opacity duration-300 ${
                        hoveredProject === project.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* Project content */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] rounded-full text-xs font-medium uppercase tracking-wide">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-muted)] rounded-full text-xs">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-teal)] transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-sm text-[var(--text-muted)] mb-6">
                      {project.longDescription}
                    </p>

                    {/* Key highlights */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-[var(--accent-purple)] mb-2 uppercase tracking-wide">
                        Key Highlights
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.slice(0, 4).map((highlight, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                          >
                            <span className="text-[var(--accent-teal)] text-xs">
                              ▸
                            </span>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-secondary)] rounded-lg text-xs font-medium hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] transition-all duration-300 text-sm"
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {filteredOther.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[var(--accent-purple)] to-[var(--accent-orange)]" />
              Additional Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOther.map((project) => (
                <div
                  key={project.id}
                  className="group bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 hover:border-[#00a3a9]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a9]/10 hover:transform hover:scale-[1.02]"
                >
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-orange)] rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {project.title.substring(0, 2)}
                      </span>
                    </div>
                    <span className="px-2 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-muted)] rounded text-xs">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-teal)] transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key highlights */}
                  {project.highlights && (
                    <div className="mb-4">
                      <div className="space-y-1">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-[var(--text-muted)]"
                          >
                            <span className="text-[var(--accent-teal)] text-xs">
                              •
                            </span>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-muted)] rounded text-xs hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-[var(--text-muted)] text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] transition-all duration-300 text-xs"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Contributions Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-[var(--accent-teal)] to-[var(--accent-purple)]" />
            Development Activity
          </h3>
          <GitHubContributions />
        </div>
      </div>
    </section>
  );
}
