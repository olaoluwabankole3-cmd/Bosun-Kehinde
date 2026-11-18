import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { DeliverySequence } from "@/components/delivery-sequence";
import { Reveal } from "@/components/reveal";
import { ProjectCard, TextLink } from "@/components/ui";
import { contact, experience, impact, projects, speaking, testimonialEvidence } from "@/lib/content";

export default function HomePage() {
  const featured = projects.filter(project => project.featured);

  return (
    <>
      <section className="ed-hero" aria-labelledby="home-title">
        <div className="container">
          <div className="ed-hero-labels">
            <span><i className="ed-bullet"/> BOSUN KEHINDE / PROFESSIONAL PORTFOLIO</span>
            <span>BASED IN LAGOS, NIGERIA <span className="ed-location-mark">↗</span> GLOBAL PERSPECTIVE</span>
          </div>
          <div className="ed-hero-layout">
            <div className="ed-hero-copy">
              <p className="ed-overline">TECHNOLOGY. PEOPLE. DELIVERY.</p>
              <h1 id="home-title">Complex<br/>projects.<br/><em>Clear</em> outcomes<span className="ed-fullstop">.</span></h1>
              <p className="ed-hero-description">
                I&apos;m <strong>Bosun Kehinde</strong> — a programme and technology leader
                bringing strategy, people and execution together to move complex work forward.
              </p>
              <div className="ed-actions">
                <Link href="/work" className="ed-primary">Explore selected work <ArrowUpRight size={18}/></Link>
                <Link href="/about" className="ed-inline">Discover my story <ArrowRight size={17}/></Link>
              </div>
            </div>
            <DeliverySequence/>
          </div>
          <div className="ed-hero-foot">
            <a href="#introduction"><span className="ed-down-arrow"><ArrowDownRight size={18}/></span> SCROLL TO EXPLORE</a>
            <span>PROGRAMME MANAGEMENT <i/> AGILE DELIVERY <i/> TRANSFORMATION</span>
            <span>001 — 006</span>
          </div>
        </div>
      </section>

      <section className="ed-introduction" id="introduction">
        <div className="container ed-intro-grid">
          <Reveal><div className="ed-intro-aside"><span className="ed-section-index">01 / INTRODUCTION</span><span className="ed-intro-rule"/><span>THE WORK IS NEVER<br/>JUST THE WORK.</span></div></Reveal>
          <Reveal delay={80}><div className="ed-intro-main"><h2>Progress happens when<br/>the <em>right things</em><br/>come together.</h2><div className="ed-intro-bottom"><p>Across enterprise systems, financial technology, public-sector platforms and organisational change, I have focused on the same challenge: turning ambitious objectives into work that delivers.</p><TextLink href="/about">The story behind my approach</TextLink></div></div></Reveal>
        </div>
      </section>

      <section className="ed-work" id="selected-work">
        <div className="container">
          <Reveal><div className="ed-section-heading">
            <div><span className="ed-section-index">02 / SELECTED WORK</span><h2>Selected work.<br/><em>Lasting impact.</em></h2></div>
            <p>A closer look at programmes and platforms where delivery discipline met complex, real-world challenges.</p>
          </div></Reveal>
          <div className="ed-project-grid">
            {featured.map((project, index) => (
              <Reveal key={project.slug} className={"ed-project-cell ed-project-cell-" + (index + 1)} delay={index * 95}>
                <ProjectCard project={project}/>
              </Reveal>
            ))}
          </div>
          <div className="ed-work-footer"><span>01 — 03 / FEATURED CASE STUDIES</span><TextLink href="/work">Explore all six projects</TextLink></div>
        </div>
      </section>

      <section className="ed-impact" aria-labelledby="impact-title">
        <div className="container">
          <Reveal><div className="ed-impact-head"><span className="ed-section-index">03 / DELIVERY RECORD</span><h2 id="impact-title">Not just activity.<br/><em>Evidence of progress.</em></h2></div></Reveal>
          <div className="ed-impact-grid">
            {impact.map((item,index) => (
              <Reveal key={item.label} delay={index * 60}>
                <div className="ed-impact-stat"><span className="ed-impact-ordinal">0{index+1}</span><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.note}</p></div>
              </Reveal>
            ))}
          </div>
          <p className="ed-impact-disclaimer">Selected figures are from the supplied professional CV and are subject to confirmation for public use.</p>
        </div>
      </section>

      <section className="ed-practice">
        <div className="container">
          <Reveal><div className="ed-section-heading ed-practice-heading">
            <div><span className="ed-section-index">04 / WORKING PHILOSOPHY</span><h2>Different contexts.<br/><em>Intentional delivery.</em></h2></div>
            <p>There is no one-size-fits-all method. The starting point is always the challenge, the people and the outcome.</p>
          </div></Reveal>
          <div className="ed-practice-steps">
            {[
              { n: "01", headline: "Understand what matters.", body: "Find the real problem, agree on the desired outcome and make complexity understandable." },
              { n: "02", headline: "Bring everyone into focus.", body: "Build alignment across stakeholders, delivery teams and changing organisational priorities." },
              { n: "03", headline: "Adapt. Deliver. Improve.", body: "Combine the right methods, keep progress visible and continuously improve what works." }
            ].map((step,index) => (
              <Reveal key={step.n} delay={index*75}>
                <div className="ed-practice-step">
                  <span>{step.n}</span>
                  <h3>{step.headline}</h3>
                  <p>{step.body}</p>
                  <span className="ed-step-arrow"><ArrowUpRight size={21}/></span>
                </div>
              </Reveal>
            ))}
          </div>
          <TextLink href="/leadership">Leadership and advisory experience</TextLink>
        </div>
      </section>

      <section className="ed-leadership">
        <div className="container ed-leadership-grid">
          <Reveal><div className="ed-leadership-left">
            <span className="ed-section-index">05 / THROUGH THE YEARS</span>
            <h2>From implementation<br/>to <em>influence.</em></h2>
            <p>Experience spanning enterprise implementation, project and programme delivery, regional service leadership and strategic advisory.</p>
            <TextLink href="/leadership" light>Explore the full journey</TextLink>
          </div></Reveal>
          <div className="ed-leadership-list">
            {experience.slice(0,4).map((item,index) => (
              <Reveal key={item.title+item.period} delay={index*65}>
                <div className="ed-leadership-entry"><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.org}</p></div><ArrowUpRight size={19}/></div>
              </Reveal>
            ))}
            <div className="ed-leadership-endnote">CAREER HIGHLIGHTS / SELECTED ROLES</div>
          </div>
        </div>
      </section>

      <section className="ed-speaking">
        <div className="container ed-speaking-grid">
          <Reveal><div className="ed-speaking-poster">
            <div className="ed-poster-top"><span>EXCHANGE<br/>OF IDEAS</span><span>BK / 2024</span></div>
            <div className="ed-poster-main"><span>BEYOND<br/>THE<br/><em>BRIEF.</em></span></div>
            <div className="ed-poster-footer"><span>LEARNING / LEADING / SHARING</span><span>↗</span></div>
          </div></Reveal>
          <Reveal delay={90}><div className="ed-speaking-copy">
            <span className="ed-section-index">06 / SPEAKING & FACILITATION</span>
            <h2>Experience is useful.<br/><em>Shared experience</em><br/>is powerful.</h2>
            <p>From Agile Nigeria sessions to technology upskilling, I share practical lessons that help people navigate change and deliver with confidence.</p>
            <div className="ed-speaking-event"><span>{speaking[0].year}</span><div><strong>{speaking[0].title}</strong><small>{speaking[0].host}</small></div><MoveUpRight size={19}/></div>
            <TextLink href="/speaking">Explore speaking engagements</TextLink>
          </div></Reveal>
        </div>
      </section>

      <section className="ed-quote">
        <div className="container ed-quote-layout">
          <Reveal><span className="ed-section-index">FROM THE COMMUNITY / 01</span></Reveal>
          <Reveal delay={65}><div><span className="ed-quotation-mark">“</span><blockquote>Thank you, Bosun Kehinde for guiding us through the enlightening session...</blockquote><div className="ed-quote-attribution"><span><strong>{testimonialEvidence[0].name}</strong><small>{testimonialEvidence[0].role} · Public LinkedIn response</small></span><a href={testimonialEvidence[0].url} target="_blank" rel="noopener noreferrer">Read original post <ArrowUpRight size={17}/></a></div></div></Reveal>
        </div>
      </section>

      <section className="ed-next"><div className="container"><div><span className="ed-section-index">WHAT'S NEXT?</span><h2>Good work starts<br/>with a <em>conversation.</em></h2><p>For consulting, programme leadership, facilitation and collaborations.</p></div><Link href="/contact" aria-label="Contact Bosun Kehinde" className="ed-next-link"><ArrowUpRight size={42}/></Link></div></section>
    </>
  );
}
