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
      {/* Background pattern with animated dots */}
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

        {/* Animated dots with different movements */}
        <div className="absolute top-20 left-12 w-2 h-2 bg-[var(--accent-teal)]/60 rounded-full animate-pulse"></div>
        <div
          className="absolute top-32 right-16 w-3 h-3 bg-[var(--accent-orange)]/40 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 left-20 w-1.5 h-1.5 bg-[var(--accent-purple)]/50 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-12 w-2.5 h-2.5 bg-[var(--accent-teal)]/30 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-16 w-2 h-2 bg-[var(--accent-orange)]/40 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-1 h-1 bg-[var(--accent-purple)]/60 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s", animationDuration: "2.5s" }}
        ></div>

        {/* More scattered dots for depth */}
        <div
          className="absolute top-40 left-4 w-1.5 h-1.5 bg-[var(--accent-teal)]/30 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 right-8 w-2 h-2 bg-[var(--accent-orange)]/35 rounded-full animate-bounce"
          style={{ animationDelay: "2.5s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-8 w-1 h-1 bg-[var(--accent-purple)]/45 rounded-full animate-pulse"
          style={{ animationDelay: "1.8s" }}
        ></div>
        <div
          className="absolute bottom-32 right-4 w-2.5 h-2.5 bg-[var(--accent-teal)]/25 rounded-full animate-bounce"
          style={{ animationDelay: "0.8s", animationDuration: "4.2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-medium text-[#00a3a9] mb-4">
            <span className="text-[var(--accent-orange)]">05.</span> Get In
            Touch
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Let&apos;s connect and explore opportunities to build something
            amazing together
          </p>

          {/* CTA Message */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 max-w-3xl mx-auto mb-12">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I&apos;m currently seeking{" "}
              <span className="text-[var(--accent-teal)] font-medium">
                internship opportunities
              </span>{" "}
              and always interested in discussing{" "}
              <span className="text-[var(--accent-purple)] font-medium">
                innovative projects
              </span>
              . Whether you&apos;re looking to collaborate or just want to say
              hi, I&apos;d love to hear from you!
            </p>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
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
