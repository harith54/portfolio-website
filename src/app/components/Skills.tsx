import React from "react";
import type { JSX } from "react";

interface Skill {
  name: string;
  confidence: "High" | "Medium" | "Learning";
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

export default function Skills(): JSX.Element {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
      skills: [
        { name: "Python", confidence: "High" },
        { name: "JavaScript", confidence: "High" },
        { name: "HTML", confidence: "High" },
        { name: "Java", confidence: "Medium" },
        { name: "TypeScript", confidence: "Medium" },
        { name: "CSS", confidence: "Medium" },
        { name: "C", confidence: "Learning" },
        { name: "SQL", confidence: "Learning" },
        { name: "R", confidence: "Learning" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      skills: [
        { name: "React", confidence: "High" },
        { name: "Next.js", confidence: "Medium" },
        { name: "Flask", confidence: "Medium" },
        { name: "Tailwind CSS", confidence: "Medium" },
        { name: "Express", confidence: "Learning" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      skills: [
        { name: "Git", confidence: "High" },
        { name: "VSCode", confidence: "High" },
        { name: "Eclipse", confidence: "Medium" },
        { name: "Linux", confidence: "Medium" },
        { name: "MongoDB", confidence: "Learning" },
        { name: "PostgreSQL", confidence: "Learning" },
        { name: "Postman", confidence: "Learning" },
      ],
    },
  ];

  const coursework: string[] = [
    "Data Structures & Algorithms",
    "Software Development & Design",
    "Software & Components",
    "Database Systems",
    "Operating Systems",
    "Information Security",
    "Web Applications",
    "Low-Level Programming & Computer Organization",
    "Linear Algebra",
    "Discrete Structures",
  ];

  const getConfidenceIcon = (confidence: Skill["confidence"]): JSX.Element => {
    switch (confidence) {
      case "High":
        return (
          <div className="px-2 py-1 bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] rounded text-xs font-medium">
            Confident
          </div>
        );
      case "Medium":
        return (
          <div className="px-2 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded text-xs font-medium">
            Comfortable
          </div>
        );
      case "Learning":
        return (
          <div className="px-2 py-1 bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] rounded text-xs font-medium">
            Learning
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <>
      {/* Aesthetic Divider */}
      <section id="skills">
        <div className="relative my-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--border-color)] opacity-50"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="flex items-center space-x-4 bg-[var(--bg-primary)] px-8">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-teal)]/60 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-[var(--text-muted)]"></div>
              <div
                className="w-4 h-4 rounded-full bg-[var(--accent-orange)]/60 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="w-2 h-2 rounded-full bg-[var(--text-muted)]"></div>
              <div
                className="w-3 h-3 rounded-full bg-[var(--accent-teal)]/60 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 mb-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-medium text-[#00a3a9] mb-4">
              <span className="text-[var(--accent-orange)]">03.</span> Skills &
              Knowledge
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Technical expertise and academic foundation driving innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Skills Categories */}
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 hover:border-[#00a3a9]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a9]/10 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[var(--accent-teal)] group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--text-secondary)] font-medium">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {getConfidenceIcon(skill.confidence)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Confidence Legend */}
          <div className="flex justify-center mb-16">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 text-center">
                Confidence Level
              </h4>
              <div className="flex flex-col sm:flex-row gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] rounded text-xs font-medium">
                    Confident
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    Regular use & deep understanding
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded text-xs font-medium">
                    Comfortable
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    Some experience & knowledge
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] rounded text-xs font-medium">
                    Learning
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    Recently acquired & improving
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coursework Section */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 hover:border-[#00a3a9]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a9]/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-[var(--accent-teal)]">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                Relevant Coursework
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coursework.map((course, index) => (
                <div key={course} className="group relative">
                  <div className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg p-4 hover:border-[var(--accent-teal)]/50 transition-all duration-300 hover:shadow-md hover:shadow-[var(--accent-teal)]/10 hover:translate-y-[-2px] cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00a3a9]/70 group-hover:bg-[var(--accent-teal)] transition-colors duration-300 flex-shrink-0"></div>
                      <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 text-sm font-medium leading-tight">
                        {course}
                      </span>
                    </div>

                    {/* Priority indicator for top courses */}
                    {index < 5 && (
                      <div className="absolute top-2 right-2">
                        <div className="w-2 h-2 rounded-full bg-[var(--accent-orange)]/70 animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-[var(--text-muted)] flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-orange)]/70"></span>
                Priority coursework for software development
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
