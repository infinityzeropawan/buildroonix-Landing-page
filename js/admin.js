/**
 * BUILDROONIX — ADMIN PANEL JS v5
 * Handles: login, tab routing, repeater CRUD for all sections,
 *          save/load to localStorage, reset, visibility toggles
 */

const ADMIN_PASSWORD = "buildroonix2026";
const DATA_VERSION   = "v6-content-complete";
const STORAGE_KEY    = "buildroonixContent";
const VERSION_KEY    = "buildroonixVersion";

/* ─── DEFAULT (mirrored from app.js) ────────────────────────── */
const defaultSiteContent = {
  heroEyebrow:        "Full-Stack Creation Studio · Varanasi, India",
  heroTitleLine1:     "We build",
  heroTitleHighlight: "useful things",
  heroDescription:    "From custom 3D printed decor to intelligent software and smart gadgets — Buildroonix handles the full lifecycle: design, code, electronics, and delivery.",
  heroPrimaryText:    "Get a Free Quote",
  heroPrimaryLink:    "#contact",
  heroSecondaryText:  "See Our Work ↓",
  heroSecondaryLink:  "#work",
  manifestoText: "We believe the best technology should feel understandable, useful and slightly ahead of its time. Buildroonix connects design, code, electronics and learning under one roof.",
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
  featuredKicker:  "Our Work",
  featuredHeading: "From idea to hands.",
  featuredSubhead: "Real projects with real impact. Here is how we solve challenges for students, decorators, and businesses.",
  featuredWork: [
    {
      tag:      "Student Projects · IIT BHU",
      title:    "Smart Attendance System using IoT",
      story:    "Client: A student from IIT BHU needed a biometrics-enabled IoT attendance prototype with cloud database sync and physical enclosure for their final thesis.",
      outcome:  "Built: Designed custom PCB circuit, programmed ESP32 firmware, and 3D printed a compact desktop unit. Result: Project approved with distinction.",
      ctaText:  "Start Student Project →",
      ctaLink:  "https://projects.buildroonix.com",
      imageUrl: "assets/student_project.png",
      mediaType: "image"
    },
    {
      tag:      "3D Decor · Varanasi Client",
      title:    "Custom Lithophane Wall Art & Lamp",
      story:    "Client: A Varanasi home decorator wanted a high-contrast, personalized backlit lithophane lamp to feature ambient photo art in modern living rooms.",
      outcome:  "Built: 3D printed high-resolution cylindrical lithophane lamp from customer photos paired with warm LED wooden base. Result: Featured on Instagram by local influencer.",
      ctaText:  "Order Custom Lithophane →",
      ctaLink:  "https://3d.buildroonix.com",
      imageUrl: "assets/lamp_product.png",
      mediaType: "image"
    },
    {
      tag:      "Software · E-Commerce Business",
      title:    "Automated Order-to-Print Workflow",
      story:    "Client: A small e-commerce store struggled with manual order processing, artwork sizing, and inventory dispatch bottlenecks.",
      outcome:  "Built: Developed custom automation scripts, API integration, and web dashboard. Result: Reduced manual errors by 90% and sped up fulfillment.",
      ctaText:  "Automate Your Business →",
      ctaLink:  "https://software.buildroonix.com",
      imageUrl: "assets/studio_workspace.png",
      mediaType: "image"
    }
  ],
  audienceKicker:  "Who We Serve",
  audienceHeading: "Three audiences.\nOne creation firm.",
  audienceBlocks: [
    { tag: "Custom 3D Decor", title: "Turn memories into light.", desc: "Custom photo lithophanes, lamps, and home decor — printed in premium materials, shipped across India.", ctaText: "Shop Custom 3D Decor →", ctaLink: "https://3d.buildroonix.com", imageUrl: "assets/lamp_product.png", id: "decor" },
    { tag: "Student Projects", title: "From breadboard to working project.", desc: "Final-year projects, mini-projects, documentation, and viva prep — built with real-world skills.", ctaText: "Start Your Project →", ctaLink: "https://projects.buildroonix.com", imageUrl: "assets/student_project.png", id: "students" },
    { tag: "Business Owners", title: "Automate your business operations.", desc: "APIs, automation tools, IoT systems, and custom web apps that scale with your team.", ctaText: "Request Consultation →", ctaLink: "https://software.buildroonix.com", imageUrl: "assets/studio_workspace.png", id: "business" }
  ],
  testimonialsKicker:  "What People Say",
  testimonialsHeading: "Real results.\nReal people.",
  testimonials: [
    { quote: "The lithophane lamp arrived exactly as I imagined. The detail in the photo lithophane when lit up is stunning. Delivered safely to Varanasi.", name: "Priya Sharma", role: "Home Decor Client, Varanasi", avatar: "", stars: 5 },
    { quote: "Buildroonix delivered my final year IoT project on time with full circuit diagrams, working code, and complete documentation. Cleared viva smoothly!", name: "Rahul Verma", role: "Engineering Student, IIT BHU", avatar: "", stars: 5 },
    { quote: "The gym & business management software reduced our administrative work by 80%. Automated member billing and attendance tracking just work flawlessly.", name: "Anil Kapoor", role: "Business Owner, UP", avatar: "", stars: 5 }
  ],
  faqKicker:  "Got Questions?",
  faqHeading: "Frequently Asked Questions",
  faqSubhead: "Everything you need to know about our custom 3D decor, student projects, and business software.",
  faqs: [
    { q: "How long does delivery take for custom 3D decor?", a: "We manufacture and assemble custom lithophane lamps within 2–3 business days, and ship via express courier across India (typically delivered in 3–5 days total)." },
    { q: "What materials do you use for 3D printing?", a: "We use eco-friendly, high-precision PLA+ thermoplastic and heat-resistant enclosures paired with long-life warm LED illumination bases." },
    { q: "Can I send my own photo for a 3D lithophane lamp?", a: "Yes! Simply send us any high-resolution portrait or family photo via WhatsApp (+91 9580181697) or our portal. We generate a 3D digital preview before printing." },
    { q: "Do you offer revisions and viva guidance for student projects?", a: "Definitely. Every student project includes complete circuit diagrams, commented source code, printed hardware enclosures, detailed documentation, and 1-on-1 viva prep support." },
    { q: "How do I request a custom price quote?", a: "Click 'Get a Free Quote' anywhere on the page or contact us on WhatsApp (+91 9580181697) directly. We respond with a tailored proposal within 2 hours." }
  ],
  sectionVisibility: {
    featured:     true,
    capabilities: true,
    audience:     true,
    testimonials: true,
    faqs:         true,
    vision:       true
  },
  cards: [
    { category: "3D DECOR", subdomain: "3d.buildroonix.com", title: "Custom Lithophanes & 3D Decor", description: "Custom photo lithophanes, lamps, and home decor — printed in premium materials, shipped across India.", c1: "#68f36b", c2: "#26a9ff", c3: "#ff7212", mediaType: "image", mediaUrl: "assets/lamp_product.png", link: "https://3d.buildroonix.com", iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>` },
    { category: "STUDENTS", subdomain: "projects.buildroonix.com", title: "Engineering & Student Projects", description: "Final-year projects, mini-projects, documentation, and viva prep — built with real-world skills.", c1: "#ff7212", c2: "#68f36b", c3: "#26a9ff", mediaType: "image", mediaUrl: "assets/student_project.png", link: "https://projects.buildroonix.com", iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/></svg>` },
    { category: "BUSINESS SOFTWARE", subdomain: "software.buildroonix.com", title: "Business Automation & Custom Apps", description: "APIs, automation tools, IoT systems, and custom web apps that scale with your team.", c1: "#26a9ff", c2: "#68f36b", c3: "#ff7212", mediaType: "image", mediaUrl: "assets/studio_workspace.png", link: "https://software.buildroonix.com", iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
    { category: "GYM & PG TECH", subdomain: "software.buildroonix.com", title: "Gym & PG Management Platforms", description: "Automated member billing, attendance tracking, and hostel tenant management software built for growth.", c1: "#ff7212", c2: "#26a9ff", c3: "#68f36b", mediaType: "image", mediaUrl: "assets/software_preview.png", link: "https://software.buildroonix.com", iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6.5 6.5h11M6.5 17.5h11"/></svg>` }
  ]
};

/* ─── AUTH ────────────────────────────────────────────────────── */
async function doLogin() {
  const pwd = document.getElementById("adminPwd").value;
  
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pwd })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      sessionStorage.setItem("adminAuth", "1");
      sessionStorage.setItem("adminToken", data.token || "bx_admin_token_2026_secured");
      document.getElementById("loginGate").style.display  = "none";
      document.getElementById("adminPanel").style.display = "flex";
      initAdmin();
      return;
    }
  } catch(e) {
    // Fallback if running on static host
    if (pwd === ADMIN_PASSWORD) {
      sessionStorage.setItem("adminAuth", "1");
      sessionStorage.setItem("adminToken", "bx_admin_token_2026_secured");
      document.getElementById("loginGate").style.display  = "none";
      document.getElementById("adminPanel").style.display = "flex";
      initAdmin();
      return;
    }
  }

  const err = document.getElementById("loginErr");
  if (err) { err.style.display = "block"; err.textContent = "❌ Incorrect password. Try again."; }
  setTimeout(() => { if(err) err.style.display = "none"; }, 3000);
}

