export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: "Advanced", color: "bg-blue-500" },
        { name: "JavaScript", level: "Advanced", color: "bg-yellow-500" },
        { name: "HTML", level: "Advanced", color: "bg-orange-500" },
        { name: "Java", level: "Intermediate", color: "bg-red-500" },
        { name: "C", level: "Intermediate", color: "bg-gray-600" },
        { name: "SQL", level: "Intermediate", color: "bg-indigo-500" },
        { name: "TypeScript", level: "Intermediate", color: "bg-blue-600" },
        { name: "CSS", level: "Intermediate", color: "bg-pink-500" },
        { name: "R", level: "Basic", color: "bg-green-600" },
      ],
    },
    {
      title: "Frameworks",
      icon: "🚀",
      skills: [
        { name: "React", level: "Advanced", color: "bg-cyan-500" },
        { name: "Flask", level: "Basic", color: "bg-green-500" },
        { name: "Express", level: "Basic", color: "bg-gray-700" },
      ],
    },
    {
      title: "Tools & Software",
      icon: "🛠️",
      skills: [
        { name: "Git", level: "Advanced", color: "bg-orange-600" },
        { name: "Linux", level: "Intermediate", color: "bg-yellow-600" },
        { name: "Unix", level: "Intermediate", color: "bg-purple-600" },
        { name: "MongoDB", level: "Intermediate", color: "bg-green-700" },
        { name: "Eclipse", level: "Intermediate", color: "bg-indigo-600" },
        { name: "Visual Studio", level: "Intermediate", color: "bg-blue-700" },
      ],
    },
  ];

  const coursework = [
    "Software & Components",
    "Software Development & Design",
    "Linear Algebra",
    "Discrete Structures",
    "Operating Systems",
    "Data Structures & Algorithms",
    "Web Applications",
    "Information Security",
    "Low-Level Programming & Computer Organization",
    "Database Systems",
  ];

  const getLevelWidth = (level: string) => {
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
          <div className="w-full border-t border-gradient-to-r from-transparent via-[#00a3a9] to-transparent opacity-30"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="flex items-center space-x-4 bg-[var(--bg-primary)] px-8">
            <div className="w-3 h-3 rounded-full bg-[var(--accent-purple)] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#00a3a9)]"></div>
            <div
              className="w-4 h-4 rounded-full bg-[var(--accent-orange)] animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-2 h-2 rounded-full bg-[var(--accent-purple)]"></div>
            <div
              className="w-3 h-3 rounded-full bg-[#00a3a9] animate-pulse"
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
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 hover:border-[#00a3a9] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a9]/10 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>
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
                        } rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse ${getLevelWidth(
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
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 hover:border-[#00a3a9] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a9]/10">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🎓</span>
            <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
              Relevant Coursework
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursework.map((course, index) => (
              <div key={course} className="group relative overflow-hidden">
                <div className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg p-4 hover:border-[var(--accent-purple)] transition-all duration-300 hover:shadow-md hover:shadow-[var(--accent-purple)]/10 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00a3a9] group-hover:bg-[var(--accent-purple)] transition-colors duration-300"></div>
                    <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 text-sm font-medium">
                      {course}
                    </span>
                  </div>

                  {/* Priority indicator for top courses */}
                  {index < 4 && (
                    <div className="absolute top-2 right-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent-orange)] animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-[var(--text-muted)] flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-orange)]"></span>
              Core foundation courses
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
