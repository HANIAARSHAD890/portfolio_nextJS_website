"use client";

import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";
import { testimonials } from "../lib/constants";
import { QuoteIcon } from "../lib/icons";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionWrapper id="testimonials" alt>
      <SectionHeading
        title="Testimonials"
        subtitle="What people say about working with me"
      />

      <AnimatedSection>
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-card-border bg-card p-8 shadow-sm md:p-12">
            <div className="absolute top-6 left-6 text-primary/10">
              <QuoteIcon size={48} />
            </div>

            <div className="relative z-10">
              <p className="mb-8 text-lg leading-relaxed text-muted-light italic">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
                  {testimonials[activeIndex].name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-muted">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-gradient-to-r from-primary to-secondary"
                    : "w-2.5 bg-card-border hover:bg-muted"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
