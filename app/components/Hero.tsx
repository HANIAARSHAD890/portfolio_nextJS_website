"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "../lib/constants";
import { GithubIcon, LinkedinIcon, EmailIcon, DownloadIcon } from "../lib/icons";
import Image from "next/image";

function useTyper(words: string[], speed = 80, deleteSpeed = 40, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 100);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          );
        },
        isDeleting ? deleteSpeed : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, deleteSpeed, pause]);

  return text;
}

export function Hero() {
  const typedText = useTyper(personalInfo.titles, 80, 40, 2000);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10" />

      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
        <div className="animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <div className="group relative h-28 w-28 sm:h-32 sm:w-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-[3px] shadow-lg shadow-primary/25">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-background">
                  <Image
                    src="/images/profile_1.png"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="mb-4 text-lg font-medium text-primary">Salam, I&apos;m</p>
          <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-warm">{personalInfo.firstName} {personalInfo.lastName}</span>
          </h1>
          <div className="mb-6 h-12">
            <p className="text-2xl font-semibold text-foreground sm:text-3xl">
              {typedText}
              <span className="ml-1 inline-block h-8 w-0.5 animate-pulse bg-primary" />
            </p>
          </div>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-light">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-secondary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-card-border bg-card px-8 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md"
            >
              <DownloadIcon size={18} />
              Resume
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 pb-16">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-card-border text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-card-border text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-card-border text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              aria-label="Email"
            >
              <EmailIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="z-10 flex flex-col items-center gap-2 pb-8 text-muted">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-5 rounded-full border-2 border-muted">
          <div className="mx-auto mt-1.5 h-2 w-1 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
