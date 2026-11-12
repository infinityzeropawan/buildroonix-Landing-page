"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { LIFECYCLE_STEPS } from "@/lib/brand";

const PHASE_OUTPUTS = {
  "01": "Output: Stakeholder Discovery Notes, Scope Boundaries & Risk Log",
  "02": "Output: Functional Requirements Spec (FRS) & Role Matrix",
  "03": "Output: Interactive Wireframes, Design Tokens & UI Prototype",
  "04": "Output: Database ER Schema, API Contracts & Infra Blueprint",
  "05": "Output: Version-Controlled Frontend, Backend, Mobile or Firmware Builds",
  "06": "Output: Verified Third-Party APIs, Webhooks & Hardware Telemetry Bridges",
  "07": "Output: QA Test Matrix, Security/RBAC Audit & Regression Sign-Off",
  "08": "Output: SSL/NGINX Production Rollout, CI/CD & Health Monitoring",
  "09": "Output: Scheduled Backups, Patch Updates & Long-Term SLA Support",
};

export function LifecycleTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 55%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 26,
    restDelta: 0.001,
  });

  const activeStep = LIFECYCLE_STEPS[activeIdx] || LIFECYCLE_STEPS[0];
  const progressPct = Math.round(((activeIdx + 1) / LIFECYCLE_STEPS.length) * 100);

  return (
    <div className="timeline-interactive" ref={containerRef}>
      {/* Scroll-Driven SVG Progress Path Bar */}
      <div className="timeline-svg-track" aria-hidden="true">
        <svg
          className="timeline-svg-line"
          viewBox="0 0 1000 12"
          preserveAspectRatio="none"
          fill="none"
        >
          <line
            x1="0"
            y1="6"
            x2="1000"
            y2="6"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.line
            x1="0"
            y1="6"
            x2="1000"
            y2="6"
            stroke="url(#lifecycleBeam)"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{ pathLength: smoothProgress }}
          />
          <defs>
            <linearGradient id="lifecycleBeam" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#26a9ff" />
              <stop offset="50%" stopColor="#26a9ff" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Milestone Phase Rail */}
      <div className="timeline-rail" role="tablist" aria-label="Development lifecycle phases">
        {LIFECYCLE_STEPS.map((s, idx) => {
          const isActive = idx === activeIdx;
          const isCompleted = idx < activeIdx;
          return (
            <button
              key={s.step}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`timeline-rail-pill ${isActive ? "active" : ""} ${
                isCompleted ? "completed" : ""
              }`}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="rail-head">
                <span className="rail-node-dot" />
                <span className="rail-step-num">{s.step}</span>
              </div>
              <small>{s.title}</small>
            </button>
          );
        })}
      </div>

      {/* Active Spotlight Card with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.step}
          className="timeline-spotlight"
          role="tabpanel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="timeline-spotlight-left">
            <span className="section-kicker kicker-light" style={{ marginBottom: "8px", color: "#06B6D4" }}>
              <Layers size={12} /> ACTIVE PHASE {activeStep.step} OF 09 · {progressPct}% LIFECYCLE
            </span>
            <h3>
              {activeStep.step} — {activeStep.title}
            </h3>
            <p>{activeStep.desc}</p>
          </div>
          <div className="timeline-spotlight-right">
            <div className="timeline-spotlight-output">
              <CheckCircle2 size={14} style={{ flexShrink: 0, color: "#10B981" }} />
              <span>{PHASE_OUTPUTS[activeStep.step]}</span>
            </div>
            <motion.button
              type="button"
              className="btn-outline-light"
              style={{ padding: "9px 18px", fontSize: "12.5px" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveIdx((prev) => (prev + 1) % LIFECYCLE_STEPS.length)}
            >
              <span>Next Phase ({LIFECYCLE_STEPS[(activeIdx + 1) % LIFECYCLE_STEPS.length].step})</span>
              <ArrowRight size={13} />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Staggered Scroll-Triggered Phase Cards */}
      <div className="timeline-grid">
        {LIFECYCLE_STEPS.map((s, idx) => {
          const isActive = idx === activeIdx;
          return (
            <motion.button
              key={s.step}
              type="button"
              data-step={s.step}
              onClick={() => setActiveIdx(idx)}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (idx % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className={`timeline-step timeline-scroll-card ${isActive ? "is-active" : ""}`}
            >
              <div className="timeline-num">
                <span className={`timeline-pulse-node ${isActive ? "active" : ""}`} />
                <span>PHASE {s.step}</span>
              </div>
              <h3>
                {s.step} — {s.title}
              </h3>
              <p>{s.desc}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
