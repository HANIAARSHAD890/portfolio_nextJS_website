"use client";

import { personalInfo, navLinks } from "../lib/constants";
import { GithubIcon, LinkedinIcon, EmailIcon, ChevronUp } from "../lib/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-card-border bg-section-alt transition-colors duration-300">
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-foreground shadow-md transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary">
              <span className="text-gradient">&lt;Hania.dev /&gt;</span>
            </a>
            <p className="mt-2 text-sm text-muted">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border text-muted transition-all duration-300 hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border text-muted transition-all duration-300 hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border text-muted transition-all duration-300 hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <EmailIcon size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-card-border pt-8 text-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {personalInfo.firstName} {personalInfo.lastName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
