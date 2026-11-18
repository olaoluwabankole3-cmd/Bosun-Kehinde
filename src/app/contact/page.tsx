import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Eyebrow, PageIntro } from "@/components/ui";
import { contact } from "@/lib/content";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Bosun Kehinde about enterprise delivery, leadership, consultancy, training and speaking opportunities." };

export default function ContactPage() {
  return <>
    <PageIntro index="06" eyebrow="GET IN TOUCH" title={<>The next chapter<br/><em>starts with hello.</em></>} description="Have a complex challenge, a collaboration in mind or an idea worth exploring? I'd love to hear about it."/>
    <section className="section contact-section"><div className="container contact-layout">
      <Reveal><div className="contact-sidebar"><Eyebrow>01 / CONTACT DETAILS</Eyebrow><h2>Good things<br/>start with a<br/><em>conversation.</em></h2><div className="contact-method"><span><Mail size={19}/> EMAIL</span><a href={`mailto:${contact.email}`}>{contact.email} <ArrowUpRight size={17}/></a></div><div className="contact-method"><span><MapPin size={19}/> LOCATION</span><p>{contact.location}</p></div><div className="contact-method"><span>PROFESSIONAL NETWORK</span><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={17}/></a></div></div></Reveal>
      <Reveal delay={80}><div className="contact-form-wrap"><div className="contact-form-head"><span>02 / START AN INQUIRY</span><p>Tell me a little about what you have in mind.</p></div><ContactForm/></div></Reveal>
    </div></section>
  </>;
}