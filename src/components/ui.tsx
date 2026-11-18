import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Project } from "@/lib/content";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`eyebrow ${light ? "light" : ""}`}><span className="eyebrow-dot"/>{children}</span>;
}
export function SectionHeading({ index, title, intro, invert = false }: { index: string; title: ReactNode; intro?: string; invert?: boolean }) {
  return <div className={`section-heading ${invert ? "inverse" : ""}`}><div className="section-heading-title"><span className="section-index">{index}</span><h2>{title}</h2></div>{intro && <p>{intro}</p>}</div>;
}
export function TextLink({ href, children, light = false, external = false }: { href: string; children: ReactNode; light?: boolean; external?: boolean }) {
  const cls = `text-link ${light ? "text-link-light" : ""}`;
  return external ? <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={18}/></a> : <Link className={cls} href={href}>{children}<ArrowUpRight size={18}/></Link>;
}
export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${project.theme} ${compact ? "project-visual-compact" : ""}`} aria-hidden="true">
      <div className="visual-orbit visual-orbit-one"/><div className="visual-orbit visual-orbit-two"/>
      <div className="visual-axis visual-axis-one"/><div className="visual-axis visual-axis-two"/>
      <span className="visual-number">{project.number}</span>
      <span className="visual-glyph">{project.slug === "revenue-assurance" ? "↗" : project.slug === "ecowaka-ev" ? "◉" : project.slug === "nipex-integration" ? "⌘" : project.slug === "compliance-transformation" ? "◇" : project.slug === "public-sector-payments" ? "⇄" : "▤"}</span>
      <span className="visual-caption">{project.industry}</span>
    </div>
  );
}
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="project-card">
      <ProjectVisual project={project}/>
      <div className="project-card-bottom"><div><span className="mini-label">{project.eyebrow}</span><h3>{project.title}</h3><p>{project.summary}</p></div><span className="round-arrow"><ArrowUpRight size={24}/></span></div>
    </Link>
  );
}
export function PageIntro({ index, eyebrow, title, description, dark = false }: { index: string; eyebrow: string; title: ReactNode; description: string; dark?: boolean }) {
  return <section className={`page-intro ${dark ? "page-intro-dark" : ""}`}><div className="container"><div className="page-intro-top"><Eyebrow light={dark}>{eyebrow}</Eyebrow><span className="page-index">{index} / 06</span></div><h1>{title}</h1><div className="page-intro-bottom"><p>{description}</p><ArrowDownRight size={28} strokeWidth={1.3}/></div></div></section>;
}
