"use client";

import { useEffect, useRef, useState } from "react";
import Component1920WLight from "@/imports/1920WLight/index";

const DESIGN_WIDTH = 1920;

function useScrollReveal(containerRef: React.RefObject<HTMLDivElement | null>) {
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

export default function AnimatedSite() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [outerHeight, setOuterHeight] = useState(0);

  useScrollReveal(outerRef);

  useEffect(() => {
    function update() {
      if (!outerRef.current || !innerRef.current) return;
      const vw = outerRef.current.offsetWidth || window.innerWidth;
      const s = Math.min(1, vw / DESIGN_WIDTH);
      setScale(s);
      setOuterHeight(innerRef.current.scrollHeight * s);
    }
    update();
    const ro = new ResizeObserver(update);
    if (outerRef.current) ro.observe(outerRef.current);
    if (innerRef.current) ro.observe(innerRef.current);
    return () => ro.disconnect();
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
        <Component1920WLight />
      </div>
    </div>
  );
}
