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
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  Package,
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
  title: "About Buildroonix — Technology Products, 3D Fabrication & Embedded Electronics",
  description:
    "Discover Buildroonix: an integrated technology studio delivering role-based management software, custom 3D lithophane manufacturing, and embedded student electronics in India.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader activeSection="about" />

      {/* ── SUBPAGE HERO ─────────────────────────────────────────────────── */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#26a9ff" }}>About Buildroonix</span>
          </div>
          <Reveal preset="blur-in" immediate delay={0.04}>
            <span className="section-kicker kicker-light">
              <span className="live-dot" style={{ background: "#26a9ff" }} />
              INTEGRATED ENGINEERING STUDIO · INDIA
            </span>
            <h1>Purpose-Built Software. Precision 3D Fabrication. Embedded Electronics.</h1>
          </Reveal>
          <Reveal preset="fade-up" immediate delay={0.14}>
            <p>
              Buildroonix is an integrated engineering studio based in Varanasi, Uttar Pradesh. We engineer
              role-based management software (Library OS, Gym OS), manufacture personalized 3D lithophane lamps and
              figurines on 3d.buildroonix.com, and deliver working embedded electronics projects for engineering students and businesses.
            </p>
            <div className="hero-btns">
              <QuoteTriggerButton label="Discuss a Project With Our Team" className="btn-primary" showSparkle />
              <a
                href={BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-light"
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STUDIO PILLARS DEEP DIVE ─────────────────────────────────────── */}
      <section className="section-dark">
        <div className="section-wrap">
          <div className="section-header">
            <span className="section-kicker kicker-light">Our Operational Philosophy</span>
            <h2 className="section-h2">Why Buildroonix Operates Differently.</h2>
            <p className="section-sub">
              Throughout the technology sector, a persistent divide exists between software developers, digital
              manufacturing shops, and electronics labs. Buildroonix eliminates this fragmentation under one roof.
            </p>
          </div>

          <StaggerContainer className="divisions-grid" staggerDelay={0.08} style={{ marginTop: "32px" }}>
            <StaggerItem>
              <div className="spotlight-card" style={{ "--spot-accent": "#26a9ff", height: "100%" }}>
                <div className="spotlight-glow" />
                <div className="spotlight-content">
                  <div className="div-num">
                    <span className="div-dot" style={{ background: "#26a9ff", boxShadow: "0 0 10px #26a9ff" }} />
                    PILLAR 01
                  </div>
                  <h3>Proprietary Software Systems</h3>
                  <p>
                    We engineer role-based operating platforms built around real human hierarchies. From Library OS
                    (Manager, Admin, Superadmin) to Gym OS (Trainer, Manager, Admin), our software automates cataloging,
                    attendance, and WhatsApp payment notifications with zero vendor lock-in.
                  </p>
                  <div style={{ marginTop: "16px" }}>
                    <Link href="/portfolio/library-management-system" className="btn-link-cyan" style={{ fontSize: "12px", color: "#38bdf8" }}>
                      Explore Library OS →
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="spotlight-card" style={{ "--spot-accent": "#10b981", height: "100%" }}>
                <div className="spotlight-glow" />
                <div className="spotlight-content">
                  <div className="div-num">
                    <span className="div-dot" style={{ background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
                    PILLAR 02
                  </div>
                  <h3>Custom 3D Printing &amp; Fabrication</h3>
                  <p>
                    Through our dedicated storefront at <strong>3d.buildroonix.com</strong>, we design and manufacture
                    personalized 3D photo lithophane lamps, high-detail anime figurines, and functional rapid prototypes
                    with calibrated 0.12mm precision FDM and resin additive manufacturing.
                  </p>
                  <div style={{ marginTop: "16px" }}>
                    <a href="https://3d.buildroonix.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#10b981" }}>
                      Visit 3d.buildroonix.com ↗
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="spotlight-card" style={{ "--spot-accent": "#8b5cf6", height: "100%" }}>
                <div className="spotlight-glow" />
                <div className="spotlight-content">
                  <div className="div-num">
                    <span className="div-dot" style={{ background: "#8b5cf6", boxShadow: "0 0 10px #8b5cf6" }} />
                    PILLAR 03
                  </div>
                  <h3>Embedded Electronics &amp; Student Projects</h3>
                  <p>
                    We build tested hardware systems for B.Tech, Diploma, and Polytechnic engineering students. Every
                    project kit comes with fully assembled microcontroller circuits (ESP32/STM32), working code, custom
                    3D-printed enclosure, and complete academic viva defense documentation.
                  </p>
                  <div style={{ marginTop: "16px" }}>
                    <Link href="/portfolio/student-iot-embedded-projects" style={{ fontSize: "12px", color: "#a855f7" }}>
                      Explore Student Projects →
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── COMPARISON MATRIX: STUDIO VS TRADITIONAL MODELS ──────────────── */}
      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">The Buildroonix Advantage</span>
            <h2 className="section-h2">Studio Model vs. Traditional Outsourcing.</h2>
            <p className="section-sub">
              See why businesses, institutions, and product creators choose an integrated engineering studio over
              traditional software agencies or disconnected freelancers.
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
                      <strong>Direct Engineering Access</strong>
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
                    <td className="highlight-col"><Check size={16} className="text-green" /> Complete Integration</td>
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

      {/* ── CONSULTATION CTA ─────────────────────────────────────────────── */}
      <section className="section-obsidian-alt">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="about-final-cta-card">
            <div className="afc-cta-copy">
              <span className="section-kicker kicker-light" style={{ color: "#26a9ff" }}>
                <Sparkles size={13} /> Project Discussion &amp; Inquiries
              </span>
              <h2>Ready to discuss your software system or custom 3D project?</h2>
              <p>
                Get in touch with the Buildroonix engineering team. We will review your requirements, recommend the
                right system architecture, and provide a clear, milestone-based quote.
              </p>
            </div>
            <div className="afc-cta-btns">
              <QuoteTriggerButton label="Request Technical Proposal" className="btn-primary" showSparkle />
              <a
                href={BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-light"
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
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
