"use client";

import { useState } from "react";

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contacts = [
    {
      id: "linkedin",
      name: "LinkedIn",
      value: "harith-madani-799382292",
      href: "https://www.linkedin.com/in/harith-madani-799382292",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      description: "Professional networking",
      color: "hover:border-[#0077b5] hover:text-[#0077b5]",
      bgColor: "hover:shadow-[#0077b5]/20",
    },
    {
      id: "email",
      name: "Personal Email",
      value: "harithmada@gmail.com",
      href: "mailto:harithmada@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z" />
        </svg>
      ),
      description: "Direct communication",
      color:
        "hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)]",
      bgColor: "hover:shadow-[var(--accent-orange)]/20",
    },
    {
      id: "school-email",
      name: "School Email",
      value: "madani.13@buckeyemail.osu.edu",
      href: "mailto:madani.13@buckeyemail.osu.edu",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      ),
      description: "Academic inquiries",
      color: "hover:border-[#bb0000] hover:text-[#bb0000]",
      bgColor: "hover:shadow-[#bb0000]/20",
    },
    {
      id: "github",
      name: "GitHub",
      value: "harith54",
      href: "https://github.com/harith54",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      description: "Code repositories & projects",
      color:
        "hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)]",
      bgColor: "hover:shadow-[var(--accent-purple)]/20",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #00a3a9 1px, transparent 0)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-10 w-20 h-20 border border-[var(--accent-teal)]/20 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute top-1/3 right-12 w-16 h-16 border border-[var(--accent-orange)]/30 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-16 w-12 h-12 border border-[var(--accent-purple)]/25 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-[var(--accent-teal)]/10 rotate-12 animate-ping"></div>

        {/* Orbiting dots */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-96 h-96">
            <div
              className="absolute top-0 left-1/2 w-2 h-2 bg-[var(--accent-teal)]/60 rounded-full animate-spin"
              style={{ transformOrigin: "0 192px", animationDuration: "15s" }}
            ></div>
            <div
              className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[var(--accent-orange)]/50 rounded-full animate-spin"
              style={{
                transformOrigin: "0 150px",
                animationDuration: "12s",
                animationDirection: "reverse",
              }}
            ></div>
            <div
              className="absolute top-0 left-1/2 w-1 h-1 bg-[var(--accent-purple)]/40 rounded-full animate-spin"
              style={{ transformOrigin: "0 100px", animationDuration: "8s" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-[#00a3a9] mb-4">
            <span className="text-[var(--accent-orange)]">05.</span> Get In
            Touch
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Let's connect and explore opportunities to build something amazing
            together
          </p>

          {/* CTA Message */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 max-w-3xl mx-auto mb-12">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I'm currently seeking{" "}
              <span className="text-[var(--accent-teal)] font-medium">
                internship opportunities
              </span>{" "}
              and always interested in discussing{" "}
              <span className="text-[var(--accent-purple)] font-medium">
                innovative projects
              </span>
              . Whether you're looking to collaborate or just want to say hi,
              I'd love to hear from you!
            </p>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel={
                contact.href.startsWith("mailto:") ? "" : "noopener noreferrer"
              }
              className={`group relative bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] ${contact.color} ${contact.bgColor} hover:shadow-lg`}
              onMouseEnter={() => setHoveredCard(contact.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--accent-teal)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[var(--bg-tertiary)] rounded-lg border border-[var(--border-color)] group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-current transition-colors">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">
                        {contact.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-[var(--bg-tertiary)] rounded-lg p-3 border border-[var(--border-color)]/50">
                  <code className="text-sm text-[var(--text-secondary)] font-mono break-all">
                    {contact.value}
                  </code>
                </div>

                {/* Hover effect indicator */}
                {hoveredCard === contact.id && (
                  <div className="absolute bottom-2 right-2">
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Quick Action Section */}
        <div className="text-center">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
              Prefer a direct approach?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Feel free to reach out via email for the fastest response
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:harithmada@gmail.com"
                className="group px-8 py-3 bg-transparent border-2 border-[#00a3a9] text-[#00a3a9] rounded-lg hover:bg-[#00a3a9] hover:text-black transition-all duration-300 font-medium text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Email
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/harith-madani-799382292"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[var(--bg-tertiary)] border-2 border-[var(--border-color)] text-[var(--text-primary)] rounded-lg hover:border-[#0077b5] hover:text-[#0077b5] transition-all duration-300 font-medium text-center"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--text-muted)]">
            Built with{" "}
            <span className="text-[var(--accent-teal)]">Next.js</span>,{" "}
            <span className="text-[var(--accent-purple)]">TypeScript</span>, and{" "}
            <span className="text-[var(--accent-orange)]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
}
