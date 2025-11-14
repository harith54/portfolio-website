"use client";

export default function Contact() {
  const contacts = [
    {
      id: "email",
      label: "Email",
      value: "harithmada@gmail.com",
      href: "mailto:harithmada@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "harith-madani",
      href: "https://www.linkedin.com/in/harithmadani/",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      id: "github",
      label: "GitHub",
      value: "harith54",
      href: "https://github.com/harith54",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-[var(--bg-primary)] text-[var(--text-primary)] relative"
    >
      <div className="text-center pt-8 border-t border-[var(--border-color)]"></div>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #00a3a9 1px, transparent 0)",
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Minimal header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-mono font-medium text-[#00a3a9] mb-2">
            <span className="text-[var(--accent-orange)]">04.</span> Contact
          </h2>
        </div>

        {/* Compact contact links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel={
                contact.href.startsWith("mailto:") ? "" : "noopener noreferrer"
              }
              className="group flex items-center gap-3 px-5 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg hover:border-[#00a3a9] hover:bg-[var(--bg-tertiary)] transition-all duration-300"
            >
              <div className="text-[var(--text-secondary)] group-hover:text-[#00a3a9] transition-colors">
                {contact.icon}
              </div>
              <div className="text-left">
                <div className="text-xs text-[var(--text-muted)]">
                  {contact.label}
                </div>
                <div className="text-sm text-[var(--text-secondary)] font-medium group-hover:text-[#00a3a9] transition-colors">
                  {contact.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
