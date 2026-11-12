"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useQuoteModal } from "./QuoteContext";

export function QuoteTriggerButton({
  label = "Request a Quote",
  preselect = "",
  className = "btn-primary",
  showSparkle = false,
  showArrow = false,
  style,
}) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <motion.button
      type="button"
      className={`quote-trigger-btn ${className}`}
      onClick={() => openQuoteModal(preselect)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      style={style}
    >
      <span className="btn-shimmer" aria-hidden="true" />
      <span className="btn-content">
        {showSparkle && <Sparkles size={14} className="btn-icon" />}
        <span>{label}</span>
        {showArrow && <ArrowRight size={14} className="btn-icon" />}
      </span>
    </motion.button>
  );
}