function doLogout() {
  sessionStorage.removeItem("adminAuth");
  sessionStorage.removeItem("adminToken");
  location.reload();
}

/* ─── LOAD CONTENT ────────────────────────────────────────────── */
let content = Object.assign({}, defaultSiteContent);
async function loadContent() {
  try {
    const res = await fetch("/api/content");
    if (res.ok) {
      const data = await res.json();
      if (data && data.success && data.content && typeof data.content === 'object') {
        content = Object.assign({}, defaultSiteContent, data.content);
        fillAllFields();
        return;
      }
    }
  } catch(e) {
    // Fallback to localStorage
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      content = Object.assign({}, defaultSiteContent, saved);
    }
  } catch(e) {
    content = Object.assign({}, defaultSiteContent);
  }
}

/* ─── SAVE ────────────────────────────────────────────────────── */
async function saveAll() {
  gatherHero();
  gatherFeatured();
  gatherAudience();
  gatherTestimonials();
  gatherFaqs();
  gatherCards();
  gatherContact();
  gatherVisibility();

  // Save to LocalStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  localStorage.setItem(VERSION_KEY, DATA_VERSION);

  // Save to Production Express Server DB
  const token = sessionStorage.getItem("adminToken") || "bx_admin_token_2026_secured";
  try {
    const res = await fetch("/api/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Admin-Token": token
      },
      body: JSON.stringify({ token, content })
    });
    if (res.ok) {
      showToast("✓ Saved to production database & live on site!");
      return;
    }
  } catch(e) {
    // Static fallback
  }

  showToast("✓ Saved to browser storage!");
}

