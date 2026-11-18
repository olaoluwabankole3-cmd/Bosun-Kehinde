"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import gsap from "gsap";

const stages = [
  { number: "01", title: "Frame the challenge", detail: "Establish what matters before deciding what to build.", tag: "DISCOVER" },
  { number: "02", title: "Align the people", detail: "Bring decision-makers, teams and delivery plans together.", tag: "ALIGN" },
  { number: "03", title: "Deliver deliberately", detail: "Adapt the method to the context and keep work moving.", tag: "EXECUTE" },
  { number: "04", title: "Make impact visible", detail: "Measure outcomes, improve the process and carry learning forward.", tag: "MEASURE" }
];

export function DeliverySequence() {
  const [active, setActive] = useState(2);
  const section = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!section.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scope = gsap.context(() => {
      const timeline = gsap.timeline({ delay: .25, defaults: { ease: "power3.out" } });
      timeline.fromTo(".ds-line", { scaleY: 0 }, { scaleY: 1, duration: 1.25, transformOrigin: "top" })
        .fromTo(".ds-stage", { opacity: 0, y: 22 }, { opacity: 1, y: 0, stagger: .16, duration: .72 }, .15)
        .fromTo(".ds-summary", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: .8 }, .75);
    }, section);
    return () => scope.revert();
  }, []);

  return (
    <div className="ds-panel" ref={section}>
      <div className="ds-topline"><span>FIELD NOTES / 001</span><span>HOW WORK GETS DONE <ArrowUpRight size={13}/></span></div>
      <div className="ds-heading"><span className="ds-mini-circle"><Check size={17}/></span><div><strong>From intention to impact.</strong><small>Four connected decisions. One clear direction.</small></div></div>
      <div className="ds-journey">
        <span className="ds-line" aria-hidden="true"/>
        {stages.map((stage,index) => (
          <button className={"ds-stage" + (active === index ? " ds-stage-active" : "")}
            key={stage.number} type="button" aria-pressed={active === index}
            onClick={() => setActive(index)}>
            <span className="ds-node">{stage.number}</span>
            <span className="ds-step-copy"><span className="ds-step-tag">{stage.tag}</span><strong>{stage.title}</strong></span>
            <ArrowUpRight size={16} aria-hidden="true"/>
          </button>
        ))}
      </div>
      <div className="ds-summary" aria-live="polite">
        <span className="ds-summary-rule"/>
        <span>SELECTED STAGE / {stages[active].number}</span>
        <strong className="ds-summary-title">{stages[active].title}</strong>
        <p>{stages[active].detail}</p>
      </div>
      <div className="ds-endline"><span>CLARITY IS A DELIVERY ADVANTAGE.</span><span>BK / METHODOLOGY</span></div>
    </div>
  );
}
