"use client";

import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";
import { skills, skillCategories } from "../lib/constants";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper id="skills" alt>
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Technologies I work with on a daily basis"
      />

      <AnimatedSection>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border-primary bg-primary text-white shadow-md shadow-primary/25"
                  : "border-card-border bg-card text-muted hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredSkills.map((skill, i) => (
          <AnimatedSection key={skill.name} delay={i * 50} animation="scale">
            <div className="group rounded-xl border border-card-border bg-card p-5 shadow-sm transition-all duration-300 card-hover">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                <span className="text-xs font-medium text-muted">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-section-alt">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
