export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Development" | "Design & Media" | "Digital Marketing" | "Paid Advertising" | "AI & Automation";
  iconName: string;
  color: string;
  borderColor: string;
  glowColor: string;
  highlight?: boolean;
  badge?: string;
  description: string;
  subDetails: string[];
  tags: string[];
  features: string[];
}

export const CATEGORIES = [
  "All",
  "Development",
  "Design & Media",
  "Digital Marketing",
  "Paid Advertising",
  "AI & Automation"
] as const;

export const SERVICES_DATA: Service[] = [
  // ROW 1
  {
    id: "wordpress-dev",
    slug: "wordpress-development",
    number: "01",
    title: "WordPress Development",
    subtitle: "Custom, Themes, Plugins, Elementor",
    category: "Development",
    iconName: "Globe",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    glowColor: "bg-blue-500/10",
    description: "High-performance custom WordPress websites built with Elementor Pro, tailored themes, custom plugins, and speed optimization.",
    subDetails: ["Custom Themes", "Elementor Pro", "Custom Plugins", "Speed Tuning"],
    tags: ["WordPress", "Elementor Pro", "Themes", "Plugins", "WooCommerce", "Security"],
    features: [
      "Custom WordPress Theme & Plugin Development",
      "Pixel-perfect Elementor Pro Layout Design",
      "Core Web Vitals & Speed Optimization",
      "Custom Post Types & ACFs",
      "Malware Hardening & Security Audit"
    ]
  },
  {
    id: "web-design-uiux",
    slug: "web-design-ui-ux",
    number: "02",
    title: "Web Design & UI/UX",
    subtitle: "Modern & Conversion Focused",
    category: "Design & Media",
    iconName: "Layout",
    color: "text-indigo-400",
    borderColor: "border-indigo-500/30",
    glowColor: "bg-indigo-500/10",
    description: "Visually captivating, modern, and conversion-engineered UI/UX design crafted to elevate user retention and sales.",
    subDetails: ["Figma Prototypes", "Wireframing", "UI System", "Conversion Focused"],
    tags: ["UI/UX Design", "Figma", "User Research", "Wireframes", "Conversion Optimization"],
    features: [
      "Interactive Figma Design & Prototyping",
      "Mobile-First Responsive Wireframes",
      "Conversion Rate Optimization (CRO) Layouts",
      "Brand Style Guides & Component Libraries",
      "Usability Testing & Feedback Loops"
    ]
  },
  {
    id: "ai-graphic-design",
    slug: "ai-graphic-design",
    number: "03",
    title: "AI Graphic Design",
    subtitle: "Logos, Banners, Social Media, AI Art",
    category: "Design & Media",
    iconName: "Sparkles",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    glowColor: "bg-purple-500/10",
    description: "Cutting-edge graphic design combining traditional design expertise with AI art generators for logos, banners, and promotional artwork.",
    subDetails: ["Brand Logos", "Ad Banners", "Social Media Graphics", "AI Generated Art"],
    tags: ["Logos", "Banners", "Social Media", "AI Art", "Midjourney", "Canva", "Photoshop"],
    features: [
      "AI-Assisted Logo & Vector Brand Identity Design",
      "High-Converting Social Media Banners & Ad Creatives",
      "Photorealistic AI Art Generation (Midjourney/DALL-E)",
      "Marketing Collateral & Promotional Flyers",
      "High-Resolution Vector Export Formats"
    ]
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    number: "04",
    title: "eCommerce All Solutions",
    subtitle: "WooCommerce, Payment Gateway, Multi-vendor",
    category: "Development",
    iconName: "ShoppingCart",
    color: "text-amber-400",
    borderColor: "border-amber-500/30",
    glowColor: "bg-amber-500/10",
    description: "Turnkey e-commerce storefronts built on WooCommerce or Shopify with multi-currency payment gateways and multi-vendor setup.",
    subDetails: ["WooCommerce Store", "Payment Gateways", "Multi-Vendor Hub", "Inventory Sync"],
    tags: ["WooCommerce", "Shopify", "Payment Gateway", "Multi-vendor", "Cart Optimization"],
    features: [
      "Full Store Setup on WooCommerce & Shopify",
      "Seamless Payment Gateway Integrations (Stripe, SSLCommerz, PayPal)",
      "Multi-vendor Marketplace Architecture",
      "Automated Inventory & Order Management",
      "Cart Abandonment Recovery Flow"
    ]
  },
  {
    id: "mobile-app-dev",
    slug: "mobile-app-development",
    number: "05",
    title: "Mobile App Development",
    subtitle: "Android | iOS, Flutter | React Native",
    category: "Development",
    iconName: "Smartphone",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    glowColor: "bg-emerald-500/10",
    description: "Robust cross-platform mobile apps for Android and iOS using Flutter and React Native, built for scale, performance, and smooth UX.",
    subDetails: ["Android Native", "iOS / Swift", "Flutter Framework", "React Native"],
    tags: ["Android", "iOS", "Flutter", "React Native", "Cross-Platform", "App Store Publishing"],
    features: [
      "Cross-Platform App Development (Flutter / React Native)",
      "Native Android & iOS App Engineering",
      "REST & GraphQL API Integration",
      "Push Notifications & Offline Support",
      "Google Play & Apple App Store Deployment"
    ]
  },
  {
    id: "custom-development",
    slug: "custom-development",
    number: "06",
    title: "Custom Development",
    subtitle: "PHP, React, Node.js, API Integration",
    category: "Development",
    iconName: "Code2",
    color: "text-sky-400",
    borderColor: "border-sky-500/30",
    glowColor: "bg-sky-500/10",
    description: "Bespoke full-stack web applications, custom API integrations, and scalable microservices built with PHP, React, Next.js, and Node.js.",
    subDetails: ["Custom PHP / Laravel", "React & Next.js", "Node.js Backend", "REST & Webhook APIs"],
    tags: ["PHP", "React", "Node.js", "Next.js", "API Integration", "MySQL / MongoDB"],
    features: [
      "Tailor-made Web Application Development",
      "RESTful API & Webhook Service Engineering",
      "React & Next.js Single Page Applications",
      "Backend API Architecture with Node.js & PHP",
      "Database Modeling & Performance Tuning"
    ]
  },
  {
    id: "saas-product-dev",
    slug: "saas-product-development",
    number: "07",
    title: "SaaS Product Development",
    subtitle: "AI SaaS, Web Apps, Automation Tools",
    category: "Development",
    iconName: "Cloud",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    glowColor: "bg-cyan-500/10",
    description: "Transform your SaaS vision into reality with AI-powered web applications, multi-tenant billing models, and automated customer tools.",
    subDetails: ["AI SaaS Platform", "Web Applications", "Automation Tools", "Subscription Billing"],
    tags: ["AI SaaS", "Web Apps", "Automation Tools", "Micro-SaaS", "Stripe Subscriptions"],
    features: [
      "End-to-End SaaS Architecture & Prototyping",
      "Multi-Tenant User Management & Role Auth",
      "AI Model & OpenAI / Claude API Integrations",
      "Stripe / Recurring Subscription Billing",
      "Automated Onboarding & User Analytics"
    ]
  },
  {
    id: "website-maintenance",
    slug: "website-maintenance",
    number: "08",
    title: "Website Maintenance",
    subtitle: "Updates, Security, Speed Optimization",
    category: "Development",
    iconName: "Wrench",
    color: "text-red-400",
    borderColor: "border-red-500/30",
    glowColor: "bg-red-500/10",
    description: "24/7 proactive security monitoring, daily automated cloud backups, instant malware removal, software updates, and speed optimization.",
    subDetails: ["Core Updates", "24/7 Security Monitoring", "Speed Tuning", "Malware Cleanup"],
    tags: ["Updates", "Security", "Speed Optimization", "Daily Backups", "Malware Cleanup"],
    features: [
      "24/7 Automated Uptime & Health Monitoring",
      "Daily Offsite Cloud Backups & One-Click Restore",
      "Proactive Security Scanning & Malware Removal",
      "Plugin, Theme, and Core System Updates",
      "Core Web Vitals & Speed Optimization"
    ]
  },

  // ROW 2
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    number: "09",
    title: "Digital Marketing",
    subtitle: "Strategy, Campaigns, Lead Generation",
    category: "Digital Marketing",
    iconName: "Megaphone",
    color: "text-rose-400",
    borderColor: "border-rose-500/30",
    glowColor: "bg-rose-500/10",
    description: "Comprehensive digital growth strategies, lead acquisition campaigns, sales funnels, and data-driven marketing for explosive business scale.",
    subDetails: ["Growth Strategy", "Lead Gen Campaigns", "Sales Funnels", "Conversion Tracking"],
    tags: ["Strategy", "Campaigns", "Lead Generation", "Brand Growth", "Digital Funnels"],
    features: [
      "Full-Funnel Digital Growth Strategy",
      "High-Converting B2B & B2C Lead Generation",
      "Sales Funnel Optimization & CRO",
      "Omnichannel Campaign Execution",
      "Advanced Conversion & Pixel Tracking Setup"
    ]
  },
  {
    id: "seo-optimization",
    slug: "seo-optimization",
    number: "10",
    title: "SEO Optimization",
    subtitle: "On-Page, Off-Page, Technical SEO",
    category: "Digital Marketing",
    iconName: "TrendingUp",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    glowColor: "bg-blue-500/10",
    description: "Propel your website to Page 1 of Google with technical SEO audits, high-intent keyword research, content optimization, and backlink strategies.",
    subDetails: ["On-Page SEO", "Off-Page Backlinks", "Technical Audit", "Keyword Strategy"],
    tags: ["On-Page", "Off-Page", "Technical SEO", "Keyword Research", "Backlinks"],
    features: [
      "In-Depth Technical SEO & Site Speed Audit",
      "Competitor Keyword & Search Intent Research",
      "On-Page Content & Meta Tag Optimization",
      "High-Authority Backlink & Outreach Building",
      "Local SEO & Google Business Profile Ranking"
    ]
  },
  {
    id: "social-media-management",
    slug: "social-media-management",
    number: "11",
    title: "Social Media Management",
    subtitle: "Content, Scheduling, Growth",
    category: "Digital Marketing",
    iconName: "Share2",
    color: "text-violet-400",
    borderColor: "border-violet-500/30",
    glowColor: "bg-violet-500/10",
    description: "Complete organic social media management — brand content creation, automated scheduling, audience engagement, and follower growth.",
    subDetails: ["Content Creation", "Automated Post Scheduling", "Audience Growth", "Analytics Reports"],
    tags: ["Content", "Scheduling", "Growth", "Facebook", "Instagram", "LinkedIn", "YouTube"],
    features: [
      "Monthly Content Calendar & Graphic Design",
      "Multi-Platform Automated Scheduling",
      "Community Engagement & Response Management",
      "Organic Audience Growth & Hashtag Research",
      "Monthly Performance Analytics & Reporting"
    ]
  },
  {
    id: "chatgpt-ads-expert",
    slug: "chatgpt-ads-expert",
    number: "12",
    title: "ChatGPT Ads Expert",
    subtitle: "Run Ads on ChatGPT Platform",
    category: "Paid Advertising",
    iconName: "Bot",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/60",
    glowColor: "bg-emerald-500/20",
    highlight: true,
    badge: "Specialized AI Service",
    description: "Pioneer conversational AI advertising by placing strategic brand sponsors and targeted prompt ads directly within ChatGPT and AI assistants.",
    subDetails: ["ChatGPT Sponsor Placements", "Conversational AI Targeting", "Prompt Ads", "First-Mover Advantage"],
    tags: ["ChatGPT Platform", "Run Ads on ChatGPT", "AI Advertising", "Prompt Marketing", "First Mover"],
    features: [
      "ChatGPT Platform Ad Placement & Campaign Setup",
      "Conversational Intent & AI Prompt Targeting",
      "AI Copywriting & Interactive Sponsor Messages",
      "Brand Mention Integration in AI Responses",
      "Real-Time Conversational Ad Analytics"
    ]
  },
  {
    id: "google-ads",
    slug: "google-ads",
    number: "13",
    title: "Google Ads",
    subtitle: "Campaign Setup, PPC, Shopping Ads",
    category: "Paid Advertising",
    iconName: "Target",
    color: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    glowColor: "bg-yellow-500/10",
    description: "High-ROI Google PPC Search campaigns, Performance Max, and Google Shopping ads designed to capture high-intent buyers instantly.",
    subDetails: ["Search PPC Ads", "Shopping Ads", "Performance Max", "Remarketing"],
    tags: ["Campaign Setup", "PPC", "Shopping Ads", "Search Ads", "Remarketing"],
    features: [
      "Google Search PPC Campaign Architecture",
      "Google Shopping & Merchant Center Integration",
      "Performance Max & Display Retargeting",
      "Negative Keyword & Bid Strategy Optimization",
      "Conversion Tracking & GA4 Integration"
    ]
  },
  {
    id: "meta-ads",
    slug: "meta-ads",
    number: "14",
    title: "Meta Ads",
    subtitle: "Facebook & Instagram Ads",
    category: "Paid Advertising",
    iconName: "Users",
    color: "text-sky-400",
    borderColor: "border-sky-500/30",
    glowColor: "bg-sky-500/10",
    description: "Precision-targeted Facebook and Instagram ad campaigns optimized for low cost-per-lead, high ROAS, and viral brand engagement.",
    subDetails: ["Facebook Feed Ads", "Instagram Reel Ads", "Lookalike Audiences", "Retargeting Funnels"],
    tags: ["Facebook Ads", "Instagram Ads", "Meta Pixel", "Lookalike Audiences", "ROAS"],
    features: [
      "Full Meta Pixel & CAPI Event Setup",
      "High-Converting Reel & Feed Video Ad Creatives",
      "Advanced Lookalike & Interest Audience Targeting",
      "Dynamic Product Ads (DPA) for E-Commerce",
      "ROAS-Driven Budget Scaling & A/B Testing"
    ]
  },
  {
    id: "youtube-ads",
    slug: "youtube-ads",
    number: "15",
    title: "YouTube Ads",
    subtitle: "Video Ads, Channel Growth",
    category: "Paid Advertising",
    iconName: "Play",
    color: "text-red-500",
    borderColor: "border-red-500/30",
    glowColor: "bg-red-500/10",
    description: "Captivate audiences with high-impact YouTube video ads, in-stream placements, and bumper campaigns that drive channel subscribers and leads.",
    subDetails: ["Skippable In-Stream Ads", "Bumper Video Ads", "Channel Growth", "Brand Storytelling"],
    tags: ["Video Ads", "Channel Growth", "In-Stream Ads", "Bumper Ads", "YouTube Marketing"],
    features: [
      "In-Stream & In-Feed YouTube Video Ad Setup",
      "Audience Intent & Keyword Video Targeting",
      "Scriptwriting & Creative Video Direction",
      "YouTube Channel Subscriber Growth Funnel",
      "View-Through & Conversion Tracking"
    ]
  },
  {
    id: "linkedin-ads",
    slug: "linkedin-ads",
    number: "16",
    title: "LinkedIn Ads",
    subtitle: "B2B Leads, Recruitment Ads",
    category: "Paid Advertising",
    iconName: "Briefcase",
    color: "text-blue-500",
    borderColor: "border-blue-600/30",
    glowColor: "bg-blue-600/10",
    description: "Laser-focused B2B advertising targeting corporate executives, decision-makers, industry buyers, and top talent on LinkedIn.",
    subDetails: ["B2B Lead Gen Forms", "Sponsored InMail", "Recruitment Campaigns", "Decision-Maker Targeting"],
    tags: ["B2B Leads", "Recruitment Ads", "Sponsored Content", "InMail", "LinkedIn"],
    features: [
      "B2B Job Title & Company Size Target Profiling",
      "LinkedIn Lead Gen Form Ad Creation",
      "Sponsored InMail & Message Ad Campaigns",
      "Corporate Talent Recruitment Advertising",
      "B2B Pipeline & CRM Deal Attribution"
    ]
  },

  // ROW 3
  {
    id: "x-twitter-ads",
    slug: "x-twitter-ads",
    number: "17",
    title: "X (Twitter) Ads",
    subtitle: "Brand Awareness, Engagement",
    category: "Paid Advertising",
    iconName: "MessageSquare",
    color: "text-slate-300",
    borderColor: "border-slate-400/30",
    glowColor: "bg-slate-400/10",
    description: "Harness real-time viral trends on X (Twitter) with promoted tweets, trend takeovers, and brand awareness campaigns.",
    subDetails: ["Promoted Posts", "Trend Takeover", "Follower Growth", "Brand Engagement"],
    tags: ["Brand Awareness", "Engagement", "Promoted Tweets", "X Ads", "Viral Marketing"],
    features: [
      "Promoted Post & Media Ad Setup",
      "Trend Keyword & Conversation Targeting",
      "Tech, Web3, & Business Audience Reach",
      "Follower & Brand Authority Scaling",
      "Real-Time Impression & Engagement Reporting"
    ]
  },
  {
    id: "tiktok-ads",
    slug: "tiktok-ads",
    number: "18",
    title: "TikTok Ads",
    subtitle: "Viral Campaigns, Business Growth",
    category: "Paid Advertising",
    iconName: "Zap",
    color: "text-pink-500",
    borderColor: "border-pink-500/30",
    glowColor: "bg-pink-500/10",
    description: "Drive viral product sales and Gen-Z/Millennial engagement through native TikTok In-Feed ads, Spark Ads, and UGC creative campaigns.",
    subDetails: ["In-Feed Video Ads", "Spark Ads", "UGC Creative", "Viral Campaigns"],
    tags: ["Viral Campaigns", "Business Growth", "TikTok Ads", "Spark Ads", "UGC"],
    features: [
      "Native TikTok In-Feed Ad Strategy",
      "Spark Ads & Influencer UGC Integration",
      "TikTok Pixel & Catalog Shopping Setup",
      "Trending Audio & Hashtag Targeting",
      "High-ROAS Direct Response Campaigns"
    ]
  },
  {
    id: "pinterest-ads",
    slug: "pinterest-ads",
    number: "19",
    title: "Pinterest Ads",
    subtitle: "Visual Ads, eCommerce Sales",
    category: "Paid Advertising",
    iconName: "Image",
    color: "text-red-400",
    borderColor: "border-red-400/30",
    glowColor: "bg-red-400/10",
    description: "Convert high-intent visual searchers into loyal e-commerce buyers with eye-catching Pinterest shopping pins and catalog ads.",
    subDetails: ["Shopping Pins", "Catalog Ads", "Visual Search", "eCommerce Sales"],
    tags: ["Visual Ads", "eCommerce Sales", "Pinterest Pins", "Shopping Ads", "Catalog"],
    features: [
      "Pinterest Tag & Catalog Feed Syncing",
      "Shopping & Idea Pin Ad Creation",
      "High Purchase-Intent Keyword Targeting",
      "Lifestyle & Product Showcase Creatives",
      "Direct E-Commerce Storefront Traffic"
    ]
  },
  {
    id: "amazon-ads",
    slug: "amazon-ads",
    number: "20",
    title: "Amazon Ads",
    subtitle: "Product Ads, Marketplace Growth",
    category: "Paid Advertising",
    iconName: "ShoppingBag",
    color: "text-amber-500",
    borderColor: "border-amber-500/30",
    glowColor: "bg-amber-500/10",
    description: "Dominate Amazon search results and scale product sales volume with Sponsored Products, Sponsored Brands, and Amazon DSP campaigns.",
    subDetails: ["Sponsored Products", "Sponsored Brands", "Buy Box Boost", "Marketplace Scale"],
    tags: ["Product Ads", "Marketplace Growth", "Amazon PPC", "Buy Box", "Sponsored Brands"],
    features: [
      "Amazon Sponsored Products & Brands Setup",
      "Automatic & Manual Keyword Bidding",
      "Product Detail Page (PDP) Retargeting",
      "ACoS & TACoS Efficiency Optimization",
      "Brand Storefront & A+ Content Promotion"
    ]
  },
  {
    id: "microsoft-ads",
    slug: "microsoft-ads",
    number: "21",
    title: "Microsoft Ads",
    subtitle: "Bing Search Ads, Global Reach",
    category: "Paid Advertising",
    iconName: "Monitor",
    color: "text-teal-400",
    borderColor: "border-teal-500/30",
    glowColor: "bg-teal-500/10",
    description: "Reach a premium desktop audience with lower CPC competition via Bing Search ads, Yahoo, MSN, and Microsoft Audience Network.",
    subDetails: ["Bing Search PPC", "Microsoft Network", "LinkedIn Data Targeting", "Global Reach"],
    tags: ["Bing Search Ads", "Global Reach", "Microsoft Ads", "Lower CPC", "B2B Reach"],
    features: [
      "Bing Search & Shopping Campaign Imports",
      "LinkedIn Profile Data Targeting Integration",
      "Microsoft Audience Network Native Ads",
      "High Purchasing Power Desktop Audience",
      "Cost-Effective Lead & Sale Acquisition"
    ]
  },
  {
    id: "email-marketing",
    slug: "email-marketing",
    number: "22",
    title: "Email Marketing",
    subtitle: "Automation, Newsletters, CRM",
    category: "Digital Marketing",
    iconName: "Mail",
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    glowColor: "bg-orange-500/10",
    description: "Turn subscribers into repeat buyers with automated email sequences, newsletter design, Klaviyo/Mailchimp integration, and CRM flows.",
    subDetails: ["Welcome Sequences", "Cart Recovery Flow", "Newsletter Broadcasts", "CRM Automation"],
    tags: ["Automation", "Newsletters", "CRM", "Klaviyo", "Mailchimp", "Email Flows"],
    features: [
      "Automated Welcome & Drip Sequence Creation",
      "Abandoned Cart & Browse Recovery Flows",
      "Custom Responsive Email Template Design",
      "Klaviyo, Mailchimp, & ActiveCampaign Setup",
      "Audience Segmentation & Deliverability Audit"
    ]
  },
  {
    id: "ai-automation-integrations",
    slug: "ai-automation-integrations",
    number: "23",
    title: "AI Automation & Integrations",
    subtitle: "Make.com, Zapier, n8n, AI Agents",
    category: "AI & Automation",
    iconName: "Cpu",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    glowColor: "bg-cyan-500/10",
    description: "Automate complex business workflows by connecting your apps using Make.com, Zapier, n8n, and autonomous AI agents.",
    subDetails: ["Make.com Scenarios", "Zapier Automation", "n8n Workflows", "Autonomous AI Agents"],
    tags: ["Make.com", "Zapier", "n8n", "AI Agents", "Workflow Automation", "API Webhooks"],
    features: [
      "Custom Make.com & Zapier Automation Scenarios",
      "Self-Hosted n8n Workflow Engineering",
      "Autonomous AI Agent & Multi-Step Logic Setup",
      "CRM, ERP, & Payment Webhook Integrations",
      "Zero-Human Data Processing Workflows"
    ]
  },
  {
    id: "ai-tools-consulting",
    slug: "ai-tools-consulting",
    number: "24",
    title: "AI Tools & Consulting",
    subtitle: "ChatGPT, Gemini, Claude, Midjourney",
    category: "AI & Automation",
    iconName: "Lightbulb",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    glowColor: "bg-blue-500/10",
    description: "Strategic AI adoption consulting — implementing custom LLMs, prompt engineering, Claude workflows, and Midjourney graphics pipelines.",
    subDetails: ["ChatGPT & Prompt Engineering", "Google Gemini Integration", "Claude Workflows", "Midjourney Pipelines"],
    tags: ["ChatGPT", "Gemini", "Claude", "Midjourney", "AI Consulting", "Prompt Engineering"],
    features: [
      "Enterprise AI Roadmap & Strategy Consulting",
      "Custom Prompt Engineering & Agent Tuning",
      "LLM Pipeline Integration (ChatGPT / Claude / Gemini)",
      "AI Asset Generation Workflows (Midjourney / Stable Diffusion)",
      "Employee AI Upskilling & Implementation Training"
    ]
  }
];

