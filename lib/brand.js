/**
 * BUILDROONIX — BRAND, OBSIDIAN DESIGN TOKENS, DIVISIONS, MEGA MENU & HOMEPAGE DATA
 * Accurately represents Buildroonix's 3 real business pillars:
 * 1. Proprietary Software Products (Library OS, Gym OS + PG, School, Business Roadmap)
 * 2. 3D Printing & Custom Fabrication (Lithophanes & Figurines on 3d.buildroonix.com)
 * 3. Student & Commercial Electronics (Embedded systems, ESP32/STM32, PCBs & Enclosures)
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
  subName: "Software Solutions, 3D Fabrication & Embedded Electronics",
  positioning: "Specialized Software Products, Custom 3D Printing & Student Embedded Electronics.",
  logoPath: "/assets/logo.png",
  videoPath: "/assets/can_you_animate_this_png_logo.mp4",
  email: "support@buildroonix.com",
  phone: "+91 9580181697",
  phoneRaw: "+919580181697",
  store3dUrl: "https://3d.buildroonix.com",
  whatsappUrl:
    "https://wa.me/919580181697?text=Hi%20Buildroonix%2C%20I%20would%20like%20to%20discuss%20a%20software%20project%2C%203D%20print%2C%20or%20student%20electronics%20kit.",
  upi: "9580181697@ibl",
  gstin: "09HQHPD9487C1ZE",
  msme: "MSME Registered · India",
  address: "Varanasi, Uttar Pradesh, India · Pan-India Delivery",
  tagline:
    "© 2026 Buildroonix Engineering Studio.\nSpecialized Software Products · Custom 3D Printing · Embedded Electronics.",
  socials: {
    instagram: "https://instagram.com/buildroonix",
    whatsapp:
      "https://wa.me/919580181697?text=Hi%20Buildroonix%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    linkedin: "https://linkedin.com/company/buildroonix",
    twitter: "https://x.com/buildroonix",
    github: "https://github.com/buildroonix",
    youtube: "https://youtube.com/@buildroonix",
  },
  portals: [
    { label: "3d.buildroonix.com", url: "https://3d.buildroonix.com", note: "3D Decor, Lamps & Figurines Store" },
    { label: "buildroonix.com", url: "https://buildroonix.com", note: "Main Software & Engineering Hub" },
  ],
};

export const CORE_DIVISIONS = [
  {
    num: "01",
    title: "Library Management System (Library OS)",
    desc: "Complete role-based library operating system with Manager, Admin, and Superadmin tiers — handling cataloging, RFID/barcodes, circulation, and fines.",
    link: "/portfolio/library-management-system",
    color: "#26a9ff"
  },
  {
    num: "02",
    title: "Gym & Fitness Management Software (Gym OS)",
    desc: "4-tier membership software with Trainer, Manager, Admin, and Superadmin roles — automating subscriptions, workout/diet charts, and WhatsApp billing alerts.",
    link: "/portfolio/gym-management-software",
    color: "#ff7212"
  },
  {
    num: "03",
    title: "Custom 3D Printing & Lithophane Lamps",
    desc: "Personalized 3D photo lithophane lamps, anime & collectible figurines, and precision functional parts available directly on 3d.buildroonix.com.",
    link: "https://3d.buildroonix.com",
    color: "#10b981",
    external: true
  },
  {
    num: "04",
    title: "Student Electronics & Embedded Projects",
    desc: "Turnkey final-year hardware projects for B.Tech/Diploma students with ESP32/STM32 circuits, sensors, 3D enclosures, and full viva reports.",
    link: "/portfolio/student-iot-embedded-projects",
    color: "#8b5cf6"
  },
  {
    num: "05",
    title: "Upcoming SaaS: PG, School & Business ERP",
    desc: "Multi-tenant cloud applications currently in engineering for hostel/PG operators, school administrators, and SME inventory/GST billing.",
    link: "/portfolio/upcoming-saas-roadmap",
    color: "#38bdf8"
  },
  {
    num: "06",
    title: "Custom Web, Mobile & Backend Engineering",
    desc: "Responsive web portals, cross-platform Android/iOS mobile apps, and secure REST/GraphQL API backends engineered to your exact specifications.",
    link: "/services/software-development",
    color: "#26a9ff"
  },
];

export const MEGA_MENU_GROUPS = [
  {
    id: "software-products",
    title: "Software Products & Platforms",
    accent: "#26a9ff",
    overviewLink: "/services/software-development",
    overviewLabel: "All Software Solutions →",
    columns: 2,
    items: [
      { label: "Library Management System (Library OS)", href: "/portfolio/library-management-system", tag: "Flagship" },
      { label: "Gym Management Software (Gym OS)", href: "/portfolio/gym-management-software", tag: "Flagship" },
      { label: "PG & Hostel Management (Roadmap)", href: "/portfolio/upcoming-saas-roadmap#pg", tag: "Upcoming" },
      { label: "School Management System (Roadmap)", href: "/portfolio/upcoming-saas-roadmap#school", tag: "Upcoming" },
      { label: "Business Management & GST ERP (Roadmap)", href: "/portfolio/upcoming-saas-roadmap#business", tag: "Upcoming" },
      { label: "Custom Web Applications", href: "/services/web-app-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "API & Backend Development", href: "/services/api-backend-development" },
    ],
  },
  {
    id: "3d-printing-hub",
    title: "3D Printing & Fabrication",
    accent: "#10b981",
    overviewLink: "https://3d.buildroonix.com",
    overviewLabel: "Visit 3D Storefront (3d.buildroonix.com) ↗",
    columns: 1,
    items: [
      { label: "Personalized Lithophane Lamps", href: "https://3d.buildroonix.com/lithophane" },
      { label: "Anime & Collectible Figurines", href: "https://3d.buildroonix.com/figurines" },
      { label: "Custom 3D Printing Orders", href: "https://3d.buildroonix.com/custom-order" },
      { label: "Decorative Night Lights & Models", href: "https://3d.buildroonix.com/products" },
      { label: "Rapid Hardware Enclosures", href: "/services/digital-manufacturing" },
    ],
  },
  {
    id: "student-projects",
    title: "Student Electronics & Embedded",
    accent: "#8b5cf6",
    overviewLink: "/portfolio/student-iot-embedded-projects",
    overviewLabel: "Student Project Catalog →",
    columns: 1,
    items: [
      { label: "B.Tech / Diploma Final-Year Projects", href: "/portfolio/student-iot-embedded-projects" },
      { label: "ESP32 & STM32 Firmware Development", href: "/services/iot-embedded" },
      { label: "Custom Sensor & IoT Dashboards", href: "/services/iot-embedded#dashboards" },
      { label: "PCB Design & Circuit Bring-up", href: "/services/hardware-engineering" },
      { label: "Project Reports & Viva Preparation", href: "/portfolio/student-iot-embedded-projects#docs" },
    ],
  },
];

export const SOFTWARE_EXPERTISE_CATEGORIES = [
  {
    id: "library-os",
    title: "Library Management System",
    subtitle: "Manager · Admin · Superadmin Role-Based Operations",
    summary:
      "Institutional and public library automation software designed with three distinct role hierarchies. Effortlessly tracks book cataloging, barcode/RFID scanning, member issue and return logs, automated overdue fine calculation, and multi-branch inventory reporting.",
    bullets: [
      "3-Tier Security: Manager, Admin & Superadmin",
      "Barcode & RFID Circulation Scanner Integration",
      "Automated Due Date Alerts & Fine Reconciliation",
    ],
    href: "/portfolio/library-management-system",
    cta: "Explore Library OS",
    accent: "#26a9ff",
    mockupType: "library-os",
    studioImage: "/assets/screenshots/library_os.svg",
  },
  {
    id: "gym-os",
    title: "Gym Management Software",
    subtitle: "Trainer · Manager · Admin · Superadmin Operations",
    summary:
      "All-in-one fitness center and gym operations software. Features four distinct role dashboards: Trainer (member workout routines & diet charts), Manager (admissions & renewals), Admin (cash/UPI billing & staff payroll), and Superadmin (multi-gym analytics).",
    bullets: [
      "4-Tier RBAC: Trainer, Manager, Admin & Superadmin",
      "Automated WhatsApp Payment & Expiry Reminders",
      "Biometric & QR Code Gate Attendance Sync",
    ],
    href: "/portfolio/gym-management-software",
    cta: "Explore Gym OS",
    accent: "#ff7212",
    mockupType: "gym-os",
    studioImage: "/assets/screenshots/gym_os.svg",
  },
  {
    id: "3d-printing-studio",
    title: "3D Printing & Lithophane Studio",
    subtitle: "Personalized Lithophanes, Figurines & Custom Prints · 3d.buildroonix.com",
    summary:
      "Our dedicated 3D fabrication division crafts glowing personalized photo lithophane lamps, high-detail collectible figurines, and precision functional enclosures. Direct custom ordering and live 3D previewing available on our 3D storefront.",
    bullets: [
      "Custom Heart & Curved Photo Lithophane Lamps",
      "Anime Figurines & High-Precision Collectible Prints",
      "Instant STL Uploads & Online Orders on 3d.buildroonix.com",
    ],
    href: "https://3d.buildroonix.com",
    cta: "Visit 3D Storefront ↗",
    accent: "#10b981",
    mockupType: "3d-printing-studio",
    studioImage: "/assets/3d/lithophane-lamp.png",
  },
  {
    id: "student-electronics",
    title: "Student Electronics & Embedded Projects",
    subtitle: "Turnkey Final-Year Projects for Engineering Students",
    summary:
      "Complete working hardware projects for B.Tech, Diploma, and Polytechnic students. Every project includes fully tested microcontroller circuits (ESP32/STM32/Arduino), clean firmware, custom 3D-printed enclosure, and complete synopsis, circuit diagrams, and PPT for viva defense.",
    bullets: [
      "Working Hardware: Sensors, Microcontrollers & Relays",
      "ESP32, STM32, Arduino C++ & MicroPython Firmware",
      "Custom 3D Enclosure + Complete Project Report for Viva",
    ],
    href: "/portfolio/student-iot-embedded-projects",
    cta: "Explore Student Projects",
    accent: "#8b5cf6",
    mockupType: "student-electronics",
    studioImage: "/assets/screenshots/student_iot.svg",
  },
  {
    id: "upcoming-saas",
    title: "Upcoming SaaS: PG, School & Business ERP",
    subtitle: "Hostel/PG · School · SME Business ERP Roadmap",
    summary:
      "Actively engineering scalable cloud suites for growing sectors: PG/Hostel Management (room bed allocation, monthly rent dues, and mess tracking), School Management (admissions, fee receipts, and SMS attendance), and Business ERP (GST billing and inventory ledgers).",
    bullets: [
      "PG / Hostel OS: Bed Allocation, Rent Ledgers & Mess Meals",
      "School OS: Student Admissions, Fees & Report Cards",
      "Business ERP: Stock Ledgers, GST Billing & Staff Payroll",
    ],
    href: "/portfolio/upcoming-saas-roadmap",
    cta: "View SaaS Roadmap",
    accent: "#38bdf8",
    mockupType: "upcoming-saas",
    studioImage: "/assets/screenshots/upcoming_saas.svg",
  },
];

export const LIFECYCLE_STEPS = [
  { step: "01", title: "Requirement Mapping", desc: "Understanding operational pain points, required staff roles (e.g. Trainer/Manager), hardware specs, or 3D fabrication dimensions." },
  { step: "02", title: "System & Architecture Blueprint", desc: "Structuring role-based access control (RBAC), database schemas, microcontroller pinouts, or 3D CAD slicer profiles." },
  { step: "03", title: "UI/UX & Prototyping", desc: "Designing responsive dashboards for desktop/tablet/mobile, and test-slicing 3D geometry for structural strength." },
  { step: "04", title: "Core Engineering", desc: "Clean Next.js / Node.js development, ESP32/STM32 firmware bringup, or high-infill 3D printing in PLA+/PETG." },
  { step: "05", title: "Integration & Testing", desc: "Connecting WhatsApp notification APIs, barcode/RFID scanners, biometric hardware, and sensor telemetry." },
  { step: "06", title: "Deployment & Delivery", desc: "Production Linux VPS setup with NGINX SSL, pan-India courier dispatch for 3D products, and viva support for students." },
];

export const TECH_STACK = [
  {
    category: "Software & Web Platforms",
    accent: "#26a9ff",
    items: ["React & Next.js", "Node.js & Express", "TypeScript", "Tailwind CSS", "REST & GraphQL APIs", "PostgreSQL & MySQL", "MongoDB & Redis"],
  },
  {
    category: "3D Digital Fabrication",
    accent: "#10b981",
    items: ["Precision FDM & Resin Printing", "PLA+, PETG & Tough Resin", "Lithophane Photo Slicing", "Fusion 360 & Blender", "Custom Enclosure Fitment", "Rapid Prototyping"],
  },
  {
    category: "Embedded & IoT Engineering",
    accent: "#8b5cf6",
    items: ["Embedded C / C++", "ESP32 & ESP8266", "STM32 & ARM Microcontrollers", "Arduino IDE & PlatformIO", "MQTT, BLE & LoRaWAN", "Custom PCB Layout (KiCad)"],
  },
  {
    category: "Cloud, VPS & Security",
    accent: "#38bdf8",
    items: ["Linux Ubuntu VPS", "NGINX Reverse Proxy", "PM2 Process Manager", "SSL / TLS Certbot", "Role-Based Access Control", "Automated Database Backups"],
  },
];

export const DEFAULT_SITE_CONTENT = {
  heroEyebrow: "Integrated Technology & Hardware Studio · Varanasi, India",
  heroTitleLine1: "Purpose-Built Software,",
  heroTitleHighlight: "Custom 3D Fabrication",
  heroTitleLine3: "& Embedded Electronics.",
  heroDescription:
    "From role-based management software (Library OS, Gym OS) to personalized glowing 3D lithophane lamps at 3d.buildroonix.com and tested final-year student IoT prototypes with complete viva documentation — Buildroonix builds solutions that work.",
  heroVideoUrl: "/assets/can_you_animate_this_png_logo.mp4",
  heroPrimaryText: "Explore Software Products",
  heroSecondaryText: "Shop 3D Prints & Lamps ↗",
  heroSecondaryLink: "https://3d.buildroonix.com",

  softwareHeading: "Software That Powers Real Operations & Institutions.",
  softwareSubhead:
    "From role-based Library OS and Gym Management platforms to upcoming PG, School, and Business ERP suites — we engineer purposeful software with zero fluff.",

  manifestoText:
    "BUILDROONIX is not a generic website agency. We are an integrated engineering studio that builds role-based management software (Library & Gym OS), manufactures custom 3D lithophane lamps and figurines at 3d.buildroonix.com, and engineers working microcontroller hardware for students and enterprises.",

  contactEmail: BUILDROONIX_BRAND.email,
  contactPhone: BUILDROONIX_BRAND.phone,
  contactUpi: BUILDROONIX_BRAND.upi,
  contactGst: BUILDROONIX_BRAND.gstin,
  footerAddress: BUILDROONIX_BRAND.address,
  footerTagline: BUILDROONIX_BRAND.tagline,
  socials: { ...BUILDROONIX_BRAND.socials },

  featuredKicker: "Our Core Offerings & Live Platforms",
  featuredHeading: "Software, 3D Creations & Connected Hardware.",
  featuredSubhead:
    "A transparent showcase of our specialized software products, 3D printing creations on 3d.buildroonix.com, and working student engineering projects.",
  featuredWork: [
    {
      tag: "Proprietary Software · Institutional OS",
      title: "Library Management System (Library OS)",
      story:
        "Libraries and colleges struggle with lost books, manual card ledgers, uncollected fines, and inventory bottlenecks.",
      outcome:
        "Engineered a dedicated 3-tier system (Manager, Admin, Superadmin) featuring instant barcode checkout, automated overdue fine calculation, and multi-branch cataloging.",
      ctaText: "View Case Study",
      ctaLink: "/portfolio/library-management-system",
      imageUrl: "/assets/screenshots/library_os.svg",
      mediaType: "image",
    },
    {
      tag: "Proprietary Software · Fitness Operations",
      title: "Gym & Fitness Management Software (Gym OS)",
      story:
        "Fitness centers suffer from missed membership expiries, manual payment chasing, and messy workout logs.",
      outcome:
        "Delivered a 4-role platform (Trainer, Manager, Admin, Superadmin) with automated WhatsApp renewal reminders, trainer workout assignment, and biometric/QR gate check-ins.",
      ctaText: "View Case Study",
      ctaLink: "/portfolio/gym-management-software",
      imageUrl: "/assets/screenshots/gym_os.svg",
      mediaType: "image",
    },
    {
      tag: "3D Manufacturing · 3d.buildroonix.com",
      title: "Personalized 3D Lithophane Lamps & Figurines",
      story:
        "Customers looking for deeply meaningful gifts needed high-precision 3D photo night lamps that illuminate personal memories with warm, photographic fidelity.",
      outcome:
        "Manufactured custom curved and heart lithophane lamps with solid wooden/PLA bases and warm LED illumination, alongside anime figurines on our 3D storefront.",
      ctaText: "Shop on 3d.buildroonix.com ↗",
      ctaLink: "https://3d.buildroonix.com",
      imageUrl: "/assets/3d/heart-lithophane-sample.webp",
      mediaType: "image",
    },
    {
      tag: "Electronics · Student Project",
      title: "Smart Biometric IoT Attendance System",
      story:
        "Final-year engineering students required a complete working IoT hardware prototype with custom firmware, cloud database sync, 3D enclosure, and viva documentation.",
      outcome:
        "Designed tested ESP32 circuit schematics, fingerprint sensor integration, cloud telemetry portal, custom 3D enclosure, and full academic project report.",
      ctaText: "View Project Details",
      ctaLink: "/portfolio/student-iot-embedded-projects",
      imageUrl: "/assets/screenshots/student_iot.svg",
      mediaType: "image",
    },
  ],

  audienceKicker: "Our Three Connected Divisions",
  audienceHeading: "Software. 3D Fabrication.\nEmbedded Electronics.",
  audienceBlocks: [
    {
      tag: "Software Division",
      title: "Library OS, Gym OS & Upcoming SaaS Suites.",
      desc: "Role-based institutional software (Manager, Admin, Superadmin) and fitness platforms (Trainer, Manager, Admin) plus upcoming PG, School, and Business ERP suites.",
      ctaText: "Explore Software Products →",
      ctaLink: "/services/software-development",
      imageUrl: "/assets/screenshots/library_os.svg",
      id: "software-division",
    },
    {
      tag: "3D Printing Studio",
      title: "Lithophane Photo Lamps, Figurines & Prototyping.",
      desc: "Personalized glowing photo lamps, collectible anime figures, and custom on-demand 3D printing available directly with pan-India delivery on 3d.buildroonix.com.",
      ctaText: "Visit 3D Storefront (3d.buildroonix.com) ↗",
      ctaLink: "https://3d.buildroonix.com",
      imageUrl: "/assets/3d/lithophane-lamp.png",
      id: "manufacturing-division",
    },
    {
      tag: "Embedded & Student Projects",
      title: "Final-Year Engineering Electronics & IoT Kits.",
      desc: "Tested microcontroller hardware (ESP32/STM32), custom circuits, sensors, 3D enclosures, and full academic project reports for college viva defense.",
      ctaText: "Explore Student Projects →",
      ctaLink: "/portfolio/student-iot-embedded-projects",
      imageUrl: "/assets/screenshots/student_iot.svg",
      id: "iot-division",
    },
  ],

  testimonialsKicker: "Client & Partner Reviews",
  testimonialsHeading: "Trusted by Institutions, Gym Owners & Students.",
  testimonials: [
    {
      quote:
        "Gym OS completely transformed how we manage our 350+ gym members. The automated WhatsApp renewal reminders ensure our dues are collected on time, and our trainers love having member workout plans right on their phones.",
      name: "Vikram Rathore",
      role: "Owner, IronFit Club & Studio",
      avatar: "",
      stars: 5,
    },
    {
      quote:
        "The Library Management System gave our college library complete control over 15,000 titles. The barcode checkout scanner and automatic overdue fine reconciliation eliminated days of manual inventory work.",
      name: "Dr. S. K. Upadhyay",
      role: "Head Librarian, Engineering Institute",
      avatar: "",
      stars: 5,
    },
    {
      quote:
        "I ordered my B.Tech final-year IoT project from Buildroonix. Received a fully working ESP32 hardware circuit, custom 3D enclosure, cloud app, and a complete project report with viva questions. Scored an A+ grade in my final evaluation!",
      name: "Rohan Tripathi",
      role: "Final-Year B.Tech Student, Varanasi",
      avatar: "",
      stars: 5,
    },
    {
      quote:
        "Ordered a personalized heart-shaped lithophane lamp from 3d.buildroonix.com for an anniversary gift. When the LED turns on, the photo comes alive in stunning 3D relief. Safe packing and fast pan-India delivery!",
      name: "Ananya Mishra",
      role: "Verified 3D Customer, Lucknow",
      avatar: "",
      stars: 5,
    },
  ],

  faqKicker: "Buildroonix Engagement FAQ",
  faqHeading: "Frequently Asked Questions",
  faqSubhead:
    "How Buildroonix delivers software products, 3D printing orders, and student engineering projects.",
  faqs: [
    {
      q: "What software products does Buildroonix offer?",
      a: "We develop dedicated operational software including Library OS (with Manager, Admin, and Superadmin roles) and Gym OS (with Trainer, Manager, Admin, and Superadmin roles). In our active engineering roadmap are PG & Hostel Management, School Management, and Business Invoicing/GST ERP suites.",
    },
    {
      q: "How do I order 3D printed lithophane lamps or custom figurines?",
      a: "Our 3D printing products, custom lithophane photo lamps, and collectible figurines are hosted on our dedicated store at https://3d.buildroonix.com. You can upload your photo, customize dimensions, and order online with pan-India delivery.",
    },
    {
      q: "How does Buildroonix help engineering students with electronics projects?",
      a: "We provide complete, tested hardware project kits (based on ESP32, STM32, Arduino, or Raspberry Pi) with working circuits, custom 3D enclosures, complete source code, full project synopsis, circuit schematics, and viva defense preparation materials.",
    },
    {
      q: "Can you customize software for my specific school, gym, or business?",
      a: "Yes. All our software can be deployed with custom branding, specific staff role permissions, local payment gateway integration (Razorpay/UPI), and customized reports tailored to your operations.",
    },
    {
      q: "Is Buildroonix a registered enterprise in India?",
      a: "Yes, Buildroonix is a verified MSME registered enterprise in India with verified GSTIN (09HQHPD9487C1ZE) based in Varanasi, Uttar Pradesh, delivering software and products pan-India.",
    },
    {
      q: "How do I start a project discussion or request a quote?",
      a: "Reach out directly via WhatsApp at +91 9580181697, email support@buildroonix.com, or click 'Discuss Your Project' anywhere on the website.",
    },
  ],

  sectionVisibility: {
    divisions: true,
    software: true,
    featured: true,
    portfolio: true,
    process: true,
    techstack: true,
    audience: false,
    testimonials: true,
    faqs: true,
    vision: true,
  },
};
