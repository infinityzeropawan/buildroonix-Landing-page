"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
} from "lucide-react";
import { BUILDROONIX_BRAND } from "@/lib/brand";
import { useQuoteModal } from "./QuoteContext";

export function SiteFooter({ content }) {
  const { openQuoteModal } = useQuoteModal();
  const c = content || {};
  const email = c.contactEmail || BUILDROONIX_BRAND.email;
  const phone = c.contactPhone || BUILDROONIX_BRAND.phone;
  const upi = c.contactUpi || BUILDROONIX_BRAND.upi;
  const gst = c.contactGst || BUILDROONIX_BRAND.gstin;
  const address = c.footerAddress || BUILDROONIX_BRAND.address;
  const tagline = c.footerTagline || BUILDROONIX_BRAND.tagline;
  const socials = { ...BUILDROONIX_BRAND.socials, ...(c.socials || {}) };

  return (
    <footer className="site-footer" id="contact">
      {/* Large Ambient Gradient Brand Watermark in Footer Background */}
      <div className="footer-brand-watermark" aria-hidden="true">
        BUILDROONIX
      </div>

      <div className="footer-wrap">
        {/* High-Impact Glass CTA Card */}
        <motion.div
          className="footer-cta-banner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="footer-cta-copy">
            <span className="section-kicker kicker-light" style={{ color: "#38BDF8" }}>
              <Sparkles size={12} /> Integrated Engineering Partner
            </span>
            <h2>
              From Software to Smart Devices, From Digital Products to Physical Prototypes — BUILDROONIX Engineers
              Connected Technology Solutions.
            </h2>
          </div>
          <div className="footer-cta-btns">
            <motion.button
              type="button"
              className="btn-accent"
              onClick={() => openQuoteModal("Custom Software Development")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={14} />
              <span>Discuss Your Project</span>
            </motion.button>
            <motion.button
              type="button"
              className="btn-outline-light"
              onClick={() => openQuoteModal()}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Request a Quote</span>
              <ArrowRight size={14} />
            </motion.button>
            <motion.a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-light"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageSquare size={14} />
              <span>WhatsApp Us</span>
              <ArrowUpRight size={13} />
            </motion.a>
          </div>
        </motion.div>

        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-row">
              <img src={BUILDROONIX_BRAND.logoPath} alt="Buildroonix" className="footer-logo" />
              <div>
                <div className="footer-brand-name">{BUILDROONIX_BRAND.name}</div>
                <div className="footer-brand-sub">{BUILDROONIX_BRAND.subName}</div>
              </div>
            </div>
            <p className="footer-tagline">
              {tagline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
            <p className="footer-address">
              <MapPin size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
              {address}
            </p>
            <div className="footer-socials">
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="soc-btn" title="Instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="soc-btn" title="WhatsApp Direct" aria-label="WhatsApp">
                <MessageSquare size={16} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="soc-btn" title="LinkedIn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="soc-btn" title="X / Twitter" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="soc-btn" title="GitHub" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="soc-btn" title="YouTube" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-head">Software &amp; Services</div>
            <ul className="footer-list">
              <li><Link href="/services/software-development">Software Development</Link></li>
              <li><Link href="/services/custom-software-development">Custom Software</Link></li>
              <li><Link href="/services/enterprise-software-development">Enterprise &amp; ERP/CRM</Link></li>
              <li><Link href="/services/mobile-app-development">Mobile &amp; SaaS Apps</Link></li>
              <li><Link href="/services/ai-development">AI &amp; Automation</Link></li>
              <li><Link href="/services/iot-embedded">IoT, PCB &amp; Prototyping</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-head">Studio &amp; Showcase</div>
            <ul className="footer-list">
              <li><Link href="/about">About &amp; Founder&apos;s Desk</Link></li>
              <li><Link href="/portfolio">Engineering Portfolio</Link></li>
              <li><a href="https://software.buildroonix.com" target="_blank" rel="noopener noreferrer">software.buildroonix.com</a></li>
              <li><a href="https://projects.buildroonix.com" target="_blank" rel="noopener noreferrer">projects.buildroonix.com</a></li>
              <li><a href="https://3d.buildroonix.com" target="_blank" rel="noopener noreferrer">3d.buildroonix.com (3D Store)</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-head">Direct Contact &amp; Registration</div>
            <ul className="footer-list">
              <li>
                <a href={`mailto:${email}`}>
                  <Mail size={12} style={{ display: "inline", marginRight: "6px" }} />
                  {email}
                </a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\s+/g, "")}`}>
                  <Phone size={12} style={{ display: "inline", marginRight: "6px" }} />
                  {phone}
                </a>
              </li>
              <li>UPI: <strong>{upi}</strong></li>
            </ul>
            <div className="reg-badge">
              <div className="reg-row">
                <Check size={12} className="reg-check" />
                <span>{BUILDROONIX_BRAND.msme}</span>
              </div>
              <div className="reg-row">
                <Check size={12} className="reg-check" />
                <span>GSTIN: <strong>{gst}</strong></span>
              </div>
              <div className="reg-row">
                <Check size={12} className="reg-check" />
                <span>Service &amp; Lead-Gen Showcase Only</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Buildroonix Engineering Studio · Varanasi, UP · 2026</span>
          <span className="footer-tagline-right">Build Beyond Limits.</span>
        </div>
      </div>

      <div className="mobile-sticky-dock" aria-label="Quick inquiry actions">
        <button type="button" className="msd-btn msd-primary" onClick={() => openQuoteModal()}>
          Request a Quote
        </button>
        <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="msd-btn msd-wa">
          WhatsApp Us <ArrowUpRight size={13} style={{ display: "inline", verticalAlign: "middle" }} />
        </a>
      </div>
    </footer>
  );
}
