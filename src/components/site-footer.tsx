import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="eyebrow light">WHAT COMES NEXT?</span>
            <h2>Let&apos;s make<br /><em>progress.</em></h2>
          </div>
          <Link href="/contact" className="footer-circle" aria-label="Get in touch"><ArrowUpRight size={40} strokeWidth={1.4}/></Link>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="footer-wordmark">BOSUN KEHINDE<span>.</span></Link>
          <div className="footer-links"><Link href="/about">About</Link><Link href="/work">Work</Link><Link href="/speaking">Speaking</Link><Link href="/contact">Contact</Link></div>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14}/></a>
          <span className="copyright">© {new Date().getFullYear()} Bosun Kehinde</span>
        </div>
      </div>
    </footer>
  );
}