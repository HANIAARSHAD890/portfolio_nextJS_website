"use client";

import { useInView } from "../hooks/useInView";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
};

export function SectionWrapper({ id, children, className = "", alt = false }: SectionWrapperProps) {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 ${alt ? "bg-section-alt" : "bg-background"} transition-colors duration-300 ${isInView ? "animate-fade-in-up" : "opacity-0"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
