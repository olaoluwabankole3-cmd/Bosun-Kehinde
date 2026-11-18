"use client";
import { useEffect, useState } from "react";
export function HeroDiagram() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % 4), 2600);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div className="hero-diagram" aria-label="Illustration of the four stages: vision, strategy, execution, impact" role="img">
      <div className="diagram-crosshair crosshair-1"/><div className="diagram-crosshair crosshair-2"/>
      <div className="diagram-top"><span>THE DELIVERY CONTINUUM</span><span className="diagram-live"><i/> SYSTEM IN MOTION</span></div>
      <div className="diagram-orbit diagram-orbit-outer"/><div className="diagram-orbit diagram-orbit-inner"/>
      <svg viewBox="0 0 580 540" className="diagram-lines" aria-hidden="true" fill="none">
        <path d="M72 375 L202 202 L361 284 L502 126" stroke="currentColor" strokeWidth="1.4" />
        <path d="M72 375 L361 284 L502 126 M202 202 L502 126" stroke="currentColor" strokeWidth=".8" strokeDasharray="3 8" opacity=".35"/>
        <path d="M202 202 L290 426 L502 126 M72 375 L290 426" stroke="currentColor" strokeWidth=".8" strokeDasharray="3 8" opacity=".35"/>
      </svg>
      {[
        { left: "12.4%", top: "69.4%", n:"01", label:"VISION" },
        { left: "34.8%", top: "37.4%", n:"02", label:"STRATEGY" },
        { left: "62.2%", top: "52.6%", n:"03", label:"EXECUTION" },
        { left: "86.5%", top: "23.4%", n:"04", label:"IMPACT" }
      ].map((node, index) => (
        <div key={node.n} className={`diagram-node ${active === index ? "diagram-node-active" : ""}`} style={{ left:node.left, top:node.top }}>
          <div className="node-center"><span>{node.n}</span></div><span className="node-label">{node.label}</span>
        </div>
      ))}
      <div className="diagram-monogram">BK<span>.</span></div>
      <div className="diagram-bottom"><span>COMPLEXITY → CLARITY</span><span>FIG 01 / DELIVERY</span></div>
    </div>
  );
}