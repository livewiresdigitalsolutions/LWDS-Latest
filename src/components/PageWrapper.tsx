"use client";

import { useEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 1920;

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function useScrollReveal(containerRef: React.RefObject<HTMLDivElement | null>) {
  useGSAP(() => {
    if (!containerRef.current) return;
    const targets = containerRef.current.querySelectorAll(".sr-target");
    
    targets.forEach((target) => {
      gsap.fromTo(
        target,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
          },
        }
      );
    });
  }, { scope: containerRef });
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
