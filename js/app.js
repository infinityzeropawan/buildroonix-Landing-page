/**
 * BUILDROONIX — CLIENT APP LOGIC v4
 * Light design, animationcode gradient border on cards,
 * admin-controlled content, scroll reveal, touch glow.
 */

/* ─── DEFAULT CONTENT ─────────────────────────────────────────── */
const defaultSiteContent = {
  heroEyebrow:        "Engineering the Useful Future",
  heroTitleLine1:     "Build ideas",
  heroTitleHighlight: "into reality.",
  heroDescription:    "Buildroonix creates physical 3D products, intelligent software, practical technical education, and experimental hardware for people who refuse to build ordinary things.",
  heroPrimaryText:    "Explore Portals",
  heroPrimaryLink:    "#solutions",
  heroSecondaryText:  "Start a project →",
  heroSecondaryLink:  "#contact",

  manifestoText: "We believe the best technology should feel understandable, useful and slightly ahead of its time. Buildroonix connects design, code, electronics and learning under one roof.",

  contactEmail: "support@buildroonix.com",
  contactPhone: "+91 9580181697",
  contactUpi:   "9580181697@ibl",
  contactGst:   "09HQHPD9487C1ZE",

  socials: {
    instagram: "https://instagram.com/buildroonix",
    twitter:   "https://x.com/buildroonix",
    github:    "https://github.com/buildroonix",
    linkedin:  "https://linkedin.com/company/buildroonix",
    youtube:   "https://youtube.com/@buildroonix",
    discord:   "https://discord.gg/buildroonix"
  },

  cards: [
    {
      category:    "3D DESIGN",
      subdomain:   "3d.buildroonix.com",
      title:       "3D CAD & Prototyping",
      description: "Parametric 3D design, interactive CAD models, physical product engineering, and 3D printing for makers and manufacturers.",
      c1: "#68f36b", c2: "#26a9ff", c3: "#ff7212",
      mediaType:   "image",
      mediaUrl:    "assets/3d_studio_preview.png",
      link:        "https://3d.buildroonix.com",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`
    },
    {
      category:    "SOFTWARE",
      subdomain:   "software.buildroonix.com",
      title:       "Software & App Suite",
      description: "Intelligent tools, automated cloud services, developer suites, and streamlined web platforms that just work.",
      c1: "#26a9ff", c2: "#68f36b", c3: "#ff7212",
      mediaType:   "image",
      mediaUrl:    "assets/software_preview.png",
      link:        "https://software.buildroonix.com",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
    },
    {
      category:    "HARDWARE",
      subdomain:   "projects.buildroonix.com",
      title:       "R&D & Smart Gadgets",
      description: "Experimental hardware, IoT microcontrollers, and smart gadgets connecting the physical and digital worlds.",
      c1: "#ff7212", c2: "#68f36b", c3: "#26a9ff",
      mediaType:   "image",
      mediaUrl:    "assets/projects_preview.png",
      link:        "https://projects.buildroonix.com",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 12h8M12 8v8"/></svg>`
    },
    {
      category:    "SOFTWARE",
      subdomain:   "software.buildroonix.com",
      title:       "Gym Management",
      description: "Member tracking, automated class scheduling, membership billing, attendance and growth analytics for fitness centers.",
      c1: "#ff7212", c2: "#26a9ff", c3: "#68f36b",
      mediaType:   "image",
      mediaUrl:    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      link:        "https://software.buildroonix.com",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6.5 6.5h11M6.5 17.5h11M4 9v6M20 9v6M8 4v16M16 4v16"/></svg>`
    },
    {
      category:    "SOFTWARE",
      subdomain:   "software.buildroonix.com",
      title:       "PG & Hostel Platform",
      description: "Automated room allocation, visitor management, rent collection and maintenance tracking for residential properties.",
      c1: "#68f36b", c2: "#ff7212", c3: "#26a9ff",
      mediaType:   "image",
      mediaUrl:    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      link:        "https://software.buildroonix.com",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1"/></svg>`
    }
  ]
};

/* ─── LOAD / VERSION GUARD ────────────────────────────────────── */
const DATA_VERSION = "v4-light";
let content;
try {
  const storedVersion = localStorage.getItem("buildroonixVersion");
  if (storedVersion !== DATA_VERSION) {
    localStorage.removeItem("buildroonixContent");
    localStorage.setItem("buildroonixVersion", DATA_VERSION);
  }
  const raw = localStorage.getItem("buildroonixContent");
  content = raw ? JSON.parse(raw) : defaultSiteContent;
  if (!content.cards || !Array.isArray(content.cards)) content = defaultSiteContent;
  // Sanitize leaked admin text
  if (content.heroDescription) {
    content.heroDescription = content.heroDescription.replace(/admin123|admin@buildroonix\.com/gi, '').trim();
  }
} catch (e) {
  content = defaultSiteContent;
}

