import Link from "next/link";
import {
  BUILDROONIX_BRAND,
  DEFAULT_SITE_CONTENT,
} from "@/lib/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteTriggerButton } from "@/components/QuoteTriggerButton";
import { SoftwareWorkbench } from "@/components/SoftwareWorkbench";
import { HeroConsole } from "@/components/HeroConsole";
import { FaqAccordion } from "@/components/FaqAccordion";
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
  const testimonials = content.testimonials?.length ? content.testimonials : DEFAULT_SITE_CONTENT.testimonials;
  const faqs = content.faqs?.length ? content.faqs : DEFAULT_SITE_CONTENT.faqs;

  return (
    <>
      <SiteHeader activeSection="home" />

      {/* ── 1. HERO SECTION ───────────────────────────────────────────────── */}
      <section className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-left">
            <Reveal preset="blur-in" immediate delay={0.02} className="hero-eyebrow">
              <span className="eyebrow-dot" />
              <span>Varanasi, UP · MSME &amp; GSTIN Registered Engineering Studio</span>
            </Reveal>

            <BlurHeadline
              lines={[
                "Software Systems.",
                "3D Fabrication.",
                "Embedded Electronics.",
              ]}
              highlightIndex={1}
              className="hero-h1"
            />

            <Reveal preset="fade-up" immediate delay={0.22} as="p" className="hero-body">
              Buildroonix develops multi-tier operational management software (Library OS, Gym OS), manufactures bespoke 3D lithophane photo lamps &amp; figurines at 3d.buildroonix.com, and engineers turnkey embedded hardware projects for students.
            </Reveal>

            <Reveal preset="fade-up" immediate delay={0.3} className="hero-btns">
              <QuoteTriggerButton
                label="Discuss Your Project"
                className="btn-primary"
                showSparkle
              />
              <a
                href="https://3d.buildroonix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                Shop 3D Storefront ↗
              </a>
              <a
                href={BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-light"
              >
                WhatsApp Us ↗
              </a>
            </Reveal>

            <Reveal preset="fade-up" immediate delay={0.38} className="hero-division-pills">
              <Link href="#software-showcase" className="hero-pill-link">
                Library OS (Manager · Admin · Superadmin)
              </Link>
              <Link href="#software-showcase" className="hero-pill-link">
                Gym OS (Trainer · Manager · Admin)
              </Link>
              <a
                href="https://3d.buildroonix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-pill-link hero-pill-3d"
                style={{ borderColor: "rgba(16, 185, 129, 0.4)", color: "#10b981" }}
              >
                3D Store: Lithophane Lamps &amp; Figurines ↗
              </a>
              <Link href="#doors" className="hero-pill-link">
                Student IoT &amp; Electronics Projects
              </Link>
              <Link href="/portfolio/upcoming-saas-roadmap" className="hero-pill-link">
                Upcoming PG &amp; School SaaS Roadmap
              </Link>
            </Reveal>
          </div>

          <div className="hero-right">
            <HeroConsole videoUrl={content.heroVideoUrl || BUILDROONIX_BRAND.videoPath} />
          </div>
        </div>

        <StaggerContainer className="hero-authority-strip" staggerDelay={0.07}>
          <StaggerItem className="auth-stat">
            <strong>Library &amp; Gym OS</strong>
            <span>Multi-Tier Role Management (Manager, Admin, Trainer)</span>
          </StaggerItem>
          <StaggerItem className="auth-stat">
            <strong>2–3 Day Custom Dispatch</strong>
            <span>Personalized 3D Lithophane Lamps &amp; Figurines</span>
          </StaggerItem>
          <StaggerItem className="auth-stat">
            <strong>Student Electronics</strong>
            <span>100% Tested Working Hardware Kits + Complete Viva Pack</span>
          </StaggerItem>
          <StaggerItem className="auth-stat">
            <strong>GSTIN &amp; MSME</strong>
            <span>09HQHPD9487C1ZE · Varanasi, UP · Pan-India Express Delivery</span>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ── 2. OBSIDIAN TECH CAPABILITIES MARQUEE ─────────────────────────── */}
      <TechMarquee
        items={[
          "Library Management System (Library OS)",
          "Gym Management Software (Gym OS)",
          "3D Lithophane Photo Night Lamps",
          "Custom Collectible Anime Figurines",
          "Student Final-Year Hardware Projects",
          "ESP32 & STM32 Firmware Engineering",
          "Upcoming PG & School Management Suites",
          "Barcode, RFID & Biometric Gate Integration",
          "Automated WhatsApp Billing Alerts",
          "Official 3D Storefront: 3d.buildroonix.com",
        ]}
      />

      {/* ── 3. THREE CORE DOORS / BENTO SHOWCASE ──────────────────────────── */}
      <section className="section-obsidian-alt" id="doors">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header-split">
            <div className="section-header">
              <span className="section-kicker kicker-light">Core Engineering &amp; Fabrication Hub</span>
              <h2 className="section-h2">Three Specialized Divisions. One Dedicated Studio.</h2>
              <p className="section-sub">
                We eliminated generic agency bloat. Buildroonix directly engineers software products, crafts personalized 3D lithophane lamps and figurines, and builds turnkey electronics projects for engineering students.
              </p>
            </div>
            <QuoteTriggerButton
              label="Discuss Your Requirements"
              showArrow
              className="btn-outline-light"
            />
          </Reveal>

          <StaggerContainer className="audience-grid" staggerDelay={0.09}>
            {/* Door 1: Software Systems */}
            <StaggerItem>
              <SpotlightCard className="audience-card" accent="#7c3aed">
                <div className="audience-card-img" style={{ position: "relative" }}>
                  <img src="/assets/software_preview.png" alt="Buildroonix Software Division" loading="lazy" />
                  <span style={{ position: "absolute", bottom: "10px", right: "10px", background: "rgba(28,25,23,0.85)", color: "#a78bfa", padding: "3px 8px", borderRadius: "4px", fontSize: "10px", fontFamily: "var(--f-mono)" }}>
                    LIVE PRODUCTION SUITES
                  </span>
                </div>
                <div className="audience-card-body">
                  <span className="audience-tag" style={{ color: "#7c3aed" }}>DIVISION 01 · PROPRIETARY SOFTWARE</span>
                  <h3>Library OS &amp; Gym OS</h3>
                  <p>
                    Engineered with strict role-based access control (RBAC). <strong>Library OS</strong> automates book cataloging, barcode/RFID circulation, and overdue fine ledgers across Manager, Admin, and Superadmin roles. <strong>Gym OS</strong> equips Trainers, Managers, and Admins with member workout plans, QR gate check-ins, and automated WhatsApp dues.
                  </p>
                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingTop: "12px" }}>
                    <div style={{ fontSize: "11px", color: "var(--ink-secondary)", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span className="tag-chip">✓ Multi-Role RBAC</span>
                      <span className="tag-chip">✓ WhatsApp Alerts</span>
                      <span className="tag-chip">✓ PG/School SaaS Coming</span>
                    </div>
                    <Link href="#software-showcase" className="audience-cta" style={{ color: "#7c3aed" }}>
                      Inspect Software Workbench ↓
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>

            {/* Door 2: 3D Printing & Lithophanes */}
            <StaggerItem>
              <SpotlightCard className="audience-card" accent="#059669">
                <div className="audience-card-img" style={{ position: "relative" }}>
                  <img src="/assets/3d/heart-lithophane-sample.webp" alt="3D Lithophane Lamps and Figurines" loading="lazy" />
                  <span style={{ position: "absolute", bottom: "10px", right: "10px", background: "rgba(28,25,23,0.85)", color: "#10b981", padding: "3px 8px", borderRadius: "4px", fontSize: "10px", fontFamily: "var(--f-mono)" }}>
                    3D.BUILDROONIX.COM
                  </span>
                </div>
                <div className="audience-card-body">
                  <span className="audience-tag" style={{ color: "#059669" }}>DIVISION 02 · 3D FABRICATION STORE</span>
                  <h3>Lithophane Lamps &amp; Figurines</h3>
                  <p>
                    Our dedicated 3D storefront at <strong>3d.buildroonix.com</strong> transforms your photos into glowing 3D lithophane night lamps (heart, curved, rectangular, and hexagonal frames) and manufactures high-detail anime figurines, vehicle models, and custom functional prints.
                  </p>
                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingTop: "12px" }}>
                    <div style={{ fontSize: "11px", color: "var(--ink-secondary)", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span className="tag-chip">✓ 2–3 Day Dispatch</span>
                      <span className="tag-chip">✓ Instant Photo Upload</span>
                      <span className="tag-chip">✓ Pan-India Shipping</span>
                    </div>
                    <a
                      href="https://3d.buildroonix.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="audience-cta"
                      style={{ color: "#059669", fontWeight: 700 }}
                    >
                      Shop 3D Store: 3d.buildroonix.com ↗
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>

            {/* Door 3: Student Embedded & IoT Projects */}
            <StaggerItem>
              <SpotlightCard className="audience-card" accent="#d97706">
                <div className="audience-card-img" style={{ position: "relative" }}>
                  <img src="/assets/student_project.png" alt="Student IoT and Embedded Electronics Projects" loading="lazy" />
                  <span style={{ position: "absolute", bottom: "10px", right: "10px", background: "rgba(28,25,23,0.85)", color: "#f59e0b", padding: "3px 8px", borderRadius: "4px", fontSize: "10px", fontFamily: "var(--f-mono)" }}>
                    100% VIVA READY
                  </span>
                </div>
                <div className="audience-card-body">
                  <span className="audience-tag" style={{ color: "#d97706" }}>DIVISION 03 · STUDENT ELECTRONICS</span>
                  <h3>Student IoT &amp; Embedded Kits</h3>
                  <p>
                    Turnkey final-year engineering projects for B.Tech, Polytechnic, and Diploma students. We engineer fully assembled, <strong>100% working hardware circuits</strong> (ESP32/STM32/Arduino) inside custom 3D enclosures, bundled with a complete report, PPT presentation, and viva defense guide.
                  </p>
                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingTop: "12px" }}>
                    <div style={{ fontSize: "11px", color: "var(--ink-secondary)", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <span className="tag-chip">✓ Tested Hardware Circuit</span>
                      <span className="tag-chip">✓ 3D Custom Body</span>
                      <span className="tag-chip">✓ Report &amp; Viva Q&amp;A</span>
                    </div>
                    <Link href="/portfolio/student-iot-embedded-projects" className="audience-cta" style={{ color: "#d97706" }}>
                      Explore Student Project Packages →
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── 4. INTERACTIVE SOFTWARE & PRODUCT WORKBENCH ───────────────────── */}
      <section className="section-dark" id="software-showcase">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header-split">
            <div className="section-header">
              <span className="section-kicker kicker-light">Interactive Product Workbench</span>
              <h2 className="section-h2">Inspect Our Operational Software &amp; Systems.</h2>
              <p className="section-sub">
                Explore interactive role views and dashboard previews for Library OS, Gym OS, 3D Storefront, Student IoT hardware kits, and upcoming SaaS.
              </p>
            </div>
            <Link href="/services/software-development" className="btn-primary">
              Full Software Capabilities →
            </Link>
          </Reveal>
          <SoftwareWorkbench />
        </div>
      </section>

      {/* ── 5. BUYER & STUDENT GUARANTEES ─────────────────────────────────── */}
      <section className="section-obsidian-alt" id="guarantees">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">Operational Trust &amp; Standards</span>
            <h2 className="section-h2">Strict Accountability. Clear Guarantees.</h2>
            <p className="section-sub">
              Every product, circuit, and software deployment from Buildroonix comes with verifiable quality standards and direct engineering support.
            </p>
          </Reveal>

          <StaggerContainer className="governance-grid" staggerDelay={0.08}>
            <StaggerItem>
              <SpotlightCard className="gov-card" accent="#059669">
                <span className="gov-code" style={{ color: "#10b981" }}>GUARANTEE 01</span>
                <h3>100% Tested Working Hardware</h3>
                <p>
                  Student project circuits and embedded prototypes are physically assembled and tested in our lab before dispatch. Includes test verification video.
                </p>
              </SpotlightCard>
            </StaggerItem>
            <StaggerItem>
              <SpotlightCard className="gov-card" accent="#d97706">
                <span className="gov-code" style={{ color: "#f59e0b" }}>GUARANTEE 02</span>
                <h3>2–3 Day Custom 3D Dispatch</h3>
                <p>
                  Lithophane photo lamps and figurines are 3D printed with premium PLA+/tough resin, carefully shock-packed, and shipped via insured pan-India express couriers.
                </p>
              </SpotlightCard>
            </StaggerItem>
            <StaggerItem>
              <SpotlightCard className="gov-card" accent="#7c3aed">
                <span className="gov-code" style={{ color: "#a78bfa" }}>GUARANTEE 03</span>
                <h3>Strict Role-Based Security (RBAC)</h3>
                <p>
                  Our software enforces ironclad role separation (Manager, Admin, Trainer, Superadmin) with audit logs, automated cloud backups, and zero unauthorized data access.
                </p>
              </SpotlightCard>
            </StaggerItem>
            <StaggerItem>
              <SpotlightCard className="gov-card" accent="#059669">
                <span className="gov-code" style={{ color: "#10b981" }}>GUARANTEE 04</span>
                <h3>MSME &amp; GSTIN Registered Invoicing</h3>
                <p>
                  Verified Indian enterprise with GSTIN 09HQHPD9487C1ZE in Varanasi, UP. Official GST tax invoices provided for institutions, businesses, and online buyers.
                </p>
              </SpotlightCard>
            </StaggerItem>
          </StaggerContainer>

          <Reveal preset="scale-in" className="standards-bar">
            <span>✓ Verified Working Hardware Guarantee</span>
            <span>✓ 2–3 Day Pan-India 3D Dispatch</span>
            <span>✓ Multi-Role RBAC Software Security</span>
            <span>✓ Razorpay UPI, Cards &amp; NetBanking</span>
            <span>✓ Direct WhatsApp Support (+91 9580181697)</span>
          </Reveal>
        </div>
      </section>

      {/* ── 6. AUTHENTIC REVIEWS / TESTIMONIALS ────────────────────────────── */}
      <section className="section-dark" id="testimonials">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">Customer &amp; Student Feedback</span>
            <h2 className="section-h2">Trusted by Gyms, Libraries, Students &amp; 3D Customers.</h2>
            <p className="section-sub">
              Real experiences from clients managing operations with our software, students presenting final-year IoT projects, and customers gifting 3D lithophane lamps.
            </p>
          </Reveal>

          <StaggerContainer className="testimonials-grid" staggerDelay={0.08}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <SpotlightCard className="testimonial-card" accent="#7c3aed">
                  <div className="testimonial-head-row">
                    <div className="testimonial-stars" style={{ color: "#d97706" }}>
                      {"★".repeat(Math.min(5, Math.max(1, Number(t.stars) || 5)))}
                    </div>
                    <span className="testimonial-mark" aria-hidden="true">
                      &ldquo;
                    </span>
                  </div>
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" style={{ background: "rgba(124, 58, 237, 0.15)", color: "#a78bfa" }}>
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

      {/* ── 7. PRACTICAL FAQS ─────────────────────────────────────────────── */}
      <section className="section-obsidian-alt" id="faq">
        <div className="section-wrap">
          <Reveal preset="fade-up" className="section-header">
            <span className="section-kicker kicker-light">Frequently Asked Questions</span>
            <h2 className="section-h2">Clear Answers to Common Questions.</h2>
            <p className="section-sub">
              Learn about our software demos, 3D printing ordering process, student project viva support, and verified Indian business registration.
            </p>
          </Reveal>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── 8. FOOTER ─────────────────────────────────────────────────────── */}
      <SiteFooter content={content} />
    </>
  );
}
