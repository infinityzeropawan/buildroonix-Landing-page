"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Image as ImageIcon, Monitor, Play } from "lucide-react";
import { parseVideoSource } from "@/lib/video-utils";
import { UiMockup } from "./UiMockup";

export function PortfolioPreviewSwitcher({ image, title, mockupType, accent, demoVideoUrl, liveUrl }) {
  const parsedVideo = demoVideoUrl ? parseVideoSource(demoVideoUrl) : null;
  const initialTab = parsedVideo ? "video" : mockupType ? "ui" : "photo";
  const [tab, setTab] = useState(initialTab);

  return (
    <div style={{ marginBottom: "22px" }}>
      <div className="preview-switcher-bar">
        {parsedVideo && (
          <button
            type="button"
            className={`preview-sw-btn ${tab === "video" ? "active" : ""}`}
            onClick={() => setTab("video")}
          >
            <Play size={11} fill="currentColor" style={{ display: "inline", marginRight: "5px" }} />
            Video Demo
          </button>
        )}
        {mockupType && (
          <button
            type="button"
            className={`preview-sw-btn ${tab === "ui" ? "active" : ""}`}
            onClick={() => setTab("ui")}
          >
            <Monitor size={12} style={{ display: "inline", marginRight: "5px" }} />
            Interactive UI
          </button>
        )}
        <button
          type="button"
          className={`preview-sw-btn ${tab === "photo" ? "active" : ""}`}
          onClick={() => setTab("photo")}
        >
          <ImageIcon size={12} style={{ display: "inline", marginRight: "5px" }} />
          Visual Snapshot
        </button>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-sw-link"
            title="Open live website in new tab"
          >
            <span>Visit Live Website</span>
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>

      <AnimatePresence mode="wait">
        {tab === "video" && parsedVideo && (
          <motion.div
            key="tab-video"
            className="project-video-stage"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
          >
            {parsedVideo.type === "video" ? (
              <video src={parsedVideo.src} controls autoPlay muted playsInline className="project-video-embed" />
            ) : (
              <iframe
                src={parsedVideo.src}
                title={title}
                className="project-video-embed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </motion.div>
        )}

        {tab === "ui" && mockupType && (
          <motion.div
            key="tab-ui"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
          >
            <UiMockup type={mockupType} accent={accent} />
          </motion.div>
        )}

        {tab === "photo" && (
          <motion.div
            key="tab-photo"
            className="port-thumb"
            style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--r-lg)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
          >
            <img src={image} alt={title} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