/* ─── RENDER PAGE ─────────────────────────────────────────────── */
function renderPage() {
  setEl("heroEyebrow",        content.heroEyebrow);
  setEl("heroTitleLine1",     content.heroTitleLine1);
  setEl("heroTitleHighlight", content.heroTitleHighlight);
  setEl("heroDescription",    content.heroDescription);

  const pb = document.getElementById("heroPrimaryBtn");
  if (pb) { pb.textContent = content.heroPrimaryText || "Explore Portals"; pb.href = content.heroPrimaryLink || "#solutions"; }
  const sb = document.getElementById("heroSecondaryBtn");
  if (sb) { sb.textContent = content.heroSecondaryText || "Start a project →"; sb.href = content.heroSecondaryLink || "#contact"; }

  setEl("manifestoText", content.manifestoText);

  const emailEl = document.getElementById("footerEmail");
  if (emailEl) { emailEl.textContent = content.contactEmail; emailEl.href = `mailto:${content.contactEmail}`; }
  const phoneEl = document.getElementById("footerPhone");
  if (phoneEl) { phoneEl.textContent = content.contactPhone; phoneEl.href = `tel:${(content.contactPhone||'').replace(/\s+/g,'')}`; }
  setEl("footerUpi", content.contactUpi);
  setEl("footerGst", content.contactGst);

  const s = content.socials || defaultSiteContent.socials;
  setHref("socialInsta",    s.instagram);
  setHref("socialTwitter",  s.twitter);
  setHref("socialGithub",   s.github);
  setHref("socialLinkedin", s.linkedin);
  setHref("socialYoutube",  s.youtube);
  setHref("socialDiscord",  s.discord);

  renderCards();
}