function resetDefaults() {
  if (!confirm("Reset all content to defaults? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(VERSION_KEY);
  content = Object.assign({}, defaultSiteContent);
  fillAllFields();
  showToast("Reset to defaults");
}

/* ─── TAB ROUTING ─────────────────────────────────────────────── */
function showTab(tabId, btn) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".sidebar-nav button").forEach(b => b.classList.remove("active"));
  const panel = document.getElementById(tabId);
  if (panel) panel.classList.add("active");
  if (btn) btn.classList.add("active");

  const titles = {
    "tab-hero":         "Hero Section",
    "tab-featured":     "Featured Work",
    "tab-audience":     "Who We Serve",
    "tab-testimonials": "Testimonials",
    "tab-faqs":         "FAQ Section",
    "tab-cards":        "Capabilities",
    "tab-contact":      "Contact & Footer",
    "tab-visibility":   "Section Visibility"
  };
  const h = document.getElementById("adminHeaderTitle");
  if (h && titles[tabId]) h.textContent = titles[tabId];
}

/* ─── FILL FIELDS ─────────────────────────────────────────────── */
function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || "";
}

function fillAllFields() {
  // Hero
  setVal("heroEyebrow",        content.heroEyebrow);
  setVal("heroTitleLine1",     content.heroTitleLine1);
  setVal("heroTitleHighlight", content.heroTitleHighlight);
  setVal("heroDescription",    content.heroDescription);
  setVal("heroPrimaryText",    content.heroPrimaryText);
  setVal("heroPrimaryLink",    content.heroPrimaryLink);
  setVal("heroSecondaryText",  content.heroSecondaryText);
  setVal("heroSecondaryLink",  content.heroSecondaryLink);
  setVal("manifestoText",      content.manifestoText);

  // Featured
  setVal("featuredKicker",  content.featuredKicker);
  setVal("featuredHeading", content.featuredHeading);
  setVal("featuredSubhead", content.featuredSubhead);
  renderFeaturedRepeater();

  // Audience
  setVal("audienceKicker",  content.audienceKicker);
  setVal("audienceHeading", content.audienceHeading);
  renderAudienceRepeater();

  // Testimonials
  setVal("testimonialsKicker",  content.testimonialsKicker);
  setVal("testimonialsHeading", content.testimonialsHeading);
  renderTestimonialsRepeater();

  // FAQs
  setVal("faqKicker",  content.faqKicker);
  setVal("faqHeading", content.faqHeading);
  setVal("faqSubhead", content.faqSubhead);
  renderFaqRepeater();

  // Cards
  renderCardsRepeater();

  // Contact
  setVal("contactEmail",   content.contactEmail);
  setVal("contactPhone",   content.contactPhone);
  setVal("contactUpi",     content.contactUpi);
  setVal("contactGst",     content.contactGst);
  setVal("footerAddress",  content.footerAddress);
  setVal("footerTagline",  content.footerTagline);
  const s = content.socials || {};
  setVal("socialInstagram", s.instagram);
  setVal("socialWhatsapp",  s.whatsapp);
  setVal("socialTwitter",   s.twitter);
  setVal("socialGithub",    s.github);
  setVal("socialLinkedin",  s.linkedin);
  setVal("socialYoutube",   s.youtube);

  // Visibility
  renderVisibilityToggles();
}

