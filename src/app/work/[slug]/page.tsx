import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Eyebrow, ProjectVisual } from "@/components/ui";
import { projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  return { title: project ? project.title : "Project not found", description: project?.summary };
}
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex(item => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  return <>
    <section className="case-hero"><div className="container"><Link className="back-link" href="/work"><ArrowLeft size={17}/> ALL PROJECTS</Link><div className="case-meta"><Eyebrow>{project.eyebrow}</Eyebrow><span>CASE STUDY {project.number} / 06</span></div><h1>{project.title}</h1><p className="case-summary">{project.summary}</p><div className="case-facts"><div><span>SECTOR</span><strong>{project.industry}</strong></div><div><span>PERIOD</span><strong>{project.year}</strong></div><div><span>ROLE</span><strong>{project.role}</strong></div></div></div></section>
    <section className="case-visual-section"><div className="container"><ProjectVisual project={project}/></div></section>
    <section className="section case-content"><div className="container case-content-grid"><Reveal><div className="case-side"><Eyebrow>01 / THE CHALLENGE</Eyebrow><h2>Understanding<br/>the <em>problem.</em></h2></div></Reveal><Reveal delay={80}><p className="case-body">{project.challenge}</p></Reveal></div></section>
    <section className="section case-approach"><div className="container"><Reveal><div className="case-content-grid"><div><Eyebrow>02 / THE APPROACH</Eyebrow><h2>Turning strategy<br/>into <em>action.</em></h2></div><p className="case-body">An approach grounded in context, team collaboration and the realities of implementing change.</p></div></Reveal><div className="approach-steps">{project.approach.map((step,index) => <Reveal key={step} delay={index*75}><div><span>0{index + 1}</span><p>{step}</p></div></Reveal>)}</div></div></section>
    <section className="section case-outcome"><div className="container"><Reveal><Eyebrow light>03 / THE OUTCOME</Eyebrow><h2>What the work<br/><em>made possible.</em></h2></Reveal><div className="case-metrics">{project.outcomes.map((outcome,index) => <Reveal key={outcome.label} delay={index*90}><div><strong>{outcome.metric}</strong><h3>{outcome.label}</h3>{outcome.detail && <p>{outcome.detail}</p>}</div></Reveal>)}</div>{project.disclaimer && <p className="case-disclaimer">{project.disclaimer}</p>}</div></section>
    <section className="section case-tags"><div className="container"><Eyebrow>AREAS OF PRACTICE</Eyebrow><div>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></section>
    <Link href={`/work/${next.slug}`} className="next-project"><div className="container"><span>NEXT CASE STUDY <ArrowRight size={18}/></span><h2>{next.title}<ArrowUpRight size={42}/></h2></div></Link>
  </>;
}