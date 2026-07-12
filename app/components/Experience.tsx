"use client";

import { SectionWrapper } from "./SectionWrapper";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";
import { experiences } from "../lib/constants";
import { MapPinIcon, CalendarIcon } from "../lib/icons";

export function Experience() {
  return (
    <SectionWrapper id="experience" alt>
      <SectionHeading
        title="Experience"
        subtitle="Professional journey and work experience"
      />

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2 md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimatedSection
              key={`${exp.company}-${exp.period}`}
              animation={i % 2 === 0 ? "fade-left" : "fade-right"}
              delay={i * 100}
            >
              <div className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-4 top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm transition-all duration-300 card-hover">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <CalendarIcon size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <MapPinIcon size={14} />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="mb-3 text-sm font-medium text-primary">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted-light">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-primary/5 px-2 py-1 text-xs font-medium text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