/* ─── GATHER ──────────────────────────────────────────────────── */
function gatherHero() {
  content.heroEyebrow        = getVal("heroEyebrow");
  content.heroTitleLine1     = getVal("heroTitleLine1");
  content.heroTitleHighlight = getVal("heroTitleHighlight");
  content.heroDescription    = getVal("heroDescription");
  content.heroPrimaryText    = getVal("heroPrimaryText");
  content.heroPrimaryLink    = getVal("heroPrimaryLink");
  content.heroSecondaryText  = getVal("heroSecondaryText");
  content.heroSecondaryLink  = getVal("heroSecondaryLink");
  content.manifestoText      = getVal("manifestoText");
}

function gatherFeatured() {
  content.featuredKicker  = getVal("featuredKicker");
  content.featuredHeading = getVal("featuredHeading");
  content.featuredSubhead = getVal("featuredSubhead");
  content.featuredWork = gatherRepeaterData("featuredRepeater", ["tag","title","story","outcome","ctaText","ctaLink","imageUrl"]);
}

function gatherAudience() {
  content.audienceKicker  = getVal("audienceKicker");
  content.audienceHeading = getVal("audienceHeading");
  content.audienceBlocks  = gatherRepeaterData("audienceRepeater", ["tag","title","desc","ctaText","ctaLink","imageUrl","id"]);
}

function gatherTestimonials() {
  content.testimonialsKicker  = getVal("testimonialsKicker");
  content.testimonialsHeading = getVal("testimonialsHeading");
  content.testimonials = gatherRepeaterData("testimonialsRepeater", ["quote","name","role","avatar","stars"]);
  // Parse stars as number
  content.testimonials.forEach(t => { t.stars = parseInt(t.stars) || 5; });
}

