import Link from "next/link";
import { BUILDROONIX_BRAND, TECH_STACK } from "@/lib/brand";
import { CAPABILITY_GROUPS_A_TO_N } from "@/lib/services-catalog";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteTriggerButton } from "@/components/QuoteTriggerButton";
import { UiMockup } from "@/components/UiMockup";
import { LifecycleTimeline } from "@/components/LifecycleTimeline";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  Reveal,
  SpotlightCard,
  StaggerContainer,
  StaggerItem,
  TechMarquee,
} from "@/components/ScrollReveal";

export const metadata = {
  title: "Software Development Division — BUILDROONIX Engineering",
  description:
    "Complete software engineering services from BUILDROONIX: custom software, web & mobile apps, desktop software, SaaS, enterprise ERP/CRM, AI integrations, APIs, Cloud/DevOps, QA & maintenance.",
};

const SOLUTION_PILLARS = [
  {
    title: "Web & Mobile Application Solutions",
    desc: "Unified browser portals, Progressive Web Apps (PWAs), and Android/iOS mobile clients engineered for speed, offline resilience, and seamless API sync.",
    link: "/services/web-app-development",
    cta: "Web & Mobile Details →",
    accent: "#38BDF8",
  },
  {
    title: "Enterprise & Business Management Systems",
    desc: "Modular ERP, CRM, HRMS, Payroll, Inventory, GST Billing, LMS, School/College, Library, Clinic, POS, Booking, and Business Reporting platforms.",
    link: "/services/enterprise-software-development",
    cta: "Enterprise Systems Details →",
    accent: "#7c3aed",
  },
  {
    title: "SaaS & Multi-Tenant Cloud Solutions",
    desc: "Subscription-ready multi-user software platforms with strict tenant isolation, plan entitlements, and scalable cloud deployment.",
    link: "/services/saas-development",
    cta: "SaaS Engineering Details →",
    accent: "#7c3aed",
  },
  {
    title: "AI & Intelligent Application Solutions",
    desc: "Grounded AI chatbots, document parsing, intelligent knowledge search, workflow automation, and practical computer vision API integrations.",
    link: "/services/ai-development",
    cta: "AI Solutions Details →",
    accent: "#10b981",
  },
];

const INFRA_ITEMS = [
  {
    title: "Backend, Database & API Engineering",
    desc: "REST and GraphQL APIs, relational/NoSQL database modeling, RBAC security, webhooks, and real-time event sync.",
    link: "/services/api-backend-development",
    accent: "#ff7212",
  },
  {
    title: "Software Integrations & Automation",
    desc: "Connecting CRMs, ERPs, WhatsApp/Email/SMS APIs, client payment gateways, and IoT platforms with resilient retry queues.",
    link: "/services/software-integration",
    accent: "#06B6D4",
  },
  {
    title: "Testing, Maintenance & Modernization",
    desc: "Functional/API/security QA, legacy refactoring, database migrations, version upgrades, and ongoing technical support.",
    link: "/services/software-maintenance",
    accent: "#10B981",
  },
];

const SW_FAQS = [
  {
    q: "Can BUILDROONIX take a software idea from zero to production?",
    a: "Yes. We manage requirements discovery, UI/UX wireframes, architecture, coding, API/hardware integration, QA testing, cloud deployment, and ongoing maintenance.",
  },
  {
    q: "Do you build custom ERP/CRM instead of forcing off-the-shelf tools?",
    a: "Yes. We design modular ERP, CRM, HRMS, inventory, billing, LMS, and clinic platforms around your exact departments and approval workflows.",
  },
  {
    q: "Does this website sell products or software subscriptions online?",
    a: "No. This corporate site is strictly a service showcase and lead-generation platform. Client e-commerce systems are built separately for clients, and our own 3D store stays separate at 3d.buildroonix.com.",
  },
  {
    q: "How do I start a technical discussion?",
    a: "Click 'Request a Quote' to submit your brief or message us directly on WhatsApp (+91 9580181697).",
  },
];

