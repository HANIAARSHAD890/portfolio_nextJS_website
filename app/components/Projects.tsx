"use client";

import Image from "next/image";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";
import { projects } from "../lib/constants";
import { GithubIcon, ExternalLink } from "../lib/icons";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of projects I&apos;ve built"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 100}>
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-card-border bg-card shadow-sm transition-all duration-300 card-hover">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-foreground/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground transition-transform duration-200 hover:scale-110"
                      aria-label="View source code"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground transition-transform duration-200 hover:scale-110"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2">
                  {project.featured && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-section-alt px-2 py-1 text-xs font-medium text-muted"
                    >
                      {t}
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
