"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2, Mail, Phone, Sparkles, X } from "lucide-react";
import { BUILDROONIX_BRAND } from "@/lib/brand";

const QuoteContext = createContext({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export function useQuoteModal() {
  return useContext(QuoteContext);
}

const SERVICE_OPTIONS = [
  "Custom Software Development",
  "Website / Web Application",
  "Mobile App Development",
  "Desktop Software",
  "Enterprise / ERP / CRM / HRMS",
  "SaaS & Cloud Platform",
  "AI & Workflow Automation",
  "API, Backend & Integration",
  "IoT, Embedded & PCB Hardware",
  "3D Printing & Rapid Prototyping",
  "Software QA / Maintenance",
];

function matchServiceOption(preselect) {
  if (!preselect) return SERVICE_OPTIONS[0];
  const low = preselect.toLowerCase();
  const found = SERVICE_OPTIONS.find(
    (opt) => opt.toLowerCase().includes(low) || low.includes(opt.toLowerCase())
  );
  return found || SERVICE_OPTIONS[0];
}

export function QuoteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    timeline: "Standard (3–6 weeks)",
    brief: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedRef, setSubmittedRef] = useState("");

  const openQuoteModal = (preselect) => {
    setStatus("idle");
    setErrorMsg("");
    if (preselect) {
      setForm((prev) => ({ ...prev, service: matchServiceOption(preselect) }));
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const buildWaUrl = () => {
    const lines = [
      "Hi Buildroonix, I'd like to discuss a project:",
      form.service ? `Service: ${form.service}` : "",
      form.name ? `Name: ${form.name}` : "",
      form.company ? `Company: ${form.company}` : "",
      form.brief ? `Brief: ${form.brief}` : "",
    ].filter(Boolean);
    return `https://wa.me/${BUILDROONIX_BRAND.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedRef(data.inquiry?.id || `BRX-${Date.now().toString().slice(-6)}`);
        setStatus("success");
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: SERVICE_OPTIONS[0],
          timeline: "Standard (3–6 weeks)",
          brief: "",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Could not submit via API. Please message us directly on WhatsApp or email support@buildroonix.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <QuoteContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="quote-modal-backdrop open"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeQuoteModal();
            }}
          >
            <motion.div
              className="quote-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="quoteModalTitle"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              <div className="quote-modal-head">
                <div>
                  <span className="section-kicker kicker-light">
                    <Sparkles size={12} /> Project Inquiry · Direct Engineering Desk
                  </span>
                  <h3 id="quoteModalTitle">Discuss Your Project &amp; Request a Quote</h3>
                </div>
                <button
                  type="button"
                  className="quote-close"
                  onClick={closeQuoteModal}
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success-view"
                    className="quote-success-state"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <motion.div
                      className="quote-check-ring"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.08 }}
                    >
                      <motion.div
                        initial={{ pathLength: 0, scale: 0.5 }}
                        animate={{ pathLength: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: 0.16 }}
                      >
                        <Check size={28} strokeWidth={2.8} />
                      </motion.div>
                    </motion.div>
                    <h4>Technical Inquiry Logged</h4>
                    <p>
                      Our engineering team has received your project brief and will follow up shortly with
                      architecture thoughts and timeline estimates.
                    </p>
                    {submittedRef && (
                      <div className="quote-ref-chip">REF ID: {submittedRef}</div>
                    )}
                    <div className="quote-actions" style={{ justifyContent: "center", marginTop: "8px" }}>
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={() => setStatus("idle")}
                      >
                        Submit Another Brief
                      </button>
                      <a
                        href={BUILDROONIX_BRAND.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-light"
                      >
                        Chat on WhatsApp <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form-view"
                    className="quote-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="quote-row">
                      <div className="quote-field">
                        <label htmlFor="qName">Your Name *</label>
                        <input
                          id="qName"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Aarav Singh"
                        />
                      </div>
                      <div className="quote-field">
                        <label htmlFor="qCompany">Company / Organization</label>
                        <input
                          id="qCompany"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Business, Startup, or Institution"
                        />
                      </div>
                    </div>

                    <div className="quote-row">
                      <div className="quote-field">
                        <label htmlFor="qEmail">Email *</label>
                        <input
                          id="qEmail"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@company.com"
                        />
                      </div>
                      <div className="quote-field">
                        <label htmlFor="qPhone">Phone / WhatsApp *</label>
                        <input
                          id="qPhone"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98XXXXXXXX"
                        />
                      </div>
                    </div>

                    <div className="quote-row">
                      <div className="quote-field">
                        <label htmlFor="qService">Primary Division / Service</label>
                        <select
                          id="qService"
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="quote-field">
                        <label htmlFor="qTimeline">Target Timeline</label>
                        <select
                          id="qTimeline"
                          value={form.timeline}
                          onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        >
                          <option value="Immediate (1-2 weeks)">Immediate (1–2 weeks)</option>
                          <option value="Standard (3–6 weeks)">Standard (3–6 weeks)</option>
                          <option value="Multi-Phase Enterprise (2-3+ months)">
                            Multi-Phase Enterprise (2–3+ months)
                          </option>
                          <option value="Exploring / Scoping">Exploring / Scoping</option>
                        </select>
                      </div>
                    </div>

                    <div className="quote-field">
                      <label htmlFor="qBrief">Project Requirements / Problem Statement *</label>
                      <textarea
                        id="qBrief"
                        rows={4}
                        required
                        value={form.brief}
                        onChange={(e) => setForm({ ...form, brief: e.target.value })}
                        placeholder="Describe what you need built, key modules, preferred programming language/stack (if any), integrations, or hardware touchpoints..."
                      />
                    </div>

                    {status === "error" && errorMsg && (
                      <div className="quote-feedback warn">{errorMsg}</div>
                    )}

                    <div className="quote-actions">
                      <motion.button
                        type="submit"
                        className="btn-primary"
                        disabled={submitting}
                        whileHover={{ scale: submitting ? 1 : 1.02 }}
                        whileTap={{ scale: submitting ? 1 : 0.98 }}
                      >
                        {submitting ? (
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                            <Loader2 size={15} className="spin-icon" /> Submitting Inquiry...
                          </span>
                        ) : (
                          "Submit Technical Inquiry"
                        )}
                      </motion.button>
                      <a
                        href={buildWaUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-light"
                      >
                        Send Directly on WhatsApp <ArrowUpRight size={14} />
                      </a>
                    </div>

                    <p className="quote-note">
                      <Mail size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                      Direct desk:{" "}
                      <a href={`mailto:${BUILDROONIX_BRAND.email}`}>{BUILDROONIX_BRAND.email}</a> ·{" "}
                      <Phone size={12} style={{ display: "inline", verticalAlign: "middle", margin: "0 4px" }} />
                      <a href={`tel:${BUILDROONIX_BRAND.phoneRaw}`}>{BUILDROONIX_BRAND.phone}</a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuoteContext.Provider>
  );
}
