"use client";

import { useEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 1920;

export function useScrollReveal(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("sr-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    container.querySelectorAll(".sr-target").forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [containerRef]);
}

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [outerHeight, setOuterHeight] = useState(0);

  useScrollReveal(outerRef as React.RefObject<HTMLDivElement>);

  useEffect(() => {
    function update() {
      if (!outerRef.current || !innerRef.current) return;
      const vw = window.innerWidth;
      const s = Math.min(1, vw / DESIGN_WIDTH);
      setScale(s);
      setOuterHeight(innerRef.current.scrollHeight * s);
    }
    update();
    
    let timeoutId: NodeJS.Timeout;
    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(update, 50);
    };

    const ro = new ResizeObserver(debouncedUpdate);
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener("resize", debouncedUpdate);
    
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", debouncedUpdate);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="site-entrance" ref={outerRef} style={{ width: "100%", height: outerHeight || undefined, overflow: "hidden" }}>
      <div
        ref={innerRef}
        style={{
          width: DESIGN_WIDTH,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
