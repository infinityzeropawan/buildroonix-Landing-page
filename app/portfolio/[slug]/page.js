import Link from "next/link";
import { notFound } from "next/navigation";
import { BUILDROONIX_BRAND } from "@/lib/brand";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { SERVICE_CATALOG } from "@/lib/services-catalog";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteTriggerButton } from "@/components/QuoteTriggerButton";
import { PortfolioPreviewSwitcher } from "@/components/PortfolioPreviewSwitcher";
import { Reveal, SpotlightCard, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project — BUILDROONIX Portfolio" };
  return {
    title: `${project.title} — BUILDROONIX Portfolio`,
    description: project.shortDesc,
  };
}

export default async function PortfolioDetailPage({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const badgeCls =
    project.projectType === "Client Project"
      ? "client"
      : project.projectType === "Internal Prototype"
        ? "prototype"
        : "demo";

  const relatedSvcs = (project.relatedServices || [])
    .map((sSlug) => SERVICE_CATALOG[sSlug])
    .filter(Boolean);

  const waUrl = `https://wa.me/${BUILDROONIX_BRAND.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi Buildroonix, I'd like to request a similar solution to: ${project.title}`
  )}`;

  return (
    <>
      <SiteHeader activeSection="portfolio" />

      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/portfolio">Portfolio</Link>
            <span>/</span>
            <span style={{ color: project.accent || "#38BDF8" }}>{project.title}</span>
          </div>
          <Reveal preset="blur-in" immediate delay={0.04}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "14px" }}>
              <span className="section-kicker kicker-light" style={{ marginBottom: 0 }}>
                {project.category}
              </span>
              <span className={`port-type-badge ${badgeCls}`}>{project.projectType}</span>
            </div>
            <h1>{project.title}</h1>
          </Reveal>
          <Reveal preset="fade-up" immediate delay={0.14}>
            <p>{project.shortDesc}</p>
            <div className="hero-btns">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Live Project ↗
                </a>
              )}
              <QuoteTriggerButton
                label="Request a Similar Solution"
                preselect={project.title}
                className={project.liveUrl ? "btn-outline-light" : "btn-primary"}
                showSparkle
              />
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-wa-light">
                Discuss on WhatsApp ↗
              </a>
              <Link href="/portfolio" className="btn-outline-light">
                ← Back to Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-wrap">
          <div className="subpage-grid-2" style={{ alignItems: "start" }}>
            <StaggerContainer style={{ display: "flex", flexDirection: "column", gap: "18px" }} staggerDelay={0.08}>
              <StaggerItem>
                <SpotlightCard className="capability-box" accent={project.accent || "#26a9ff"}>
                  <h3>Problem Statement</h3>
                  <p>{project.problemStatement}</p>
                </SpotlightCard>
              </StaggerItem>
              <StaggerItem>
                <SpotlightCard className="capability-box" accent="#26a9ff">
                  <h3>Requirements &amp; Scope</h3>
                  <p>{project.clientRequirements}</p>
                </SpotlightCard>
              </StaggerItem>
              <StaggerItem>
                <SpotlightCard className="capability-box" accent="#10b981">
                  <h3>Proposed Software Solution</h3>
                  <p>{project.solution}</p>
                </SpotlightCard>
              </StaggerItem>
            </StaggerContainer>

            <div>
              <Reveal preset="scale-in">
                <PortfolioPreviewSwitcher
                  image={project.image}
                  title={project.title}
                  mockupType={project.mockupType}
                  accent={project.accent}
                  demoVideoUrl={project.demoVideoUrl}
                  liveUrl={project.liveUrl}
                />
              </Reveal>
              <Reveal preset="fade-up" delay={0.12}>
                <SpotlightCard className="capability-box" accent={project.accent || "#ff7212"}>
                  <h3>Technology Stack Used</h3>
                  <div className="stack-tags" style={{ marginTop: "12px" }}>
                    {project.stack.map((s) => (
                      <span key={s} className="stack-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">Architecture &amp; Modules</span>
            <h2 className="section-h2">System Modules &amp; Data Flow Overview</h2>
          </Reveal>

          <Reveal preset="scale-in" className="arch-diagram" style={{ marginBottom: "28px" }}>
            {(project.architecture?.nodes || []).map((node, idx, arr) => (
              <div key={node} style={{ display: "contents" }}>
                <div className="arch-node">
                  <span className="arch-layer-num">LAYER 0{idx + 1}</span>
                  <strong>{node}</strong>
                </div>
                {idx < arr.length - 1 && <span className="arch-arrow">→</span>}
              </div>
            ))}
          </Reveal>

          <h3 style={{ fontFamily: "var(--f-head)", fontSize: "20px", marginBottom: "14px", color: "#F8FAFC" }}>
            Key Features &amp; Modules
          </h3>
          <ul className="deliverables-list">
            {project.modules.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-wrap">
          <div className="subpage-grid-2">
            <SpotlightCard className="capability-box" accent="#38BDF8">
              <h3>Testing &amp; Deployment Process</h3>
              <p>{project.testingDeployment}</p>
            </SpotlightCard>
            <SpotlightCard
              className="capability-box"
              style={{ borderLeft: "4px solid #10B981" }}
              accent="#10B981"
            >
              <h3>Outcome &amp; Verification Status ({project.projectType})</h3>
              <p>{project.results}</p>
            </SpotlightCard>
          </div>

          {relatedSvcs.length > 0 && (
            <div style={{ marginTop: "42px" }}>
              <span className="section-kicker kicker-light">Related Engineering Services</span>
              <div className="subpage-grid-3" style={{ marginTop: "12px" }}>
                {relatedSvcs.map((s) => (
                  <SpotlightCard
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="service-matrix-card"
                    accent={s.accent || "#26a9ff"}
                  >
                    <h3>{s.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--ink-secondary)" }}>{s.headline}</p>
                    <span className="service-matrix-link">View Service Page →</span>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
