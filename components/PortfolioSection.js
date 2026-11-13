"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Play, Sparkles } from "lucide-react";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { VideoPlayerModal } from "./VideoPlayerModal";

export function PortfolioSection({ showTypeFilter = false, limit = 0 }) {
  const [activeCat, setActiveCat] = useState("All");
  const [activeType, setActiveType] = useState("All");
  const [videoProject, setVideoProject] = useState(null);

  let filtered = PORTFOLIO_PROJECTS.filter((p) => {
    const matchCat =
      activeCat === "All" ||
      p.category === activeCat ||
      (p.extraCategories || []).includes(activeCat);
    const matchType = activeType === "All" || p.projectType === activeType;
    return matchCat && matchType;
  });

  if (limit > 0 && activeCat === "All" && activeType === "All") {
    filtered = filtered.slice(0, limit);
  }

  return (
    <>
      {showTypeFilter && <div className="filter-label">Filter by Software Category</div>}
      <div className="portfolio-filters" role="tablist">
        {PORTFOLIO_CATEGORIES.map((cat) => {
          const isActive = cat === activeCat;
          return (
            <motion.button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`filter-chip ${isActive ? "active" : ""}`}
              onClick={() => setActiveCat(cat)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              {isActive && (
                <motion.span
                  layoutId="activeFilterPill"
                  className="filter-chip-glow"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="filter-chip-text">{cat}</span>
            </motion.button>
          );
        })}
      </div>

      {showTypeFilter && (
        <>
          <div className="filter-label" style={{ marginTop: "14px" }}>
            Filter by Classification
          </div>
          <div className="portfolio-filters" role="tablist">
            {["All", ...Array.from(new Set(PORTFOLIO_PROJECTS.map((p) => p.projectType)))].map((t) => {
              const isActive = t === activeType;
              return (
                <motion.button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-chip ${isActive ? "active" : ""}`}
                  onClick={() => setActiveType(t)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTypePill"
                      className="filter-chip-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="filter-chip-text">{t}</span>
                </motion.button>
              );
            })}
          </div>
        </>
      )}

      <motion.div layout className="portfolio-grid bento-portfolio-grid">
        <AnimatePresence mode="popLayout">
          {filtered.length ? (
            filtered.map((p, idx) => {
              const badgeCls =
                p.projectType === "Client Project"
                  ? "client"
                  : p.projectType === "Internal Prototype"
                    ? "prototype"
                    : "demo";
              const isLarge = idx === 0 || idx === 3;

              return (
                <motion.article
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.93, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.93, y: 12 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className={`port-card bento-port-card ${isLarge ? "bento-large" : ""}`}
                  style={{ "--card-accent": p.accent || "#7c3aed" }}
                >
                  <div className="port-card-top">
                    <span className="port-cat" style={{ color: p.accent || "#7c3aed" }}>
                      {p.category}
                    </span>
                    <span className={`port-type-badge ${badgeCls}`}>{p.projectType}</span>
                  </div>

                  <Link href={`/portfolio/${p.slug}`} className="port-thumb">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <div className="port-thumb-overlay">
                      <span>Inspect Architecture</span>
                    </div>
                  </Link>

                  <h3>
                    <Link href={`/portfolio/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p>{p.shortDesc}</p>

                  <div className="port-stack-row">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="stack-pill-sm">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Frosted-glass action bar */}
                  <div className="port-card-actions">
                    <Link href={`/portfolio/${p.slug}`} className="port-card-cta">
                      <span>Case Study</span>
                      <ArrowRight size={13} />
                    </Link>
                    <div className="port-quick-links">
                      {p.demoVideoUrl && (
                        <motion.button
                          type="button"
                          className="port-action-pill video"
                          onClick={() => setVideoProject(p)}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <Play size={11} fill="currentColor" />
                          <span>Watch Demo</span>
                        </motion.button>
                      )}
                      {p.liveUrl && (
                        <motion.a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="port-action-pill live"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <span>Live Site</span>
                          <ArrowUpRight size={11} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })
          ) : (
            <motion.p
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="section-sub"
              style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px 0" }}
            >
              No projects match this filter combination.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <VideoPlayerModal
        videoUrl={videoProject?.demoVideoUrl}
        title={videoProject?.title}
        isOpen={!!videoProject}
        onClose={() => setVideoProject(null)}
      />
    </>
  );
}
