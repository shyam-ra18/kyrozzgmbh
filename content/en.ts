/**
 * ============================================================
 * KYROZZ GmbH — Centralized Content File (English)
 * ============================================================
 * This is the single source of truth for all user-facing text
 * on the website in English.
 * ============================================================
 */

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
export const navbar = {
  links: [
    { label: "HOME", href: "/" },
    { label: "3D PRINTING", href: "/3d-printing" },
    { label: "INJECTION MOLDING & CNC", href: "/injection-molding" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ],
  languageLabel: "Language:",
};

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
export const footer = {
  links: [
    { label: "HOME", href: "/" },
    { label: "3D PRINTING", href: "/3d-printing" },
    { label: "INJECTION MOLDING & CNC", href: "/injection-molding" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ],
  description:
    "Your German manufacturing partner providing industrial-grade 3D printing, injection molding, CNC machining and strategic sourcing solutions worldwide.",
  badge1: "🇩🇪 German Managed",
  location: "Poschingerstraße 33, 94469 Deggendorf",
  copyright: "All rights reserved.",
};

// ─────────────────────────────────────────────
// HERO (Home page)
// ─────────────────────────────────────────────
export const hero = {
  line1: "German Engineering.",
  line2: "Global Manufacturing.",
  subtitle:
    "Your Partner for 3D Printing, Injection Molding, CNC Machining & Global Sourcing.",
  ctaPrimary: "REQUEST A QUOTE",
  ctaSecondary: "CONTACT US",
  bannerHeading: "Building the Future, Layer by Layer",
  bannerBody: "Our success is measured by the success of our customers. We are committed to delivering innovative manufacturing solutions that help businesses move faster, reduce costs, and bring better products to market.",
};

// ─────────────────────────────────────────────
// INTRODUCTION / SERVICES (Home page)
// ─────────────────────────────────────────────
export const introduction = {
  heading1: "Engineering Precision.",
  heading2: "Delivering Excellence.",
  body: "KYROZZ GmbH is a German manufacturing partner providing 3D printing, injection molding, CNC machining and sourcing solutions for industrial customers worldwide.\n\nWith local expertise in Germany and trusted production partners, we deliver quality, reliability and performance at every step.",
  cta: "LEARN MORE ABOUT US",
  services: [
    {
      image: "/cnc.png",
      title: "CNC MACHINING",
      desc: "Precision Components\nwith Tight Tolerances",
    },
    {
      image: "/3d-print.png",
      title: "3D PRINTING",
      desc: "Rapid Prototyping &\nProduction Parts",
    },
    {
      image: "/injection-molding.png",
      title: "INJECTION MOLDING",
      desc: "High-Quality Plastic Parts\nfor Global Markets",
    },
  ],
};

// ─────────────────────────────────────────────
// FEATURED SERVICES (Home page)
// ─────────────────────────────────────────────
export const featuredServices = [
  {
    id: "3d-printing",
    title: "3D Printing",
    highlight: "Components",
    subtitle:
      "Your Professional Partner for High-Quality Production of Plastic Components.",
    desc: "We specialize in 3D printing components, utilizing the FDM printing process. We invite you to explore our website to learn more about our company, our services, and how to contact us. We appreciate your visit to our website.",
    image: "/3d-print.png",
    imageAlt: "Active 3D Printer",
    ctaHref: "/3d-printing",
    alignRight: true,
    bgClass: "bg-white",
    cta: "LEARN MORE",
  },
  {
    id: "injection-molding",
    title: "Injection Molding",
    highlight: "Solutions",
    subtitle:
      "Precision Injection Molding Solutions Through Our Trusted Sourcing Network.",
    desc: "KYROZZ GmbH is a German-based project management company that delivers high-precision injection molded components through a network of carefully selected manufacturing partners worldwide. We manage your injection molding project from Germany — prototyping to high-volume production, delivered on time.",
    image: "/injection-molding.png",
    imageAlt: "Injection Molding Engineering",
    ctaHref: "/injection-molding",
    alignRight: false,
    bgClass: "bg-slate-50",
    cta: "LEARN MORE",
  },
  {
    id: "cnc-machining",
    title: "CNC Machining",
    highlight: "Services",
    subtitle: "High-Precision CNC Machined Parts with Tight Tolerances.",
    desc: "Precision milling and turning services in engineering metals and plastics. Ideal for functional parts, tooling, and low-volume production. Get components machined to your exact CAD specifications with fast turnaround times and German project management oversight.",
    image: "/laser_icon.svg",
    imageAlt: "CNC Machined Component",
    ctaHref: "/injection-molding",
    alignRight: true,
    bgClass: "bg-white",
    cta: "LEARN MORE",
  },
];

// ─────────────────────────────────────────────
// OUR MISSION (Home page)
// ─────────────────────────────────────────────
export const ourMission = {
  badge: "OUR MISSION",
  heading1: "Engineering Ideas Into",
  heading2: "Reliable Products",
  body1:
    "At KYROZZ GmbH, our mission is to empower engineers and product teams to confidently transform digital designs into dependable, production-ready components.",
  body2:
    "We specialize in application-driven manufacturing solutions, combining engineering expertise with advanced 3D Printing, CNC Machining, and Injection Molding technologies to deliver parts that perform reliably in real-world environments.",
  body3:
    "From rapid prototyping and design validation to low-volume production and scalable manufacturing, we help our clients select the right process, material, and production strategy for every stage of product development.",
  body4:
    "By accelerating innovation cycles, reducing technical and manufacturing risks, and ensuring consistent quality, we enable our clients to bring better products to market faster, more efficiently, and with greater confidence.",
  valueProps: [
    { title: "Precision", sub: "Without Compromise" },
    { title: "Faster Product-", sub: "development" },
    { title: "Reliable", sub: "Manufacturing" },
    { title: "Customer-Focused", sub: "Solutions" },
  ],
  commitmentTitle: "Our Commitment",
  commitmentsLeft: [
    "Engineering-Focused Solutions",
    "Industrial-Grade Manufacturing",
    "Fast Turnaround Times",
  ],
  commitmentsRight: [
    "High-Quality Materials",
    "Transparent Communication",
    "Reliable Delivery Across Europe",
  ],
  bannerHeading: "Building the Future, Layer by Layer",
  bannerBody:
    "Our success is measured by the success of our customers. We are committed to delivering innovative manufacturing solutions that help businesses move faster, reduce costs, and bring better products to market.",
};

// ─────────────────────────────────────────────
// INDUSTRIES BENTO (Home page)
// ─────────────────────────────────────────────
export const industriesBento = {
  heading: "Industries We Empower",
  industries: [
    {
      name: "Industrial Manufacturing",
      desc: "Functional parts, tooling, and production aids.",
      img: "/industrial-manufacturing.png",
    },
    {
      name: "Education & Research",
      desc: "Prototypes, teaching tools, and experiments.",
      img: "/education.png",
    },
    {
      name: "Hobbyist & Maker",
      desc: "Creative projects, custom parts, and more.",
      img: "/hobbyist.png",
    },
    {
      name: "Product Development",
      desc: "Prototypes and functional parts for faster innovation.",
      img: "/product-dev.png",
    },
    {
      name: "Model Making & Prototyping",
      desc: "Detailed models and visual prototypes.",
      img: "/model-making-prototype.png",
    },
    {
      name: "Custom Parts & Solutions",
      desc: "Tailored components for unique applications.",
      img: "/custom-part-sol.png",
    },
  ],
};

// ─────────────────────────────────────────────
// TEAM (Home page + About)
// ─────────────────────────────────────────────
export const team = {
  badge: "Our Team",
  heading1: "Meet Our",
  heading2: "Experts",
  heading2suffix: "",
  subheading:
    "A dedicated team working together to deliver reliable, high-quality 3D printing solutions.",
  areasTitle: "Areas of Focus",
  members: [
    {
      name: "Nirav Lukhi",
      role: "Founder & CEO",
      image: "/nirav.png",
      desc: "Driven by a strong entrepreneurial vision, Nirav founded KYROZZ GmbH to bridge innovative manufacturing solutions with global business opportunities.",
      areas: [
        "Business Development",
        "Global Sourcing",
        "Strategic Partnerships",
        "Company Leadership",
      ],
    },
    {
      name: "Pratik Kachariya",
      role: "AM Engineer",
      image: "/pratik.png",
      desc: "Pratik specializes in additive manufacturing and supports customers throughout the complete production process. His expertise includes FDM 3D printing and print optimization.",
      areas: [
        "Additive Manufacturing",
        "Print Optimization",
        "FDM Printing Technologies",
        "Quality Assurance",
      ],
    },
  ],
};

// ─────────────────────────────────────────────
// CONTACT SECTION
// ─────────────────────────────────────────────
export const contactSection = {
  badge: "Get in Touch",
  heading: "Upload Your Files Get an",
  headingHighlight: "Instant Quote",
  subheading:
    "Fill out the form below and upload your 3D files to get a fast, personalized quote for your project.",
  labels: {
    name: "Name *",
    company: "Company",
    email: "Email *",
    projectDesc: "Project / Description *",
    files: "3D Files",
  },
  placeholders: {
    name: "Enter your name",
    company: "Enter your company name",
    email: "Enter your email address",
    message: "Tell us about your project, requirements, materials...",
  },
  upload: {
    cta: "Upload a file",
    or: "or drag and drop",
    formats: "STL, STEP, OBJ, 3MF",
  },
  submitBtn: "Submit Request",
  successTitle: "Request Sent Successfully!",
  successBody:
    "We will review your project and get back to you within 24 hours.",
  successBtn: "Submit Another Request",
  errors: {
    name: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    message: "Project description is required",
  },
};

// ─────────────────────────────────────────────
// HTML SECTIONS (3D Printing page)
// ─────────────────────────────────────────────
export const htmlSections = {
  ticker: [
    "3D Printing",
    "Injection Molding",
    "CNC Machining",
    "German Project Management",
    "Rapid Prototyping",
    "FDM · SLA · SLS",
    "Bambu Lab H2S & P2S",
    "ABS · PLA · PETG · Nylon · TPU",
    "500+ Completed Projects",
    "Global Sourcing",
    "ISO 9001 Certified Partners",
  ],
  services: {
    heading: "Our Core Services",
    items: [
      {
        name: "3D Printing Services",
        text: "High-precision 3D printing using FDM technology for functional prototypes and end-use parts.",
        features: ["Prototype Development", "Functional Part Production", "Wide Material Selection"],
        img: "/3dprint-ser1.png",
      },
      {
        name: "Design & Engineering Support",
        text: "From concept to CAD model — we help bring your ideas to life with expert design assistance.",
        features: ["3D Modeling", "Design Optimization", "Print-Ready Files"],
        img: "/design-ser2.png",
      },
      {
        name: "Post-Processing & Finishing",
        text: "High-quality finishing services for a perfect fit, look, and performance.",
        features: ["Surface Treatment", "Support Structure Removal", "Quality Inspection"],
        img: "/post-ser3.png",
      },
    ],
  },
  process: {
    heading: "From Concept to Finished Part – Our Vetted Process",
    steps: [
      {
        num: "1. SEND YOUR FILE",
        desc: "Upload your 3D model (STL, OBJ, 3MF) and share your requirements.",
      },
      {
        num: "2. WE PREPARE & PLAN",
        desc: "We review your file and recommend the best material and settings.",
      },
      {
        num: "3. WE PRINT",
        desc: "Your part is printed with precision using the Bambu Lab H2S or P2S.",
      },
      {
        num: "4. QUALITY CHECK",
        desc: "Every part is inspected to ensure it meets our high standards.",
      },
      {
        num: "5. PACK & DELIVER",
        desc: "Carefully packed and shipped fast – straight to you.",
      },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        q: "How do I place an order for 3D printing?",
        a: "Fill out our contact form and send us your files if available. We will get in touch to discuss your requirements. After digital reconstruction of the part, we will confirm details (material, color, etc.) and provide a custom printing quote.",
      },
      {
        q: "What 3D file formats can you use?",
        a: "We support STL, STEP, 3MF, STP, and OBJ.",
      },
      {
        q: "What is 3D printing?",
        a: "3D printing, also known as additive manufacturing, is the process of creating three-dimensional objects by building them layer by layer using a computer-controlled printer.",
      },
      {
        q: "How does FDM 3D printing work?",
        a: "FDM (Fused Deposition Modeling) melts a thermoplastic filament and deposits it layer by layer to build the object. It is a reliable method for strong functional parts and prototypes.",
      },
      {
        q: "How long does it take to 3D print an object?",
        a: "Printing time depends on size, complexity, material, and quantity. Small parts can take a few hours, while larger or complex parts can take several days.",
      },
    ],
  },
};

// ─────────────────────────────────────────────
// BAMBU TECH SHOWCASE (3D Printing page)
// ─────────────────────────────────────────────
export const bambuTechShowcase = {
  technologyHeading: "Our 3D Printing Technology",
  h2s: {
    tagline: "Dual Nozzle. Maximum Versatility.",
    features: [
      "Dual-extruder for multi-material and multi-color printing",
      "High-speed, high-accuracy output",
      "Large build volume for bigger parts",
      "Advanced automation for unmatched reliability",
    ],
  },
  p2s: {
    tagline: "Speed. Precision. Performance.",
    features: [
      "High-speed printing with outstanding accuracy",
      "Reliable performance for prototypes and functional parts",
      "Easy to use, easy to trust",
      "Ideal for everyday production and engineering parts",
    ],
  },
  advantagesHeading: "Advantages of FDM 3D Printing",
  advantages: [
    {
      title: "1. Simplified Design & Manufacturing",
      desc: "Produce complex geometries as a single component, reducing assembly requirements and simplifying production processes.",
      checklist: [
        "Reduced Assembly Time",
        "Complex Geometries",
        "Lightweight Structures",
        "Faster Product Development",
      ],
    },
    {
      title: "2. Cost-Effective Production",
      desc: "FDM printing significantly reduces tooling costs and production expenses compared to traditional manufacturing.",
      checklist: [
        "No Tooling Required",
        "Lower Production Costs",
        "Ideal for Small Batches",
        "Reduced Inventory Needs",
      ],
    },
    {
      title: "3. Fast Turnaround Times",
      desc: "Most components can be manufactured within hours instead of weeks.",
      checklist: [
        "Rapid Prototyping",
        "Faster Design Validation",
        "Short Lead Times",
        "Quick Market Entry",
      ],
    },
    {
      title: "4. Sustainable Manufacturing",
      desc: "FDM printing uses only the material needed for the part, minimizing waste and reducing environmental impact.",
      checklist: [
        "Minimal Material Waste",
        "Energy Efficient Production",
        "Recyclable Material Options",
        "Environmentally Responsible",
      ],
    },
    {
      title: "5. Strong & Durable Components",
      desc: "FDM-printed parts offer excellent mechanical performance and are suitable for demanding industrial applications.",
      checklist: [
        "High Strength",
        "Impact Resistance",
        "Thermal Resistance",
        "Long Service Life",
      ],
    },
  ],
  highlights: [
    { label: "Advanced\nPrinters", desc: "Bambu Lab H2S & P2S" },
    { label: "Materials", desc: "Wide range of engineering filaments" },
    { label: "High\nPrecision", desc: "Consistent accuracy for every project" },
    { label: "Fast\nTurnaround", desc: "Quick production, on-time delivery" },
    { label: "Satisfaction\nGuaranteed", desc: "Quality you can trust, service you can rely on" },
  ],
  fdmSection: {
    heading1: "Why Choose",
    heading2: "FDM 3D Printing?",
    tagline: "Efficient. Durable. Cost-Effective.",
    body1:
      "FDM (Fused Deposition Modeling) is one of the most reliable and widely used additive manufacturing technologies for functional prototypes, engineering components, and low-volume production.",
    body2:
      "At KYROZZ GmbH, we utilize advanced Bambu Lab H2S and P2S systems to deliver precise, durable, and affordable 3D printed components for industrial and commercial applications.",
    ctaPrimary: "REQUEST A QUOTE",
    ctaSecondary: "CONTACT US",
  },
  processHeading: "From Concept to Finished Part",
  processSteps: [
    { num: "1. SEND YOUR FILE", desc: "Upload your 3D model (STL, OBJ, 3MF) and share your requirements." },
    { num: "2. WE PREPARE & PLAN", desc: "We review your file and recommend the best material and settings." },
    { num: "3. WE PRINT", desc: "Your part is printed with precision using the Bambu Lab H2S or P2S." },
    { num: "4. QUALITY CHECK", desc: "Every part is inspected to ensure it meets our high standards." },
    { num: "5. PACK & DELIVER", desc: "Carefully packed and shipped fast – straight to you." },
  ],
};

// ─────────────────────────────────────────────
// SIMPLE ORDERING PROCESS (3D Printing page)
// ─────────────────────────────────────────────
export const simpleOrderingProcess = {
  heading: "Our Simple 3-Step Ordering Process",
  steps: [
    {
      num: "01",
      title: "Upload Your File",
      desc: "Upload your STL, OBJ, AMF, or 3MF file using our secure upload system. We support .zip files for multiple files.",
    },
    {
      num: "02",
      title: "Choose Your Material",
      desc: "Select the best material for your project from our wide range of high-quality options.",
    },
    {
      num: "03",
      title: "We Print & Deliver",
      desc: "We print with precision, perform quality checks, and deliver your parts safely to your doorstep.",
    },
  ],
  bullets: [
    "We review your file for printability and contact you if adjustments are needed.",
    "You'll receive an order confirmation with estimated delivery time.",
    "Once printed, each part goes through a thorough quality inspection.",
    "Your order is carefully packed and shipped with tracking information.",
  ],
  cardHeading: "Precision. Quality. Delivered.",
  highlights: [
    {
      title: "File Check",
      desc: "We verify your file to ensure the best results.",
    },
    {
      title: "Material Guidance",
      desc: "Not sure which material to choose? We're here to help.",
    },
    {
      title: "Real-Time Updates",
      desc: "Stay informed at every step of your order.",
    },
    {
      title: "Safe Packaging",
      desc: "Your parts are securely packed to ensure safe delivery.",
    },
  ],
};

// ─────────────────────────────────────────────
// WHAT YOU EXPECT (About + 3D Printing page)
// ─────────────────────────────────────────────
export const whatYouExpect = {
  badge: "Our Commitment",
  heading1: "What You Can",
  heading2: "Expect from KYROZZ",
  body: "We combine German engineering precision with client-oriented service. Every engagement is built on transparency, quality, and exceptional performance.",
  expectations: [
    {
      num: "01",
      title: "Customer-Focused Solutions",
      desc: "We listen, understand, and deliver solutions tailored exactly to your needs.",
    },
    {
      num: "02",
      title: "Experienced Professionals",
      desc: "Our expertise ensures flawless results from consultation to completion.",
    },
    {
      num: "03",
      title: "Fast & Reliable Turnaround",
      desc: "We value your time and guarantee quick, dependable service and delivery.",
    },
    {
      num: "04",
      title: "High Quality Assured",
      desc: "Premium materials and advanced technology for precise, durable, and consistent parts.",
    },
    {
      num: "05",
      title: "Great Value for Money",
      desc: "Excellent quality and service at a competitive price-performance ratio.",
    },
  ],
};



// ─────────────────────────────────────────────
// PAGE HERO COMPONENT (Reusable)
// ─────────────────────────────────────────────
export const pageHero = {
  defaultBadge: "Page",
};

// ─────────────────────────────────────────────
// SUB CTA COMPONENT DEFAULTS
// ─────────────────────────────────────────────
export const subCTA = {
  defaultPrimary: "Request a Quote",
  defaultSecondary: "Speak to an Expert",
};

// ─────────────────────────────────────────────
// PAGE: HOME (/)
// ─────────────────────────────────────────────
export const homePage = {
  metadata: {
    title: "Injection Molding Manufacturer | KYROZZ GmbH Germany",
    description:
      "German-managed injection molding, 3D printing and assembly services. 500+ completed projects, 20+ global partners, delivered in 15+ countries.",
  },
};

// ─────────────────────────────────────────────
// PAGE: 3D PRINTING (/3d-printing)
// ─────────────────────────────────────────────
export const threeDPrintingPage = {
  metadata: {
    title: "3D Printing Service Germany | Industrial Prototyping | KYROZZ GmbH",
    description:
      "Industrial 3D printing for fast prototypes in real engineering materials. ABS, PLA, Aluminum, and more. From CAD to part in days.",
  },
  hero: {
    heading1: "3D Printing",
    heading2: "Components",
    subtitle:
      "Your Professional Partner for High-Quality Production of Plastic Components.",
    body: "We specialize in 3D printing components, utilizing FDM printing process. We invite you to explore our website to learn more about our company, our services, and how to contact us. We appreciate your visit to our website.",
    ctaPrimary: "REQUEST A QUOTE",
    ctaSecondary: "LEARN MORE",
  },
  whySection: {
    badge: "Advantages",
    heading: "Why Choose 3D Printing with",
    headingHighlight: "KYROZZ?",
  },
  technologySection: {
    heading1: "Our 3D Printing",
    heading2: "Technology",
  },
  applicationsSection: {
    badge: "Industries",
    heading: "Applications We",
    headingHighlight: "Serve",
  },
  cta: {
    heading1: "From concept to creation,",
    heading2: "we print your ideas into reality.",
    body: "Partner with KYROZZ for reliable, innovative, and high-quality 3D printed components.",
    ctaPrimary: "GET A QUOTE",
    ctaSecondary: "CONTACT US",
  },
  reasons: [
    { title: "High Precision", desc: "Complex geometries with fine details and tight tolerances." },
    { title: "Fast Turnaround", desc: "Rapid prototyping and quick production to meet your timelines." },
    { title: "Design Freedom", desc: "No tooling required — bring your ideas to life without limitations." },
    { title: "Multiple Materials", desc: "Wide range of engineering plastics to suit every application." },
    { title: "Reliable Quality", desc: "Consistent, durable, and high-quality components you can trust." },
  ],
  materials: ["ABS", "PC", "PLA", "Nylon (PA)", "PETG", "TPU", "ASA", "And More"],
  fdmSection: {
    heading: "FDM Printing",
    body: "Fused Deposition Modeling (FDM) is ideal for functional prototypes and production parts with durability and cost-efficiency.",
    features: ["Strong & Durable Parts", "Wide Range of Materials", "Cost-Effective Solutions"],
    materialsHeading: "Materials We Work With",
  },
  applications: [
    { title: "Prototyping" },
    { title: "Product Development" },
    { title: "Jigs & Fixtures" },
    { title: "End-Use Parts" },
    { title: "Custom Solutions" },
  ],
};

// ─────────────────────────────────────────────
// PAGE: INJECTION MOLDING & CNC (/injection-molding)
// ─────────────────────────────────────────────
export const injectionMoldingPage = {
  metadata: {
    title: "Injection Molding | KYROZZ GmbH",
    description:
      "Plastic injection molding managed from Germany. Prototyping to mass production, European quality standards.",
  },
  hero: {
    heading1: "Global Manufacturing.",
    heading2: "German",
    heading2rest: "Reliability.",
    subtitle1: "Precision Injection Molding Solutions",
    subtitle2: "Through Our Trusted Global Manufacturing Network.",
    body: "KYROZZ GmbH is a German-based project management company that delivers high-precision injection molded components through a network of carefully selected manufacturing partners worldwide.",
    icons: [
      {
        title: "German\nProject\nManagement",
        sub: "Your single point\nof contact in Europe",
      },
      {
        title: "Quality\nOversight",
        sub: "Strict quality control\n& inspection",
      },
      {
        title: "Global\nManufacturing\nNetwork",
        sub: "Trusted partners\nworldwide",
      },
      {
        title: "Timely\nDelivery",
        sub: "On-time delivery\nyou can depend on",
      },
    ],
  },
  whySection: {
    heading: "WHY KYROZZ FOR INJECTION MOLDING & CNC MACHINING?",
    items: [
      {
        title: "Global Production. German Oversight.",
        desc: "We collaborate with a carefully selected network of certified manufacturing partners specializing in injection molding and CNC machining, ensuring the highest standards of quality, precision, and reliability.",
      },
      {
        title: "German Project Management.",
        desc: "We manage every step of your project—from technical review and supplier selection to production oversight, quality assurance, and final delivery.",
      },
      {
        title: "Quality You Can Trust.",
        desc: "Our quality experts ensure that every molded or machined component meets European standards through rigorous inspections, process monitoring, and continuous quality control.",
      },
      {
        title: "On Time. Every Time.",
        desc: "We coordinate the entire manufacturing and supply chain process to ensure your injection molded and CNC-machined parts are delivered reliably and on schedule.",
      },
    ],
    advantagesHeading: "YOUR ADVANTAGES",
    advantages: [
      "German Customer Support",
      "Dedicated Project Management",
      "Trusted Global Manufacturing Partners",
      "Precision Manufacturing Expertise (Injection Molding & CNC Machining)",
      "Competitive Production Costs",
      "Comprehensive Quality Control & Inspection",
      "Reliable Logistics & On-Time Delivery",
      "Single Point of Contact in Europe",
    ],
  },
  metrics: [
    { val: "500+", lbl: "Completed Projects" },
    { val: "20+", lbl: "Global Manufacturing Partners" },
    { val: "15+", lbl: "Countries Served" },
    { val: "100%", lbl: "Customer-Focused Project Management" },
  ],
  onePartner: {
    heading1: "We are the legacy of",
    heading2: "precision manufacturing.",
    body1: "Shaping high-performance components through injection molding and CNC machining.",
    body2: "We manufacture more than parts;",
    body3: "we build lasting partnerships.",
  },
  processSteps: [
    { num: "1", title: "YOUR INQUIRY", desc: "You send us your\nrequirements" },
    { num: "2", title: "PROJECT REVIEW", desc: "We analyze &\nprovide best solution" },
    { num: "3", title: "PARTNER SELECTION", desc: "We choose the right\nmanufacturing partner" },
    { num: "4", title: "PRODUCTION & QC", desc: "Production with strict\nquality control" },
    { num: "5", title: "DELIVERY", desc: "On-time delivery to\nyour location" },
  ],
};

// ─────────────────────────────────────────────
// PAGE: ABOUT US (/about)
// ─────────────────────────────────────────────
export const aboutPage = {
  metadata: {
    title: "About KYROZZ GmbH — German Injection Molding Project Management",
    description:
      "50+ years of manufacturing expertise. German-managed global injection molding network. Your trusted partner for precision plastic manufacturing.",
  },
  hero: {
    badge: "About KYROZZ",
    headingLine1: "German Management.",
    headingLine2: "Global Production. Your Success.",
    description:
      "For 50+ years, KYROZZ GmbH has been connecting European businesses with world-class injection molding manufacturers — managed with German precision from our Deggendorf headquarters.",
  },
  model: {
    badge: "Our Model",
    heading: "We Manage. Partners Produce.",
    body1:
      "KYROZZ doesn't operate its own factory. Instead, we maintain a vetted network of world-class injection molding manufacturers that we have rigorously selected and audited over decades.",
    body2:
      "Our German project management team acts as your single point of contact, coordinating everything from initial DFM review through production, quality control, customs, and delivery.",
    body3:
      "This model gives you the benefits of global manufacturing cost efficiency with the quality assurance, communication standards, and accountability of a German partner.",
    stats: [
      { label: "Years in Business", value: "50+" },
      { label: "Completed Projects", value: "500+" },
      { label: "Global Partners", value: "20+" },
      { label: "Countries Served", value: "15+" },
    ],
  },
  whySection: {
    badge: "Why KYROZZ",
    heading: "7 Reasons Companies Choose KYROZZ",
    reasons: [
      { title: "German Project Management", desc: "Your single point of contact in Germany managing everything." },
      { title: "Global Manufacturing Network", desc: "20+ vetted partners worldwide delivering European quality standards." },
      { title: "End-to-End Service", desc: "From DFM review through production, QC, and delivery — we handle it all." },
      { title: "Fast Turnaround", desc: "Prototypes in 2 weeks, quotes within 24 hours." },
      { title: "Competitive Pricing", desc: "Global manufacturing cost savings with German quality oversight." },
      { title: "Quality Guarantee", desc: "100% inspection and European quality standards on every order." },
      { title: "Transparent Communication", desc: "Regular updates, English and German support, no surprises." },
    ],
  },
  globalNetwork: {
    badge: "Global Network",
    heading: "A Global Manufacturing Network",
    body: "Our manufacturing partners are located across Europe, Asia, and beyond — each audited and approved by our German quality team.",
    countries: ["China", "Vietnam", "Germany", "Czech Republic", "Poland", "Turkey"],
  },
  cta: {
    title: "Work with a Partner You Can Trust",
    description: "50+ years of manufacturing excellence, managed from Germany.",
    primaryText: "Get in Touch",
    primaryHref: "/contact",
  },
};

// ─────────────────────────────────────────────
// PAGE: CONTACT (/contact)
// ─────────────────────────────────────────────
export const contactPage = {
  hero: {
    badge: "Contact",
    headingLine1: "Let's Talk About Your",
    headingLine2: "Project",
    description: "Send us your requirements and we will respond within 24 business hours.",
  },
};

// ─────────────────────────────────────────────
// CONTENT FILES: FAQ (Injection Molding)
// ─────────────────────────────────────────────
export const injectionMoldingFAQs = [
  {
    question: "What is the minimum order quantity for injection molding?",
    answer:
      "KYROZZ works with projects starting from prototype quantities (as few as 50-100 parts) all the way to millions of units. Our minimum order depends on the part complexity and tooling cost. We recommend contacting us with your project details for an accurate assessment.",
  },
  {
    question: "How long does it take to get a prototype injection mold?",
    answer:
      "Rapid prototype tooling typically takes 2-4 weeks depending on part complexity. Production-grade steel tooling takes 4-8 weeks. We can expedite timelines for urgent projects. Once tooling is complete, sample parts are produced and sent within 1-2 weeks for your approval.",
  },
  {
    question: "What quality standards does KYROZZ enforce?",
    answer:
      "All parts are produced to European quality standards with 100% dimensional inspection. We conduct melt flow testing, drop testing, stack load testing, leakage testing, and wall thickness verification. Critical parts can be sent for external IIP certification testing.",
  },
  {
    question: "Can you handle both prototyping and mass production?",
    answer:
      "Yes. KYROZZ manages the full product lifecycle — from initial design consultation and DFM review through prototype tooling, sampling, production ramp-up, and mass production. Your project manager in Germany coordinates everything with our vetted global manufacturing partners.",
  },
  {
    question: "What materials can you injection mold?",
    answer:
      "We work with all major engineering thermoplastics including PP, ABS, PA66, POM, PC, HDPE, LDPE, TPE, and specialized materials for medical and food-contact applications. Our engineers can recommend the optimal material based on your part requirements and budget.",
  },
];

// ─────────────────────────────────────────────
// CONTENT FILES: INDUSTRIES
// ─────────────────────────────────────────────
export const industries = [
  {
    slug: "automotive",
    name: "Automotive",
    icon: "🚗",
    h1: "Automotive Plastic Parts — Precision Under Pressure",
    description: "Tight tolerances, heat-resistant materials, and zero defects for the automotive supply chain.",
    keyAngle: "Tight tolerances, heat resistance",
    painPoints: [
      "Stringent dimensional tolerances",
      "High-temperature environment requirements",
      "Long-term durability under vibration",
      "Strict OEM quality documentation",
    ],
    solutions: [
      "DFM-optimized tool design for tight tolerances",
      "PA66, POM, and PC materials for heat resistance",
      "Full dimensional reports and PPAP documentation",
      "European quality oversight on every batch",
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    icon: "⚡",
    h1: "Electrical Housing & Enclosures — Injection Molded",
    description: "UL-rated materials, IP-rated housings, and precise fitment for electrical and electronic components.",
    keyAngle: "UL-rated materials, IP ratings",
    painPoints: [
      "Flammability and UL rating requirements",
      "Precise fitment for connectors and PCBs",
      "IP-rated sealing requirements",
      "EMI shielding compatibility",
    ],
    solutions: [
      "V0-rated PC/ABS blends for flammability",
      "±0.05mm tolerance for electrical fitment",
      "Overmolding for integrated seals",
      "Conductive material options for EMI",
    ],
  },
  {
    slug: "medical",
    name: "Medical",
    icon: "🏥",
    h1: "Medical-Grade Plastic Components",
    description: "ISO cleanroom production, biocompatible materials, and full traceability for medical devices.",
    keyAngle: "ISO cleanroom, biocompatible materials",
    painPoints: [
      "Biocompatibility and FDA/CE compliance",
      "Full material and process traceability",
      "Sterile packaging requirements",
      "Rigorous dimensional validation",
    ],
    solutions: [
      "ISO 10993-tested biocompatible materials",
      "Full batch traceability and documentation",
      "Cleanroom molding conditions available",
      "CMM dimensional validation reports",
    ],
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods",
    icon: "🛍️",
    h1: "Consumer Product Injection Molding",
    description: "Speed to market, design flexibility, and competitive unit costs for consumer product brands.",
    keyAngle: "Speed to market, design flexibility",
    painPoints: [
      "Short time-to-market pressure",
      "Cost sensitivity at consumer price points",
      "Complex aesthetics and surface finishes",
      "Frequent design iteration requirements",
    ],
    solutions: [
      "Rapid tooling in 2-4 weeks",
      "Competitive pricing through global partner network",
      "Class A surface finishes and custom colors",
      "Agile tooling changes with fast turnaround",
    ],
  },
];

// ─────────────────────────────────────────────
// CONTENT FILES: MATERIALS
// ─────────────────────────────────────────────
export const materials = [
  {
    name: "Polypropylene",
    shortName: "PP",
    properties: "Lightweight, chemical resistant, good fatigue resistance",
    typicalUse: "Filter housings, packaging, automotive parts",
    tempRange: "-10°C to 130°C",
    costLevel: "Low" as const,
    color: "#3B82F6",
  },
  {
    name: "Acrylonitrile Butadiene Styrene",
    shortName: "ABS",
    properties: "Good impact resistance, rigid, easy to process",
    typicalUse: "Consumer electronics, automotive trim, enclosures",
    tempRange: "-20°C to 80°C",
    costLevel: "Low" as const,
    color: "#10B981",
  },
  {
    name: "Polyamide 66",
    shortName: "PA66",
    properties: "High strength, heat resistant, wear resistant",
    typicalUse: "Pump bodies, gears, connectors",
    tempRange: "-40°C to 120°C",
    costLevel: "Medium" as const,
    color: "#F59E0B",
  },
  {
    name: "Polyoxymethylene",
    shortName: "POM",
    properties: "High stiffness, low friction, dimensional stability",
    typicalUse: "Precision parts, bearings, valve components",
    tempRange: "-40°C to 100°C",
    costLevel: "Medium" as const,
    color: "#8B5CF6",
  },
  {
    name: "Polycarbonate",
    shortName: "PC",
    properties: "High impact resistance, optical clarity, heat resistant",
    typicalUse: "Optical components, safety equipment, medical devices",
    tempRange: "-40°C to 130°C",
    costLevel: "High" as const,
    color: "#EC4899",
  },
  {
    name: "High-Density Polyethylene",
    shortName: "HDPE",
    properties: "Chemical resistant, food-safe, flexible at low temps",
    typicalUse: "Containers, pipes, food contact applications",
    tempRange: "-50°C to 90°C",
    costLevel: "Low" as const,
    color: "#06B6D4",
  },
  {
    name: "Thermoplastic Elastomer",
    shortName: "TPE",
    properties: "Flexible, rubber-like, recyclable",
    typicalUse: "Seals, grips, soft-touch components",
    tempRange: "-40°C to 120°C",
    costLevel: "Medium" as const,
    color: "#F97316",
  },
];

// ─────────────────────────────────────────────
// CONTENT FILES: PRODUCTS
// ─────────────────────────────────────────────
export const products = [
  {
    id: "1",
    slug: "pp-filter-housing-10",
    name: 'PP Filter Housing 10"',
    category: "water-filtration" as const,
    description: "Standard 10-inch polypropylene filter housing for residential and light commercial water filtration systems.",
    material: "Polypropylene (PP)",
    image: "/images/products/filter-housing.png",
  },
  {
    id: "2",
    slug: "pp-filter-housing-20",
    name: 'PP Filter Housing 20"',
    category: "water-filtration" as const,
    description: "Heavy-duty 20-inch filter housing for commercial and industrial water treatment applications.",
    material: "Polypropylene (PP)",
    image: "/images/products/filter-housing-20.png",
  },
  {
    id: "3",
    slug: "twin-filter-housing",
    name: "Twin PP Filter Housing",
    category: "water-filtration" as const,
    description: "Dual-stage filtration housing for enhanced water purification with two cartridge slots.",
    material: "Polypropylene (PP)",
    image: "/images/products/twin-housing.png",
  },
  {
    id: "4",
    slug: "centrifugal-pump-body",
    name: "Centrifugal Pump Body",
    category: "pump-components" as const,
    description: "Precision-molded centrifugal pump body for water circulation systems, chemical-resistant.",
    material: "PA66 (Nylon)",
    image: "/images/products/pump-body.png",
  },
  {
    id: "5",
    slug: "pump-impeller",
    name: "Pump Impeller",
    category: "pump-components" as const,
    description: "High-efficiency injection molded impeller for centrifugal pumps, balanced for low vibration.",
    material: "PPO (Noryl)",
    image: "/images/products/impeller.png",
  },
  {
    id: "6",
    slug: "sediment-filter-cartridge",
    name: "Sediment Filter Cartridge",
    category: "filter-media" as const,
    description: "5-micron sediment filter cartridge for pre-filtration of water systems.",
    material: "Polypropylene (PP)",
    image: "/images/products/sediment-filter.png",
  },
  {
    id: "7",
    slug: "carbon-block-cartridge",
    name: "Carbon Block Cartridge",
    category: "filter-media" as const,
    description: "Activated carbon block cartridge for chlorine, taste, and odor reduction.",
    material: "Activated Carbon / PP",
    image: "/images/products/carbon-block.png",
  },
  {
    id: "8",
    slug: "pp-granules-injection",
    name: "PP Granules (Injection Grade)",
    category: "raw-materials" as const,
    description: "Food-grade polypropylene granules optimized for injection molding applications.",
    material: "Polypropylene (PP)",
    image: "/images/products/pp-granules.png",
  },
];

export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "water-filtration", label: "Water Filtration" },
  { id: "pump-components", label: "Pump Components" },
  { id: "filter-media", label: "Filter Media" },
  { id: "raw-materials", label: "Raw Materials" },
];

