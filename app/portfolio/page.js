import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteTriggerButton } from "@/components/QuoteTriggerButton";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Reveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Software & Connected Systems Portfolio — BUILDROONIX",
  description:
    "Explore BUILDROONIX's software applications, enterprise ERP/CRM systems, SaaS platforms, AI prototypes, API integrations, and connected IoT solutions.",
};

export default function PortfolioDirectoryPage() {
  return (
    <>
      <SiteHeader activeSection="portfolio" />

      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#38BDF8" }}>Portfolio</span>
          </div>
          <Reveal preset="blur-in" immediate delay={0.04}>
            <span className="section-kicker kicker-light">SOFTWARE &amp; CONNECTED TECH PORTFOLIO</span>
            <h1>Client Systems, Architectural Demonstrations &amp; Internal Prototypes.</h1>
          </Reveal>
          <Reveal preset="fade-up" immediate delay={0.14}>
            <p>
              We clearly distinguish delivered client systems from system demonstrations and internal engineering
              prototypes. Select any project to inspect its problem statement, modules, architecture, QA process, and tech
              stack.
            </p>
            <div className="hero-btns">
              <QuoteTriggerButton label="Discuss Your Project" className="btn-primary" showSparkle />
              <Link href="/services/software-development" className="btn-outline-light">
                Explore Software Services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-wrap">
          <PortfolioSection showTypeFilter />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
