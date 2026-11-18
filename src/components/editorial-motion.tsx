"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Content-led motion, with every timeline disabled for reduced-motion users. */
export function EditorialMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const scope = gsap.context(() => {
      gsap.to(".reading-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: true }
      });
      gsap.utils.toArray<HTMLElement>(".folio-visual").forEach(visual => {
        const art = visual.querySelector<HTMLElement>(".fv-ledger, .fv-mobility, .fv-integration, .fv-compliance, .fv-payments, .fv-hcm");
        if (!art) return;
        gsap.fromTo(art, { y: 12 }, { y: -12, ease: "none",
          scrollTrigger: { trigger: visual, start: "top bottom", end: "bottom top", scrub: 1.2 }
        });
      });
      const introRule = document.querySelector<HTMLElement>(".ed-intro-rule");
      if (introRule) {
        gsap.fromTo(introRule, { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 1.25, ease: "power2.out",
            scrollTrigger: { trigger: ".ed-introduction", start: "top 70%" }
          }
        );
      }
      gsap.utils.toArray<HTMLElement>(".ed-leadership-entry").forEach(item => {
        gsap.fromTo(item, { borderColor: "rgba(22,45,27,.06)" },
          { borderColor: "rgba(22,45,27,.30)", duration: .8, ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 85%" }
          });
      });
    });
    return () => scope.revert();
  }, []);
  return <div className="reading-progress" aria-hidden="true"/>;
}