function gatherFaqs() {
  content.faqKicker  = getVal("faqKicker");
  content.faqHeading = getVal("faqHeading");
  content.faqSubhead = getVal("faqSubhead");
  content.faqs       = gatherRepeaterData("faqRepeater", ["q","a"]);
}

function gatherCards() {
  content.cards = gatherRepeaterData("cardsRepeater", ["category","subdomain","title","description","mediaUrl","link","c1","c2","c3"]);
}

function gatherContact() {
  content.contactEmail  = getVal("contactEmail");
  content.contactPhone  = getVal("contactPhone");
  content.contactUpi    = getVal("contactUpi");
  content.contactGst    = getVal("contactGst");
  content.footerAddress = getVal("footerAddress");
  content.footerTagline = getVal("footerTagline");
  content.socials = {
    instagram: getVal("socialInstagram"),
    whatsapp:  getVal("socialWhatsapp"),
    twitter:   getVal("socialTwitter"),
    github:    getVal("socialGithub"),
    linkedin:  getVal("socialLinkedin"),
    youtube:   getVal("socialYoutube")
  };
}

function gatherVisibility() {
  const sections = ["featured","capabilities","audience","testimonials","vision"];
  const vis = content.sectionVisibility || {};
  sections.forEach(s => {
    const el = document.getElementById(`vis-${s}`);
    if (el) vis[s] = el.checked;
  });
  content.sectionVisibility = vis;
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

/* ─── REPEATER HELPERS ────────────────────────────────────────── */
function gatherRepeaterData(repeaterId, fields) {
  const container = document.getElementById(repeaterId);
  if (!container) return [];
  const items = container.querySelectorAll(".repeater-item");
  return Array.from(items).map(item => {
    const obj = {};
    fields.forEach(f => {
      const el = item.querySelector(`[data-field="${f}"]`);
      obj[f] = el ? el.value.trim() : "";
    });
    return obj;
  });
}

/* ─── RENDER REPEATERS ────────────────────────────────────────── */
function renderFeaturedRepeater() {
  const container = document.getElementById("featuredRepeater");
  if (!container) return;
  const works = content.featuredWork || [];
  container.innerHTML = works.map((w, i) => `
    <div class="repeater-item">
      <div class="repeater-item-header">
        <span>CASE STUDY #${i+1}</span>
        <button class="btn btn-danger" onclick="removeFeaturedItem(${i})">Remove</button>
      </div>
      <div class="field-row">
        <div class="field"><label>Tag Label</label><input data-field="tag" value="${esc(w.tag)}" /></div>
        <div class="field"><label>Title</label><input data-field="title" value="${esc(w.title)}" /></div>
      </div>
      <div class="field"><label>Story (Client Needed X)</label><textarea data-field="story" rows="2">${esc(w.story)}</textarea></div>
      <div class="field"><label>Outcome (We Delivered Y)</label><textarea data-field="outcome" rows="2">${esc(w.outcome)}</textarea></div>
      <div class="field-row">
        <div class="field"><label>CTA Button Text</label><input data-field="ctaText" value="${esc(w.ctaText)}" /></div>
        <div class="field"><label>CTA Link</label><input data-field="ctaLink" value="${esc(w.ctaLink)}" /></div>
      </div>
      <div class="field"><label>Image URL / Path (e.g. assets/lamp_product.png)</label><input data-field="imageUrl" value="${esc(w.imageUrl)}" /></div>
    </div>
  `).join('');
}

function addFeaturedItem() {
  content.featuredWork = content.featuredWork || [];
  content.featuredWork.push({ tag: "New Category", title: "New Case Study", story: "Client needed...", outcome: "We delivered...", ctaText: "Learn More", ctaLink: "#", imageUrl: "assets/lamp_product.png", mediaType: "image" });
  renderFeaturedRepeater();
}
function removeFeaturedItem(i) {
  content.featuredWork.splice(i, 1);
  renderFeaturedRepeater();
}

function renderAudienceRepeater() {
  const container = document.getElementById("audienceRepeater");
  if (!container) return;
  const blocks = content.audienceBlocks || [];
  container.innerHTML = blocks.map((b, i) => `
    <div class="repeater-item">
      <div class="repeater-item-header">
        <span>AUDIENCE BLOCK #${i+1}</span>
        <button class="btn btn-danger" onclick="removeAudienceItem(${i})">Remove</button>
      </div>
      <div class="field-row">
        <div class="field"><label>Tag Label</label><input data-field="tag" value="${esc(b.tag)}" /></div>
        <div class="field"><label>Title</label><input data-field="title" value="${esc(b.title)}" /></div>
      </div>
      <div class="field"><label>Description</label><textarea data-field="desc" rows="2">${esc(b.desc)}</textarea></div>
      <div class="field-row">
        <div class="field"><label>CTA Button Text</label><input data-field="ctaText" value="${esc(b.ctaText)}" /></div>
        <div class="field"><label>CTA Link</label><input data-field="ctaLink" value="${esc(b.ctaLink)}" /></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Image URL / Path</label><input data-field="imageUrl" value="${esc(b.imageUrl)}" /></div>
        <div class="field"><label>Section ID (for anchor links)</label><input data-field="id" value="${esc(b.id)}" /></div>
      </div>
    </div>
  `).join('');
}

function addAudienceItem() {
  content.audienceBlocks = content.audienceBlocks || [];
  content.audienceBlocks.push({ tag: "New Audience", title: "New Block Title", desc: "Description here.", ctaText: "Learn More →", ctaLink: "#", imageUrl: "assets/lamp_product.png", id: "new-block" });
  renderAudienceRepeater();
}
function removeAudienceItem(i) {
  content.audienceBlocks.splice(i, 1);
  renderAudienceRepeater();
}

function renderTestimonialsRepeater() {
  const container = document.getElementById("testimonialsRepeater");
  if (!container) return;
  const testimonials = content.testimonials || [];
  container.innerHTML = testimonials.map((t, i) => `
    <div class="repeater-item">
      <div class="repeater-item-header">
        <span>TESTIMONIAL #${i+1}</span>
        <button class="btn btn-danger" onclick="removeTestimonialItem(${i})">Remove</button>
      </div>
      <div class="field"><label>Quote</label><textarea data-field="quote" rows="2">${esc(t.quote)}</textarea></div>
      <div class="field-row">
        <div class="field"><label>Name</label><input data-field="name" value="${esc(t.name)}" /></div>
        <div class="field"><label>Role / Location</label><input data-field="role" value="${esc(t.role)}" /></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Avatar Image URL (optional)</label><input data-field="avatar" value="${esc(t.avatar)}" /></div>
        <div class="field"><label>Stars (1-5)</label><input data-field="stars" type="number" min="1" max="5" value="${t.stars || 5}" /></div>
      </div>
    </div>
  `).join('');
}

function addTestimonialItem() {
  content.testimonials = content.testimonials || [];
  content.testimonials.push({ quote: "Excellent service and delivery!", name: "Customer Name", role: "Customer Role", avatar: "", stars: 5 });
  renderTestimonialsRepeater();
}
function removeTestimonialItem(i) {
  content.testimonials.splice(i, 1);
  renderTestimonialsRepeater();
}

function renderFaqRepeater() {
  const container = document.getElementById("faqRepeater");
  if (!container) return;
  const faqs = content.faqs || [];
  container.innerHTML = faqs.map((f, i) => `
    <div class="repeater-item">
      <div class="repeater-item-header">
        <span>FAQ ITEM #${i+1}</span>
        <button class="btn btn-danger" onclick="removeFaqItem(${i})">Remove</button>
      </div>
      <div class="field"><label>Question</label><input data-field="q" value="${esc(f.q)}" /></div>
      <div class="field"><label>Answer</label><textarea data-field="a" rows="3">${esc(f.a)}</textarea></div>
    </div>
  `).join('');
}

function addFaqItem() {
  content.faqs = content.faqs || [];
  content.faqs.push({ q: "New Question?", a: "Answer details here." });
  renderFaqRepeater();
}
function removeFaqItem(i) {
  content.faqs.splice(i, 1);
  renderFaqRepeater();
}

function renderCardsRepeater() {
  const container = document.getElementById("cardsRepeater");
  if (!container) return;
  const cards = content.cards || [];
  container.innerHTML = cards.map((c, i) => `
    <div class="repeater-item">
      <div class="repeater-item-header">
        <span>CARD #${i+1}</span>
        <button class="btn btn-danger" onclick="removeCardItem(${i})">Remove</button>
      </div>
      <div class="field-row">
        <div class="field"><label>Category Label</label><input data-field="category" value="${esc(c.category)}" /></div>
        <div class="field"><label>Subdomain</label><input data-field="subdomain" value="${esc(c.subdomain)}" /></div>
      </div>
      <div class="field"><label>Card Title</label><input data-field="title" value="${esc(c.title)}" /></div>
      <div class="field"><label>Description</label><textarea data-field="description" rows="2">${esc(c.description)}</textarea></div>
      <div class="field-row">
        <div class="field"><label>Image URL / Path</label><input data-field="mediaUrl" value="${esc(c.mediaUrl)}" /></div>
        <div class="field"><label>Card Link URL</label><input data-field="link" value="${esc(c.link)}" /></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Color 1 (hex)</label><input data-field="c1" value="${esc(c.c1 || '#68f36b')}" /></div>
        <div class="field"><label>Color 2 (hex)</label><input data-field="c2" value="${esc(c.c2 || '#26a9ff')}" /></div>
        <div class="field"><label>Color 3 (hex)</label><input data-field="c3" value="${esc(c.c3 || '#ff7212')}" /></div>
      </div>
    </div>
  `).join('');
}

function addCardItem() {
  content.cards = content.cards || [];
  content.cards.push({ category: "NEW", subdomain: "buildroonix.com", title: "New Card", description: "Description here.", c1: "#68f36b", c2: "#26a9ff", c3: "#ff7212", mediaType: "image", mediaUrl: "", link: "#" });
  renderCardsRepeater();
}
function removeCardItem(i) {
  content.cards.splice(i, 1);
  renderCardsRepeater();
}

/* ─── VISIBILITY TOGGLES ──────────────────────────────────────── */
function renderVisibilityToggles() {
  const grid = document.getElementById("visibilityGrid");
  if (!grid) return;
  const sections = [
    { key: "featured",     label: "Featured Work" },
    { key: "capabilities", label: "Capabilities" },
    { key: "audience",     label: "Who We Serve" },
    { key: "testimonials", label: "Testimonials" },
    { key: "faqs",         label: "FAQ Section" },
    { key: "vision",       label: "Vision / Philosophy" }
  ];
  const vis = content.sectionVisibility || {};
  grid.innerHTML = sections.map(s => `
    <div class="visibility-item">
      <span>${s.label}</span>
      <label class="toggle-switch">
        <input type="checkbox" id="vis-${s.key}" ${vis[s.key] !== false ? 'checked' : ''} />
        <span class="toggle-track"></span>
      </label>
    </div>
  `).join('');
}

/* ─── UTILITIES ───────────────────────────────────────────────── */
function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");
  if (!toast) return;
  if (toastMsg) toastMsg.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

/* ─── INIT ────────────────────────────────────────────────────── */
function initAdmin() {
  loadContent();
  fillAllFields();
}

/* ─── BOOT ────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("adminAuth") === "1") {
    document.getElementById("loginGate").style.display  = "none";
    document.getElementById("adminPanel").style.display = "flex";
    initAdmin();
  }

  // Allow Enter key on password field
  const pwd = document.getElementById("adminPwd");
  if (pwd) pwd.addEventListener("keydown", e => { if (e.key === "Enter") doLogin(); });
});
