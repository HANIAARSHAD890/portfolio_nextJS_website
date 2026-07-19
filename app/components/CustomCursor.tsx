"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.1;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - 15}px, ${ringPosRef.current.y - 15}px)`;
      }
      rafRef = requestAnimationFrame(animate);
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", move);
    let rafRef = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafRef);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4  rounded-full"
        style={{ backgroundColor: "#efbcd5", boxShadow: "0 0 6px 2px rgba(239, 188, 213, 0.6)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[40px] w-[40px] rounded-full border"
        style={{
          borderColor: "rgba(239, 188, 213, 0.5)",
          boxShadow: "0 0 12px 4px rgba(239, 188, 213, 0.2), inset 0 0 8px 2px rgba(239, 188, 213, 0.1)",
        }}
      />
    </>
  );
}
