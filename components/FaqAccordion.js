"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";

export function FaqAccordion({ items = [] }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="faq-accordion-list">
      {items.map((f, i) => {
        const isOpen = openIdx === i;
        return (
          <motion.div
            key={i}
            className={`faq-acc-item ${isOpen ? "open" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.05 }}
          >
            <button
              type="button"
              className="faq-acc-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
            >
              <span className="faq-acc-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="faq-acc-q">{f.q}</span>
              <motion.span
                className="faq-acc-icon"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              >
                <Plus size={18} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="faq-acc-panel-framer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="faq-acc-body">
                    <p>{f.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