export default function SoftwareDevelopmentOverviewPage() {
  const flatStack = TECH_STACK.flatMap((g) => g.items);

  return (
    <>
      <SiteHeader activeSection="software" />

      {/* 1. Obsidian Cyber-Luxury Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span style={{ color: "#38BDF8" }}>Software Development</span>
          </div>
          <Reveal preset="blur-in" immediate delay={0.04}>
            <span className="section-kicker kicker-light">BUILDROONIX · SOFTWARE ENGINEERING DIVISION</span>
            <h1>Full-Lifecycle Custom Software Engineering for Businesses, Startups &amp; Connected Systems.</h1>
          </Reveal>
          <Reveal preset="fade-up" immediate delay={0.14}>
            <p>
              We understand business requirements, design resilient software architectures, develop web, mobile, desktop,
              and enterprise applications, integrate APIs and hardware, test thoroughly, deploy to production, and
              support you long-term.
            </p>
            <div className="hero-btns">
              <QuoteTriggerButton
                label="Request a Quote"
                preselect="Custom Software Development"
                className="btn-primary"
                showSparkle
              />
              <a
                href={BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-light"
              >
                WhatsApp Inquiry ↗
              </a>
              <Link href="/portfolio" className="btn-outline-light">
                View Software Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Infinite Smooth Tech Stack Marquee */}
      <TechMarquee items={flatStack} />

      {/* 2. Sticky Split Intro */}
      <section className="section-dark">
        <div className="section-wrap">
          <div className="subpage-grid-2" style={{ alignItems: "start", gap: "36px" }}>
            <div className="sticky-intro-panel">
              <Reveal preset="fade-up">
                <span className="section-kicker kicker-light">01 · Engineering Mindset</span>
                <h2 className="section-h2">Software built around real operational requirements.</h2>
                <p className="section-sub">
                  BUILDROONIX is an integrated technology, software, and engineering solutions company. Whether you need
                  an internal business dashboard, a multi-tenant SaaS product, an enterprise ERP/CRM suite, or cloud
                  software connected to IoT hardware, every build follows disciplined engineering standards.
                </p>
              </Reveal>
            </div>
            <Reveal preset="scale-in">
              <UiMockup type="enterprise-erp" accent="#7c3aed" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Complete Capability Categories (A - N) Bento Spotlight Grid */}
      <section className="section-obsidian-alt" id="capabilities-matrix">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">02 · Complete Capability Catalog</span>
            <h2 className="section-h2">Complete software engineering disciplines (A–N) under one roof.</h2>
            <p className="section-sub">
              Click any capability below to view its dedicated technical page, deliverables, and use cases.
            </p>
          </Reveal>

          <StaggerContainer className="service-matrix-grid" staggerDelay={0.05}>
            {CAPABILITY_GROUPS_A_TO_N.map((g, idx) => (
              <StaggerItem key={g.title}>
                <SpotlightCard
                  href={g.href}
                  className="service-matrix-card"
                  accent={idx % 3 === 0 ? "#7c3aed" : idx % 3 === 1 ? "#7c3aed" : "#ff7212"}
                >
                  <h3>{g.title}</h3>
                  <ul>
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <span className="service-matrix-link">Explore Service Page →</span>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal preset="fade-up" className="policy-callout">
            <strong>Corporate Website Policy Note:</strong> E-commerce software engineering (Category N) is offered strictly
            as a custom development service for client businesses. This BUILDROONIX public corporate website is for
            service showcase and project inquiries only — it contains no shopping cart, checkout, or payment flow. Our
            dedicated 3D decor storefront remains separate at{" "}
            <a href="https://3d.buildroonix.com" target="_blank" rel="noopener noreferrer">
              3d.buildroonix.com
            </a>
            .
          </Reveal>
        </div>
      </section>

      {/* 4, 5, 6, 7. Core Solution Pillars Bento */}
      <section className="section-dark">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">03 · Core Solution Pillars</span>
            <h2 className="section-h2">From Web &amp; Mobile Apps to Enterprise ERPs, SaaS &amp; Applied AI.</h2>
          </Reveal>
          <StaggerContainer className="subpage-grid-2" staggerDelay={0.08}>
            {SOLUTION_PILLARS.map((p) => (
              <StaggerItem key={p.title}>
                <SpotlightCard className="capability-box" accent={p.accent}>
                  <h3>{p.title}</h3>
                  <p style={{ marginBottom: "14px" }}>{p.desc}</p>
                  <Link href={p.link} className="service-matrix-link" style={{ color: p.accent }}>
                    {p.cta}
                  </Link>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8, 9, 10. Infrastructure, Integrations & Quality */}
      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">04 · Infrastructure, Integrations &amp; Quality</span>
            <h2 className="section-h2">APIs, System Automation, QA Testing &amp; Lifecycle Modernization.</h2>
          </Reveal>
          <StaggerContainer className="subpage-grid-3" staggerDelay={0.08}>
            {INFRA_ITEMS.map((it) => (
              <StaggerItem key={it.title}>
                <SpotlightCard className="capability-box" accent={it.accent}>
                  <h3>{it.title}</h3>
                  <p style={{ marginBottom: "14px" }}>{it.desc}</p>
                  <Link
                    href={it.link}
                    style={{ color: it.accent, fontFamily: "var(--f-mono)", fontSize: "12px", fontWeight: 600 }}
                  >
                    Explore Discipline →
                  </Link>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 11. Supported Technologies & Tools */}
      <section className="section-dark">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">05 · Language-Agnostic Technology Stack</span>
            <h2 className="section-h2">We engineer across all major languages &amp; stacks based on client requirements.</h2>
            <p className="section-sub">
              From Java, Python, .NET, PHP, Go, and Node.js backends to React, Angular, Flutter, Native Mobile, and
              Embedded C/C++ — we select or match the stack your system needs.
            </p>
          </Reveal>
          <StaggerContainer className="stack-grid" staggerDelay={0.07}>
            {TECH_STACK.map((g) => (
              <StaggerItem key={g.category}>
                <SpotlightCard className="stack-card" accent={g.accent}>
                  <div className="stack-card-head">
                    <span className="div-dot" style={{ background: g.accent, boxShadow: `0 0 10px ${g.accent}` }} />
                    <span>{g.category}</span>
                  </div>
                  <div className="stack-tags">
                    {g.items.map((t) => (
                      <span key={t} className="stack-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 12. Software Development Workflow */}
      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">06 · Software Development Workflow</span>
            <h2 className="section-h2">9-Phase Engineering &amp; Delivery Lifecycle.</h2>
          </Reveal>
          <LifecycleTimeline />
        </div>
      </section>

      {/* 13. Relevant Projects & Case Studies */}
      <section className="section-dark">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header-split">
            <div className="section-header">
              <span className="section-kicker kicker-light">07 · Software Portfolio</span>
              <h2 className="section-h2">Relevant Client Systems, Demos &amp; Prototypes.</h2>
            </div>
            <Link href="/portfolio" className="btn-outline-light">
              View Full Portfolio →
            </Link>
          </Reveal>
          <StaggerContainer className="portfolio-grid bento-portfolio-grid" staggerDelay={0.07}>
            {PORTFOLIO_PROJECTS.slice(0, 6).map((p) => {
              const badgeCls =
                p.projectType === "Client Project"
                  ? "client"
                  : p.projectType === "Internal Prototype"
                    ? "prototype"
                    : "demo";
              return (
                <StaggerItem key={p.slug}>
                  <SpotlightCard href={`/portfolio/${p.slug}`} className="port-card bento-port-card" accent={p.accent || "#7c3aed"}>
                    <div className="port-card-top">
                      <span className="port-cat" style={{ color: p.accent || "#7c3aed" }}>{p.category}</span>
                      <span className={`port-type-badge ${badgeCls}`}>{p.projectType}</span>
                    </div>
                    <div className="port-thumb">
                      <img src={p.image} alt={p.title} loading="lazy" />
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.shortDesc}</p>
                    <span className="port-card-cta">View Project Architecture →</span>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 14, 15, 16. FAQs & CTAs */}
      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">08 · Software FAQ</span>
            <h2 className="section-h2">Common questions about working with our software team.</h2>
          </Reveal>
          <FaqAccordion items={SW_FAQS} />
          <Reveal preset="scale-in" className="service-cta-strip">
            <div>
              <h3>Ready to scope your custom software system?</h3>
              <p>Share your operational requirements or connect directly with our engineering desk.</p>
            </div>
            <div className="hero-btns" style={{ marginBottom: 0 }}>
              <QuoteTriggerButton
                label="Request a Quote"
                preselect="Custom Software Development"
                className="btn-primary"
                showSparkle
              />
              <a
                href={BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-light"
              >
                WhatsApp Inquiry ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
