/**
 * BUILDROONIX — BRAND, OBSIDIAN DESIGN TOKENS, DIVISIONS, MEGA MENU & HOMEPAGE DATA
 * Preserves original Buildroonix logo, contact, GSTIN, UPI, MSME & social records.
 */

export const OBSIDIAN_TOKENS = {
  canvas: "#080c14",
  canvasAlt: "#0d1422",
  glassSurface: "rgba(13, 20, 36, 0.72)",
  glassSurfaceStrong: "rgba(13, 20, 36, 0.92)",
  borderSubtle: "rgba(255, 255, 255, 0.08)",
  borderHover: "rgba(38, 169, 255, 0.45)",
  primaryBlue: "#26a9ff",
  primarySky: "#38bdf8",
  primaryGradient: "linear-gradient(135deg, #26a9ff 0%, #38bdf8 100%)",
  cyan: "#26a9ff",
  sky: "#38bdf8",
  liveSuccess: "#38bdf8",
  textPrimary: "#f3f5f4",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
};

export const BUILDROONIX_BRAND = {
  name: "BUILDROONIX",
  subName: "Engineering & Software Solutions",
  positioning: "An Integrated Technology, Software & Engineering Solutions Company.",
  logoPath: "/assets/logo.png",
  videoPath: "/assets/can_you_animate_this_png_logo.mp4",
  email: "support@buildroonix.com",
  phone: "+91 9580181697",
  phoneRaw: "+919580181697",
  store3dUrl: "https://3d.buildroonix.com",
  whatsappUrl:
    "https://wa.me/919580181697?text=Hi%20Buildroonix%2C%20I%20would%20like%20to%20discuss%20a%20project%20and%20request%20a%20quote.",
  upi: "9580181697@ibl",
  gstin: "09HQHPD9487C1ZE",
  msme: "MSME Registered · India",
  address: "Varanasi, Uttar Pradesh, India · Pan-India & Remote Delivery",
  tagline:
    "© 2026 Buildroonix Engineering Studio.\nAn Integrated Technology, Software & Engineering Solutions Company.",
  socials: {
    instagram: "https://instagram.com/buildroonix",
    whatsapp:
      "https://wa.me/919580181697?text=Hi%20Buildroonix%2C%20I%20would%20like%20to%20discuss%20a%20project%20and%20request%20a%20quote.",
    linkedin: "https://linkedin.com/company/buildroonix",
    twitter: "https://x.com/buildroonix",
    github: "https://github.com/buildroonix",
    youtube: "https://youtube.com/@buildroonix",
  },
  portals: [
    { label: "3d.buildroonix.com", url: "https://3d.buildroonix.com", note: "Separate 3D Decor Store" },
    { label: "software.buildroonix.com", url: "https://software.buildroonix.com", note: "Software Solutions" },
    { label: "projects.buildroonix.com", url: "https://projects.buildroonix.com", note: "Engineering Projects" },
  ],
  founder: {
    name: "Rohit",
    title: "Founder & Principal Systems Architect",
    role: "Managing Director & Chief Engineer",
    experience: "Full-Stack Software Architecture, IoT Microcontroller Systems & Rapid Prototyping",
    location: "Varanasi, Uttar Pradesh, India · Pan-India & Global Delivery",
    phone: "+91 9580181697",
    email: "support@buildroonix.com",
    whatsappUrl:
      "https://wa.me/919580181697?text=Hi%20Rohit%2C%20I%20would%20like%20to%20schedule%20an%20architectural%20consultation%20with%20you%20directly.",
    image: "/assets/founder_portrait.jpg",
    studioImage: "/assets/founder_studio.jpg",
    quote:
      "Buildroonix was founded on an uncompromising conviction: clients shouldn't have to hire three disconnected agencies to build one complete technology product. At Buildroonix, you collaborate directly with hands-on systems architects who write clean code, design electronics, and build physical prototypes — with zero middleman overhead and 100% intellectual property ownership.",
    story: [
      "With deep hands-on expertise spanning distributed web platforms, high-throughput cloud APIs, enterprise ERP/CRM systems, embedded MCU firmware (ESP32/STM32), and precision CAD digital manufacturing, Rohit established Buildroonix to eliminate the traditional divide between software engineers and hardware prototyping shops.",
      "Rather than operating as a conventional outsourcing agency with non-technical sales reps and layers of project managers, Buildroonix was architected as an integrated engineering studio where every client problem is solved through first-principles engineering and architectural rigor.",
      "Every software architecture, database schema, IoT hardware layout, and 3D enclosure designed at Buildroonix undergoes personal review from the founder, ensuring that clean code standards, security best practices, and long-term scalability are baked in from day zero.",
    ],
    credentials: [
      { label: "Executive Leadership", value: "Founder & Principal Architect" },
      { label: "Enterprise Registration", value: "Govt. of India MSME" },
      { label: "Tax & B2B Invoicing", value: "GSTIN: 09HQHPD9487C1ZE" },
      { label: "Architecture Oversight", value: "100% Direct Review" },
      { label: "IP Ownership Handover", value: "100% Full Code Ownership" },
      { label: "Operating Studio Hub", value: "Varanasi, Uttar Pradesh, India" },
    ],
    principles: [
      {
        title: "Direct Architectural Access",
        desc: "No non-technical account managers or junior delegation. Clients communicate directly with senior systems architects who understand code, databases, and infrastructure.",
      },
      {
        title: "100% IP & Source Code Ownership",
        desc: "Upon delivery, you receive full repository ownership, deployment scripts, database schemas, and documentation. Zero vendor lock-in or recurring proprietary license fees.",
      },
      {
        title: "Hardware-to-Cloud Integration",
        desc: "We engineer software that talks seamlessly to physical hardware — web and mobile dashboards, cloud APIs, IoT telemetry firmware, custom PCBs, and 3D-printed enclosures.",
      },
      {
        title: "Statutory MSME & GST Compliance",
        desc: "Buildroonix is a government-registered Indian enterprise with verified GSTIN (09HQHPD9487C1ZE), standard commercial contracts, and clear milestone-based billing.",
      },
    ],
    stats: [
      { value: "100%", label: "Direct Architectural Oversight" },
      { value: "100%", label: "Source Code & IP Transfer" },
      { value: "10", label: "Integrated Engineering Divisions" },
      { value: "09HQHPD9487C1ZE", label: "Verified GSTIN Registered" },
    ],
  },
};

