"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { href: "/", label: "Home" }, { href: "/about", label: "About" },
  { href: "/work", label: "Work" }, { href: "/leadership", label: "Leadership" },
  { href: "/speaking", label: "Speaking" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Bosun Kehinde home">
          <span className="brand-mark">B<span>K</span><i>.</i></span>
          <span className="brand-name">BOSUN<br />KEHINDE</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(item => (
            <Link key={item.href} href={item.href} className={pathname === item.href || (item.href === "/work" && pathname.startsWith("/work/")) ? "nav-active" : ""}>{item.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="nav-cta">Let&apos;s connect <ArrowUpRight size={17}/></Link>
        <button type="button" className="menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <X size={25}/> : <Menu size={25}/>}</button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
        {[...navigation, { href: "/contact", label: "Contact" }].map((item, index) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={19}/></Link>)}
      </nav>
    </header>
  );
}