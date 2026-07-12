"use client";

import { SectionWrapper } from "./SectionWrapper";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";
import { services } from "../lib/constants";
import { serviceIcons } from "../lib/icons";

export function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="Services"
        subtitle="What I can do for you"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = serviceIcons[service.icon];
          return (
            <AnimatedSection key={service.title} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-xl border border-card-border bg-card p-6 shadow-sm transition-all duration-300 card-hover">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  {Icon && (
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors duration-300 group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                      <Icon size={22} />
                    </div>
                  )}
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-light">{service.description}</p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
