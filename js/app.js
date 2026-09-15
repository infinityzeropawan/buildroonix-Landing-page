/**
 * BUILDROONIX — CLIENT APP LOGIC v6
 * Warm editorial design · Admin-controlled all sections
 * Sections: hero, featured work, solutions/capabilities, audience blocks, testimonials, faqs
 */

/* ─── DEFAULT CONTENT ─────────────────────────────────────────── */
const defaultSiteContent = {
  heroEyebrow:        "Full-Stack Creation Studio · Varanasi, India",
  heroTitleLine1:     "We build",
  heroTitleHighlight: "useful things",
  heroDescription:    "From custom 3D printed decor to intelligent software and smart gadgets — Buildroonix handles the full lifecycle: design, code, electronics, and delivery.",
  heroPrimaryText:    "Get a Free Quote",
  heroPrimaryLink:    "#contact",
  heroSecondaryText:  "See Our Work ↓",
  heroSecondaryLink:  "#work",

  manifestoText: "We believe the best technology should feel understandable, useful and slightly ahead of its time. Buildroonix connects design, code, electronics and learning under one roof — from the code that runs it to the physical 3D structure that houses it.",

  contactEmail: "support@buildroonix.com",
  contactPhone: "+91 9580181697",
  contactUpi:   "9580181697@ibl",
  contactGst:   "09HQHPD9487C1ZE",
  footerAddress: "📍 Varanasi, Uttar Pradesh, India · GSTIN Verified · Delivering Nationwide",
  footerTagline: "© 2026 Buildroonix Engineering Studio.\nBuilt for the next version of useful.",

  socials: {
    instagram: "https://instagram.com/buildroonix",
    whatsapp:  "https://wa.me/919580181697?text=Hi%20Buildroonix%2C%20I%20want%20a%20free%20quote",
    twitter:   "https://x.com/buildroonix",
    github:    "https://github.com/buildroonix",
    linkedin:  "https://linkedin.com/company/buildroonix",
    youtube:   "https://youtube.com/@buildroonix"
  },

  // ── FEATURED WORK (Case Studies) ───────────────────────────
  featuredKicker:  "Our Work",
  featuredHeading: "From idea to hands.",
  featuredSubhead: "Real projects with real impact. Here is how we solve challenges for students, decorators, and businesses.",
  featuredWork: [
    {
      tag:        "Student Projects · IIT BHU",
      title:      "Smart Attendance System using IoT",
      story:      "Client: A student from IIT BHU needed a biometrics-enabled IoT attendance prototype with cloud database sync and physical enclosure for their final thesis.",
      outcome:    "Built: Designed custom PCB circuit, programmed ESP32 firmware, and 3D printed a compact desktop unit. Result: Project approved with distinction.",
      ctaText:    "Start Student Project →",
      ctaLink:    "https://projects.buildroonix.com",
      imageUrl:   "assets/student_project.png",
      mediaType:  "image"
    },
    {
      tag:        "3D Decor · Varanasi Client",
      title:      "Custom Lithophane Wall Art & Lamp",
      story:      "Client: A Varanasi home decorator wanted a high-contrast, personalized backlit lithophane lamp to feature ambient photo art in modern living rooms.",
      outcome:    "Built: 3D printed high-resolution cylindrical lithophane lamp from customer photos paired with warm LED wooden base. Result: Featured on Instagram by local influencer.",
      ctaText:    "Order Custom Lithophane →",
      ctaLink:    "https://3d.buildroonix.com",
      imageUrl:   "assets/lamp_product.png",
      mediaType:  "image"
    },
    {
      tag:        "Software · E-Commerce Business",
      title:      "Automated Order-to-Print Workflow",
      story:      "Client: A small e-commerce store struggled with manual order processing, artwork sizing, and inventory dispatch bottlenecks.",
      outcome:    "Built: Developed custom automation scripts, API integration, and web dashboard. Result: Reduced manual errors by 90% and sped up fulfillment.",
      ctaText:    "Automate Your Business →",
      ctaLink:    "https://software.buildroonix.com",
      imageUrl:   "assets/studio_workspace.png",
      mediaType:  "image"
    }
  ],

  // ── AUDIENCE BLOCKS ─────────────────────────────────────────
  audienceKicker:  "Who We Serve",
  audienceHeading: "Three audiences.\nOne creation firm.",
  audienceBlocks: [
    {
      tag:       "Custom 3D Decor",
      title:     "Turn memories into light.",
      desc:      "Custom photo lithophanes, lamps, and home decor — printed in premium materials, shipped across India.",
      ctaText:   "Shop Custom 3D Decor →",
      ctaLink:   "https://3d.buildroonix.com",
      imageUrl:  "assets/lamp_product.png",
      id:        "decor"
    },
    {
      tag:       "Student Projects",
      title:     "From breadboard to working project.",
      desc:      "Final-year projects, mini-projects, documentation, and viva prep — built with real-world skills.",
      ctaText:   "Start Your Project →",
      ctaLink:   "https://projects.buildroonix.com",
      imageUrl:  "assets/student_project.png",
      id:        "students"
    },
    {
      tag:       "Business Owners",
      title:     "Automate your business operations.",
      desc:      "APIs, automation tools, IoT systems, and custom web apps that scale with your team.",
      ctaText:   "Request Consultation →",
      ctaLink:   "https://software.buildroonix.com",
      imageUrl:  "assets/studio_workspace.png",
      id:        "business"
    }
  ],

  // ── TESTIMONIALS ─────────────────────────────────────────────
  testimonialsKicker:  "What People Say",
  testimonialsHeading: "Real results.\nReal people.",
  testimonials: [
    {
      quote:    "The lithophane lamp arrived exactly as I imagined. The detail in the photo lithophane when lit up is stunning. Delivered safely to Varanasi.",
      name:     "Priya Sharma",
      role:     "Home Decor Client, Varanasi",
      avatar:   "",
      stars:    5
    },
    {
      quote:    "Buildroonix delivered my final year IoT project on time with full circuit diagrams, working code, and complete documentation. Cleared viva smoothly!",
      name:     "Rahul Verma",
      role:     "Engineering Student, IIT BHU",
      avatar:   "",
      stars:    5
    },
    {
      quote:    "The gym & business management software reduced our administrative work by 80%. Automated member billing and attendance tracking just work flawlessly.",
      name:     "Anil Kapoor",
      role:     "Business Owner, UP",
      avatar:   "",
      stars:    5
    }
  ],

  // ── FAQ SECTION ──────────────────────────────────────────────
  faqKicker:  "Got Questions?",
  faqHeading: "Frequently Asked Questions",
  faqSubhead: "Everything you need to know about our custom 3D decor, student projects, and business software.",
  faqs: [
    {
      q: "How long does delivery take for custom 3D decor?",
      a: "We manufacture and assemble custom lithophane lamps within 2–3 business days, and ship via express courier across India (typically delivered in 3–5 days total)."
    },
    {
      q: "What materials do you use for 3D printing?",
      a: "We use eco-friendly, high-precision PLA+ thermoplastic and heat-resistant enclosures paired with long-life warm LED illumination bases."
    },
    {
      q: "Can I send my own photo for a 3D lithophane lamp?",
      a: "Yes! Simply send us any high-resolution portrait or family photo via WhatsApp (+91 9580181697) or our portal. We generate a 3D digital preview before printing."
    },
    {
      q: "Do you offer revisions and viva guidance for student projects?",
      a: "Definitely. Every student project includes complete circuit diagrams, commented source code, printed hardware enclosures, detailed documentation, and 1-on-1 viva prep support."
    },
    {
      q: "How do I request a custom price quote?",
      a: "Click 'Get a Free Quote' anywhere on the page or contact us on WhatsApp (+91 9580181697) directly. We respond with a tailored proposal within 2 hours."
    }
  ],

  // ── CAPABILITIES CARDS ───────────────────────────────────────
  cards: [
    {
      category:    "3D DECOR",
      subdomain:   "3d.buildroonix.com",
      title:       "Custom Lithophanes & 3D Decor",
      description: "Custom photo lithophanes, lamps, and home decor — printed in premium materials, shipped across India.",
      c1: "#68f36b", c2: "#26a9ff", c3: "#ff7212",
      mediaType:   "image",
      mediaUrl:    "assets/lamp_product.png",
      link:        "https://3d.buildroonix.com",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`
    },
    {
      category:    "STUDENTS",
      subdomain:   "projects.buildroonix.com",
      title:       "Engineering & Student Projects",
      description: "Final-year projects, mini-projects, documentation, and viva prep — built with real-world skills.",
      c1: "#ff7212", c2: "#68f36b", c3: "#26a9ff",
      mediaType:   "image",
      mediaUrl:    "assets/student_project.png",
      link:        "https://projects.buildroonix.com",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 12h8M12 8v8"/></svg>`
    },
    {
      category:    "BUSINESS SOFTWARE",
      subdomain:   "software.buildroonix.com",
      title:       "Business Automation & Custom Apps",
      description: "APIs, automation tools, IoT systems, and custom web apps that scale with your team.",
      c1: "#26a9ff", c2: "#68f36b", c3: "#ff7212",
      mediaType:   "image",
      mediaUrl:    "assets/studio_workspace.png",
      link:        "https://software.buildroonix.com",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
    },
    {
      category:    "GYM & PG TECH",
      subdomain:   "software.buildroonix.com",
      title:       "Gym & PG Management Platforms",
      description: "Automated member billing, attendance tracking, and hostel tenant management software built for growth.",
      c1: "#ff7212", c2: "#26a9ff", c3: "#68f36b",
      mediaType:   "image",
      mediaUrl:    "assets/software_preview.png",
      link:        "https://software.buildroonix.com",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6.5 6.5h11M6.5 17.5h11M4 9v6M20 9v6M8 4v16M16 4v16"/></svg>`
    }
  ]
};

