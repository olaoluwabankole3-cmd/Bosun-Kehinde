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
  const is = project.slug;
  return (
    <div className={"folio-visual fv-" + is + (compact ? " folio-compact" : "")} aria-label={"Editorial illustration for " + project.title} role="img">
      <div className="fv-header"><span>FIELD RECORD / {project.number}</span><span>{project.industry.toUpperCase()}</span></div>

      {is === "revenue-assurance" && <div className="fv-ledger">
        <div className="fv-ledger-top"><span>REVENUE / ASSURANCE</span><span>DELIVERY LOG</span></div>
        <div className="fv-ledger-figure"><span>48</span><span>%<small>REPORTED INCREASE</small></span></div>
        <div className="fv-ledger-rows">
          {["COLLECTION NETWORK","FIELD OPERATIONS","DIGITAL WORKFLOW"].map((label,i)=><div key={label}><span>0{i+1} / {label}</span><i/></div>)}
        </div>
      </div>}

      {is === "ecowaka-ev" && <div className="fv-mobility">
        <span className="fv-mobility-small">CONNECTED SYSTEMS / 03</span>
        <svg viewBox="0 0 540 270" aria-hidden="true" className="fv-mobility-map">
          <path d="M52 204 H177 C220 204 208 76 272 76 H487" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 7"/>
          <path d="M52 204 H177 C220 204 208 76 272 76 H487" fill="none" stroke="currentColor" strokeWidth="18" strokeOpacity=".08"/>
          <circle cx="52" cy="204" r="14"/><circle cx="272" cy="76" r="14"/><circle cx="487" cy="76" r="14"/>
          <circle cx="52" cy="204" r="5" fill="currentColor"/><circle cx="272" cy="76" r="5" fill="currentColor"/><circle cx="487" cy="76" r="5" fill="currentColor"/>
          <path d="M52 204 V157 M272 76 V125 M487 76 V125" stroke="currentColor" strokeOpacity=".45"/>
        </svg>
        <div className="fv-mobility-tags"><span>OPERATIONS</span><span>RIDERS</span><span>PARTNERS</span></div>
      </div>}

      {is === "nipex-integration" && <div className="fv-integration">
        <p>ENTERPRISE INTEROPERABILITY</p>
        <div className="fv-integration-flow">
          <span><small>01 / ENTERPRISE</small>ORACLE</span>
          <i aria-hidden="true">→</i>
          <span className="fv-central"><small>02 / SERVICE LAYER</small>SOA</span>
          <i aria-hidden="true">→</i>
          <span><small>03 / ECOSYSTEM</small>SAP</span>
        </div>
        <div className="fv-integration-bottom"><i/><i/><i/><i/><i/><i/><i/><i/></div>
      </div>}

      {is === "compliance-transformation" && <div className="fv-compliance">
        <span className="fv-compliance-title">FOUR CONNECTED DISCIPLINES</span>
        <div>{["ISMS","BCMS","CLOUD","CYBER"].map((label,i)=><span key={label}><small>0{i+1}</small><strong>{label}</strong><em>↗</em></span>)}</div>
      </div>}

      {is === "public-sector-payments" && <div className="fv-payments">
        <span className="fv-payments-title">ANATOMY OF A TRANSACTION</span>
        <div className="fv-payments-flow">{["INITIATE","AUTHORISE","SETTLE"].map((label,i)=><div key={label}><small>0{i+1}</small><strong>{label}</strong><span>{i===2 ? "✓" : "→"}</span></div>)}</div>
      </div>}

      {is === "enterprise-hcm" && <div className="fv-hcm">
        <div className="fv-hcm-label">SYSTEMS THAT WORK TOGETHER</div>
        <div className="fv-hcm-head"><span>PEOPLE</span><span>PAYROLL</span><span>FINANCE</span></div>
        {[0,1,2,3].map((index)=><div className="fv-hcm-row" key={index}><span/><span/><span/></div>)}
      </div>}

      <div className="fv-footer"><span>SELECTED WORK / BOSUN KEHINDE</span><span>BK — {project.number}</span></div>
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