// ─────────────────────────────────────────────
// PAGE: MATERIALS (/materials)
// ─────────────────────────────────────────────
export const materialsPage = {
  metadata: {
    title: "Injection Molding Materials Guide | PP, ABS, PA, POM | KYROZZ GmbH",
    description: "Complete guide to injection molding materials. Compare PP, ABS, PA66, POM, PC, HDPE, TPE for your application. Material selection help from KYROZZ engineers.",
  },
  hero: {
    label: "Materials Guide",
    title: "Which Plastic Material Is Right for Your Part?",
    description: "Material expertise that ensures your parts perform in their intended environment.",
  },
  table: {
    label: "Comparison",
    title: "Material Comparison Table",
    headers: ["Material", "Properties", "Typical Use", "Temp Range", "Cost"],
  },
  selection: {
    label: "Selection Guide",
    title: "How to Choose the Right Material",
    items: [
      { q: "Is the part in contact with food or drinking water?", a: "PP, HDPE, or PETG (food-grade grades)" },
      { q: "Does the part need to withstand >100°C?", a: "PA66, PC, or PPS" },
      { q: "Is flexibility or rubber-feel required?", a: "TPE or TPU" },
      { q: "Is dimensional stability critical?", a: "POM or PA66+GF" },
      { q: "Is optical clarity needed?", a: "PC or PMMA" },
    ],
  },
  sustainability: {
    label: "Sustainability",
    title: "Sustainable Material Options",
    description: "KYROZZ supports sustainable manufacturing with bio-based and recycled material options for qualifying applications.",
    bullets: [
      "Bio-based PLA and PHA options",
      "Post-consumer recycled (PCR) PP and HDPE",
      "Ocean-bound plastic materials (on request)",
      "Halogen-free formulations available",
      "Full material data sheets and compliance docs",
    ],
    notSure: "Not sure which material? Our engineers will review your application and recommend the optimal material for performance and cost.",
  },
  bottomCTA: {
    title: "Not Sure Which Material?",
    description: "Ask our engineers — free material consultation with every quote request.",
    cta: "Ask Our Engineers",
  }
};

// ─────────────────────────────────────────────
// PAGE: PRODUCTS (/products)
// ─────────────────────────────────────────────
export const productsPage = {
  hero: {
    badge: "Product Catalogue",
    title: "Injection Molded Products",
    titleHighlight: "— Standard & Custom",
    description: "Browse our manufactured products or request a custom part for your application.",
  },
  enquire: "Enquire",
  noProducts: "No products found in this category.",
  subCTA: {
    title: "Don't See What You Need?",
    description: "We manufacture custom injection molded parts to your specifications. Share your requirements and we'll build it.",
    primaryText: "Request Custom Part",
  }
};
