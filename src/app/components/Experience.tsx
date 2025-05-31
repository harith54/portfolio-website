import Image from "next/image";
import Skills from "./Skills";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "JPMorgan Chase",
      role: "Software Engineering Intern",
      location: "Columbus, OH",
      duration: "June 2025 – Current",
      current: true,
      logo: "/chase logo.png",
      skills: [
        "Software Engineering",
        "Financial Technology",
        "Enterprise Systems",
        "Agile Development",
      ],
      description:
        "Contributing to financial systems at one of the world's largest investment banks. Developing scalable solutions that handle high-volume transactions while maintaining security and reliability standards.",
      keyInsights: [
        "Enterprise-scale software development and architecture",
        "Financial technology and regulatory compliance",
        "High-performance system design and optimization",
      ],
    },
    {
      id: 2,
      company: "SEO Tech Developer",
      role: "Software Engineering Intern",
      location: "Remote",
      duration: "June 2025 – Current",
      current: true,
      logo: "/seo-logo.png",
      skills: [
        "Python",
        "Data Structures & Algorithms",
        "Full-Stack Development",
        "Team Collaboration",
      ],
      description:
        "Participating in an intensive virtual program focused on technical and interpersonal skills development. Building full-stack applications through project-based learning while receiving mentoring to prepare for entry-level tech roles at top companies.",
      keyInsights: [
        "Advanced Python programming and algorithmic problem-solving",
        "Full-stack application development and deployment",
        "Technical mentoring and collaborative project experience",
      ],
    },
    {
      id: 3,
      company: "FactSet",
      role: "Software Engineering MESH Extern",
      location: "Norwalk, CT",
      duration: "April 2025 – May 2025",
      current: false,
      logo: "/factset-logo.png",
      skills: [
        "Python",
        "OpenAI API",
        "Financial Technology",
        "API Integration",
      ],
      description:
        "Developed AI-powered solutions for financial data analysis. Led a winning hackathon project that demonstrated innovative fintech applications and impressed executive leadership.",
      keyInsights: [
        "AI integration in financial technology solutions",
        "Executive-level presentation and communication skills",
        "Rapid prototyping and competitive development environments",
      ],
    },
    {
      id: 4,
      company: "PricewaterhouseCoopers (PwC)",
      role: "Technical Consultant Extern",
      location: "Remote",
      duration: "January 2025 – March 2025",
      current: false,
      logo: "/pwc-logo.png",
      skills: ["Python", "NLP", "Machine Learning", "Document Processing"],
      description:
        "Built document classification systems that process thousands of mortgage documents daily. Translated complex business requirements into scalable technical solutions using AI technologies.",
      keyInsights: [
        "Advanced problem-solving with AI/ML technologies",
        "Enterprise-level software architecture and optimization",
        "Client-focused solution development and delivery",
      ],
    },
    {
      id: 5,
      company: "Nile King Auto",
      role: "Part-Time Sales/IT",
      location: "Columbus, OH",
      duration: "June 2024 – May 2025",
      current: false,
      logo: "/nilekingauto-logo.jpg",
      skills: [
        "Sales",
        "Web Development",
        "Customer Relations",
        "Digital Marketing",
      ],
      description:
        "Generated significant revenue through strategic sales while maintaining the company's digital presence. Balanced technical implementation with business growth in a fast-paced automotive environment.",
      keyInsights: [
        "Revenue-driven mindset with quantifiable results",
        "Full-stack web development and maintenance",
        "Cross-functional collaboration between sales and technology",
      ],
    },
    {
      id: 6,
      company: "The Ohio State University",
      role: "Undergraduate Researcher",
      location: "Columbus, OH",
      duration: "May 2024 – August 2024",
      current: false,
      logo: "/osu-logo.png",
      skills: ["R", "SQL", "Data Analysis", "Database Optimization"],
      description:
        "Developed data pipelines and optimization strategies for complex engineering datasets. Transformed raw data into actionable insights that influenced research outcomes and project decisions.",
      keyInsights: [
        "Advanced data engineering and analytics expertise",
        "Research methodology and scientific problem-solving",
        "Database architecture and performance optimization",
      ],
    },
    {
      id: 7,
      company: "Westerwood Retirement Home",
      role: "Server",
      location: "Columbus, OH",
      duration: "October 2020 – August 2023",
      current: false,
      logo: "/westerwood-logo.png",
      skills: [
        "Customer Service",
        "Operations",
        "Communication",
        "Multitasking",
      ],
      description:
        "Managed service operations for 100+ daily customer interactions in a high-pressure environment. Developed strong interpersonal skills and operational efficiency that translate to team collaboration and user experience focus.",
      keyInsights: [
        "High-volume operations management and efficiency",
        "Exceptional communication and interpersonal skills",
        "Adaptability and performance under pressure",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden"
    >
      {/* CSS Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(-10px) translateX(-15px);
            }
            75% {
              transform: translateY(-25px) translateX(5px);
            }
          }

          @keyframes drift {
            0% {
              transform: translateX(-100px) translateY(0px);
            }
            25% {
              transform: translateX(0px) translateY(-30px);
            }
            50% {
              transform: translateX(50px) translateY(20px);
            }
            75% {
              transform: translateX(-20px) translateY(-10px);
            }
            100% {
              transform: translateX(-100px) translateY(0px);
            }
          }

          @keyframes orbit {
            0% {
              transform: rotate(0deg) translateX(40px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(40px) rotate(-360deg);
            }
          }

          @keyframes wiggle {
            0%, 100% {
              transform: rotate(0deg) translateX(0px);
            }
            25% {
              transform: rotate(3deg) translateX(-5px);
            }
            50% {
              transform: rotate(-3deg) translateX(5px);
            }
            75% {
              transform: rotate(2deg) translateX(-3px);
            }
          }

          @keyframes fade {
            0% {
              opacity: 0.2;
            }
            100% {
              opacity: 0.7;
            }
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.2);
            }
          }

          .animate-float { animation: float 12s ease-in-out infinite; }
          .animate-drift { animation: drift 15s linear infinite; }
          .animate-orbit { animation: orbit 20s linear infinite; }
          .animate-wiggle { animation: wiggle 8s ease-in-out infinite; }
          .animate-fade { animation: fade 6s ease-in-out infinite alternate; }
          .animate-twinkle { animation: twinkle 5s ease-in-out infinite; }
          .animate-float-reverse { animation: float 10s ease-in-out infinite reverse; }
          .animate-drift-reverse { animation: drift 18s linear infinite reverse; }
          .animate-orbit-reverse { animation: orbit 22s linear infinite reverse; }
          .animate-wiggle-reverse { animation: wiggle 9s ease-in-out infinite reverse; }
          .animate-float-slow { animation: float 14s ease-in-out infinite; }
          .animate-drift-slow { animation: drift 16s linear infinite; }
          .animate-float-fast { animation: float 11s ease-in-out infinite; }
          .animate-drift-fast { animation: drift 13s linear infinite; }
        `,
        }}
      />

      {/* Animated background dots */}
      <div className="absolute inset-0 hidden md:block">
        {/* Static background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #00a3a9 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Mesmerizing floating dots - different sizes and movements */}
        <div
          className="absolute top-32 left-12 w-2 h-2 bg-[var(--accent-purple)] rounded-full opacity-60 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div className="absolute top-20 right-16 w-4 h-4 bg-[var(--accent-orange)] rounded-full opacity-40 animate-float animate-fade"></div>
        <div className="absolute top-1/4 left-20 w-3 h-3 bg-[var(--accent-purple)] rounded-full opacity-50 animate-drift animate-pulse"></div>
        <div className="absolute top-1/3 right-12 w-2.5 h-2.5 bg-[var(--accent-orange)] rounded-full opacity-45 animate-orbit"></div>
        <div
          className="absolute top-1/2 left-8 w-5 h-5 bg-[var(--accent-purple)] rounded-full opacity-35 animate-float-reverse animate-spin"
          style={{ animationDuration: "25s" }}
        ></div>
        <div className="absolute top-2/3 right-20 w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full opacity-55 animate-wiggle"></div>
        <div className="absolute bottom-1/3 left-16 w-3.5 h-3.5 bg-[var(--accent-purple)] rounded-full opacity-40 animate-drift-reverse"></div>
        <div className="absolute bottom-1/4 right-8 w-2 h-2 bg-[var(--accent-orange)] rounded-full opacity-50 animate-float-slow animate-fade"></div>
        <div className="absolute bottom-20 left-24 w-4 h-4 bg-[var(--accent-purple)] rounded-full opacity-30 animate-orbit-reverse"></div>
        <div className="absolute bottom-32 right-24 w-2.5 h-2.5 bg-[var(--accent-orange)] rounded-full opacity-45 animate-pulse animate-drift-slow"></div>

        {/* Far side dots for more coverage */}
        <div className="absolute top-40 left-4 w-1 h-1 bg-[var(--accent-purple)] rounded-full opacity-60 animate-twinkle"></div>
        <div className="absolute top-3/4 left-2 w-2 h-2 bg-[var(--accent-orange)] rounded-full opacity-35 animate-float-fast"></div>
        <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-[var(--accent-purple)] rounded-full opacity-50 animate-drift-fast"></div>
        <div className="absolute bottom-40 right-2 w-3 h-3 bg-[var(--accent-orange)] rounded-full opacity-40 animate-wiggle-reverse"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-[#00a3a9] mb-4">
            <span className="text-[var(--accent-orange)]">02.</span> Experience
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Building expertise through diverse challenges and real-world impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00a3a9] via-[var(--accent-purple)] to-[var(--accent-orange)]"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute w-6 h-6 bg-[#00a3a9] rounded-full border-4 border-[var(--bg-primary)] z-10 ${
                  index % 2 === 0
                    ? "left-5 md:right-0 md:left-auto md:transform md:translate-x-3"
                    : "left-5 md:left-0 md:transform md:-translate-x-3"
                } top-8`}
              >
                {exp.current && (
                  <div className="absolute inset-0 bg-[#00a3a9] rounded-full animate-ping opacity-75"></div>
                )}
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 hover:border-[#00a3a9] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a9]/10 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8 md:text-right"
                }`}
              >
                {/* Header */}
                <div
                  className={`flex items-start gap-4 mb-4 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"
                  }`}
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-transparent flex items-center justify-center">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={80}
                      height={80}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#00a3a9] mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-[var(--text-primary)] font-medium">
                      {exp.company}
                    </p>
                    <div
                      className={`flex flex-col sm:flex-row gap-4 text-sm text-[var(--text-muted)] mt-3 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[var(--accent-teal)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[var(--accent-orange)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {exp.duration}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-1 bg-[#00a3a9]/20 text-[#00a3a9] rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key insights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--accent-purple)] mb-2 uppercase tracking-wide">
                    Key Impact
                  </h4>
                  <ul
                    className={`space-y-1 ${
                      index % 2 === 0 ? "" : "md:text-right"
                    }`}
                  >
                    {exp.keyInsights.map((insight, i) => (
                      <li
                        key={i}
                        className={`text-sm text-[var(--text-secondary)] flex items-start gap-2 ${
                          index % 2 === 0 ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        <span className="text-[#00a3a9] mt-0.5 flex-shrink-0">
                          {index % 2 === 0 ? "▸" : "◂"}
                        </span>
                        <span className="flex-1">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "" : "md:justify-end"
                  }`}
                >
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-secondary)] rounded-full text-xs font-medium hover:border-[#00a3a9] hover:text-[#00a3a9] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Skills />
        {/* Call to action */}
        <div className="text-center mt-20">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#00a3a9] text-[#00a3a9] rounded-lg hover:bg-[#00a3a9] hover:text-black transition-all duration-300 font-medium group"
          >
            View My Projects
            <span className="transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
