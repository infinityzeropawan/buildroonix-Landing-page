"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Code2,
  Cpu,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { BUILDROONIX_BRAND } from "@/lib/brand";
import { useQuoteModal } from "./QuoteContext";
import { Reveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export function FounderSection() {
  const { openQuoteModal } = useQuoteModal();
  const f = BUILDROONIX_BRAND.founder || {};

  return (
    <section className="section-dark founder-section" id="founder">
      <div className="section-wrap">
        <Reveal preset="fade-up" className="section-header">
          <div className="founder-kicker-row">
            <span className="section-kicker kicker-light">
              <span className="live-dot" style={{ background: "#26a9ff" }} />
              Leadership &amp; Founder&apos;s Desk
            </span>
            <span className="founder-kicker-badge">Direct Architectural Oversight</span>
          </div>
          <h2 className="section-h2">
            Engineered by builders, not middlemen.
            <br />
            Direct architectural leadership on every project.
          </h2>
          <p className="section-sub">
            At Buildroonix, you don&apos;t talk to non-technical account managers. Every client engagement,
            system architecture, and prototype is personally guided by our founder and principal systems architect.
          </p>
        </Reveal>

        <div className="founder-bento-grid">
          {/* ── CARD 1: FOUNDER SPOTLIGHT & DIRECT CHANNELS ───────────────── */}
          <motion.div
            className="founder-card founder-card-profile"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="founder-profile-header">
              <div className="founder-avatar-frame">
                <img
                  src={f.image || "/assets/founder_portrait.jpg"}
                  alt={f.name || "Rohit - Founder Buildroonix"}
                  className="founder-avatar-img"
                  loading="lazy"
                />
                <span className="founder-status-badge" title="Active & Available for Consultation">
                  <span className="status-ping" />
                  Direct Access
                </span>
              </div>

              <div className="founder-profile-meta">
                <div className="founder-role-tag">
                  <Terminal size={12} />
                  <span>Principal Systems Architect</span>
                </div>
                <h3 className="founder-name">{f.name}</h3>
                <div className="founder-title">{f.title}</div>
                <div className="founder-location">
                  <MapPin size={13} />
                  <span>{f.location || "Varanasi, UP, India · Pan-India Delivery"}</span>
                </div>
              </div>
            </div>

            <div className="founder-quote-callout">
              <span className="quote-glyph" aria-hidden="true">&ldquo;</span>
              <p className="quote-text">{f.quote}</p>
            </div>

            <div className="founder-action-stack">
              <motion.a
                href={f.whatsappUrl || BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-founder-wa"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={16} />
                <span>Direct WhatsApp with Founder</span>
                <ArrowUpRight size={14} />
              </motion.a>

              <motion.button
                type="button"
                className="btn-founder-consult"
                onClick={() => openQuoteModal("Direct Founder Consultation & Architecture Review")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={15} />
                <span>Schedule Architectural Consultation</span>
                <ArrowRight size={14} />
              </motion.button>
            </div>

            <div className="founder-direct-contacts">
              <a href={`mailto:${f.email || BUILDROONIX_BRAND.email}`} className="fd-item">
                <Mail size={13} />
                <span>{f.email || BUILDROONIX_BRAND.email}</span>
              </a>
              <a href={`tel:${(f.phone || BUILDROONIX_BRAND.phone).replace(/\s+/g, "")}`} className="fd-item">
                <Phone size={13} />
                <span>{f.phone || BUILDROONIX_BRAND.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* ── CARD 2: THE MULTI-DISCIPLINARY STUDIO STORY ───────────────── */}
          <motion.div
            className="founder-card founder-card-story"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="story-card-top">
              <div className="story-badge">
                <Award size={14} />
                <span>Why Buildroonix Was Founded</span>
              </div>
              <h4>Solving the disconnect between Software &amp; Physical Engineering.</h4>
            </div>

            <div className="story-paragraphs">
              {(f.story || []).map((para, idx) => (
                <p key={idx} className="story-p">
                  {para}
                </p>
              ))}
            </div>

            <div className="founder-credentials-strip">
              <div className="f-cred-col">
                <span className="fc-label">Govt. Enterprise</span>
                <strong className="fc-value">MSME Registered</strong>
              </div>
              <div className="f-cred-col">
                <span className="fc-label">GST Tax Compliance</span>
                <strong className="fc-value">09HQHPD9487C1ZE</strong>
              </div>
              <div className="f-cred-col">
                <span className="fc-label">Code &amp; IP Ownership</span>
                <strong className="fc-value" style={{ color: "#26a9ff" }}>100% Handover</strong>
              </div>
              <div className="f-cred-col">
                <span className="fc-label">Operating Hub</span>
                <strong className="fc-value">Varanasi, UP</strong>
              </div>
            </div>
          </motion.div>

          {/* ── CARD 3: 4 INSTITUTIONAL PILLARS ──────────────────────────── */}
          <div className="founder-card-pillars-container">
            <StaggerContainer className="founder-pillars-grid" staggerDelay={0.08}>
              {(f.principles || []).map((p, idx) => (
                <StaggerItem key={idx}>
                  <div className="founder-pillar-card">
                    <div className="pillar-header-row">
                      <div className="pillar-index-icon">
                        {idx === 0 && <Code2 size={16} />}
                        {idx === 1 && <ShieldCheck size={16} />}
                        {idx === 2 && <Cpu size={16} />}
                        {idx === 3 && <CheckCircle2 size={16} />}
                      </div>
                      <span className="pillar-title">{p.title}</span>
                    </div>
                    <p className="pillar-desc">{p.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* ── FOOTNOTE STRIP: VERIFICATION & TRANSPARENCY ────────────────── */}
        <Reveal preset="fade-up" className="founder-trust-banner">
          <div className="ftb-left">
            <ShieldCheck size={20} className="ftb-icon" />
            <div>
              <strong>Institutional Trust &amp; Commercial Transparency Guarantee</strong>
              <span>
                Standard B2B commercial agreements, mutual non-disclosure (NDA) protection, clear milestone invoicing,
                and complete git repository transfer upon project sign-off.
              </span>
            </div>
          </div>
          <Link href="/about" className="ftb-link">
            <span>Read Full Studio Heritage &amp; Legal Registry</span>
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

