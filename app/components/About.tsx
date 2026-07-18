"use client";

import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";
import { personalInfo } from "../lib/constants";
import { MapPinIcon, EmailIcon, CalendarIcon } from "../lib/icons";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Get to know me better"
      />

      <div className="grid items-center gap-12 lg:grid-cols-5">
        <AnimatedSection className="lg:col-span-2" animation="fade-left">
          <div className="relative mx-auto w-56 sm:w-64 lg:w-full max-w-sm">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl" />
            <div className="relative flex aspect-square items-center justify-center rounded-2xl bg-card border-2 border-primary/20 shadow-lg overflow-hidden p-1">
              <div className="h-full w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/profile_1.png"
                    alt="About"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover rounded-xl"
                  />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-3" animation="fade-right" delay={100}>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPinIcon size={16} />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <EmailIcon size={16} />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <CalendarIcon size={16} />
                Available for opportunities
              </div>
            </div>

            {personalInfo.aboutDetailed.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted-light">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              {["Mobile App Development", ".NET", "React", "Problem Solving", "Clean Code"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
