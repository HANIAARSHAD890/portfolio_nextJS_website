"use client";

import { useInView } from "../hooks/useInView";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({ title, subtitle, align = "center", className = "" }: SectionHeadingProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${isInView ? "animate-fade-in-up" : "opacity-0"} ${className}`}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-muted-light mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </div>
  );
}
