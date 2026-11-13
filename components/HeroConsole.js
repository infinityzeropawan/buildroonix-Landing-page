"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Film, Layers, Play, Terminal as TerminalIcon } from "lucide-react";
import { BUILDROONIX_BRAND } from "@/lib/brand";

const COMMAND_SEQUENCE = [
  "buildroonix arch --blueprint --env production",
  "buildroonix sync --devices esp32-mesh --protocol mqtt",
  "buildroonix deploy --containers fullstack --zero-downtime",
  "buildroonix test --rbac --acid-ledger --coverage 100%",
];

export function HeroConsole({ videoUrl }) {
  const [mode, setMode] = useState("reel");
  const [cmdIndex, setCmdIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // 3D Mouse Tilt with Framer Motion Springs
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 220 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Live Typewriter Effect for Terminal
  useEffect(() => {
    const target = COMMAND_SEQUENCE[cmdIndex];
    let charIdx = 0;
    setIsTyping(true);

    const typeTimer = setInterval(() => {
      charIdx++;
      setDisplayText(target.slice(0, charIdx));
      if (charIdx >= target.length) {
        clearInterval(typeTimer);
        setIsTyping(false);
        setTimeout(() => {
          setCmdIndex((prev) => (prev + 1) % COMMAND_SEQUENCE.length);
        }, 3400);
      }
    }, 45);

    return () => clearInterval(typeTimer);
  }, [cmdIndex]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-console-tilt-wrapper"
      style={{ perspective: 1100 }}
    >
      <motion.div
        className="hero-console-obsidian"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        {/* Rotating Conic-Gradient Border Beam */}
        <div className="console-border-beam" aria-hidden="true" />

        {/* macOS Terminal Head */}
        <div className="console-head">
          <div className="console-head-left">
            <div className="macos-traffic-lights" aria-hidden="true">
              <span className="light light-red" />
              <span className="light light-yellow" />
              <span className="light light-green" />
            </div>
            <div className="console-title-wrap">
              <TerminalIcon size={12} className="console-icon" />
              <span className="console-title-tag">buildroonix-studio ~ bash</span>
            </div>
          </div>

          <div className="console-mode-switch" role="tablist" aria-label="Hero showcase view">
            <button
              type="button"
              role="tab"
              aria-selected={mode === "reel"}
              className={`console-mode-btn ${mode === "reel" ? "active" : ""}`}
              onClick={() => setMode("reel")}
            >
              <Film size={12} />
              <span>Motion Reel</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "arch"}
              className={`console-mode-btn ${mode === "arch" ? "active" : ""}`}
              onClick={() => setMode("arch")}
            >
              <Cpu size={12} />
              <span>System Blueprint</span>
            </button>
          </div>
        </div>

        {/* Live Typewriter Command Strip */}
        <div className="console-typewriter-strip">
          <span className="cli-prompt">buildroonix@cloud:~$</span>
          <span className="cli-command">
            {displayText}
            <span className={`cli-cursor ${isTyping ? "solid" : "blink"}`}>▌</span>
          </span>
          <span className="cli-badge">PROD · VERIFIED</span>
        </div>

        {/* Dynamic Panel: Reel or Architecture */}
        <AnimatePresence mode="wait">
          {mode === "reel" ? (
            <motion.div
              className="hero-video-wrap"
              key="reel-view"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.24 }}
            >
              <video
                src={videoUrl || BUILDROONIX_BRAND.videoPath}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="video-vignette" aria-hidden="true" />
              <div className="video-hud-badge">
                <span className="hud-pulse" />
                <span>BUILDROONIX · INTEGRATED STUDIO REEL</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="hero-blueprint-wrap"
              key="blueprint-view"
              role="tabpanel"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.24 }}
            >
              <div className="bp-grid-bg" />
              <div className="bp-header-strip">
                <span>ARCHITECTURE PIPELINE</span>
                <span className="bp-live-tag">● CONNECTED STACK</span>
              </div>
              <div className="bp-flow">
                <div className="bp-node">
                  <span className="bp-tag" style={{ color: "#38BDF8" }}>
                    01 · EDGE &amp; CLIENTS
                  </span>
                  <strong>Web · Mobile · Desktop · ESP32</strong>
                  <small>UI, Offline SQLite &amp; Sensors</small>
                </div>
                <div className="bp-connector">
                  <span className="bp-signal" />
                </div>
                <div className="bp-node bp-node-core">
                  <span className="bp-tag" style={{ color: "#7c3aed" }}>
                    02 · CORE ENGINE
                  </span>
                  <strong>REST / GraphQL · RBAC · AI APIs</strong>
                  <small>Business Logic &amp; Integrations</small>
                </div>
                <div className="bp-connector">
                  <span className="bp-signal" />
                </div>
                <div className="bp-node">
                  <span className="bp-tag" style={{ color: "#10B981" }}>
                    03 · DATA &amp; OPS
                  </span>
                  <strong>PostgreSQL · Docker · NGINX</strong>
                  <small>CI/CD, Backups &amp; Monitoring</small>
                </div>
              </div>
              <div className="bp-footer-bar">
                <span>✓ Full-Lifecycle Engineering</span>
                <span>✓ Software + IoT + Hardware</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4 Layer Diagnostic Cards */}
        <div className="console-layers">
          <div className="console-layer-card">
            <span style={{ color: "#7c3aed" }}>01 · Software Layer</span>
            <strong>Web, Mobile, Desktop, SaaS, ERP &amp; AI</strong>
          </div>
          <div className="console-layer-card">
            <span style={{ color: "#7c3aed" }}>02 · Cloud &amp; API Layer</span>
            <strong>REST, GraphQL, RBAC, Docker &amp; CI/CD</strong>
          </div>
          <div className="console-layer-card">
            <span style={{ color: "#ff7212" }}>03 · Embedded &amp; PCB</span>
            <strong>ESP32 Firmware, Circuits &amp; Telemetry</strong>
          </div>
          <div className="console-layer-card">
            <span style={{ color: "#10B981" }}>04 · Rapid Prototyping</span>
            <strong>CAD Design &amp; Functional 3D Enclosures</strong>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
