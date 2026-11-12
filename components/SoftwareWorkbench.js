"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Layers, Monitor, Sparkles } from "lucide-react";
import { SOFTWARE_EXPERTISE_CATEGORIES } from "@/lib/brand";
import { useQuoteModal } from "./QuoteContext";
import { UiMockup } from "./UiMockup";

export function SoftwareWorkbench() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [previewMode, setPreviewMode] = useState("ui"); // "ui" | "studio"
  const { openQuoteModal } = useQuoteModal();
  const current = SOFTWARE_EXPERTISE_CATEGORIES[activeIdx] || SOFTWARE_EXPERTISE_CATEGORIES[0];

  // Scroll-linked 3D Perspective
  const workbenchRef = useRef(null);
  const stageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: workbenchRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [6, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);

  // Cursor-tracking radial spotlight on the stage
  const handleMouseMove = (e) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sw-mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sw-my", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="software-workbench-shell" ref={workbenchRef}>
      <div className="software-workbench">
        <div className="sw-tab-list" role="tablist" aria-label="Software expertise categories">
          {SOFTWARE_EXPERTISE_CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeIdx;
            return (
              <motion.button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`sw-tab-btn ${isActive ? "active" : ""}`}
                style={{ "--tab-accent": cat.accent }}
                onClick={() => setActiveIdx(idx)}
                whileHover={{ x: isActive ? 4 : 2 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.18 }}
              >
                <div className="sw-tab-content">
                  <span className="sw-tab-index">{String(idx + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{cat.title}</strong>
                    <span>{cat.subtitle}</span>
                  </div>
                </div>
                <ArrowRight size={14} className="sw-tab-arrow" />
              </motion.button>
            );
          })}
        </div>

        <motion.div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          className="sw-stage"
          role="tabpanel"
          style={{
            rotateX,
            opacity,
            transformPerspective: 1200,
            "--stage-accent": current.accent,
            borderColor: `${current.accent}44`,
          }}
        >
          <div className="sw-stage-spotlight" aria-hidden="true" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="sw-stage-inner"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sw-stage-head">
                <div>
                  <span className="section-kicker kicker-light" style={{ color: current.accent }}>
                    <Sparkles size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    {current.subtitle}
                  </span>
                  <h3>{current.title}</h3>
                  <p>{current.summary}</p>
                </div>
                <div className="sw-stage-actions">
                  <Link href={current.href} className="btn-primary">
                    <span>{current.cta}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <button
                    type="button"
                    className="btn-outline-light"
                    onClick={() => openQuoteModal(current.title)}
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className="sw-bullets-row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <div className="sw-bullets">
                  {current.bullets.map((b) => (
                    <span key={b} className="sw-bullet">
                      <Check size={12} className="sw-bullet-check" />
                      <span>{b}</span>
                    </span>
                  ))}
                </div>
                <div className="console-mode-switch" role="tablist" aria-label="Workbench mockup mode">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={previewMode === "ui"}
                    className={`console-mode-btn ${previewMode === "ui" ? "active" : ""}`}
                    onClick={() => setPreviewMode("ui")}
                  >
                    <Monitor size={11} />
                    <span>Interactive UI</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={previewMode === "studio"}
                    className={`console-mode-btn ${previewMode === "studio" ? "active" : ""}`}
                    onClick={() => setPreviewMode("studio")}
                  >
                    <Layers size={11} />
                    <span>Connected Studio</span>
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {previewMode === "studio" ? (
                  <motion.div
                    key="studio-preview"
                    className="ui-mockup"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.24 }}
                  >
                    <div className="mk-topbar">
                      <span className="mk-dots"><i /><i /><i /></span>
                      <span className="mk-url">studio.buildroonix.com/connected-architecture</span>
                      <span className="mk-badge" style={{ color: current.accent, borderColor: `${current.accent}44` }}>
                        Software + Hardware Sync
                      </span>
                    </div>
                    <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
                      <img
                        src={current.studioImage || "/assets/showcase_software_dev.jpg"}
                        alt={`${current.title} · Buildroonix Production Environment`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div className="video-hud-badge">
                        <span className="hud-pulse" />
                        <span>{current.title} · Production Environment Preview</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`ui-${current.mockupType}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.24 }}
                  >
                    <UiMockup type={current.mockupType} accent={current.accent} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
