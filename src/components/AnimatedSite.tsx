"use client";

import { useEffect, useRef, useState } from "react";
import Component1920WLight from "@/imports/1920WLight/index";

const DESIGN_WIDTH = 1920;

import { useScrollReveal } from "@/components/PageWrapper";

export default function AnimatedSite() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [outerHeight, setOuterHeight] = useState(0);

  useScrollReveal(outerRef);

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
        <Component1920WLight />
      </div>
    </div>
  );
}
