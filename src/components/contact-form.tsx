"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { contact } from "@/lib/content";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Consulting / collaboration");
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `From: ${name.trim()}\nReply to: ${email.trim()}\nType: ${subject}\n\n${message.trim()}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio inquiry: ${subject}`)}&body=${encodeURIComponent(body)}`;
    setReady(true);
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label>YOUR NAME<input required maxLength={120} placeholder="How should I address you?" value={name} onChange={event => setName(event.target.value)}/></label>
        <label>EMAIL ADDRESS<input required type="email" maxLength={254} placeholder="you@company.com" value={email} onChange={event => setEmail(event.target.value)}/></label>
      </div>
      <label>WHAT&apos;S ON YOUR MIND?<select value={subject} onChange={event => setSubject(event.target.value)}>
        <option>Consulting / collaboration</option><option>Leadership opportunity</option><option>Speaking invitation</option><option>Training / facilitation</option><option>Something else</option>
      </select></label>
      <label>YOUR MESSAGE<textarea required minLength={10} maxLength={5000} rows={5} placeholder="Tell me about the opportunity, challenge, or idea..." value={message} onChange={event => setMessage(event.target.value)}/></label>
      <div className="form-actions"><button type="submit" className="button button-dark">Compose email <ArrowUpRight size={19}/></button><p>This opens your email app; the website does not store or send your information.</p></div>
      {ready && <div className="form-confirmation" role="status"><Check size={17}/> Your email draft should open in your mail app. Please send it from there.</div>}
    </form>
  );
}