import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import "./editorial.css";
import "./mobile.css";
import "./portrait-hero.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EditorialMotion } from "@/components/editorial-motion";
import { contact } from "@/lib/content";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Bosun Kehinde — Technology, Strategy & Delivery", template: "%s | Bosun Kehinde" },
  description: "Explore the work, leadership and speaking engagements of Bosun Kehinde — technology and programme management leader focused on enterprise transformation and measurable outcomes.",
  openGraph: { title: "Bosun Kehinde — Complex Projects. Clear Outcomes.", description: "Technology, strategy and enterprise transformation.", type: "website", locale: "en_NG" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <EditorialMotion />
        <main id="main">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org", "@type":"Person", name:contact.name,
          address: { "@type":"PostalAddress", addressLocality:"Lagos", addressCountry:"NG" },
          sameAs:[contact.linkedin], email:contact.email,
          jobTitle:"Technology & Programme Management Leader"
        }) }} />
      </body>
    </html>
  );
}