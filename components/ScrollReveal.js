"use client";

import Link from "next/link";
import { useRef } from "react";
import { MotionConfig, motion } from "framer-motion";

const LUXURY_EASE = [0.22, 1, 0.36, 1];

export const MOTION_PRESETS = {
  "fade-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  "blur-in": {
    hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.94, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  "stagger-container": {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  },
};

export function MotionProvider({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="obsidian-ambient-canvas" aria-hidden="true">
        <div className="obsidian-grid-overlay" />
        <div className="aurora-orb aurora-orb-green" />
        <div className="aurora-orb aurora-orb-cyan" />
        <div className="aurora-orb aurora-orb-orange" />
      </div>
      <div className="obsidian-app-shell">{children}</div>
    </MotionConfig>
  );
}

export function ScrollReveal() {
  return null;
}

export function Reveal({
  children,
  preset = "fade-up",
  delay = 0,
  duration = 0.56,
  className = "",
  style,
  amount = 0.15,
  as = "div",
  immediate = false,
  ...rest
}) {
  const variant = MOTION_PRESETS[preset] || MOTION_PRESETS["fade-up"];
  const MotionTag = motion[as] || motion.div;

  if (immediate) {
    return (
      <MotionTag
        initial="hidden"
        animate="visible"
        variants={variant}
        transition={{ duration, delay, ease: LUXURY_EASE }}
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variant}
      transition={{ duration, delay, ease: LUXURY_EASE }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerContainer({
  children,
  staggerDelay = 0.075,
  delayChildren = 0.03,
  className = "",
  style,
  amount = 0.1,
  ...rest
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  preset = "fade-up",
  duration = 0.52,
  className = "",
  style,
  ...rest
}) {
  const variant = MOTION_PRESETS[preset] || MOTION_PRESETS["fade-up"];

  return (
    <motion.div
      variants={variant}
      transition={{ duration, ease: LUXURY_EASE }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function BlurHeadline({
  lines = [],
  highlightIndex = 1,
  className = "hero-h1",
}) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.08,
      },
    },
  };

  const wordVar = {
    hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.52, ease: LUXURY_EASE },
    },
  };

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {lines.map((line, lIdx) => {
        const words = String(line || "").trim().split(/\s+/).filter(Boolean);
        return (
          <span
            key={lIdx}
            className={`h1-line ${lIdx === highlightIndex ? "h1-accent" : ""}`}
          >
            {words.map((word, wIdx) => (
              <motion.span
                key={`${lIdx}-${wIdx}`}
                variants={wordVar}
                style={{ display: "inline-block", marginRight: "0.26em" }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.h1>
  );
}

export function SpotlightCard({
  children,
  className = "",
  href,
  style,
  accent = "#26a9ff",
  id,
  ...rest
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const inner = (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
      style={{ "--spot-accent": accent, ...style }}
      {...rest}
    >
      <div className="spotlight-glow" aria-hidden="true" />
      <div className="spotlight-content">{children}</div>
    </div>
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="spotlight-link-wrap">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className="spotlight-link-wrap">
        {inner}
      </Link>
    );
  }

  return inner;
}

export function TechMarquee({ items = [] }) {
  const track = [...items, ...items];
  return (
    <div className="obsidian-marquee-wrap" aria-label="Technology capabilities marquee">
      <motion.div
        className="obsidian-marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 38 }}
      >
        {track.map((item, idx) => (
          <span key={`${item}-${idx}`} className="obsidian-marquee-pill">
            <span className="marquee-cyan-dot" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
