"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Scroll effects are enhancements; phone layouts avoid heavy art parallax. */
export function EditorialMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const progress = document.querySelector<HTMLElement>(".reading-progress");
      if (progress) {
        gsap.fromTo(progress, { scaleX: 0 }, {
          scaleX: 1, ease: "none",
          scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: .3 }
        });
      }

      const phone = window.matchMedia("(max-width: 767px)").matches;
      if (phone) return;

      gsap.utils.toArray<HTMLElement>(".folio-visual").forEach(visual => {
        const art = visual.querySelector<HTMLElement>(".fv-ledger, .fv-mobility, .fv-integration, .fv-compliance, .fv-payments, .fv-hcm");
        if (!art) return;
        gsap.fromTo(art, { y: 12 }, {
          y: -12, ease: "none",
          scrollTrigger: { trigger: visual, start: "top bottom", end: "bottom top", scrub: 1.2 }
        });
      });

      const introRule = document.querySelector<HTMLElement>(".ed-intro-rule");
      if (introRule) {
        gsap.fromTo(introRule, { scaleY: 0, transformOrigin: "top" }, {
          scaleY: 1, duration: 1.25, ease: "power2.out",
          scrollTrigger: { trigger: ".ed-introduction", start: "top 70%" }
        });
      }
    });

    return () => context.revert();
  }, [pathname]);

  return <div className="reading-progress" aria-hidden="true"/>;
}