export const CORE_DIVISIONS = [
  { num: "01", title: "Software Engineering", desc: "Requirement-driven architecture, modular applications, and long-term maintainable systems.", link: "/services/software-development", color: "#26a9ff" },
  { num: "02", title: "Web & Application Development", desc: "Corporate platforms, customer portals, PWAs, CMS, and interactive web applications.", link: "/services/web-app-development", color: "#26a9ff" },
  { num: "03", title: "Mobile Application Development", desc: "Android, iOS, and cross-platform mobile apps integrated with cloud backends and APIs.", link: "/services/mobile-app-development", color: "#ff7212" },
  { num: "04", title: "Enterprise Software Solutions", desc: "ERP, CRM, HRMS, inventory, billing, LMS, hospital, school, and workflow platforms.", link: "/services/enterprise-software-development", color: "#26a9ff" },
  { num: "05", title: "AI & Intelligent Applications", desc: "Practical AI chatbots, document processing, workflow automation, and API integrations.", link: "/services/ai-development", color: "#10b981" },
  { num: "06", title: "Cloud, Backend & API Engineering", desc: "REST & GraphQL APIs, RBAC authentication, database architecture, CI/CD, and server ops.", link: "/services/api-backend-development", color: "#26a9ff" },
  { num: "07", title: "IoT & Embedded Software", desc: "ESP32/MCU firmware, telemetry protocols, device connectivity, and live monitoring dashboards.", link: "/services/iot-embedded", color: "#ff7212" },
  { num: "08", title: "Hardware Engineering", desc: "Functional electronic systems, sensor integration, enclosure fitment, and field-ready prototypes.", link: "/services/hardware-engineering", color: "#26a9ff" },
  { num: "09", title: "PCB & Electronics Development", desc: "Schematic capture, custom multi-layer PCB layout, power management, and bench bring-up.", link: "/services/hardware-engineering#pcb", color: "#26a9ff" },
  { num: "10", title: "3D Printing & Rapid Prototyping", desc: "Precision CAD modeling, functional enclosures, mechanical fixtures, and rapid physical iteration.", link: "/services/digital-manufacturing", color: "#10b981" },
];