/* ─── LOAD / VERSION GUARD ────────────────────────────────────── */
const DATA_VERSION = "v6-content-complete";
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
  if (!content.featuredWork || content.featuredWork.length === 0) content.featuredWork = defaultSiteContent.featuredWork;
  if (!content.audienceBlocks || content.audienceBlocks.length === 0) content.audienceBlocks = defaultSiteContent.audienceBlocks;
  if (!content.testimonials || content.testimonials.length === 0) content.testimonials = defaultSiteContent.testimonials;
  if (!content.faqs || content.faqs.length === 0) content.faqs = defaultSiteContent.faqs;
} catch (e) {
  content = defaultSiteContent;
}

/* ─── HELPERS ─────────────────────────────────────────────────── */
function setEl(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}
function setHref(id, href) {
  const el = document.getElementById(id);
  if (el && href) el.href = href;
}
function hexAlpha(hex, a) {
  hex = hex.replace('#','');
  if (hex.length === 3) hex = hex.split('').map(c=>c+c).join('');
  const r = parseInt(hex.slice(0,2),16);
  const g = parseInt(hex.slice(2,4),16);
  const b = parseInt(hex.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ─── RENDER PAGE ─────────────────────────────────────────────── */
function renderPage() {
  // Hero
  setEl("heroEyebrow",        content.heroEyebrow       || defaultSiteContent.heroEyebrow);
  setEl("heroTitleLine1",     content.heroTitleLine1     || defaultSiteContent.heroTitleLine1);
  setEl("heroTitleHighlight", content.heroTitleHighlight || defaultSiteContent.heroTitleHighlight);
  setEl("heroDescription",    content.heroDescription    || defaultSiteContent.heroDescription);

  const pb = document.getElementById("heroPrimaryBtn");
  if (pb) { pb.textContent = content.heroPrimaryText || "Get a Free Quote"; pb.href = content.heroPrimaryLink || "#contact"; }
  const sb = document.getElementById("heroSecondaryBtn");
  if (sb) { sb.textContent = content.heroSecondaryText || "See Our Work ↓"; sb.href = content.heroSecondaryLink || "#work"; }

  // Manifesto
  setEl("manifestoText", content.manifestoText);

  // Contact
  const emailEl = document.getElementById("footerEmail");
  if (emailEl) { emailEl.textContent = content.contactEmail; emailEl.href = `mailto:${content.contactEmail}`; }
  const phoneEl = document.getElementById("footerPhone");
  if (phoneEl) { phoneEl.textContent = content.contactPhone; phoneEl.href = `tel:${(content.contactPhone||'').replace(/\s+/g,'')}`; }
  setEl("footerUpi", content.contactUpi);
  setEl("footerGst", content.contactGst);
  setEl("footerAddress", content.footerAddress || "📍 Varanasi, Uttar Pradesh, India · GSTIN Verified · Delivering Nationwide");
  if (content.footerTagline) {
    const ftEl = document.getElementById("footerTagline");
    if (ftEl) ftEl.innerHTML = content.footerTagline.replace(/\n/g, '<br/>');
  }

  // Socials
  const s = content.socials || defaultSiteContent.socials;
  setHref("socialInsta",    s.instagram);
  setHref("socialWhatsapp", s.whatsapp);
  setHref("socialTwitter",  s.twitter);
  setHref("socialGithub",   s.github);
  setHref("socialLinkedin", s.linkedin);
  setHref("socialYoutube",  s.youtube);

  // Audience section headings
  setEl("audienceKicker",  content.audienceKicker  || defaultSiteContent.audienceKicker);
  setEl("audienceHeading", content.audienceHeading ? content.audienceHeading.replace(/\n/g,' ') : "Three audiences. One creation firm.");

  // Testimonials section headings
  setEl("testimonialsKicker",  content.testimonialsKicker  || defaultSiteContent.testimonialsKicker);
  setEl("testimonialsHeading", content.testimonialsHeading ? content.testimonialsHeading.replace(/\n/g,' ') : "Real results. Real people.");

  // Featured work headings
  setEl("featuredKicker",  content.featuredKicker  || "Our Work");
  setEl("featuredHeading", content.featuredHeading || "From idea to hands.");
  setEl("featuredSubhead", content.featuredSubhead || "Real projects with real impact. Here is how we solve challenges for students, decorators, and businesses.");

  // FAQ headings
  setEl("faqKicker",  content.faqKicker  || "Got Questions?");
  setEl("faqHeading", content.faqHeading || "Frequently Asked Questions");
  setEl("faqSubhead", content.faqSubhead || "Everything you need to know about our custom 3D decor, student projects, and business software.");

  renderFeaturedWork();
  renderAudienceBlocks();
  renderTestimonials();
  renderFaqs();
  renderCards();
}

/* ─── RENDER FEATURED WORK ────────────────────────────────────── */
function renderFeaturedWork() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  const works = content.featuredWork || defaultSiteContent.featuredWork;

  grid.innerHTML = works.map((w, i) => {
    const media = w.mediaType === "video"
      ? `<video src="${w.imageUrl}" autoplay muted loop playsinline></video>`
      : `<img src="${w.imageUrl}" alt="${w.title}" loading="lazy" />`;

    return `
      <a class="case-card reveal-card" href="${w.ctaLink || '#'}" target="_blank" rel="noopener noreferrer"
         style="animation-delay:${i * 0.12}s">
        <div class="case-card-img">${media}</div>
        <div class="case-card-body">
          <span class="case-tag">${w.tag}</span>
          <h3>${w.title}</h3>
          <p class="case-story">${w.story}</p>
          <p class="case-outcome">Outcome: ${w.outcome}</p>
          <span class="case-link">${w.ctaText} →</span>
        </div>
      </a>
    `;
  }).join('');

  initRevealCards(".case-card");
}

/* ─── RENDER AUDIENCE BLOCKS ──────────────────────────────────── */
function renderAudienceBlocks() {
  const grid = document.getElementById("audienceGrid");
  if (!grid) return;
  const blocks = content.audienceBlocks || defaultSiteContent.audienceBlocks;

  grid.innerHTML = blocks.map((b, i) => `
    <div class="audience-card reveal-card" id="${b.id || ''}" style="animation-delay:${i * 0.15}s">
      <div class="audience-card-img">
        <img src="${b.imageUrl}" alt="${b.title}" loading="lazy" />
      </div>
      <div class="audience-card-body">
        <span class="audience-tag">${b.tag}</span>
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
        <a href="${b.ctaLink}" target="_blank" rel="noopener" class="audience-cta">${b.ctaText}</a>
      </div>
    </div>
  `).join('');

  initRevealCards(".audience-card");
}

/* ─── RENDER TESTIMONIALS ─────────────────────────────────────── */
function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid) return;
  const testimonials = content.testimonials || defaultSiteContent.testimonials;

  grid.innerHTML = testimonials.map((t, i) => {
    const stars = '★'.repeat(t.stars || 5);
    const avatarContent = t.avatar
      ? `<img src="${t.avatar}" alt="${t.name}" />`
      : `<span>${(t.name || 'A').charAt(0)}</span>`;

    return `
      <div class="testimonial-card reveal-card" style="animation-delay:${i * 0.12}s">
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-quote">"${t.quote}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${avatarContent}</div>
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-role">${t.role}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initRevealCards(".testimonial-card");
}

/* ─── RENDER FAQS ─────────────────────────────────────────────── */
function renderFaqs() {
  const grid = document.getElementById("faqGrid");
  if (!grid) return;
  const faqs = content.faqs || defaultSiteContent.faqs;

  grid.innerHTML = faqs.map((f, i) => `
    <div class="faq-item reveal-card" style="animation-delay:${i * 0.1}s">
      <h3 class="faq-q">${f.q}</h3>
      <p class="faq-a">${f.a}</p>
    </div>
  `).join('');

  initRevealCards(".faq-item");
}

/* ─── RENDER CARDS (Capabilities) ────────────────────────────── */
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
      <a class="sleek-card reveal-card" href="${card.link}" target="_blank" rel="noopener noreferrer"
         style="--card-c1:${c1}; --card-c2:${c2}; --card-c3:${c3}; animation-delay:${i * 0.1}s">
        <!-- Animated gradient border SVG -->
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
            fill="none" stroke="url(#${gid})" stroke-width="2.5"
            stroke-dasharray="1400" stroke-dashoffset="1400"
            filter="url(#${fid})" />
        </svg>

        <!-- LED corner dots -->
        <span style="position:absolute;top:14px;left:14px;width:7px;height:7px;border-radius:50%;background:${c1};opacity:0.8;animation:blink1 1.8s infinite;" aria-hidden="true"></span>
        <span style="position:absolute;bottom:14px;right:14px;width:7px;height:7px;border-radius:50%;background:${c3};opacity:0.6;animation:blink3 2.4s infinite;" aria-hidden="true"></span>

        <div class="card-header-row">
          <span class="card-cat-tag" style="color:${c2}; border-color:${hexAlpha(c2,0.3)}; background:${hexAlpha(c2,0.06)};">${card.category}</span>
          <div class="card-icon-wrap" style="color:${c1}; border-color:${hexAlpha(c1,0.25)};">${icon}</div>
        </div>

        <div class="card-img-wrap">${media}</div>

        <h3 class="card-title">${card.title}</h3>
        <p class="card-desc">${card.description}</p>

        <div class="card-footer-row">
          <span>${card.subdomain}</span>
          <span class="card-arrow" style="color:${c2};">↗</span>
        </div>
      </a>
    `;
  }).join('');

  initRevealCards(".sleek-card");
  initTouchGlow();
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
function initRevealCards(selector) {
  const cards = document.querySelectorAll(selector);
  if (!cards.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 90);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
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
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/* ─── TOUCH GLOW ──────────────────────────────────────────────── */
function initTouchGlow() {
  document.querySelectorAll(".sleek-card").forEach(card => {
    card.addEventListener("touchstart", () => {
      card.classList.add("active-touch");
    }, { passive: true });
    card.addEventListener("touchend", () => {
      setTimeout(() => card.classList.remove("active-touch"), 1800);
    }, { passive: true });
  });
}

/* ─── STICKY HEADER SHADOW ────────────────────────────────────── */
function initStickyHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const obs = new IntersectionObserver(
    ([entry]) => header.classList.toggle("scrolled", !entry.isIntersecting),
    { rootMargin: "-1px 0px 0px 0px", threshold: 0 }
  );
  const sentinel = document.createElement("div");
  sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;";
  document.body.prepend(sentinel);
  obs.observe(sentinel);
}

/* ─── INIT ────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderPage();
  initRevealAll();
  initStickyHeader();
});
