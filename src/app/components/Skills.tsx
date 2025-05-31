export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
      skills: [
        { name: "Python", level: "Advanced", color: "bg-blue-400/70" },
        { name: "JavaScript", level: "Advanced", color: "bg-yellow-400/70" },
        { name: "HTML", level: "Advanced", color: "bg-orange-400/70" },
        { name: "Java", level: "Intermediate", color: "bg-red-400/70" },
        { name: "C", level: "Basic", color: "bg-gray-400/70" },
        { name: "SQL", level: "Basic", color: "bg-indigo-400/70" },
        { name: "TypeScript", level: "Intermediate", color: "bg-blue-500/70" },
        { name: "CSS", level: "Intermediate", color: "bg-pink-400/70" },
        { name: "R", level: "Basic", color: "bg-green-500/70" },
      ],
    },
    {
      title: "Frameworks",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      skills: [
        { name: "React", level: "Advanced", color: "bg-cyan-400/70" },
        { name: "Flask", level: "Basic", color: "bg-green-400/70" },
        { name: "Express", level: "Basic", color: "bg-gray-500/70" },
      ],
    },
    {
      title: "Tools & Software",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      skills: [
        { name: "Git", level: "Advanced", color: "bg-orange-500/70" },
        { name: "VSCode", level: "Advanced", color: "bg-blue-600/70" },
        { name: "Linux", level: "Basic", color: "bg-yellow-500/70" },
        { name: "Unix", level: "Basic", color: "bg-purple-500/70" },
        { name: "MongoDB", level: "Basic", color: "bg-green-600/70" },
        { name: "PostMan", level: "Basic", color: "bg-orange-400/70" },
        { name: "Eclipse", level: "Intermediate", color: "bg-indigo-500/70" },
      ],
    },
  ];

  const coursework = [
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

  const getLevelWidth = (level) => {
    switch (level) {
      case "Advanced":
        return "w-full";
      case "Intermediate":
        return "w-3/4";
      case "Basic":
        return "w-1/2";
      default:
        return "w-1/2";
    }
  };

  return (
    <>
      {/* Aesthetic Divider */}
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
          {skillCategories.map((category, categoryIndex) => (
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
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[var(--text-secondary)] font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] uppercase tracking-wide">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${
                          skill.color
                        } rounded-full transition-all duration-1000 ease-out group-hover/skill:opacity-90 ${getLevelWidth(
                          skill.level
                        )}`}
                        style={{
                          animationDelay: `${
                            categoryIndex * 200 + skillIndex * 100
                          }ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coursework Section */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 hover:border-[#00a3a9]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a9]/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-[var(--accent-teal)]">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
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
    </>
  );
}
