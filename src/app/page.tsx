import Link from "next/link";
import { ArrowDown, ArrowUpRight, ArrowRight, MoveUpRight } from "lucide-react";
import { HeroDiagram } from "@/components/hero-diagram";
import { Reveal } from "@/components/reveal";
import { Eyebrow, ProjectCard, SectionHeading, TextLink } from "@/components/ui";
import { expertise, impact, projects, speaking, testimonialEvidence } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grain"/>
        <div className="container hero-container">
          <div className="hero-upper"><Eyebrow>TECHNOLOGY · STRATEGY · TRANSFORMATION</Eyebrow><span className="hero-location">BASED IN LAGOS, NIGERIA <span className="location-mark">↗</span> WORKING ACROSS BORDERS</span></div>
          <div className="hero-main">
            <div className="hero-copy">
              <div className="hero-mini-number">PORTFOLIO / 2026</div>
              <h1>Complex<br/>projects.<br/><span>Clear</span> outcomes<span className="period">.</span></h1>
              <p className="hero-intro">I&apos;m <strong>Bosun Kehinde.</strong> I bring people, technology and strategy together to turn ambitious ideas into outcomes that matter.</p>
              <div className="hero-actions"><Link href="/work" className="button button-dark">Explore selected work <ArrowUpRight size={19}/></Link><Link href="/about" className="underlined-link">Get to know me <ArrowRight size={18}/></Link></div>
            </div>
            <div className="hero-art"><HeroDiagram/></div>
          </div>
          <div className="hero-bottom"><a href="#selected-work" className="scroll-cue"><ArrowDown size={17}/> SCROLL TO EXPLORE</a><span>PROGRAMME LEADERSHIP / ENTERPRISE DELIVERY / AGILE TRANSFORMATION</span></div>
        </div>
      </section>

      <section className="intro-strip"><div className="container intro-strip-inner"><p>REAL-WORLD EXPERIENCE ACROSS</p><div>FINANCIAL SYSTEMS <span>✳</span> ENTERPRISE TECHNOLOGY <span>✳</span> PUBLIC SECTOR <span>✳</span> DIGITAL TRANSFORMATION</div></div></section>

      <section className="section section-intro">
        <div className="container intro-grid">
          <Reveal><div><Eyebrow>01 / THE INTRODUCTION</Eyebrow><div className="intro-signature">BK<span>.</span></div></div></Reveal>
          <Reveal delay={90}><div><h2>Good leadership<br/>makes <em>complexity</em><br/>work for you.</h2><p>From large-scale enterprise implementations to agile product ecosystems, my work lives at the intersection of business ambition and disciplined execution. I bring structure when it matters, adaptability when it counts, and people into the centre of every transformation.</p><TextLink href="/about">More about my approach</TextLink></div></Reveal>
        </div>
      </section>

      <section id="selected-work" className="section section-work">
        <div className="container">
          <Reveal><SectionHeading index="02 / SELECTED WORK" title={<>Work that moves<br/><em>organisations forward.</em></>} intro="A selection of programmes, systems and transformations that reveal the scale and variety of my experience."/></Reveal>
          <div className="featured-grid">{projects.filter(project => project.featured).map((project,index) => <Reveal key={project.slug} className={index === 0 ? "featured-large" : ""} delay={index * 80}><ProjectCard project={project}/></Reveal>)}</div>
          <div className="work-more"><TextLink href="/work">Explore the full portfolio</TextLink><span>06 SELECTED CASE STUDIES</span></div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container">
          <Reveal><div className="impact-heading"><Eyebrow light>03 / THE IMPACT</Eyebrow><h2>Impact you can<br/><em>put a number to.</em></h2><p>Selected outcomes reported from previous leadership and delivery roles.</p></div></Reveal>
          <div className="impact-grid">{impact.map((item,index) => <Reveal key={item.label} delay={index*80}><div className="impact-item"><span className="impact-number">{item.value}</span><h3>{item.label}</h3><p>{item.note}</p></div></Reveal>)}</div>
          <p className="impact-note">Figures are taken from the supplied professional CV and remain subject to public-use approval.</p>
        </div>
        <div className="impact-decoration" aria-hidden="true">RESULTS / NOT RHETORIC</div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <Reveal><SectionHeading index="04 / HOW I WORK" title={<>The thinking behind<br/><em>the delivery.</em></>} intro="Every transformation is different. The principles behind good delivery should not be."/></Reveal>
          <div className="expertise-grid">{expertise.map((item,index) => <Reveal key={item.number} delay={index*50}><div className="expertise-item"><span className="expertise-number">{item.number}</span><div className="expertise-symbol">{index === 0 ? "↗" : index === 1 ? "◎" : index === 2 ? "⌘" : "✳"}</div><h3>{item.name}</h3><p>{item.description}</p></div></Reveal>)}</div>
          <div className="approach-cta"><TextLink href="/leadership">Explore leadership & experience</TextLink></div>
        </div>
      </section>

      <section className="section speaking-feature">
        <div className="container speaking-feature-grid">
          <Reveal><div className="speaking-feature-art"><span className="art-eyebrow">FROM EXPERIENCE → TO EXCHANGE</span><div className="speaking-feature-circle"><span>IDEAS<br/>IN<br/><em>MOTION.</em></span></div><div className="art-footer"><span>KNOWLEDGE SHARED</span><span>2023 — PRESENT</span></div></div></Reveal>
          <Reveal delay={80}><div className="speaking-feature-copy"><Eyebrow>05 / BEYOND DELIVERY</Eyebrow><h2>Progress grows<br/>when knowledge<br/><em>is shared.</em></h2><p>Teaching, facilitating and speaking are natural extensions of my work. I share grounded lessons in Agile, project management and digital transformation to help people and teams grow.</p><div className="speaking-sample"><span>{speaking[0].year}</span><p>{speaking[0].title}<small>{speaking[0].host}</small></p><MoveUpRight size={19}/></div><TextLink href="/speaking">Speaking & facilitation</TextLink></div></Reveal>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <Reveal><div className="testimonial-head"><Eyebrow>06 / COMMUNITY VOICES</Eyebrow><h2>Shared ideas.<br/><em>Real conversations.</em></h2></div></Reveal>
          <div className="testimonial-grid">{testimonialEvidence.map((item,index) => <Reveal key={item.name} delay={index * 100}><a href={item.url} target="_blank" rel="noopener noreferrer" className="testimonial-card"><span className="quote-mark">“</span><p>{item.excerpt}</p><div><strong>{item.name}</strong><span>{item.role}</span></div><span className="testimonial-source">VIEW ORIGINAL LINKEDIN POST <ArrowUpRight size={16}/></span></a></Reveal>)}</div>
          <p className="evidence-note">Short excerpts are sourced from the supplied testimonial document. See the original posts for full context.</p>
        </div>
      </section>
    </>
  );
}