"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { parseVideoSource } from "@/lib/video-utils";

export function VideoPlayerModal({ videoUrl, title, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const parsed = videoUrl ? parseVideoSource(videoUrl) : null;

  return (
    <AnimatePresence>
      {isOpen && parsed && (
        <motion.div
          className="video-modal-backdrop"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="video-modal-card"
            role="dialog"
            aria-modal="true"
            aria-label={title || "Project Demo Video"}
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div className="video-modal-head">
              <div>
                <span className="section-kicker kicker-light" style={{ marginBottom: "4px", color: "#06B6D4" }}>
                  <Play size={11} /> PROJECT DEMO WALKTHROUGH
                </span>
                <h4>{title || "Live Demonstration"}</h4>
              </div>
              <button
                type="button"
                className="video-modal-close"
                onClick={onClose}
                aria-label="Close video"
              >
                <X size={16} />
              </button>
            </div>

            <div className="video-modal-stage">
              {parsed.type === "video" ? (
                <video src={parsed.src} controls autoPlay playsInline className="video-modal-frame" />
              ) : (
                <iframe
                  src={parsed.src}
                  title={title || "Project Video Demo"}
                  className="video-modal-frame"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