/* ─── RENDER CARDS WITH ANIMATIONCODE BORDER ──────────────────── */
function renderCards() {
  const grid = document.getElementById("solutionGrid");
  if (!grid || !content.cards) return;

  grid.innerHTML = content.cards.map((card, i) => {
    const c1 = card.c1 || "#68f36b";
    const c2 = card.c2 || "#26a9ff";
    const c3 = card.c3 || "#ff7212";
    const gid = `cg_${i}`;
    const fid = `cf_${i}`;

    const media = card.mediaType === "video"
      ? `<video src="${card.mediaUrl}" autoplay muted loop playsinline></video>`
      : `<img src="${card.mediaUrl}" alt="${card.title}" loading="lazy" />`;

    const icon = card.iconSvg || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>`;

    return `
      <a
        class="sleek-card reveal-card"
        href="${card.link}"
        target="_blank"
        rel="noopener noreferrer"
        style="--card-c1:${c1}; --card-c2:${c2}; --card-c3:${c3}; --card-glow:${hexAlpha(c2,0.15)};"
      >
        <!-- Animated gradient border SVG (animationcode stroke-dashoffset technique) -->
        <svg class="card-border-svg" viewBox="0 0 400 340" fill="none"
             xmlns="http://www.w3.org/2000/svg"
             style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible;">
          <defs>
            <linearGradient id="${gid}" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%"   stop-color="${c1}"/>
              <stop offset="50%"  stop-color="${c2}"/>
              <stop offset="100%" stop-color="${c3}"/>
            </linearGradient>
            <filter id="${fid}" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="4" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <rect class="card-border-rect" x="3" y="3" width="394" height="334" rx="16"
            fill="none"
            stroke="url(#${gid})"
            stroke-width="2.5"
            stroke-dasharray="1400"
            stroke-dashoffset="1400"
            filter="url(#${fid})"
          />
        </svg>

        <!-- LED corner dots (like animationcode) -->
        <span style="position:absolute;top:14px;left:14px;width:7px;height:7px;border-radius:50%;background:${c1};opacity:0.8;animation:blink1 1.8s infinite;" aria-hidden="true"></span>
        <span style="position:absolute;bottom:14px;right:14px;width:7px;height:7px;border-radius:50%;background:${c3};opacity:0.6;animation:blink3 2.4s infinite;" aria-hidden="true"></span>

        <div class="card-header-row">
          <span class="card-cat-tag" style="color:${c2}; border-color:${hexAlpha(c2,0.3)}; background:${hexAlpha(c2,0.06)};">${card.category}</span>
          <div class="card-icon-wrap" style="color:${c1}; border-color:${hexAlpha(c1,0.25)};">
            ${icon}
          </div>
        </div>

        <div class="card-img-wrap">
          ${media}
        </div>

        <h3 class="card-title">${card.title}</h3>
        <p class="card-desc">${card.description}</p>

        <div class="card-footer-row">
          <span>${card.subdomain}</span>
          <span class="card-arrow" style="color:${c2};">↗</span>
        </div>
      </a>
    `;
  }).join("");

  // Inject @keyframes for card border animation if not already present
  if (!document.getElementById("cardAnimStyle")) {
    const sty = document.createElement("style");
    sty.id = "cardAnimStyle";
    sty.textContent = `
      .sleek-card:hover .card-border-rect,
      .sleek-card.active-touch .card-border-rect {
        animation: cardDash 1.8s ease forwards;
      }
      @keyframes cardDash {
        from { stroke-dashoffset: 1400; }
        to   { stroke-dashoffset: 0; }
      }
      @keyframes blink1 { 0%,100%{opacity:0.8;} 50%{opacity:0.15;} }
      @keyframes blink3 { 0%,100%{opacity:0.6;} 33%{opacity:1;} 66%{opacity:0.1;} }
    `;
    document.head.appendChild(sty);
  }

  initScrollReveal();
  initTouchGlow();
}

/* ─── HERO MEDIA SWITCHER ──────────────────────────────────────── */
function switchMedia(type) {
  const svgFrame   = document.getElementById("heroSvgFrame");
  const videoPanel = document.getElementById("heroVideoPanel");
  const tabSvg     = document.getElementById("tabSvg");
  const tabVid     = document.getElementById("tabVid");
  const badge      = document.getElementById("showcaseBadgeText");

  if (type === "svg") {
    if (svgFrame)   svgFrame.style.display   = "flex";
    if (videoPanel) videoPanel.classList.remove("active");
    if (tabSvg)     tabSvg.classList.add("active");
    if (tabVid)     tabVid.classList.remove("active");
    if (badge)      badge.textContent = "Buildroonix · Brand Identity";
  } else {
    if (svgFrame)   svgFrame.style.display   = "none";
    if (videoPanel) videoPanel.classList.add("active");
    if (tabVid)     tabVid.classList.add("active");
    if (tabSvg)     tabSvg.classList.remove("active");
    if (badge)      badge.textContent = "Buildroonix · Motion Video";
  }
}

/* ─── MOBILE DRAWER ───────────────────────────────────────────── */
function toggleDrawer() {
  const drawer = document.getElementById("mobileDrawer");
  const btn    = document.getElementById("hamburgerBtn");
  if (!drawer) return;
  const isOpen = drawer.classList.toggle("open");
  if (btn) btn.setAttribute("aria-expanded", String(isOpen));
  drawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
  document.body.style.overflow = isOpen ? "hidden" : "";
}

/* ─── SCROLL REVEAL ───────────────────────────────────────────── */
function initScrollReveal() {
  const cards = document.querySelectorAll(".reveal-card");
  if (!cards.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 110);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => obs.observe(c));
}

function initRevealAll() {
  const els = document.querySelectorAll(".reveal-up, .reveal-fade");
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ─── TOUCH GLOW ──────────────────────────────────────────────── */
function initTouchGlow() {
  const cards = document.querySelectorAll(".sleek-card");
  cards.forEach(card => {
    card.addEventListener("touchstart", () => {
      cards.forEach(c => c.classList.remove("active-touch"));
      card.classList.add("active-touch");
    }, { passive: true });
    card.addEventListener("touchend", () => {
      setTimeout(() => card.classList.remove("active-touch"), 800);
    }, { passive: true });
  });
}

/* ─── CURSOR SPOT ─────────────────────────────────────────────── */
document.addEventListener("mousemove", e => {
  const s = document.getElementById("cursorSpot");
  if (s) { s.style.left = e.clientX + "px"; s.style.top = e.clientY + "px"; }
});

/* ─── HEADER SCROLL ───────────────────────────────────────────── */
window.addEventListener("scroll", () => {
  const h = document.getElementById("siteHeader");
  if (h) h.classList.toggle("scrolled", window.scrollY > 8);
}, { passive: true });

/* ─── UTILS ───────────────────────────────────────────────────── */
function setEl(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined && text !== null) el.textContent = text;
}
function setHref(id, href) {
  const el = document.getElementById(id);
  if (el && href) el.href = href;
}
function hexAlpha(hex, a) {
  if (!hex || hex.length < 4) return `rgba(38,169,255,${a})`;
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map(c => c+c).join("") : h;
  const r = parseInt(full.slice(0,2),16);
  const g = parseInt(full.slice(2,4),16);
  const b = parseInt(full.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ─── BOOT ────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderPage();
  initRevealAll();
});
