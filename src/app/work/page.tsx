import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PageIntro, ProjectCard } from "@/components/ui";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Selected Work", description: "Explore selected technology, financial systems, enterprise integration and transformation projects led or supported by Bosun Kehinde." };

export default function WorkPage() {
  return <>
    <PageIntro index="03" eyebrow="THE WORK / THE IMPACT" title={<>Building change.<br/><em>Delivering value.</em></>} description="Selected projects across financial technology, digital products, enterprise implementation and organisational transformation. Real work. Tangible outcomes."/>
    <section className="section work-listing"><div className="container"><div className="listing-top"><span>SELECTED PROJECTS (06)</span><span>EXPLORE THE CASE STUDIES ↓</span></div><div className="all-projects-grid">{projects.map((project,index) => <Reveal key={project.slug} delay={(index%2)*90}><ProjectCard project={project}/></Reveal>)}</div><p className="listing-note">Project descriptions are based on supplied professional records. Client-specific imagery and detailed technical artefacts will be added only when approved for publication.</p></div></section>
  </>;
}