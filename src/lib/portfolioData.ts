export interface TechStackItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "AI & Cloud";
}

export interface PortfolioProject {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "Business & SaaS" | "Education & EdTech" | "AI & Automation" | "Fintech & E-Commerce" | "Logistics & Cloud";
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  image: string;
  gallery: string[];
  liveUrl: string;
  featured: boolean;
  completionYear: string;
  client: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    feedback: string;
  };
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "1",
    slug: "knowledgic-digital-solutions",
    name: "Knowledgic.com",
    tagline: "Enterprise Knowledge Management & Digital Workspace Platform",
    category: "Business & SaaS",
    industry: "Enterprise SaaS & Corporate Learning",
    description: "A state-of-the-art enterprise knowledge management hub enabling remote teams to organize documentation, collaborate in real time, and query company data using customized AI agents.",
    challenge: "Knowledgic needed to transition from legacy scattered wiki tools to a unified, ultra-fast platform capable of rendering thousands of documents without latency while providing bank-grade security.",
    solution: "Engineered a Next.js 16 App Router architecture paired with serverless edge rendering and vector search algorithms for instant document retrieval.",
    results: [
      { label: "Organic Traffic Growth", value: "+210%" },
      { label: "Document Query Speed", value: "< 150ms" },
      { label: "Active Enterprise Users", value: "85,000+" }
    ],
    techStack: ["Next.js 16", "React 19", "TailwindCSS", "Node.js", "MongoDB", "OpenAI API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://knowledgic.com",
    featured: true,
    completionYear: "2026",
    client: {
      name: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Knowledgic Global",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      feedback: "WebFix Expert delivered a masterpiece! Our team productivity increased by 40% within the first month of launching Knowledgic.com."
    }
  },
  {
    id: "2",
    slug: "dishari-learning-jobs-hub",
    name: "Dishari.com",
    tagline: "Career Guidance, Skill Assessment & Online Job Matching Engine",
    category: "Education & EdTech",
    industry: "EdTech & Human Resources",
    description: "Dishari is an AI-assisted career advisory platform matching graduates with top tech employers while offering structured micro-credential courses.",
    challenge: "Handling over 100,000 concurrent students taking live skill assessments required high-concurrency microservices and real-time WebSocket test scoring.",
    solution: "Built a microservice infrastructure utilizing Redis cache queues, Next.js server components, and dynamic automated certificate generators.",
    results: [
      { label: "Active Job Seekers", value: "120,000+" },
      { label: "Successful Placements", value: "14,500+" },
      { label: "Assessment Accuracy", value: "98.4%" }
    ],
    techStack: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://dishari.com",
    featured: true,
    completionYear: "2026",
    client: {
      name: "Dr. Farhana Yasmin",
      role: "Founder & CEO",
      company: "Dishari Education Network",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      feedback: "The WebFix Expert team transformed our vision into a sleek, lightning-fast platform that our students absolute love."
    }
  },
  {
    id: "3",
    slug: "eschool-pro-cloud-management",
    name: "E-SchoolPro.com",
    tagline: "Cloud-Native School ERP, Attendance & Payment Gateway",
    category: "Education & EdTech",
    industry: "K-12 & University Administration",
    description: "An all-in-one cloud management software for schools providing automated fee collection, SMS notifications, gradebooks, and parent portal applications.",
    challenge: "Schools required 100% offline-tolerant synchronization and multi-tenant security isolations for thousands of sensitive student records.",
    solution: "Designed multi-tenant MongoDB database schemas with localized offline caching and dynamic localized SMS notification queues.",
    results: [
      { label: "Schools Onboarded", value: "250+" },
      { label: "Fee Collection Efficiency", value: "+85%" },
      { label: "Daily Active Parents", value: "65,000+" }
    ],
    techStack: ["React 19", "Node.js", "Express", "MongoDB", "Stripe", "Twilio"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2632&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://eschoolpro.com",
    featured: false,
    completionYear: "2025",
    client: {
      name: "Chowdhury Hasan",
      role: "Managing Director",
      company: "E-SchoolPro Inc",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      feedback: "WebFix Expert's attention to security and UX design is unparalleled. Our client retention rate is at an all-time high of 99%."
    }
  },
  {
    id: "4",
    slug: "webfix-expert-ai-tools-suite",
    name: "WebFix AI Tools Suite",
    tagline: "Automated SEO Article Publisher & Social Media Auto-Poster",
    category: "AI & Automation",
    industry: "Marketing & AI Software",
    description: "Our proprietary SaaS toolsuite automating content creation, keyword research, site speed optimization, and multi-channel social media posts.",
    challenge: "Integrating custom LLM chains with high rate limits and streaming markdown responses to client browser dashboards in real-time.",
    solution: "Built a Python FastAPI inference backend connected via Server-Sent Events (SSE) to a custom Next.js glassmorphism web dashboard.",
    results: [
      { label: "Articles Published", value: "500,000+" },
      { label: "Time Saved / Week", value: "25 Hours" },
      { label: "User Satisfaction", value: "4.9 / 5.0" }
    ],
    techStack: ["Next.js 16", "Python", "FastAPI", "OpenAI GPT-4o", "TailwindCSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://webfix.expert/products",
    featured: true,
    completionYear: "2026",
    client: {
      name: "Elena Rostova",
      role: "Head of Marketing",
      company: "Vanguard Digital Media",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      feedback: "The AI Auto Publisher tool revolutionized our organic search strategy. We doubled our site domain rating in 90 days."
    }
  },
  {
    id: "5",
    slug: "apex-logistics-fleet-tracker",
    name: "Apex Global Fleet Tracker",
    tagline: "Real-Time Telematics & Cargo Routing Dashboard for Logistics",
    category: "Logistics & Cloud",
    industry: "Supply Chain & Freight",
    description: "A high-performance IoT logistics dashboard tracking cargo vessels, container temperatures, and driver routing efficiency globally.",
    challenge: "Rendering over 10,000 live GPS coordinate updates every second on dynamic WebGL maps without frame drops.",
    solution: "Utilized Mapbox GL JS with custom WebAssembly vector rendering pipelines for silky smooth 60fps tracking visualizer.",
    results: [
      { label: "Idle Fuel Reduction", value: "-35%" },
      { label: "On-Time Delivery Rate", value: "99.4%" },
      { label: "Fleet Monitored", value: "12,000 Vehicles" }
    ],
    techStack: ["React", "Mapbox GL", "WebSockets", "Go", "InfluxDB", "Docker"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://apexlogistics.io",
    featured: false,
    completionYear: "2025",
    client: {
      name: "Robert Sterling",
      role: "VP of Logistics",
      company: "Apex Freight Corp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      feedback: "Flawless execution! The real-time fleet tracker saved our operations team thousands of hours in manual reporting."
    }
  },
  {
    id: "6",
    slug: "vibepay-fintech-checkout",
    name: "VibePay Digital Wallet",
    tagline: "Cross-Border Merchant Checkout Gateway & Micro-Savings App",
    category: "Fintech & E-Commerce",
    industry: "Financial Services & Payments",
    description: "A PCI-DSS compliant fintech mobile app and payment gateway supporting multi-currency checkouts, QR payments, and instant settlement.",
    challenge: "Ensuring zero-latency sub-second transaction verification under peak Black Friday load spikes.",
    solution: "Built serverless payment API endpoints integrated with Stripe, Razorpay, and direct banking webhooks.",
    results: [
      { label: "Monthly Transaction Volume", value: "$12M+" },
      { label: "Checkout Conversion Rate", value: "+42%" },
      { label: "Dispute Fraud Rate", value: "< 0.01%" }
    ],
    techStack: ["React Native", "Next.js", "Node.js", "Stripe API", "PCI-DSS Security"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://vibepay.com",
    featured: false,
    completionYear: "2026",
    client: {
      name: "Samantha Wright",
      role: "Head of Product",
      company: "VibePay Fintech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      feedback: "WebFix Expert built a financial gateway that instills total trust in our customers. Outstanding work!"
    }
  }
];
