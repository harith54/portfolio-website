import Image from "next/image";

type ExperienceItem = {
  id: number;
  company: string;
  role: string;
  duration: string;
  logo: string;
  upcoming?: boolean;
};

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Amazon",
      role: "Software Development Engineer Intern",
      duration: "May 2026 - Aug 2026",
      logo: "/amazon-logo.png",
    },
    {
      id: 2,
      company: "HubSpot",
      role: "Software Engineer Intern",
      duration: "Jan 2026 - Apr 2026",
      logo: "/hubspot-logo.png",
    },
    {
      id: 3,
      company: "JPMorgan Chase",
      role: "Software Engineering Intern",
      duration: "Jun 2025 – Aug 2025",
      logo: "/chase logo.png",
    },
    {
      id: 4,
      company: "SEO Tech Developer",
      role: "Tech Developer Intern",
      duration: "Jun 2025 – Aug 2025",
      logo: "/seo-logo.png",
    },
    {
      id: 5,
      company: "PricewaterhouseCoopers",
      role: "Technical Consultant Extern",
      duration: "Jan 2025 – Mar 2025",
      logo: "/pwc-logo.png",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #00a3a9 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-[#00a3a9] mb-4">
            <span className="text-[var(--accent-orange)]">02.</span> Experience
          </h2>
        </div>

        {/* Timeline - horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line - horizontal on desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00a3a9] to-transparent"></div>

          {/* Connecting line - vertical on mobile/tablet */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00a3a9] via-[var(--accent-purple)] to-[var(--accent-orange)]"></div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Dot on the line */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00a3a9] rounded-full border-4 border-[var(--bg-primary)] z-10">
                  {exp.upcoming && (
                    <div className="absolute inset-0 bg-[#00a3a9] rounded-full animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Card */}
                <div className="mt-16 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-5 hover:border-[#00a3a9] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a9]/10 flex flex-col">
                  {/* Company logo - FIXED HEIGHT */}
                  <div className="w-14 h-14 mb-3 flex items-center justify-center mx-auto flex-shrink-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* FIXED HEIGHT for company name */}
                  <div className="h-12 flex items-center justify-center mb-1">
                    <p className="text-base text-[var(--text-primary)] font-semibold text-center leading-tight">
                      {exp.company}
                    </p>
                  </div>

                  {/* FIXED HEIGHT for role */}
                  <div className="h-10 flex items-center justify-center mb-2">
                    <h3 className="text-sm font-medium text-[var(--text-secondary)] text-center leading-tight">
                      {exp.role}
                    </h3>
                  </div>

                  {/* FIXED HEIGHT for badge */}
                  <div className="h-7 flex items-center justify-center mb-2">
                    {exp.upcoming && (
                      <span className="px-2 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full text-xs font-medium">
                        Incoming
                      </span>
                    )}
                  </div>

                  {/* Date */}
                  <p className="text-xs text-[var(--text-muted)] flex items-center justify-center gap-1">
                    <svg
                      className="w-3 h-3 text-[var(--accent-orange)]"
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
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Vertical stack */}
          <div className="lg:hidden space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-16">
                {/* Dot on the line */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-[#00a3a9] rounded-full border-4 border-[var(--bg-primary)] z-10">
                  {exp.upcoming && (
                    <div className="absolute inset-0 bg-[#00a3a9] rounded-full animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Card */}
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-5 hover:border-[#00a3a9] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base text-[var(--text-primary)] font-semibold mb-1">
                        {exp.company}
                      </p>
                      <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-1">
                        {exp.role}
                      </h3>

                      {exp.upcoming && (
                        <span className="inline-block px-2 py-1 mb-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded-full text-xs font-medium">
                          Incoming
                        </span>
                      )}

                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                        <svg
                          className="w-3 h-3 text-[var(--accent-orange)]"
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
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
