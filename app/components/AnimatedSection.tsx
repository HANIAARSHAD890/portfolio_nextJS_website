"use client";

import { useInView } from "../hooks/useInView";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
};

const animationClasses = {
  "fade-up": "animate-fade-in-up",
  "fade-left": "animate-fade-in-left",
  "fade-right": "animate-fade-in-right",
  scale: "animate-scale-in",
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${isInView ? animationClasses[animation] : "opacity-0"} ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
}
