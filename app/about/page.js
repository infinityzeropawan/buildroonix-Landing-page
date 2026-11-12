import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  CheckCircle2,
  Code2,
  Cpu,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteTriggerButton } from "@/components/QuoteTriggerButton";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { BUILDROONIX_BRAND } from "@/lib/brand";

export const metadata = {
  title: "About Buildroonix — Founder, Leadership & Engineering Studio Heritage",
  description:
    "Discover the engineering philosophy, founder leadership, and institutional standards of Buildroonix Engineering Studio. Founded by Rohit in Varanasi, UP.",
};

export default function AboutPage() {
  const f = BUILDROONIX_BRAND.founder || {};

  return (
    <>
      <SiteHeader activeSection="about" />

      {/* ── SUBPAGE HERO ─────────────────────────────────────────────────── */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#26a9ff" }}>About &amp; Leadership</span>
          </div>
          <Reveal preset="blur-in" immediate delay={0.04}>
            <span className="section-kicker kicker-light">
              <span className="live-dot" style={{ background: "#26a9ff" }} />
              STUDIO HERITAGE · FOUNDER &amp; LEADERSHIP
            </span>
            <h1>Architectural Rigor. Multi-Disciplinary Execution. Zero Middlemen.</h1>
          </Reveal>
          <Reveal preset="fade-up" immediate delay={0.14}>
            <p>
              Buildroonix was founded in Varanasi, Uttar Pradesh by Rohit with an uncompromising mission: to bridge
              the gap between modern software engineering and physical hardware prototyping under one unified,
              accountable studio.
            </p>
            <div className="hero-btns">
              <QuoteTriggerButton label="Discuss a Project with the Founder" className="btn-primary" showSparkle />
              <a
                href={f.whatsappUrl || BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-light"
              >
                <MessageSquare size={15} />
                <span>Direct WhatsApp with Founder</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOUNDER'S DESK DEEP DIVE ─────────────────────────────────────── */}
      <section className="section-dark">
        <div className="section-wrap">
          <div className="about-founder-grid">
            {/* Left: Founder Visual & Executive Card */}
            <Reveal preset="fade-up" className="about-founder-card">
              <div className="afc-img-frame">
                <img
                  src={f.image || "/assets/founder_portrait.jpg"}
                  alt="Rohit - Founder of Buildroonix"
                  className="afc-img"
                />
                <div className="afc-overlay">
                  <span className="afc-badge">
                    <span className="status-ping" />
                    Direct Architectural Access
                  </span>
                </div>
              </div>

              <div className="afc-details">
                <div className="afc-role-pill">
                  <Terminal size={12} />
                  <span>Founder &amp; Principal Systems Architect</span>
                </div>
                <h2>{f.name}</h2>
                <p className="afc-subtitle">Managing Director &amp; Chief Engineer · Buildroonix</p>
                <p className="afc-location">
                  <MapPin size={13} />
                  <span>Varanasi, Uttar Pradesh, India · Serving Pan-India &amp; Global Clients</span>
                </p>

                <div className="afc-quote-box">
                  <span className="quote-mark">&ldquo;</span>
                  <p>{f.quote}</p>
                </div>

                <div className="afc-contacts">
                  <a href={`mailto:${f.email || BUILDROONIX_BRAND.email}`} className="afc-contact-item">
                    <Mail size={13} />
                    <span>{f.email || BUILDROONIX_BRAND.email}</span>
                  </a>
                  <a href={`tel:${(f.phone || BUILDROONIX_BRAND.phone).replace(/\s+/g, "")}`} className="afc-contact-item">
                    <Phone size={13} />
                    <span>{f.phone || BUILDROONIX_BRAND.phone}</span>
                  </a>
                </div>

                <div className="afc-actions">
                  <QuoteTriggerButton
                    label="Schedule Founder Call"
                    className="btn-primary"
                    showArrow
                  />
                  <a
                    href={f.whatsappUrl || BUILDROONIX_BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-light"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right: The Studio Story & Core Principles */}
            <div className="about-story-col">
              <Reveal preset="fade-up" delay={0.1}>
                <span className="section-kicker kicker-light">The Studio Story</span>
                <h3 className="about-story-h3">Why Buildroonix Was Built Differently.</h3>
                <div className="about-story-body">
                  <p>
                    Throughout the tech industry, a persistent operational breakdown occurs whenever a business needs
                    a complete connected solution: software developers don&apos;t understand hardware timing or sensor
                    telemetry, hardware prototyping shops don&apos;t write scalable cloud APIs, and traditional IT agencies
                    outsource complex work to layers of junior freelancers.
                  </p>
                  <p>
                    Rohit founded <strong>Buildroonix Engineering Studio</strong> to eliminate this friction entirely.
                    By uniting full-stack software architecture, cloud database engineering, embedded microcontroller
                    firmware (ESP32/STM32), multi-layer PCB design, and precision 3D-printed digital manufacturing under
                    one roof, Buildroonix delivers coherent, end-to-end technology solutions with zero handoff loss.
                  </p>
                  <p>
                    Every engagement is backed by direct architectural leadership: we do not employ non-technical sales
                    middlemen. When you describe your requirements, you discuss them directly with systems architects
                    who design the database models, review the source code, and ensure performance benchmarks are met.
                  </p>
                </div>
              </Reveal>

              <StaggerContainer className="about-principles-grid" staggerDelay={0.08}>
                {(f.principles || []).map((p, idx) => (
                  <StaggerItem key={idx} className="about-principle-card">
                    <div className="apc-head">
                      <div className="apc-icon">
                        {idx === 0 && <Code2 size={16} />}
                        {idx === 1 && <ShieldCheck size={16} />}
                        {idx === 2 && <Cpu size={16} />}
                        {idx === 3 && <CheckCircle2 size={16} />}
                      </div>
                      <strong>{p.title}</strong>
                    </div>
                    <p>{p.desc}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON MATRIX: STUDIO VS TRADITIONAL MODELS ──────────────── */}
      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">The Buildroonix Advantage</span>
            <h2 className="section-h2">Studio Model vs. Traditional Outsourcing.</h2>
            <p className="section-sub">
              See why growing businesses, institutions, and product creators choose an integrated engineering studio
              over traditional software agencies or disconnected freelancers.
            </p>
          </Reveal>

          <Reveal preset="fade-up" delay={0.1} className="comparison-table-shell">
            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Capability &amp; Engagement Standard</th>
                    <th className="highlight-col">
                      <div className="th-brand">
                        <span className="brand-dot" />
                        BUILDROONIX Studio
                      </div>
                    </th>
                    <th>Traditional IT Agency</th>
                    <th>Freelancers / Subcontractors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Direct Founder &amp; Senior Lead Access</strong>
                      <span>Talk directly to engineers who write and review code</span>
                    </td>
                    <td className="highlight-col"><Check size={16} className="text-green" /> 100% Direct Access</td>
                    <td className="dim-col"><X size={16} className="text-red" /> Filtered by Account Managers</td>
                    <td className="dim-col"><X size={16} className="text-red" /> Unreliable / High Churn</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Hardware + Software Under One Roof</strong>
                      <span>Web apps, cloud APIs, microcontrollers, PCBs &amp; 3D prototypes</span>
                    </td>
                    <td className="highlight-col"><Check size={16} className="text-green" /> 10 Integrated Divisions</td>
                    <td className="dim-col"><X size={16} className="text-red" /> Software Only (No Hardware)</td>
                    <td className="dim-col"><X size={16} className="text-red" /> Single Domain Only</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Full Source Code &amp; IP Ownership Handover</strong>
                      <span>You own 100% of repositories, database schemas &amp; configs</span>
                    </td>
                    <td className="highlight-col"><Check size={16} className="text-green" /> 100% Clean Handover</td>
                    <td className="dim-col"><X size={16} className="text-red" /> Often Vendor Lock-in</td>
                    <td className="dim-col"><span className="text-dim">Variable / Inconsistent</span></td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Govt. Registered Enterprise &amp; GST Invoicing</strong>
                      <span>Legal commercial contracts with verified GST compliance</span>
                    </td>
                    <td className="highlight-col"><Check size={16} className="text-green" /> MSME + GST Verified</td>
                    <td className="dim-col"><Check size={16} className="text-green" /> Yes (High Overhead)</td>
                    <td className="dim-col"><X size={16} className="text-red" /> Unregistered / Cash Only</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Language-Agnostic System Architecture</strong>
                      <span>Next.js, Python, Go, C++, Flutter, Java, PostgreSQL tailored to you</span>
                    </td>
                    <td className="highlight-col"><Check size={16} className="text-green" /> Client Requirements First</td>
                    <td className="dim-col"><span className="text-dim">Biased to Staff Bench</span></td>
                    <td className="dim-col"><span className="text-dim">Limited to Single Tech</span></td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Post-Launch Maintenance &amp; SLAs</strong>
                      <span>Structured warranty, ongoing server patching &amp; feature additions</span>
                    </td>
                    <td className="highlight-col"><Check size={16} className="text-green" /> Dedicated Support SLA</td>
                    <td className="dim-col"><span className="text-dim">Expensive Retainers</span></td>
                    <td className="dim-col"><X size={16} className="text-red" /> Disappears After Delivery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATUTORY & LEGAL VERIFICATION REGISTRY ──────────────────────── */}
      <section className="section-dark">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">Compliance &amp; Governance</span>
            <h2 className="section-h2">Statutory Registry &amp; Commercial Transparency.</h2>
            <p className="section-sub">
              Buildroonix operates as a compliant, legally registered technology enterprise under the Government of India.
            </p>
          </Reveal>

          <StaggerContainer className="legal-registry-grid" staggerDelay={0.08}>
            <StaggerItem className="legal-reg-card">
              <div className="lrc-icon"><FileText size={18} /></div>
              <div className="lrc-body">
                <span className="lrc-label">Enterprise Classification</span>
                <h4>{BUILDROONIX_BRAND.msme}</h4>
                <p>Registered Micro, Small &amp; Medium Enterprise under Ministry of MSME, Govt. of India.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="legal-reg-card">
              <div className="lrc-icon"><ShieldCheck size={18} /></div>
              <div className="lrc-body">
                <span className="lrc-label">GST Tax Identification (GSTIN)</span>
                <h4 style={{ color: "#26a9ff" }}>{BUILDROONIX_BRAND.gstin}</h4>
                <p>Legitimate B2B tax invoicing with input credit support for Indian corporate clients.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="legal-reg-card">
              <div className="lrc-icon"><MapPin size={18} /></div>
              <div className="lrc-body">
                <span className="lrc-label">Registered Studio &amp; Delivery Hub</span>
                <h4>Varanasi, Uttar Pradesh</h4>
                <p>Operating engineering studio with pan-India delivery, remote git pipelines, and cloud ops.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="legal-reg-card">
              <div className="lrc-icon"><CheckCircle2 size={18} /></div>
              <div className="lrc-body">
                <span className="lrc-label">Commercial Banking &amp; UPI</span>
                <h4>{BUILDROONIX_BRAND.upi}</h4>
                <p>Standard bank transfer (NEFT/RTGS/IMPS), UPI business payments, and milestone escrow terms.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── DIRECT FOUNDER CONSULTATION CTA ─────────────────────────────── */}
      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="about-final-cta-card">
            <div className="afc-cta-copy">
              <span className="section-kicker kicker-light" style={{ color: "#26a9ff" }}>
                <Sparkles size={13} /> Direct Lead Engagement
              </span>
              <h2>Ready to engineer your next software system or connected product?</h2>
              <p>
                Schedule an architectural discovery session directly with Rohit. We will review your technical
                specifications, recommend optimal system architecture, and provide a transparent, milestone-based quote.
              </p>
            </div>
            <div className="afc-cta-btns">
              <QuoteTriggerButton label="Request Technical Proposal" className="btn-primary" showSparkle />
              <a
                href={f.whatsappUrl || BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-light"
              >
                <MessageSquare size={15} />
                <span>Message Rohit on WhatsApp</span>
                <ArrowUpRight size={13} />
              </a>
              <Link href="/portfolio" className="btn-outline-light">
                <span>View Portfolio Projects</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

