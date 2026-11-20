import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { DeliverySequence } from "@/components/delivery-sequence";
import { Reveal } from "@/components/reveal";
import { ProjectCard, TextLink } from "@/components/ui";
import { experience, impact, projects, speaking, testimonialEvidence } from "@/lib/content";

export default function HomePage() {
  const featured = projects.filter(project => project.featured);

  return (
    <>
      <section className="bk-hero" aria-labelledby="home-title">
        <div className="bk-hero-grid">
          <div className="bk-hero-copy">
            <div className="bk-hero-eyebrow"><span className="bk-eyebrow-mark"/> <span>THE PERSON BEHIND THE PROGRESS</span><span>01 / 06</span></div>
            <div className="bk-hero-message">
              <p className="bk-kicker">MEET THE PROGRAMME &amp; TECHNOLOGY LEADER</p>
              <h1 id="home-title">Bosun<br/><em>Kehinde</em><span>.</span></h1>
              <div className="bk-hero-rule"/>
              <p className="bk-hero-title">Complex projects.<br/><strong>Clear outcomes.</strong></p>
              <p className="bk-hero-summary">I bring strategy, people and execution together to move ambitious ideas forward — across technology, enterprise delivery and organisational change.</p>
              <div className="bk-hero-actions">
                <Link href="/work" className="bk-hero-primary">Explore selected work <ArrowUpRight size={18} aria-hidden="true"/></Link>
                <Link href="/about" className="bk-hero-secondary">More about Bosun <ArrowRight size={17} aria-hidden="true"/></Link>
              </div>
            </div>
            <div className="bk-hero-bottom">
              <span>BASED IN LAGOS, NIGERIA</span><span>WORKING ACROSS PEOPLE, SYSTEMS &amp; SECTORS</span>
            </div>
          </div>
          <div className="bk-hero-photo">
            <Image
              src="/images/bosun-kehinde-portrait-4k.webp"
              alt="Bosun Kehinde smiling in a grey suit, white shirt and patterned tie"
              fill
              priority
              quality={88}
              sizes="(max-width: 850px) 100vw, 55vw"
              className="bk-hero-image"
            />
            <div className="bk-hero-photo-shade" aria-hidden="true"/>
            <div className="bk-photo-top"><span>BK / PORTRAIT NO. 01</span><span>2026</span></div>
            <div className="bk-photo-bottom">
              <span className="bk-photo-label">BOSUN KEHINDE</span>
              <strong className="bk-photo-mobile-name">Bosun<br/><em>Kehinde.</em></strong>
              <span className="bk-photo-scroll">SCROLL TO DISCOVER <ArrowDownRight size={17} aria-hidden="true"/></span>
            </div>
          </div>
        </div>
        <a href="#introduction" className="bk-hero-scroll-link" aria-label="Scroll down to Bosun Kehinde's introduction">
          <ArrowDownRight size={17} aria-hidden="true"/>
        </a>
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

      <section className="bk-method" aria-labelledby="method-heading">
        <div className="container bk-method-grid">
          <Reveal><div className="bk-method-copy">
            <span className="ed-section-index">04 / THE WAY I WORK</span>
            <h2 id="method-heading">Clarity before<br/><em>complexity.</em></h2>
            <p>Technology can be complicated. Progress shouldn&apos;t be. Here&apos;s how I bring people, priorities and delivery into focus.</p>
            <TextLink href="/leadership">Explore my leadership experience</TextLink>
          </div></Reveal>
          <Reveal delay={70}><DeliverySequence/></Reveal>
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

    </>
  );
}
