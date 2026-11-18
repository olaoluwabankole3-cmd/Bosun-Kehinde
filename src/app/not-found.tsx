import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return <section className="not-found-page"><div className="container"><span className="eyebrow"><span className="eyebrow-dot"/> PAGE NOT FOUND</span><h1>Wrong turn.<br/><em>New direction.</em></h1><p>We couldn&apos;t find the page you were looking for.</p><Link className="button button-dark" href="/"><ArrowLeft size={18}/> Back home</Link></div></section>;
}