import Link from "next/link";
import {
  BUILDROONIX_BRAND,
  CORE_DIVISIONS,
  DEFAULT_SITE_CONTENT,
  TECH_STACK,
} from "@/lib/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteTriggerButton } from "@/components/QuoteTriggerButton";
import { SoftwareWorkbench } from "@/components/SoftwareWorkbench";
import { PortfolioSection } from "@/components/PortfolioSection";
import { LifecycleTimeline } from "@/components/LifecycleTimeline";
import { HeroConsole } from "@/components/HeroConsole";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FounderSection } from "@/components/FounderSection";
import {
  BlurHeadline,
  Reveal,
  SpotlightCard,
  StaggerContainer,
  StaggerItem,
  TechMarquee,
} from "@/components/ScrollReveal";

export default function HomePage() {
  const content = DEFAULT_SITE_CONTENT;

  const vis = content.sectionVisibility;
  const featured = content.featuredWork?.length ? content.featuredWork : DEFAULT_SITE_CONTENT.featuredWork;
  const audience = content.audienceBlocks?.length ? content.audienceBlocks : DEFAULT_SITE_CONTENT.audienceBlocks;
  const testimonials = content.testimonials?.length ? content.testimonials : DEFAULT_SITE_CONTENT.testimonials;
  const faqs = content.faqs?.length ? content.faqs : DEFAULT_SITE_CONTENT.faqs;

  return (
    <>
      <SiteHeader activeSection="home" />

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-left">
            <Reveal preset="blur-in" immediate delay={0.02} className="hero-eyebrow">
              <span className="eyebrow-dot" />
              <span>{content.heroEyebrow}</span>
            </Reveal>

            <BlurHeadline
              lines={[
                content.heroTitleLine1,
                content.heroTitleHighlight,
                content.heroTitleLine3 || "Solutions Company.",
              ]}
              highlightIndex={1}
              className="hero-h1"
            />

            <Reveal preset="fade-up" immediate delay={0.22} as="p" className="hero-body">
              {content.heroDescription}
            </Reveal>

            <Reveal preset="fade-up" immediate delay={0.3} className="hero-btns">
              <QuoteTriggerButton
                label={content.heroPrimaryText || "Discuss Your Project"}
                className="btn-primary"
                showSparkle
              />
              <Link
                href={content.heroSecondaryLink || "/services/software-development"}
                className="btn-outline-light"
              >
                {content.heroSecondaryText || "Explore Software Division →"}
              </Link>
              <a
                href={content.socials.whatsapp || BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-light"
              >
                WhatsApp Us ↗
              </a>
            </Reveal>

            <Reveal preset="fade-up" immediate delay={0.38} className="hero-division-pills">
              <Link href="/services/custom-software-development" className="hero-pill-link">
                Custom Software
              </Link>
              <Link href="/services/enterprise-software-development" className="hero-pill-link">
                Enterprise &amp; ERP/CRM
              </Link>
              <Link href="/services/mobile-app-development" className="hero-pill-link">
                Mobile &amp; SaaS
              </Link>
              <Link href="/services/ai-development" className="hero-pill-link">
                AI &amp; Automation
              </Link>
              <Link href="/services/iot-embedded" className="hero-pill-link">
                IoT &amp; Hardware
              </Link>
            </Reveal>
          </div>

          <div className="hero-right">
            <HeroConsole videoUrl={content.heroVideoUrl || BUILDROONIX_BRAND.videoPath} />
          </div>
        </div>

        <StaggerContainer className="hero-authority-strip" staggerDelay={0.07}>
          <StaggerItem className="auth-stat">
            <strong>10 Divisions</strong>
            <span>Software, Cloud, AI, IoT, PCB &amp; Prototyping</span>
          </StaggerItem>
          <StaggerItem className="auth-stat">
            <strong>16+ Services</strong>
            <span>Web, Mobile, Desktop, SaaS, ERP, CRM &amp; QA</span>
          </StaggerItem>
          <StaggerItem className="auth-stat">
            <strong>9-Phase SDLC</strong>
            <span>Discovery, Architecture, Build, QA &amp; Support</span>
          </StaggerItem>
          <StaggerItem className="auth-stat">
            <strong>100% Ownership</strong>
            <span>Clean Code, Docs, GST Billing &amp; IP Handover</span>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ── OBSIDIAN TECH CAPABILITIES MARQUEE ───────────────────────────── */}
      <TechMarquee
        items={[
          "Custom Software",
          "Web & SaaS Platforms",
          "Mobile & Desktop Apps",
          "ERP · CRM · HRMS",
          "AI Workflow Solutions",
          "REST & GraphQL APIs",
          "Cloud & DevOps",
          "IoT & Embedded Firmware",
          "PCB & Circuit Design",
          "CAD & Rapid Prototyping",
        ]}
      />

      {/* ── 10 CORE BUSINESS DIVISIONS ───────────────────────────────────── */}
      {vis.divisions !== false && (
        <section className="section-obsidian-alt" id="divisions">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header-split">
              <div className="section-header">
                <span className="section-kicker kicker-light">Company Positioning · 10 Integrated Divisions</span>
                <h2 className="section-h2">Beyond websites. Complete technology &amp; engineering execution.</h2>
                <p className="section-sub">
                  BUILDROONIX partners with businesses, institutions, and innovators across ten tightly integrated
                  software, cloud, hardware, and prototyping divisions.
                </p>
              </div>
              <QuoteTriggerButton
                label="Discuss Your Requirements"
                showArrow
                className="btn-outline-light"
              />
            </Reveal>

            <StaggerContainer className="divisions-grid" staggerDelay={0.06}>
              {CORE_DIVISIONS.map((d) => (
                <StaggerItem key={d.num}>
                  <SpotlightCard
                    href={d.link}
                    className="division-card"
                    accent={d.color}
                  >
                    <div className="div-num">
                      <span
                        className="div-dot"
                        style={{ background: d.color, boxShadow: `0 0 10px ${d.color}` }}
                      />
                      DIVISION {d.num}
                    </div>
                    <h3>{d.title}</h3>
                    <p>{d.desc}</p>
                    <span className="div-link" style={{ color: d.color }}>
                      Explore Division →
                    </span>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── PROMINENT SOFTWARE EXPERTISE WORKBENCH ──────────────────────── */}
      {vis.software !== false && (
        <section className="section-dark" id="software-expertise">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header-split">
              <div className="section-header">
                <span className="section-kicker kicker-light">Software Engineering Division</span>
                <h2 className="section-h2">{content.softwareHeading}</h2>
                <p className="section-sub">{content.softwareSubhead}</p>
              </div>
              <Link href="/services/software-development" className="btn-primary">
                Full Software Capabilities →
              </Link>
            </Reveal>
            <SoftwareWorkbench />
          </div>
        </section>
      )}

      {/* ── FEATURED WORK / CASE STUDIES ─────────────────────────────────── */}
      {vis.featured !== false && (
        <section className="section-obsidian-alt" id="featured-work">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header-split">
              <div className="section-header">
                <span className="section-kicker kicker-light">{content.featuredKicker}</span>
                <h2 className="section-h2">{content.featuredHeading}</h2>
                <p className="section-sub">{content.featuredSubhead}</p>
              </div>
              <Link href="/portfolio" className="btn-outline-light">
                Explore Full Portfolio →
              </Link>
            </Reveal>

            <StaggerContainer className="featured-grid" staggerDelay={0.09}>
              {featured.map((w, idx) => (
                <StaggerItem key={idx}>
                  <SpotlightCard href={w.ctaLink || "/portfolio"} className="case-card" accent="#26a9ff">
                    <div className="case-card-img">
                      {w.mediaType === "video" ? (
                        <video src={w.imageUrl} autoPlay muted loop playsInline />
                      ) : (
                        <img src={w.imageUrl} alt={w.title} loading="lazy" />
                      )}
                    </div>
                    <div className="case-card-body">
                      <span className="case-tag">{w.tag}</span>
                      <h3>{w.title}</h3>
                      <p className="case-story">{w.story}</p>
                      <p className="case-outcome">
                        <strong>Solution &amp; Outcome:</strong> {w.outcome}
                      </p>
                      <span className="case-link">{w.ctaText || "View Case Study"} →</span>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── PORTFOLIO PREVIEW (9 CATEGORIES BENTO GRID) ──────────────────── */}
      {vis.portfolio !== false && (
        <section className="section-dark" id="portfolio-preview">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header-split">
              <div className="section-header">
                <span className="section-kicker kicker-light">Software &amp; Systems Portfolio</span>
                <h2 className="section-h2">Client Systems, Demonstrations &amp; Prototypes.</h2>
                <p className="section-sub">
                  Filter by engineering domain. Every entry clearly marks whether it is a live Client Project, System
                  Demonstration, or Internal Prototype.
                </p>
              </div>
              <Link href="/portfolio" className="btn-outline-light">
                All Case Studies &amp; Architectures →
              </Link>
            </Reveal>
            <PortfolioSection limit={6} />
          </div>
        </section>
      )}

      {/* ── 9-STEP DEVELOPMENT LIFECYCLE ─────────────────────────────────── */}
      {vis.process !== false && (
        <section className="section-obsidian-alt" id="process">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header">
              <span className="section-kicker kicker-light">Software Development Lifecycle</span>
              <h2 className="section-h2">Nine structured engineering phases from discovery to long-term support.</h2>
              <p className="section-sub">
                Every application follows disciplined requirement analysis, architecture design, QA testing, and
                production operations.
              </p>
            </Reveal>
            <LifecycleTimeline />
          </div>
        </section>
      )}

      {/* ── TECHNOLOGY STACK ─────────────────────────────────────────────── */}
      {vis.techstack !== false && (
        <section className="section-dark" id="tech-stack">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header">
              <span className="section-kicker kicker-light">Language-Agnostic · Client Requirement Driven</span>
              <h2 className="section-h2">All major languages &amp; stacks — chosen for your project needs.</h2>
              <p className="section-sub">
                We don&apos;t force clients into a single stack. Whether your project requires Java, Python, .NET, PHP,
                Node.js, Go, React, Flutter, or Embedded C/C++, our engineering team adapts to your requirements and
                existing enterprise ecosystem.
              </p>
            </Reveal>
            <StaggerContainer className="stack-grid" staggerDelay={0.07}>
              {TECH_STACK.map((g) => (
                <StaggerItem key={g.category}>
                  <SpotlightCard className="stack-card" accent={g.accent}>
                    <div className="stack-card-head">
                      <span
                        className="div-dot"
                        style={{ background: g.accent, boxShadow: `0 0 10px ${g.accent}` }}
                      />
                      <span>{g.category}</span>
                    </div>
                    <div className="stack-tags">
                      {g.items.map((item) => (
                        <span key={item} className="stack-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── ENTERPRISE GOVERNANCE & ENGAGEMENT MODELS ────────────────────── */}
      <section className="section-obsidian-alt" id="enterprise-standards">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header-split">
            <div className="section-header">
              <span className="section-kicker kicker-light">Enterprise Governance &amp; Engagement Models</span>
              <h2 className="section-h2">Structured delivery built for organizational scale.</h2>
              <p className="section-sub">
                Clear milestone accountability, security-first RBAC architecture, formal QA sign-off, and full source
                code ownership across every engagement.
              </p>
            </div>
            <QuoteTriggerButton
              label="Schedule Architecture Call"
              showArrow
              className="btn-outline-light"
            />
          </Reveal>

          <StaggerContainer className="governance-grid" staggerDelay={0.08}>
            <StaggerItem>
              <SpotlightCard className="gov-card" accent="#26a9ff">
                <span className="gov-code">MODEL 01</span>
                <h3>Fixed-Scope Turnkey Delivery</h3>
                <p>
                  Ideal for defined portals, corporate platforms, ERP modules, and hardware-connected MVPs with clear
                  milestone sign-offs.
                </p>
              </SpotlightCard>
            </StaggerItem>
            <StaggerItem>
              <SpotlightCard className="gov-card" accent="#26a9ff">
                <span className="gov-code">MODEL 02</span>
                <h3>Dedicated Engineering Partner</h3>
                <p>
                  Continuous multi-sprint software development, feature roadmaps, DevOps operations, and priority
                  maintenance SLAs.
                </p>
              </SpotlightCard>
            </StaggerItem>
            <StaggerItem>
              <SpotlightCard className="gov-card" accent="#ff7212">
                <span className="gov-code">MODEL 03</span>
                <h3>Modernization &amp; System Audit</h3>
                <p>
                  Upgrade legacy software, migrate fragile databases, harden APIs/RBAC, and eliminate operational
                  bottlenecks safely.
                </p>
              </SpotlightCard>
            </StaggerItem>
            <StaggerItem>
              <SpotlightCard className="gov-card" accent="#10B981">
                <span className="gov-code">MODEL 04</span>
                <h3>Connected Hardware-to-Cloud R&amp;D</h3>
                <p>
                  Unified teams executing PCB layout, ESP32 firmware, CAD enclosures, cloud APIs, and control
                  dashboards simultaneously.
                </p>
              </SpotlightCard>
            </StaggerItem>
          </StaggerContainer>

          <Reveal preset="scale-in" className="standards-bar">
            <span>✓ Role-Based Access Control (RBAC)</span>
            <span>✓ ACID / Atomic Data Integrity</span>
            <span>✓ SSL &amp; NGINX Hardened Infrastructure</span>
            <span>✓ Full Repository &amp; IP Ownership</span>
            <span>✓ MSME &amp; GSTIN Compliant Invoicing</span>
          </Reveal>
        </div>
      </section>

      {/* ── CONNECTED ENGINEERING ECOSYSTEM ──────────────────────────────── */}
      {vis.audience !== false && (
        <section className="section-dark" id="ecosystem">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header">
              <span className="section-kicker kicker-light">{content.audienceKicker}</span>
              <h2 className="section-h2">{(content.audienceHeading || "").replace(/\n/g, " ")}</h2>
            </Reveal>

            <StaggerContainer className="audience-grid" staggerDelay={0.09}>
              {audience.map((b, i) => (
                <StaggerItem key={b.id || i}>
                  <SpotlightCard className="audience-card" id={b.id || undefined} accent="#38BDF8">
                    <div className="audience-card-img">
                      <img src={b.imageUrl} alt={b.title} loading="lazy" />
                    </div>
                    <div className="audience-card-body">
                      <span className="audience-tag">{b.tag}</span>
                      <h3>{b.title}</h3>
                      <p>{b.desc}</p>
                      <Link href={b.ctaLink || "/services/software-development"} className="audience-cta">
                        {b.ctaText}
                      </Link>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── FOUNDER'S DESK & ARCHITECTURAL LEADERSHIP ─────────────────────── */}
      {vis.founder !== false && <FounderSection />}

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      {vis.testimonials !== false && (
        <section className="section-obsidian-alt" id="testimonials">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header">
              <span className="section-kicker kicker-light">{content.testimonialsKicker}</span>
              <h2 className="section-h2">{(content.testimonialsHeading || "").replace(/\n/g, " ")}</h2>
            </Reveal>

            <StaggerContainer className="testimonials-grid" staggerDelay={0.08}>
              {testimonials.map((t, i) => (
                <StaggerItem key={i}>
                  <SpotlightCard className="testimonial-card" accent="#26a9ff">
                    <div className="testimonial-head-row">
                      <div className="testimonial-stars">
                        {"★".repeat(Math.min(5, Math.max(1, Number(t.stars) || 5)))}
                      </div>
                      <span className="testimonial-mark" aria-hidden="true">
                        &ldquo;
                      </span>
                    </div>
                    <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">
                        {t.avatar ? (
                          <img src={t.avatar} alt={t.name} />
                        ) : (
                          <span>{(t.name || "B").charAt(0)}</span>
                        )}
                      </div>
                      <div>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-role">{t.role}</div>
                      </div>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      {vis.faqs !== false && (
        <section className="section-dark" id="faq">
          <div className="section-wrap">
            <Reveal preset="fade-up" className="section-header">
              <span className="section-kicker kicker-light">{content.faqKicker}</span>
              <h2 className="section-h2">{content.faqHeading}</h2>
              <p className="section-sub">{content.faqSubhead}</p>
            </Reveal>
            <FaqAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* ── VISION / PHILOSOPHY ──────────────────────────────────────────── */}
      {vis.vision !== false && (
        <section className="section-obsidian-alt" id="vision">
          <Reveal preset="fade-up" className="vision-inner">
            <div>
              <span className="section-kicker kicker-light">Engineering Philosophy</span>
              <h2 className="vision-h2">
                Requirements first.
                <br />
                Connected execution.
              </h2>
            </div>
            <div>
              <p className="vision-body">{content.manifestoText}</p>
              <div className="vision-pillars">
                <div className="pillar">
                  <span className="pillar-icon">⬡</span>
                  <span>Clean Software Architecture</span>
                </div>
                <div className="pillar">
                  <span className="pillar-icon">◈</span>
                  <span>Hardware-to-Cloud Integration</span>
                </div>
                <div className="pillar">
                  <span className="pillar-icon">◉</span>
                  <span>Ongoing Technical Support</span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      <SiteFooter content={content} />
    </>
  );
}