export const MEGA_MENU_GROUPS = [
  {
    id: "software",
    title: "Software Engineering",
    accent: "#26a9ff",
    overviewLink: "/services/software-development",
    overviewLabel: "Software Engineering Overview →",
    columns: 2,
    items: [
      { label: "Custom Software Development", href: "/services/custom-software-development", tag: "Core" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Web Applications", href: "/services/web-app-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Desktop Software", href: "/services/desktop-application-development" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "Enterprise Software", href: "/services/enterprise-software-development" },
      { label: "ERP & CRM Solutions", href: "/services/erp-development" },
      { label: "AI-Powered Applications", href: "/services/ai-development" },
      { label: "API & Backend Development", href: "/services/api-backend-development" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Software Integration", href: "/services/software-integration" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Software Testing & QA", href: "/services/software-testing" },
      { label: "Maintenance & Support", href: "/services/software-maintenance" },
    ],
  },
  {
    id: "iot",
    title: "IoT & Embedded Engineering",
    accent: "#26a9ff",
    overviewLink: "/services/iot-embedded",
    overviewLabel: "IoT & Embedded Division →",
    columns: 1,
    items: [
      { label: "IoT Development", href: "/services/iot-embedded#iot-dev" },
      { label: "Embedded Systems", href: "/services/iot-embedded#embedded" },
      { label: "Firmware Development", href: "/services/iot-embedded#firmware" },
      { label: "Device Connectivity", href: "/services/iot-embedded#connectivity" },
      { label: "IoT Dashboards", href: "/services/iot-embedded#dashboards" },
      { label: "Smart Monitoring Solutions", href: "/services/iot-embedded#monitoring" },
    ],
  },
  {
    id: "hardware",
    title: "Hardware Engineering",
    accent: "#ff7212",
    overviewLink: "/services/hardware-engineering",
    overviewLabel: "Hardware Division →",
    columns: 1,
    items: [
      { label: "Hardware Development", href: "/services/hardware-engineering#hw-dev" },
      { label: "Circuit Design", href: "/services/hardware-engineering#circuit" },
      { label: "PCB Design", href: "/services/hardware-engineering#pcb" },
      { label: "Electronics Prototyping", href: "/services/hardware-engineering#prototyping" },
    ],
  },
  {
    id: "manufacturing",
    title: "Digital Manufacturing",
    accent: "#10b981",
    overviewLink: "/services/digital-manufacturing",
    overviewLabel: "Digital Manufacturing →",
    columns: 1,
    items: [
      { label: "3D Printing", href: "/services/digital-manufacturing#printing" },
      { label: "CAD Design", href: "/services/digital-manufacturing#cad" },
      { label: "Rapid Prototyping", href: "/services/digital-manufacturing#rapid" },
    ],
  },
];

export const SOFTWARE_EXPERTISE_CATEGORIES = [
  {
    id: "web-platforms",
    title: "Web Platforms",
    subtitle: "Portals, CMS, PWAs & Interactive Web Systems",
    summary:
      "High-speed corporate portals, customer self-service dashboards, progressive web apps, and custom CMS platforms engineered for clarity and reliability.",
    bullets: ["Customer & Admin Portals", "Progressive Web Apps (PWA)", "Custom CMS & Dynamic Platforms"],
    href: "/services/web-development",
    cta: "Explore Web Platforms",
    accent: "#26a9ff",
    mockupType: "web-portal",
    studioImage: "/assets/portfolio_web_cms.jpg",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    subtitle: "Android, iOS, Cross-Platform & Field Workforce Apps",
    summary:
      "Responsive mobile apps connected directly to secure REST APIs — built for customers, field technicians, education, and operational teams.",
    bullets: ["Android & iOS Cross-Platform", "Offline-Sync Field Workforce Apps", "Real-Time Push & API Integration"],
    href: "/services/mobile-app-development",
    cta: "Explore Mobile Apps",
    accent: "#ff7212",
    mockupType: "mobile-app",
    studioImage: "/assets/portfolio_mobile_app.jpg",
  },
  {
    id: "enterprise-systems",
    title: "Enterprise Systems",
    subtitle: "ERP, CRM, HRMS, Inventory, Billing & LMS",
    summary:
      "Unified operational software eliminating spreadsheet silos across inventory, payroll, billing, customer pipelines, clinics, schools, and multi-branch workflows.",
    bullets: ["ERP, CRM & HRMS Modules", "GST Billing, Inventory & POS", "LMS, School & Clinic Platforms"],
    href: "/services/enterprise-software-development",
    cta: "Explore Enterprise Software",
    accent: "#26a9ff",
    mockupType: "enterprise-erp",
    studioImage: "/assets/portfolio_erp_software.jpg",
  },
  {
    id: "saas-products",
    title: "SaaS Products",
    subtitle: "Multi-Tenant Platforms & Subscription Systems",
    summary:
      "Scalable multi-tenant cloud software with tenant isolation, role-based permissions, subscription lifecycle handling, and usage telemetry.",
    bullets: ["Multi-Tenant Data Isolation", "Subscription & Plan Entitlements", "Self-Serve Organization Dashboards"],
    href: "/services/saas-development",
    cta: "Explore SaaS Development",
    accent: "#26a9ff",
    mockupType: "saas-tenant",
    studioImage: "/assets/portfolio_saas_platform.jpg",
  },
  {
    id: "ai-applications",
    title: "AI Applications",
    subtitle: "Practical AI Workflows, Assistants & Document Processing",
    summary:
      "Grounded AI integrations using verified APIs for support chatbots, structured document extraction, intelligent search, and operational data analysis.",
    bullets: ["Contextual AI Chatbots & Assistants", "Document Parsing & Intelligent Search", "Computer Vision & Data Pipelines"],
    href: "/services/ai-development",
    cta: "Explore AI Applications",
    accent: "#10b981",
    mockupType: "ai-assistant",
    studioImage: "/assets/portfolio_ai_assistant.jpg",
  },
  {
    id: "backend-apis",
    title: "Backend & APIs",
    subtitle: "REST/GraphQL APIs, RBAC Auth & Database Engineering",
    summary:
      "Resilient server architectures, clean database schemas, token/RBAC security, webhooks, and real-time event synchronization.",
    bullets: ["REST & GraphQL API Design", "Role-Based Access Control (RBAC)", "Webhooks & Real-Time Sync"],
    href: "/services/api-backend-development",
    cta: "Explore Backend & APIs",
    accent: "#ff7212",
    mockupType: "api-gateway",
    studioImage: "/assets/portfolio_api_gateway.jpg",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    subtitle: "Deployment, Docker, CI/CD, Monitoring & Backups",
    summary:
      "Production Linux VPS and cloud environments hardened with NGINX reverse proxies, automated CI/CD pipelines, PM2/Docker orchestration, and backup policies.",
    bullets: ["CI/CD & Zero-Downtime Reloads", "Docker & NGINX Reverse Proxies", "Monitoring, SSL & Backup Strategies"],
    href: "/services/cloud-devops",
    cta: "Explore Cloud & DevOps",
    accent: "#26a9ff",
    mockupType: "cloud-ops",
    studioImage: "/assets/showcase_software_dev.jpg",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    subtitle: "System Integrations, WhatsApp APIs & Workflow Engines",
    summary:
      "Connect disconnected tools — syncing ERPs, CRMs, payment gateways, WhatsApp/Email/SMS alerts, and IoT hardware triggers automatically.",
    bullets: ["WhatsApp, Email & SMS Workflows", "Payment & Accounting Sync", "Hardware-to-Cloud Automation"],
    href: "/services/software-integration",
    cta: "Explore Business Automation",
    accent: "#26a9ff",
    mockupType: "workflow-auto",
    studioImage: "/assets/portfolio_order_automation.jpg",
  },
];

export const LIFECYCLE_STEPS = [
  { step: "01", title: "Requirement Discovery", desc: "Stakeholder workshops to map operational pain points, target users, constraints, hardware touchpoints, and success criteria." },
  { step: "02", title: "Business Analysis", desc: "Translating raw business needs into formal functional specifications, user roles, edge-case rules, and phased delivery milestones." },
  { step: "03", title: "UI/UX Design", desc: "Wireframes, clickable prototypes, design systems, and accessible responsive interfaces validated before heavy engineering begins." },
  { step: "04", title: "Architecture & Planning", desc: "Selecting database schemas, API contracts, cloud topology, security boundaries, and embedded/hardware protocols where needed." },
  { step: "05", title: "Development", desc: "Clean modular frontend, backend, mobile, or firmware implementation with version-controlled sprints and incremental previews." },
  { step: "06", title: "API & System Integration", desc: "Connecting third-party APIs, payment gateways (for client apps), WhatsApp/SMS notifications, legacy databases, and IoT devices." },
  { step: "07", title: "Testing & Quality Assurance", desc: "Functional, API, integration, cross-browser, performance, and security verification before any release candidate ships." },
  { step: "08", title: "Deployment", desc: "Production provisioning, SSL/NGINX hardening, CI/CD automation, database migration, and zero-downtime rollout." },
  { step: "09", title: "Maintenance & Support", desc: "Post-launch monitoring, scheduled backups, dependency upgrades, bug fixes, and iterative feature enhancements." },
];

export const TECH_STACK = [
  {
    category: "Frontend Development",
    accent: "#26a9ff",
    items: ["HTML5 & CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "Progressive Web Apps (PWA)"],
  },
  {
    category: "Backend Development",
    accent: "#26a9ff",
    items: ["Node.js / Express", "Python (FastAPI / Django)", "Java (Spring Boot)", "C# / .NET", "PHP / Laravel", "Go (Golang)", "REST & GraphQL APIs"],
  },
  {
    category: "Mobile Development",
    accent: "#ff7212",
    items: ["React Native", "Flutter (Dart)", "Android (Kotlin / Java)", "iOS (Swift)", "Offline SQLite Sync", "REST & Push Integration"],
  },
  {
    category: "Database Technologies",
    accent: "#26a9ff",
    items: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "MongoDB", "SQLite", "Redis", "Oracle / Enterprise DBs"],
  },
  {
    category: "Cloud & DevOps",
    accent: "#10b981",
    items: ["AWS", "Microsoft Azure", "Google Cloud (GCP)", "Linux VPS (Ubuntu)", "NGINX & PM2", "Docker & Kubernetes", "CI/CD Pipelines"],
  },
  {
    category: "AI & Data",
    accent: "#26a9ff",
    items: ["Python Data & ML Stack", "LLM & AI API Integration", "Document Parsing (OCR/PDF)", "OpenCV / Computer Vision", "Intelligent Search & RAG", "Predictive Analytics"],
  },
  {
    category: "IoT & Embedded",
    accent: "#26a9ff",
    items: ["Embedded C / C++", "ESP32 / ESP8266", "STM32 / ARM / Arduino", "MicroPython", "MQTT / BLE / Modbus", "Sensor & Biometric Modules"],
  },
  {
    category: "Design & Prototyping",
    accent: "#ff7212",
    items: ["Figma UI/UX", "Design Systems", "KiCad PCB Layout", "Fusion 360 / CAD", "PLA+ / PETG 3D Printing", "Custom Hardware Enclosures"],
  },
];

export const DEFAULT_SITE_CONTENT = {
  heroEyebrow: "Integrated Technology, Software & Engineering Solutions · India",
  heroTitleLine1: "An Integrated Technology,",
  heroTitleHighlight: "Software & Engineering",
  heroTitleLine3: "Solutions Company.",
  heroDescription:
    "From custom business software, enterprise ERPs, mobile apps, and AI-powered platforms to IoT systems, custom PCBs, and rapid 3D prototyping — BUILDROONIX architects, develops, tests, deploys, and supports connected technology solutions.",
  heroVideoUrl: "/assets/can_you_animate_this_png_logo.mp4",
  heroPrimaryText: "Discuss Your Project",
  heroSecondaryText: "Explore Software Division →",
  heroSecondaryLink: "/services/software-development",

  softwareHeading: "Software That Powers Ideas, Businesses & Innovation.",
  softwareSubhead:
    "From custom business applications and enterprise systems to intelligent web platforms and mobile applications, we engineer software solutions designed around real-world requirements.",

  manifestoText:
    "BUILDROONIX is not just a website agency. We understand business requirements, design scalable software architecture, develop web, mobile, desktop, and enterprise applications, integrate APIs and IoT hardware, test rigorously, deploy to production, and provide ongoing technical support.",

  contactEmail: BUILDROONIX_BRAND.email,
  contactPhone: BUILDROONIX_BRAND.phone,
  contactUpi: BUILDROONIX_BRAND.upi,
  contactGst: BUILDROONIX_BRAND.gstin,
  footerAddress: BUILDROONIX_BRAND.address,
  footerTagline: BUILDROONIX_BRAND.tagline,
  socials: { ...BUILDROONIX_BRAND.socials },

  featuredKicker: "Selected Engineering Work",
  featuredHeading: "Software, Systems & Connected Prototypes.",
  featuredSubhead:
    "A transparent mix of delivered client systems, system demonstrations, and internal engineering prototypes across web, enterprise, automation, and IoT.",
  featuredWork: [
    {
      tag: "Client Project · Business Automation",
      title: "Automated Order-to-Print Workflow Engine",
      story:
        "A growing operations team faced manual bottlenecks processing incoming orders, sizing files, and tracking dispatch queues.",
      outcome:
        "Engineered custom API webhook ingestion, automated prep scripts, and a live operations dashboard to eliminate repetitive manual steps.",
      ctaText: "View Case Study",
      ctaLink: "/portfolio/order-to-print-automation",
      imageUrl: "/assets/portfolio_order_automation.jpg",
      mediaType: "image",
    },
    {
      tag: "Client Project · SaaS & Operations",
      title: "Gym & PG Management Software Platform",
      story:
        "Multi-member fitness centers and hostel operators needed automated billing cycles, attendance logs, and tenant tracking in one dashboard.",
      outcome:
        "Delivered a structured management platform automating member billing, attendance tracking, and operational reporting.",
      ctaText: "View Case Study",
      ctaLink: "/portfolio/gym-pg-saas-platform",
      imageUrl: "/assets/portfolio_saas_platform.jpg",
      mediaType: "image",
    },
    {
      tag: "Client Project · Connected IoT + Hardware",
      title: "Smart Biometric IoT Attendance System",
      story:
        "Required a self-contained biometric IoT prototype syncing attendance logs directly to a cloud database with a physical desktop enclosure.",
      outcome:
        "Designed custom PCB schematics, ESP32 firmware, REST ingestion backend, web portal, and a 3D-printed unit — approved with distinction.",
      ctaText: "View Case Study",
      ctaLink: "/portfolio/smart-iot-attendance",
      imageUrl: "/assets/portfolio_iot_hardware.jpg",
      mediaType: "image",
    },
  ],

  audienceKicker: "Connected Engineering Ecosystem",
  audienceHeading: "Software meets Hardware.\nIdeas meet Production.",
  audienceBlocks: [
    {
      tag: "Software & Enterprise Division",
      title: "Custom Software, SaaS, ERP & AI Systems.",
      desc: "Web platforms, mobile & desktop apps, enterprise ERPs/CRMs, cloud APIs, and AI workflow automation engineered to your exact requirements.",
      ctaText: "Explore Software Division →",
      ctaLink: "/services/software-development",
      imageUrl: "/assets/showcase_software_dev.jpg",
      id: "software-division",
    },
    {
      tag: "IoT & Hardware Engineering",
      title: "Embedded Firmware, PCBs & Connected Devices.",
      desc: "ESP32/MCU firmware, custom circuit & PCB design, device connectivity, and live IoT telemetry dashboards built in sync with your software.",
      ctaText: "Explore IoT & Hardware →",
      ctaLink: "/services/iot-embedded",
      imageUrl: "/assets/showcase_iot_embedded.jpg",
      id: "iot-division",
    },
    {
      tag: "Digital Manufacturing & R&D",
      title: "CAD Modeling & Rapid Physical Prototyping.",
      desc: "Functional 3D-printed enclosures, mechanical fixtures, and R&D prototypes bridging digital design with field-ready hardware.",
      ctaText: "Explore Prototyping →",
      ctaLink: "/services/digital-manufacturing",
      imageUrl: "/assets/showcase_3d_printing.jpg",
      id: "manufacturing-division",
    },
  ],

  testimonialsKicker: "Client & Partner Feedback",
  testimonialsHeading: "Built for real outcomes.",
  testimonials: [
    {
      quote:
        "The gym & business management software reduced our manual administrative work dramatically. Automated member billing and attendance tracking run reliably every day.",
      name: "Anil Kapoor",
      role: "Business Owner, Uttar Pradesh",
      avatar: "",
      stars: 5,
    },
    {
      quote:
        "Buildroonix delivered my final-year IoT project on time with custom circuit design, working ESP32 code, cloud sync, and complete technical documentation.",
      name: "Rahul Verma",
      role: "Engineering Student, IIT BHU",
      avatar: "",
      stars: 5,
    },
    {
      quote:
        "Their ability to connect backend automation scripts directly with our physical production workflow saved us hours of manual coordination every week.",
      name: "Operations Lead",
      role: "E-Commerce & Print Client",
      avatar: "",
      stars: 5,
    },
  ],

  faqKicker: "Technical & Engagement FAQ",
  faqHeading: "Frequently Asked Questions",
  faqSubhead:
    "How BUILDROONIX scopes, architects, builds, tests, deploys, and supports custom software and connected engineering solutions.",
  faqs: [
    {
      q: "What programming languages and technologies does BUILDROONIX work with?",
      a: "We are technology-agnostic and adapt to your project requirements or existing codebase — engineering across JavaScript/TypeScript (React, Next.js, Angular, Node.js), Python (FastAPI, Django), Java (Spring Boot), C#/.NET, PHP/Laravel, Go, Flutter, Kotlin, Swift, C/C++ (Embedded/Desktop), SQL/NoSQL databases, and AWS/Azure/GCP/Linux VPS.",
    },
    {
      q: "What types of software does BUILDROONIX build?",
      a: "We engineer custom business software, corporate & dynamic websites, web portals, PWAs, Android/iOS mobile apps, offline-capable desktop software, SaaS platforms, enterprise ERP/CRM/HRMS/LMS systems, REST/GraphQL backends, AI API integrations, and system automations.",
    },
    {
      q: "Do you handle the full lifecycle or only coding?",
      a: "We handle the complete 9-step lifecycle: requirement discovery, business analysis, UI/UX design, system architecture, development, API/hardware integration, QA testing, cloud/VPS deployment, and ongoing maintenance.",
    },
    {
      q: "Can BUILDROONIX connect software with IoT devices, PCBs, or 3D-printed hardware?",
      a: "Yes. Unlike pure software agencies, our Software Engineering, IoT & Embedded, Hardware/PCB, and Rapid Prototyping divisions work together under one roof to deliver unified connected products.",
    },
    {
      q: "Does BUILDROONIX build e-commerce software for clients?",
      a: "Yes, we develop custom e-commerce websites, vendor platforms, catalog systems, and order/payment integrations for client businesses. Note that this corporate website itself is strictly for service showcase and project inquiries — our separate 3D decor storefront lives at 3d.buildroonix.com.",
    },
    {
      q: "How do I start a project or request a technical quote?",
      a: "Click 'Discuss Your Project' or 'Request a Quote' anywhere on the site, or message us directly on WhatsApp (+91 9580181697) or email support@buildroonix.com with your requirements.",
    },
  ],

  sectionVisibility: {
    divisions: true,
    software: true,
    featured: true,
    portfolio: true,
    process: true,
    techstack: true,
    audience: true,
    founder: true,
    testimonials: true,
    faqs: true,
    vision: true,
  },
};