export const AI_TOOLS = [
  { name: "ChatGPT", category: "LLM / AI", icon: "Bot", color: "from-emerald-500 to-teal-600" },
  { name: "Gemini", category: "Google AI", icon: "Sparkles", color: "from-blue-500 to-cyan-500" },
  { name: "Claude", category: "Anthropic AI", icon: "Brain", color: "from-amber-600 to-orange-500" },
  { name: "Midjourney", category: "AI Art", icon: "Image", color: "from-purple-500 to-indigo-600" },
  { name: "Adobe", category: "Creative Cloud", icon: "Palette", color: "from-red-500 to-rose-600" },
  { name: "Canva", category: "Graphic Design", icon: "Layout", color: "from-cyan-400 to-blue-500" },
  { name: "Figma", category: "UI/UX Design", icon: "Figma", color: "from-purple-400 to-pink-500" },
  { name: "Notion", category: "Workspace AI", icon: "FileText", color: "from-slate-400 to-slate-600" },
  { name: "Make", category: "Automation", icon: "Cpu", color: "from-violet-500 to-purple-600" },
  { name: "Zapier", category: "Integration", icon: "Zap", color: "from-orange-500 to-amber-500" }
];

export const TRUST_PILLARS = [
  { title: "Modern Solutions", desc: "Cutting-edge tech stack", icon: "Rocket" },
  { title: "Reliable Support", desc: "24/7 dedicated assistance", icon: "ShieldCheck" },
  { title: "Affordable Pricing", desc: "Transparent, scalable cost", icon: "Coins" },
  { title: "On-Time Delivery", desc: "Strict deadline adherence", icon: "Clock" },
  { title: "Business Growth", desc: "Focus on ROI & leads", icon: "TrendingUp" },
  { title: "Long-Term Partnership", desc: "Dedicated growth partner", icon: "Heart" }
];

export const SERVICE_PROCESS_STEPS = [
  { step: "01", title: "Strategy", desc: "Understanding goals & market positioning" },
  { step: "02", title: "Design", desc: "Creating sleek UI & ad visuals" },
  { step: "03", title: "Develop", desc: "Building scalable code & AI workflows" },
  { step: "04", title: "Market", desc: "Running targeted ad & SEO campaigns" },
  { step: "05", title: "Automate", desc: "Eliminating manual task bottlenecks" },
  { step: "06", title: "Grow", desc: "Maximizing ROI & business scale" }
];
