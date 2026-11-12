"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, MessageSquare, Package, Sparkles, X } from "lucide-react";
import { BUILDROONIX_BRAND, MEGA_MENU_GROUPS } from "@/lib/brand";
import { useQuoteModal } from "./QuoteContext";

const NAV_ITEMS = [
  { id: "software", label: "Software Division", href: "/services/software-development" },
  { id: "portfolio", label: "Portfolio", href: "/portfolio" },
  { id: "about", label: "About & Founder", href: "/about" },
  { id: "process", label: "Process", href: "/#process" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export function SiteHeader({ activeSection = "home" }) {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const megaRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setDrawerOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleOpenMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const handleCloseMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const resolvedActive = (() => {
    if (megaOpen) return "services";
    if (pathname?.startsWith("/portfolio")) return "portfolio";
    if (pathname === "/services/software-development") return "software";
    if (pathname?.startsWith("/services/")) return "services";
    return activeSection;
  })();

  const pillTarget = hoveredNav || resolvedActive;

  return (
    <>
      <div className="enterprise-topbar">
        <div className="enterprise-topbar-inner">
          <div className="etb-left">
            <span className="etb-dot" />
            <span>{BUILDROONIX_BRAND.msme}</span>
            <span className="etb-sep">·</span>
            <span>GSTIN: {BUILDROONIX_BRAND.gstin}</span>
            <span className="etb-sep etb-hide-sm">·</span>
            <span className="etb-hide-sm">Varanasi, UP · Pan-India &amp; Global Remote Engineering</span>
          </div>
          <div className="etb-right">
            <a href={`mailto:${BUILDROONIX_BRAND.email}`}>{BUILDROONIX_BRAND.email}</a>
            <span className="etb-sep">·</span>
            <a href={`tel:${BUILDROONIX_BRAND.phoneRaw}`}>{BUILDROONIX_BRAND.phone}</a>
          </div>
        </div>
      </div>

      <div className={`floating-header-shell ${scrolled ? "is-condensed" : ""}`} id="siteHeader">
        <header className={`site-header-pill ${scrolled ? "scrolled" : ""}`}>
          <div className="header-pill-inner">
            <Link className="brand-mark" href="/">
              <img src={BUILDROONIX_BRAND.logoPath} alt="Buildroonix Logo" className="logo-img" />
              <div className="brand-text">
                <span className="brand-main">{BUILDROONIX_BRAND.name}</span>
                <span className="brand-sub">{BUILDROONIX_BRAND.subName}</span>
              </div>
            </Link>

            <LayoutGroup id="header-nav-pills">
              <nav
                className="desk-nav"
                aria-label="Main navigation"
                onMouseLeave={() => setHoveredNav(null)}
              >
                <div
                  className={`nav-mega-wrap ${megaOpen ? "open" : ""}`}
                  ref={megaRef}
                  onMouseEnter={() => {
                    handleOpenMega();
                    setHoveredNav("services");
                  }}
                  onMouseLeave={handleCloseMega}
                >
                  <button
                    type="button"
                    className={`nav-pill-item nav-trigger ${resolvedActive === "services" ? "active" : ""}`}
                    aria-expanded={megaOpen}
                    aria-controls="servicesMegaMenu"
                    onClick={() => setMegaOpen((v) => !v)}
                  >
                    {pillTarget === "services" && (
                      <motion.span
                        layoutId="activeNav"
                        className="nav-active-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="nav-pill-text">
                      Services
                      <ChevronDown size={14} className={`nav-chevron ${megaOpen ? "rotated" : ""}`} />
                    </span>
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        className="mega-menu open"
                        id="servicesMegaMenu"
                        role="region"
                        aria-label="Services directory"
                        initial={{ opacity: 0, y: -10, scale: 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.985 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="mega-top-bar">
                          <div>
                            <span className="mega-eyebrow">INTEGRATED TECHNOLOGY DIVISIONS</span>
                            <strong>
                              Software Engineering · IoT &amp; Embedded · Hardware &amp; PCB · Digital Manufacturing
                            </strong>
                          </div>
                          <Link
                            href="/services/software-development"
                            className="mega-top-cta"
                            onClick={() => setMegaOpen(false)}
                          >
                            Software Engineering Hub →
                          </Link>
                        </div>

                        <div className="mega-grid">
                          {MEGA_MENU_GROUPS.map((group) => (
                            <div
                              key={group.id}
                              className={`mega-col ${group.columns === 2 ? "mega-col-wide" : ""}`}
                            >
                              <div className="mega-col-head">
                                <span
                                  className="mega-dot"
                                  style={{ background: group.accent, boxShadow: `0 0 10px ${group.accent}` }}
                                />
                                <span>{group.title}</span>
                              </div>
                              <ul className={`mega-list ${group.columns === 2 ? "mega-list-2col" : ""}`}>
                                {group.items.map((item) => (
                                  <li key={item.href}>
                                    {item.href.startsWith("http") ? (
                                      <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMegaOpen(false)}
                                      >
                                        <span>{item.label}</span>
                                        {item.tag && <span className="mega-pill">{item.tag}</span>}
                                      </a>
                                    ) : (
                                      <Link href={item.href} onClick={() => setMegaOpen(false)}>
                                        <span>{item.label}</span>
                                        {item.tag && <span className="mega-pill">{item.tag}</span>}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                              {group.overviewLink.startsWith("http") ? (
                                <a
                                  href={group.overviewLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mega-overview-link"
                                  onClick={() => setMegaOpen(false)}
                                >
                                  {group.overviewLabel}
                                </a>
                              ) : (
                                <Link
                                  href={group.overviewLink}
                                  className="mega-overview-link"
                                  onClick={() => setMegaOpen(false)}
                                >
                                  {group.overviewLabel}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {NAV_ITEMS.map((item) => {
                  const isActive = resolvedActive === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`nav-pill-item ${isActive ? "active" : ""}`}
                      onMouseEnter={() => setHoveredNav(item.id)}
                    >
                      {pillTarget === item.id && (
                        <motion.span
                          layoutId="activeNav"
                          className="nav-active-pill"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="nav-pill-text">{item.label}</span>
                    </Link>
                  );
                })}

                <a
                  href={BUILDROONIX_BRAND.store3dUrl || "https://3d.buildroonix.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-pill-item nav-pill-3d"
                  title="Order 3D Print Products & Custom 3D Designs at 3d.buildroonix.com"
                >
                  <Package size={13} style={{ color: "var(--cyan)" }} />
                  <span className="nav-pill-text">3D Store ↗</span>
                </a>
              </nav>
            </LayoutGroup>

            <div className="header-actions">
              <a
                href={BUILDROONIX_BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="header-wa-btn"
                title="WhatsApp Us"
              >
                <MessageSquare size={13} />
                <span>WhatsApp</span>
              </a>

              <motion.button
                type="button"
                className="header-cta"
                onClick={() => openQuoteModal()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Sparkles size={13} />
                <span>Request a Quote</span>
              </motion.button>

              <button
                type="button"
                className="hamburger-btn"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                aria-expanded={drawerOpen}
              >
                <Menu size={19} />
              </button>
            </div>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="mobile-drawer open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setDrawerOpen(false);
            }}
          >
            <motion.div
              className="drawer-inner"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 330, damping: 32 }}
            >
              <div className="drawer-head">
                <Link className="brand-mark" href="/" onClick={() => setDrawerOpen(false)}>
                  <img src={BUILDROONIX_BRAND.logoPath} alt="Buildroonix Logo" className="logo-img" />
                  <div className="brand-text">
                    <span className="brand-main">{BUILDROONIX_BRAND.name}</span>
                    <span className="brand-sub">{BUILDROONIX_BRAND.subName}</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="drawer-close"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="drawer-links">
                <Link href="/" onClick={() => setDrawerOpen(false)}>
                  Home
                </Link>
                <Link href="/services/software-development" onClick={() => setDrawerOpen(false)}>
                  Software Development Overview
                </Link>
                <div className="drawer-group-label">Service Divisions</div>
                {MEGA_MENU_GROUPS.map((group) => (
                  <details key={group.id} className="mob-acc">
                    <summary>
                      <span>
                        <i className="mega-dot" style={{ background: group.accent }} />
                        {group.title}
                      </span>
                      <span className="mob-acc-caret">+</span>
                    </summary>
                    <div className="mob-acc-body">
                      {group.overviewLink.startsWith("http") ? (
                        <a
                          href={group.overviewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mob-acc-overview"
                          onClick={() => setDrawerOpen(false)}
                        >
                          {group.overviewLabel}
                        </a>
                      ) : (
                        <Link
                          href={group.overviewLink}
                          className="mob-acc-overview"
                          onClick={() => setDrawerOpen(false)}
                        >
                          {group.overviewLabel}
                        </Link>
                      )}
                      {group.items.map((item) => (
                        item.href.startsWith("http") ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setDrawerOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link key={item.href} href={item.href} onClick={() => setDrawerOpen(false)}>
                            {item.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </details>
                ))}
                <Link href="/portfolio" onClick={() => setDrawerOpen(false)}>
                  Software &amp; Tech Portfolio
                </Link>
                <Link href="/about" onClick={() => setDrawerOpen(false)}>
                  About &amp; Leadership (Founder&apos;s Desk)
                </Link>
                <Link href="/#process" onClick={() => setDrawerOpen(false)}>
                  Development Process
                </Link>
                <Link href="/#tech-stack" onClick={() => setDrawerOpen(false)}>
                  Technology Stack
                </Link>
                <Link href="/#contact" onClick={() => setDrawerOpen(false)}>
                  Contact &amp; Inquiry
                </Link>
                <a
                  href={BUILDROONIX_BRAND.store3dUrl || "https://3d.buildroonix.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-nav-3d"
                  onClick={() => setDrawerOpen(false)}
                >
                  <Package size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "8px", color: "var(--cyan)" }} />
                  3D Store (3d.buildroonix.com) ↗
                </a>
              </div>

              <div className="drawer-actions">
                <button
                  type="button"
                  className="btn-primary btn-block"
                  onClick={() => {
                    setDrawerOpen(false);
                    openQuoteModal();
                  }}
                >
                  Request a Quote
                </button>
                <a
                  href={BUILDROONIX_BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-light btn-block"
                >
                  WhatsApp Us <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
