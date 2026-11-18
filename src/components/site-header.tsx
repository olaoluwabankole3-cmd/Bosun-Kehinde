"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Selected work" },
  { href: "/leadership", label: "Leadership" },
  { href: "/speaking", label: "Speaking" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const menu = menuRef.current;
    menu?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key !== "Tab" || !menu) return;
      const focusable = Array.from(menu.querySelectorAll<HTMLAnchorElement>("a"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 850) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const active = (href: string) => pathname === href || (href === "/work" && pathname.startsWith("/work/"));

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "") + (menuOpen ? " menu-open" : "")}>
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Bosun Kehinde home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">B<span>K</span><i>.</i></span>
          <span className="brand-name">BOSUN<br />KEHINDE</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(item => (
            <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined} className={active(item.href) ? "nav-active" : ""}>{item.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="nav-cta">Let&apos;s connect <ArrowUpRight size={17}/></Link>
        <button ref={toggleRef} type="button" className="menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(value => !value)}>
          <span className="menu-toggle-label">{menuOpen ? "CLOSE" : "MENU"}</span>
          {menuOpen ? <X size={23} aria-hidden="true"/> : <Menu size={23} aria-hidden="true"/>}
        </button>
      </div>
      <nav ref={menuRef} id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!menuOpen} className={"mobile-nav" + (menuOpen ? " mobile-nav-open" : "")}>
        <div className="mobile-nav-topline"><span>EXPLORE THE PORTFOLIO</span><span>BK / 2026</span></div>
        <div className="mobile-nav-links">
          {[...navigation, { href: "/contact", label: "Contact" }].map((item, index) => (
            <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined} className={active(item.href) ? "mobile-link-active" : ""} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span><strong>{item.label}</strong><ArrowUpRight size={19} aria-hidden="true"/>
            </Link>
          ))}
        </div>
        <div className="mobile-nav-bottom"><span>COMPLEX PROJECTS. CLEAR OUTCOMES.</span><span>LET&apos;S MAKE PROGRESS ↗</span></div>
      </nav>
    </header>
  );
}
