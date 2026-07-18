"use client";

import { useState, FormEvent } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";
import { personalInfo, contactInfo } from "../lib/constants";
import { GithubIcon, LinkedinIcon, EmailIcon, MapPinIcon, CheckIcon } from "../lib/icons";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind? Let&apos;s work together"
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <AnimatedSection animation="fade-right" delay={100} className="lg:order-2">
          <form
            className="space-y-5 rounded-xl border border-card-border bg-card p-6 shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full resize-none rounded-lg border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-60"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === "sending" ? (
                  "Sending..."
                ) : status === "success" ? (
                  <>
                    <CheckIcon size={16} />
                    Sent!
                  </>
                ) : status === "error" ? (
                  "Failed - Try Again"
                ) : (
                  <>
                    <EmailIcon size={16} />
                    Send Message
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-secondary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" className="lg:order-1">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-light">
              I&apos;m currently open to new opportunities and always happy to
              connect. Whether you have a project or a question, you can reach me out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <EmailIcon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-muted-light transition-colors hover:text-primary"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-light">{contactInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-lg font-bold">!</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Availability</p>
                  <p className="text-sm text-muted-light">{contactInfo.availability}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-card-border bg-card text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-card-border bg-card text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-card-border bg-card text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md"
                aria-label="Email"
              >
                <EmailIcon size={20} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
