"use client";

import { SectionWrapper } from "./SectionWrapper";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";
import { education } from "../lib/constants";
import { MapPinIcon, CalendarIcon, StarIcon, CheckIcon } from "../lib/icons";

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        title="Education"
        subtitle="Academic background and achievements"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {education.map((edu, i) => (
          <AnimatedSection key={`${edu.institution}-${edu.degree}`} delay={i * 100}>
            <div className="flex h-full flex-col rounded-xl border border-card-border bg-card p-6 shadow-sm transition-all duration-300 card-hover">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-sm font-medium text-primary">{edu.institution}</p>
                </div>
                <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {edu.grade ? `Grade: ${edu.grade}` : `GPA: ${edu.gpa}`}
                </span>
              </div>

              <div className="mb-3 flex flex-wrap gap-3 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <CalendarIcon size={14} />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPinIcon size={14} />
                  {edu.location}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 text-sm font-semibold text-foreground flex items-center gap-2">
                  <StarIcon size={14} className="text-yellow-500" />
                  Achievements
                </h4>
                <ul className="space-y-1.5">
                  {edu.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-light">
                      <CheckIcon size={14} className="mt-0.5 shrink-0 text-secondary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <h4 className="mb-2 text-sm font-semibold text-foreground">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="rounded-md bg-section-alt px-2 py-1 text-xs font-medium text-muted"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
