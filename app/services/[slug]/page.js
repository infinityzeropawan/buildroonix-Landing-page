import Link from "next/link";
import { notFound } from "next/navigation";
import { BUILDROONIX_BRAND } from "@/lib/brand";
import { SERVICE_CATALOG } from "@/lib/services-catalog";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteTriggerButton } from "@/components/QuoteTriggerButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal, SpotlightCard, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export function generateStaticParams() {
  return Object.keys(SERVICE_CATALOG).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const svc = SERVICE_CATALOG[slug];
  if (!svc) return { title: "Service — BUILDROONIX" };
  return {
    title: `${svc.title} — BUILDROONIX`,
    description: svc.summary,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const svc = SERVICE_CATALOG[slug];
  if (!svc) notFound();

  const relatedProjects = PORTFOLIO_PROJECTS.filter((p) =>
    (svc.relatedPortfolio || []).includes(p.slug)
  );
  const waUrl = `https://wa.me/${BUILDROONIX_BRAND.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi Buildroonix, I'd like to discuss ${svc.title} and request a quote.`
  )}`;

  const siblingServices = Object.values(SERVICE_CATALOG).filter(
    (item) => item.division === svc.division
  );

  return (
    <>
      <SiteHeader activeSection="services" />

      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services/software-development">Services</Link>
            <span>/</span>
            <span style={{ color: svc.accent || "#06B6D4" }}>{svc.title}</span>
          </div>
          <Reveal preset="blur-in" immediate delay={0.04}>
            <span className="section-kicker kicker-light" style={{ color: svc.accent || "#06B6D4" }}>
              {svc.division} · {svc.badge}
            </span>
            <h1>{svc.title}</h1>
          </Reveal>
          <Reveal preset="fade-up" immediate delay={0.14}>
            <p>
              {svc.headline} {svc.summary}
            </p>
            <div className="hero-btns">
              <QuoteTriggerButton
                label="Request a Quote"
                preselect={svc.title}
                className="btn-primary"
                showSparkle
              />
              <QuoteTriggerButton
                label="Discuss Your Project"
                preselect={svc.title}
                className="btn-outline-light"
              />
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-wa-light">
                WhatsApp Us ↗
              </a>
            </div>
          </Reveal>
          {siblingServices.length > 1 && (
            <Reveal preset="fade-up" immediate delay={0.24} className="service-sibling-rail" aria-label="Related services in division">
              {siblingServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`sibling-pill ${s.slug === svc.slug ? "active" : ""}`}
                >
                  {s.title.replace(" Development", "")}
                </Link>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-dark">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">Engineering Scope</span>
            <h2 className="section-h2">What we architect and deliver.</h2>
          </Reveal>
          <ul className="deliverables-list" style={{ marginBottom: "32px" }}>
            {svc.overview.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>

          <StaggerContainer className="subpage-grid-2" staggerDelay={0.08}>
            {svc.capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <SpotlightCard className="capability-box" id={c.id || undefined} accent={svc.accent || "#26a9ff"}>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <div className="subpage-grid-2">
            <div>
              <Reveal preset="fade-up">
                <span className="section-kicker kicker-light">Deliverables</span>
                <h2 className="section-h2" style={{ fontSize: "clamp(24px,3vw,34px)" }}>
                  Concrete technical artifacts.
                </h2>
              </Reveal>
              <ul className="deliverables-list" style={{ gridTemplateColumns: "1fr" }}>
                {svc.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>

            <div>
              <Reveal preset="fade-up">
                <span className="section-kicker kicker-light">Common Use Cases &amp; Stack</span>
                <h2 className="section-h2" style={{ fontSize: "clamp(24px,3vw,34px)" }}>
                  Where this fits best.
                </h2>
              </Reveal>
              <SpotlightCard className="capability-box" style={{ marginBottom: "16px" }} accent={svc.accent || "#38BDF8"}>
                <h3>Target Use Cases</h3>
                <div className="stack-tags" style={{ marginTop: "10px" }}>
                  {svc.useCases.map((u) => (
                    <span key={u} className="stack-tag">
                      {u}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
              <SpotlightCard className="capability-box" accent={svc.accent || "#10B981"}>
                <h3>Technologies Supported</h3>
                <div className="stack-tags" style={{ marginTop: "10px" }}>
                  {svc.stack.map((st) => (
                    <span key={st} className="stack-tag">
                      {st}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-dark">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header-split">
              <div className="section-header">
                <span className="section-kicker kicker-light">Related Portfolio</span>
                <h2 className="section-h2">Systems &amp; prototypes in this domain.</h2>
              </div>
              <Link href="/portfolio" className="btn-outline-light">
                All Portfolio Projects →
              </Link>
            </Reveal>
            <StaggerContainer className="subpage-grid-2" staggerDelay={0.08}>
              {relatedProjects.map((p) => {
                const badgeCls =
                  p.projectType === "Client Project"
                    ? "client"
                    : p.projectType === "Internal Prototype"
                      ? "prototype"
                      : "demo";
                return (
                  <StaggerItem key={p.slug}>
                    <SpotlightCard href={`/portfolio/${p.slug}`} className="port-card" accent={p.accent || "#26a9ff"}>
                      <div className="port-card-top">
                        <span className="port-cat" style={{ color: p.accent || "#26a9ff" }}>{p.category}</span>
                        <span className={`port-type-badge ${badgeCls}`}>{p.projectType}</span>
                      </div>
                      <div className="port-thumb">
                        <img src={p.image} alt={p.title} loading="lazy" />
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.shortDesc}</p>
                      <span className="port-card-cta">View Full Case Study →</span>
                    </SpotlightCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">Service FAQ</span>
            <h2 className="section-h2">Frequently Asked Questions</h2>
          </Reveal>
          <FaqAccordion items={svc.faqs} />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
