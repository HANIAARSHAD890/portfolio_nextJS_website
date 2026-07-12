"use client";

import { SectionWrapper } from "./SectionWrapper";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";
import { certifications } from "../lib/constants";
import { ExternalLink, CalendarIcon } from "../lib/icons";

export function Certifications() {
  return (
    <SectionWrapper id="certifications" alt>
      <SectionHeading
        title="Certifications"
        subtitle="Professional certifications and credentials"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i * 80}>
            <div className="flex h-full flex-col rounded-xl border border-card-border bg-card p-6 shadow-sm transition-all duration-300 card-hover">
              <div className="mb-1 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                </div>
                <span className="flex shrink-0 items-center gap-1 text-xs text-muted">
                  <CalendarIcon size={14} />
                  {cert.date}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-light">
                {cert.description}
              </p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
              >
                View credential
                <ExternalLink size={14} />
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
