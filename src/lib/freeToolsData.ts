export interface FreeTool {
  id: string;
  slug: string;
  name: string;
  category: "SEO & Growth" | "Web Performance & Security" | "Developer Utilities" | "Text & Content" | "Design & UI" | "Media & AI Tools";
  shortDescription: string;
  longDescription: string;
  iconName: string;
  popular?: boolean;
  estimatedTime: string;
  usageCount: string;
  badge: string;
}

export const FREE_TOOLS: FreeTool[] = [
  // --- 1. Media & AI Tools (6 New Tools) ---
  {
    id: "image-resizer",
    slug: "image-resizer",
    name: "Image Resizer & Quality Compressor",
    category: "Media & AI Tools",
    shortDescription: "Resize image dimensions (width/height), lock aspect ratio, compress quality, and download optimized WebP/PNG.",
    longDescription: "Resize and compress images directly in browser canvas memory. Adjust width, height, aspect ratio lock, output quality percentage, and download compressed WebP, PNG, or JPEG files instantly.",
    iconName: "Maximize2",
    popular: true,
    estimatedTime: "< 3 Seconds",
    usageCount: "78,200+ Resized",
    badge: "Canvas Engine"
  },
  {
    id: "pdf-to-image",
    slug: "pdf-to-image",
    name: "PDF to Image & Document Converter",
    category: "Media & AI Tools",
    shortDescription: "Convert PDF documents and pages into high-resolution PNG or JPEG images.",
    longDescription: "Transform multi-page PDF documents into clear PNG or JPG image files without uploading files to external servers. High-DPI canvas rendering for maximum crispness.",
    iconName: "FileImage",
    popular: true,
    estimatedTime: "< 5 Seconds",
    usageCount: "64,100+ PDFs Converted",
    badge: "100% Private PDF"
  },
  {
    id: "ai-prompt-enhancer",
    slug: "ai-prompt-enhancer",
    name: "AI Prompt Enhancer & Prompt Engineer",
    category: "Media & AI Tools",
    shortDescription: "Transform simple ideas into structured, high-detail prompts for ChatGPT, Midjourney, DALL-E, and Claude.",
    longDescription: "Supercharge your AI outputs. Turn basic text inputs into highly descriptive, structured system prompts optimized for ChatGPT (GPT-4o), Midjourney v6, DALL-E 3, and Claude 3.5 Sonnet.",
    iconName: "Wand2",
    popular: true,
    estimatedTime: "< 5 Seconds",
    usageCount: "52,800+ Prompts Built",
    badge: "AI Engineer"
  },
  {
    id: "image-color-picker",
    slug: "image-color-picker",
    name: "Image Color Palette & HEX Extractor",
    category: "Media & AI Tools",
    shortDescription: "Upload any image or screenshot to extract dominant HEX, RGB, and HSL color palettes.",
    longDescription: "Extract UI color palettes from design screenshots. Upload any image to automatically identify primary, secondary, and accent color codes with 1-click HEX code copying.",
    iconName: "Pipette",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "39,400+ Extracted",
    badge: "HEX Extractor"
  },
  {
    id: "image-ocr-text",
    slug: "image-ocr-text",
    name: "Image Text Extractor & OCR Scanner",
    category: "Media & AI Tools",
    shortDescription: "Extract printed or handwritten text directly from images and screenshots into editable text.",
    longDescription: "Optical Character Recognition (OCR) scanner tool. Scan document photos, screenshots, or receipts to extract text strings directly into your clipboard.",
    iconName: "ScanText",
    popular: false,
    estimatedTime: "< 5 Seconds",
    usageCount: "41,900+ Scanned",
    badge: "Browser OCR"
  },
  {
    id: "ai-article-summarizer",
    slug: "ai-article-summarizer",
    name: "AI Article & Text Summarizer",
    category: "Media & AI Tools",
    shortDescription: "Summarize long articles, essays, or research papers into concise bullet points and executive summaries.",
    longDescription: "Save hours of reading time. Paste long articles, blog posts, or report text to generate key takeaway bullet points, action items, and executive summaries.",
    iconName: "FileCheck2",
    popular: true,
    estimatedTime: "< 5 Seconds",
    usageCount: "59,300+ Summarized",
    badge: "AI Summarizer"
  },

  // --- 2. Web Performance & Security (6 Tools) ---
  {
    id: "speed-auditor",
    slug: "speed-auditor",
    name: "Website Speed & Core Web Vitals Auditor",
    category: "Web Performance & Security",
    shortDescription: "Analyze any web URL for LCP, CLS, INP performance bottlenecks and get instant optimization recommendations.",
    longDescription: "Get a comprehensive performance audit of your website. Measure Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), Interaction to Next Paint (INP), and First Contentful Paint (FCP) with step-by-step developer fixes.",
    iconName: "Zap",
    popular: true,
    estimatedTime: "< 5 Seconds",
    usageCount: "42,500+ Audits",
    badge: "100% Free Audit"
  },
  {
    id: "secret-generator",
    slug: "secret-generator",
    name: "Cryptographic Secret & Password Generator",
    category: "Web Performance & Security",
    shortDescription: "Generate 256-bit secure random strings for NEXTAUTH_SECRET, JWT_SECRET, API Keys, and passwords.",
    longDescription: "Need a secure secret key for your `.env.local` file or NextAuth configuration? Instantly generate cryptographically safe base64, hex, and alphanumeric secret keys in browser memory.",
    iconName: "Key",
    popular: true,
    estimatedTime: "Instant",
    usageCount: "54,000+ Keys",
    badge: "256-Bit Security"
  },
  {
    id: "ssl-inspector",
    slug: "ssl-inspector",
    name: "SSL Certificate & HTTPS Inspector",
    category: "Web Performance & Security",
    shortDescription: "Check SSL certificate expiration date, issuer, encryption algorithm, and TLS protocol security.",
    longDescription: "Validate HTTPS security settings for any domain. Inspect SSL certificate chain validity, issuer information, TLS 1.3 protocol status, and expiration warning alerts.",
    iconName: "ShieldCheck",
    popular: false,
    estimatedTime: "< 2 Seconds",
    usageCount: "18,200+ Checks",
    badge: "HTTPS Validator"
  },
  {
    id: "base64-converter",
    slug: "base64-converter",
    name: "Base64 Encoder & Decoder",
    category: "Web Performance & Security",
    shortDescription: "Encode text strings and data into Base64 format or decode Base64 back into raw plain text.",
    longDescription: "Instant Base64 encoding and decoding tool. Convert plain text, JSON strings, or authorization headers into clean Base64 format with 1-click copy.",
    iconName: "Binary",
    popular: true,
    estimatedTime: "Instant",
    usageCount: "62,100+ Conversions",
    badge: "Instant Encode"
  },
  {
    id: "url-encoder",
    slug: "url-encoder",
    name: "URL Encoder & Decoder",
    category: "Web Performance & Security",
    shortDescription: "Encode query parameters into URL-safe percent-encoding or decode encoded URLs.",
    longDescription: "Convert special characters, spaces, and query strings into standard percent-encoded URL formats (\`encodeURIComponent\`) or decode encoded URLs back to human-readable strings.",
    iconName: "Link",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "38,400+ Encodes",
    badge: "Percent-Encoding"
  },
  {
    id: "hash-generator",
    slug: "hash-generator",
    name: "Cryptographic Hash Generator (SHA-256, MD5)",
    category: "Web Performance & Security",
    shortDescription: "Compute instant cryptographic message digests including SHA-256, SHA-512, and MD5 hashes.",
    longDescription: "Calculate cryptographic hash digests for any text or secret string in browser memory using Web Crypto API. Supports SHA-256, SHA-512, SHA-1, and MD5 algorithms.",
    iconName: "Lock",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "29,700+ Hashes",
    badge: "Web Crypto API"
  },

  // --- 3. SEO & Digital Growth (6 Tools) ---
  {
    id: "schema-generator",
    slug: "schema-generator",
    name: "JSON-LD Schema Markup Generator",
    category: "SEO & Growth",
    shortDescription: "Generate valid Google-ready JSON-LD schema for Organization, Article, Product, FAQ, and Local Business.",
    longDescription: "Stand out on Google Search Result Pages (SERP) with rich snippet schema markups. Effortlessly generate, preview, and copy JSON-LD structured data code for your website pages.",
    iconName: "FileCode",
    popular: true,
    estimatedTime: "< 1 Minute",
    usageCount: "28,100+ Schemas",
    badge: "Google Validated"
  },
  {
    id: "meta-generator",
    slug: "meta-generator",
    name: "AI Meta Title & Description Generator",
    category: "SEO & Growth",
    shortDescription: "Generate high-CTR title tags and meta descriptions with a live Google SERP preview snippet.",
    longDescription: "Draft search-engine optimized title tags and meta descriptions tailored to your target keywords. Features character count limit indicators and a live preview of how your page appears on Google Desktop and Mobile.",
    iconName: "Sparkles",
    popular: true,
    estimatedTime: "< 10 Seconds",
    usageCount: "35,900+ Snippets",
    badge: "Live SERP Preview"
  },
  {
    id: "og-generator",
    slug: "og-generator",
    name: "OpenGraph & Social Meta Tag Generator",
    category: "SEO & Growth",
    shortDescription: "Create pixel-perfect OpenGraph and Twitter Card tags with real-time Facebook and Twitter card previews.",
    longDescription: "Ensure your links look stunning when shared on Facebook, Twitter/X, LinkedIn, and WhatsApp. Generate all standard OpenGraph and Twitter Card meta tags with live visual card previews.",
    iconName: "Share2",
    popular: false,
    estimatedTime: "< 30 Seconds",
    usageCount: "19,400+ Cards",
    badge: "Social Card Preview"
  },
  {
    id: "robotstxt-generator",
    slug: "robotstxt-generator",
    name: "Robots.txt Generator & Validator",
    category: "SEO & Growth",
    shortDescription: "Generate clean Robots.txt files specifying crawl rules, sitemap paths, and search bot permissions.",
    longDescription: "Control how search engine crawlers (Googlebot, Bingbot, Baiduspider) index your site. Generate valid robots.txt rules for staging blocks, sitemap declarations, and user-agent directives.",
    iconName: "Bot",
    popular: false,
    estimatedTime: "< 30 Seconds",
    usageCount: "22,800+ Robots Files",
    badge: "SEO Crawler Tool"
  },
  {
    id: "sitemap-generator",
    slug: "sitemap-generator",
    name: "XML Sitemap URL Generator",
    category: "SEO & Growth",
    shortDescription: "Convert a list of site URLs into a formatted XML Sitemap ready for Google Search Console.",
    longDescription: "Generate valid XML sitemaps (\`sitemap.xml\`) compliant with sitemaps.org standards. Input your website URL list and specify priority, change frequency, and last modified dates.",
    iconName: "Compass",
    popular: false,
    estimatedTime: "< 1 Minute",
    usageCount: "26,300+ Sitemaps",
    badge: "XML Standard"
  },
  {
    id: "keyword-density",
    slug: "keyword-density",
    name: "Keyword Density & Frequency Analyzer",
    category: "SEO & Growth",
    shortDescription: "Analyze word frequency, keyword density percentages, and n-gram phrases in your articles.",
    longDescription: "Avoid keyword stuffing and optimize your SEO content balance. Paste any text to extract 1-word, 2-word, and 3-word keyword density counts and percentage occurrences.",
    iconName: "BarChart3",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "31,200+ Analyzed",
    badge: "SEO Density"
  },

  // --- 4. Developer & Code Utilities (6 Tools) ---
  {
    id: "json-formatter",
    slug: "json-formatter",
    name: "JSON Formatter, Validator & Minifier",
    category: "Developer Utilities",
    shortDescription: "Format, validate, prettify, and minify unformatted JSON data with syntax error line highlighting.",
    longDescription: "Clean up unformatted JSON payloads. Prettify with custom indent spacing (2 spaces, 4 spaces), minify JSON for production, and catch syntax errors in real-time.",
    iconName: "Code2",
    popular: true,
    estimatedTime: "Instant",
    usageCount: "85,400+ Formatted",
    badge: "Syntax Checker"
  },
  {
    id: "svg-to-jsx",
    slug: "svg-to-jsx",
    name: "SVG to JSX / React Component Converter",
    category: "Developer Utilities",
    shortDescription: "Convert raw SVG code into clean, production-ready React / Next.js JSX components.",
    longDescription: "Paste raw SVG XML and instantly convert attributes (\`class\` -> \`className\`, \`stroke-width\` -> \`strokeWidth\`, style objects) into reusable React TSX/JSX functional components.",
    iconName: "FileCode",
    popular: true,
    estimatedTime: "Instant",
    usageCount: "44,100+ SVG Converts",
    badge: "React TSX Ready"
  },
  {
    id: "unit-converter",
    slug: "unit-converter",
    name: "PX to REM / EM Units Converter",
    category: "Developer Utilities",
    shortDescription: "Convert pixels (px) to rem or em typography units based on root font size.",
    longDescription: "Speed up responsive CSS development. Convert pixel dimensions to relative \`rem\` and \`em\` units with custom root base font size setting (default 16px).",
    iconName: "Sliders",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "37,600+ Converts",
    badge: "CSS Typography"
  },
  {
    id: "regex-tester",
    slug: "regex-tester",
    name: "Regex Tester & Pattern Matcher",
    category: "Developer Utilities",
    shortDescription: "Test regular expression patterns against sample text with live match highlights and flags.",
    longDescription: "Test JavaScript regular expressions (\`RegExp\`) live. Toggle flags (\`g\`, \`i\`, \`m\`), inspect captured groups, and verify string match results instantly.",
    iconName: "Terminal",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "51,800+ Tests",
    badge: "Live Regex Match"
  },
  {
    id: "html-entity",
    slug: "html-entity",
    name: "HTML Entity Encoder & Decoder",
    category: "Developer Utilities",
    shortDescription: "Convert special characters into HTML entities (\`&\` -> \`&amp;\`) or decode entities back.",
    longDescription: "Prevent XSS security vulnerabilities and broken web markup. Safely encode special HTML markup characters into numeric or named HTML entity codes.",
    iconName: "Code",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "24,500+ Encodes",
    badge: "XSS Safety"
  },
  {
    id: "jwt-decoder",
    slug: "jwt-decoder",
    name: "JWT Token Decoder & Claims Inspector",
    category: "Developer Utilities",
    shortDescription: "Decode JSON Web Tokens (JWT) to inspect header, payload claims, and expiration dates.",
    longDescription: "Decode JWT strings in browser memory. View token header algorithms, user identity payload claims, issued-at time (iat), and expiration timestamp (exp) without sending tokens over network.",
    iconName: "Shield",
    popular: true,
    estimatedTime: "Instant",
    usageCount: "49,300+ Decodes",
    badge: "Zero Network Logs"
  },

  // --- 5. Text & Content Utilities (6 Tools) ---
  {
    id: "markdown-converter",
    slug: "markdown-converter",
    name: "Markdown to HTML Converter & Preview",
    category: "Text & Content",
    shortDescription: "Convert Markdown text into formatted HTML with real-time rendered side-by-side preview.",
    longDescription: "Write Markdown headings, lists, bold text, links, and code blocks with instant side-by-side HTML preview rendering and 1-click HTML code copying.",
    iconName: "FileText",
    popular: true,
    estimatedTime: "Instant",
    usageCount: "58,200+ Converted",
    badge: "Side-by-Side Live"
  },
  {
    id: "word-counter",
    slug: "word-counter",
    name: "Word Counter, Character & Reading Time Calculator",
    category: "Text & Content",
    shortDescription: "Calculate total words, characters (with/without spaces), sentence count, and estimated reading time.",
    longDescription: "Analyze text length metrics for blog posts, social media captions, and essays. Calculates total words, character count, paragraph count, and reading duration.",
    iconName: "FileSpreadsheet",
    popular: true,
    estimatedTime: "Instant",
    usageCount: "71,500+ Counted",
    badge: "Real-Time Stats"
  },
  {
    id: "lorem-generator",
    slug: "lorem-generator",
    name: "Lorem Ipsum Dummy Text Generator",
    category: "Text & Content",
    shortDescription: "Generate placeholder text paragraphs, sentences, or word lists for website mockups.",
    longDescription: "Need placeholder filler copy for UI prototypes and website wireframes? Generate custom paragraphs, sentences, or bulleted lists of classic Lorem Ipsum text.",
    iconName: "AlignLeft",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "46,800+ Generated",
    badge: "UI Placeholder"
  },
  {
    id: "case-converter",
    slug: "case-converter",
    name: "Text Case Converter (camelCase, Title Case, UPPERCASE)",
    category: "Text & Content",
    shortDescription: "Convert text string case between camelCase, PascalCase, kebab-case, snake_case, Title Case, and UPPERCASE.",
    longDescription: "Effortlessly transform variable names and headlines. Convert string casing between camelCase, kebab-case, snake_case, UPPERCASE, lowercase, and Capitalized Title Case.",
    iconName: "Type",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "63,900+ Converted",
    badge: "Multi-Case Converter"
  },
  {
    id: "text-diff",
    slug: "text-diff",
    name: "Text Diff & Comparison Checker",
    category: "Text & Content",
    shortDescription: "Compare two text snippets side-by-side to highlight added, removed, or modified lines.",
    longDescription: "Identify differences between two code or text blocks. Highlights additions, deletions, and line-by-line modifications with side-by-side comparison view.",
    iconName: "GitCompare",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "33,100+ Diff Checks",
    badge: "Line Diff Checker"
  },
  {
    id: "slug-generator",
    slug: "slug-generator",
    name: "URL Slug & Permalink Generator",
    category: "Text & Content",
    shortDescription: "Convert article headlines into clean, lowercase, URL-friendly slug permalinks.",
    longDescription: "Transform titles like \`10 Modern Web Architecture Trends in 2026!\` into SEO-safe slugs like \`10-modern-web-architecture-trends-in-2026\`. Removes special characters and accent marks.",
    iconName: "Link2",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "27,400+ Slugs Built",
    badge: "SEO Permalinks"
  },

  // --- 6. Design & UI Tools (6 Tools) ---
  {
    id: "glassmorphism-generator",
    slug: "glassmorphism-generator",
    name: "CSS Glassmorphism Generator",
    category: "Design & UI",
    shortDescription: "Create frosted glass UI effects with backdrop-blur, opacity controls, and instant CSS code output.",
    longDescription: "Design modern glassmorphism UI containers. Adjust blur intensity, background opacity, border translucency, and shadow depth with instant CSS code generation.",
    iconName: "Layers",
    popular: true,
    estimatedTime: "< 10 Seconds",
    usageCount: "59,100+ CSS Codes",
    badge: "CSS Glass Studio"
  },
  {
    id: "gradient-generator",
    slug: "gradient-generator",
    name: "CSS Gradient & Color Palette Studio",
    category: "Design & UI",
    shortDescription: "Design linear and radial CSS background gradients with customizable color stops and angle controls.",
    longDescription: "Build smooth CSS gradients. Pick starting and ending colors, adjust gradient angles (0° to 360°), preview on dark and light backgrounds, and copy CSS code.",
    iconName: "Palette",
    popular: true,
    estimatedTime: "< 15 Seconds",
    usageCount: "68,700+ Gradients",
    badge: "CSS Color Studio"
  },
  {
    id: "shadow-generator",
    slug: "shadow-generator",
    name: "CSS Box Shadow & Glow Generator",
    category: "Design & UI",
    shortDescription: "Design soft 3D box shadows and glowing neon border effects with copyable CSS styles.",
    longDescription: "Add elevation and depth to your web cards and buttons. Adjust X/Y offsets, blur radius, spread distance, color opacity, and inset shadow toggles with instant CSS output.",
    iconName: "Sun",
    popular: false,
    estimatedTime: "< 10 Seconds",
    usageCount: "41,300+ Shadows",
    badge: "3D Elevation"
  },
  {
    id: "contrast-checker",
    slug: "contrast-checker",
    name: "Color Contrast Ratio Checker (WCAG 2.1)",
    category: "Design & UI",
    shortDescription: "Test foreground and background color contrast against WCAG AA and AAA accessibility standards.",
    longDescription: "Ensure your web colors are readable and accessible to all users. Calculates exact contrast ratios (e.g. 7.5:1) and checks compliance against WCAG 2.1 AA and AAA ratings.",
    iconName: "Eye",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "36,900+ Contrast Checks",
    badge: "WCAG AA / AAA"
  },
  {
    id: "favicon-generator",
    slug: "favicon-generator",
    name: "Favicon HTML Tag & Manifest Generator",
    category: "Design & UI",
    shortDescription: "Generate complete favicon meta tags (\`apple-touch-icon\`, \`favicon-32x32\`, \`site.webmanifest\`).",
    longDescription: "Never miss a browser favicon again. Generate complete HTML head tags for browser tabs, iOS Apple touch icons, Android Chrome web manifests, and Windows tile icons.",
    iconName: "Image",
    popular: false,
    estimatedTime: "< 30 Seconds",
    usageCount: "25,800+ Favicon Tags",
    badge: "Browser Icons"
  },
  {
    id: "http-status",
    slug: "http-status",
    name: "HTTP Status Code Reference & Lookup",
    category: "Design & UI",
    shortDescription: "Search and inspect HTTP response status codes (200 OK, 301 Redirect, 404 Not Found, 500 Error).",
    longDescription: "Complete developer dictionary of HTTP status codes. Search 1xx, 2xx, 3xx, 4xx, and 5xx status codes with official RFC definitions and resolution recommendations.",
    iconName: "HelpCircle",
    popular: false,
    estimatedTime: "Instant",
    usageCount: "38,200+ Lookups",
    badge: "RFC Standard"
  }
];
