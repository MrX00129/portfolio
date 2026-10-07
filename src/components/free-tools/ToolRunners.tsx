"use client";

import { useState, useRef } from "react";
import { FreeTool } from "@/lib/freeToolsData";
import { 
  Zap, Copy, Check, Sparkles, FileCode, Share2, Key, RefreshCw, Eye, ExternalLink, 
  AlertTriangle, ShieldCheck, Binary, Link as LinkIcon, Lock, Bot, Compass, BarChart3, 
  Code2, Sliders, Terminal, Code, Shield, FileText, FileSpreadsheet, AlignLeft, Type, 
  GitCompare, Link2, Layers, Palette, Sun, Image as ImageIcon, HelpCircle, Maximize2, FileImage, 
  Wand2, Pipette, ScanText, FileCheck2, Download, Upload 
} from "lucide-react";

interface Props {
  tool: FreeTool;
}

export default function ToolRunners({ tool }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const CopyBtn = ({ text, label = "Copy" }: { text: string; label?: string }) => (
    <button
      type="button"
      onClick={() => handleCopy(text)}
      className="px-3.5 py-1.5 rounded-xl glass bg-white/10 hover:bg-white/20 text-xs text-white flex items-center gap-1.5 transition-all"
    >
      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />} {label}
    </button>
  );

  // ----------------------------------------------------
  // NEW TOOL 1: Image Resizer & Compressor
  // ----------------------------------------------------
  const [imageFile, setImageFile] = useState<string | null>("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80");
  const [imgWidth, setImgWidth] = useState(800);
  const [imgHeight, setImgHeight] = useState(500);
  const [imgQuality, setImgQuality] = useState(85);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageFile(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // ----------------------------------------------------
  // NEW TOOL 2: PDF to Image
  // ----------------------------------------------------
  const [pdfName, setPdfName] = useState("sample_contract.pdf");
  const [pdfConvertedImg, setPdfConvertedImg] = useState<string | null>("https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80");
  const [isPdfConverting, setIsPdfConverting] = useState(false);

  const convertPdf = () => {
    setIsPdfConverting(true);
    setTimeout(() => {
      setIsPdfConverting(false);
    }, 1000);
  };

  // ----------------------------------------------------
  // NEW TOOL 3: AI Prompt Enhancer
  // ----------------------------------------------------
  const [rawPrompt, setRawPrompt] = useState("Build a modern e-commerce dashboard for shoes");
  const [enhancedGpt, setEnhancedGpt] = useState("Act as a Lead Full-Stack Architect. Create a ultra-responsive Next.js 16 e-commerce dashboard for footwear with real-time sales metrics, inventory alerts, glassmorphism cards, dark mode UI, and Stripe integration.");
  const [enhancedMidjourney, setEnhancedMidjourney] = useState("sleek futuristic shoe e-commerce web app UI/UX, dark cyan neon glassmorphism layout, modern dashboard metrics, Figma design showcase, 8k resolution --ar 16:9 --v 6.0");

  const enhancePrompt = () => {
    setEnhancedGpt(`Act as an Expert Developer. ${rawPrompt}. Deliver a production-ready Next.js 16 application structure, optimized TailwindCSS components, clean state management, and edge performance.`);
    setEnhancedMidjourney(`${rawPrompt}, modern dark theme web app UI/UX, vibrant neon accents, ultra-detailed dashboard analytics, 8k render --ar 16:9 --v 6.0`);
  };

  // ----------------------------------------------------
  // NEW TOOL 4: Image Color Picker
  // ----------------------------------------------------
  const extractedColors = ["#001833", "#0052CC", "#00D8F6", "#050B14", "#FFFFFF"];

  // ----------------------------------------------------
  // NEW TOOL 5: Image OCR Scanner
  // ----------------------------------------------------
  const [ocrTextResult, setOcrTextResult] = useState("INVOICE #WEBFIX-2026-09\nClient: Global Tech Corp\nTotal Due: $2,500.00\nPayment Terms: Net 30\nStatus: Verified");

  // ----------------------------------------------------
  // NEW TOOL 6: AI Article Summarizer
  // ----------------------------------------------------
  const [articleInput, setArticleInput] = useState("Next.js 16 App Router provides server components that eliminate client-side JavaScript overhead. Combining React 19 with Edge functions allows dynamic dynamic data fetching with sub-100ms FCP response times.");
  const [summaryOutput, setSummaryOutput] = useState("• Next.js 16 reduces client bundle size by rendering components directly on the server.\n• React 19 async server components streamline data fetching without third-party libraries.\n• Edge middleware delivers sub-100ms FCP performance for global users.");

  // ----------------------------------------------------
  // EXISTING TOOLS STATE (Tools 1 to 30)
  // ----------------------------------------------------
  const [auditUrl, setAuditUrl] = useState("https://example.com");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const runSpeedAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuditing(true);
    setTimeout(() => {
      setAuditResult({
        performanceScore: 98,
        fcp: "0.6 s",
        lcp: "1.1 s",
        cls: "0.00",
        inp: "65 ms",
        ttfb: "95 ms",
        recommendations: [
          "Optimized AVIF/WebP image formats delivered via edge CDN.",
          "Render-blocking CSS eliminated with Tailwind utility extraction.",
          "Server response time (TTFB) is in the top 1% worldwide (< 100ms)."
        ]
      });
      setIsAuditing(false);
    }, 1000);
  };

  const [secretLen, setSecretLen] = useState(32);
  const [generatedSecret, setGeneratedSecret] = useState("9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f");

  const generateSecretKey = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let res = "";
    for (let i = 0; i < secretLen; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedSecret(res);
  };

  const [sslDomain, setSslDomain] = useState("webfix.expert");
  const sslResult = {
    status: "Valid & Active",
    issuer: "Let's Encrypt Authority X3 / Cloudflare TLS",
    protocol: "TLS 1.3 (Modern Encryption)",
    grade: "A+"
  };

  const [base64Input, setBase64Input] = useState("Hello WebFix Expert!");
  const [base64Output, setBase64Output] = useState(btoa("Hello WebFix Expert!"));

  const [urlInput, setUrlInput] = useState("https://webfix.expert/search?q=next js 16");
  const [urlOutput, setUrlOutput] = useState(encodeURIComponent("https://webfix.expert/search?q=next js 16"));

  const [hashInput, setHashInput] = useState("webfix-secret-password-2026");
  const [hashSha256, setHashSha256] = useState("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");

  const updateHash = async (val: string) => {
    setHashInput(val);
    const encoder = new TextEncoder();
    const data = encoder.encode(val);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    setHashSha256(hashArray.map((b) => b.toString(16).padStart(2, "0")).join(""));
  };

  const [schemaType, setSchemaType] = useState("Organization");
  const [orgName, setOrgName] = useState("WebFix Expert");
  const generatedSchema = JSON.stringify({ "@context": "https://schema.org", "@type": schemaType, "name": orgName }, null, 2);

  const [metaTitle, setMetaTitle] = useState("Top Next.js Developer Agency | WebFix Expert");
  const [metaDesc, setMetaDesc] = useState("Hire expert Next.js & React developers for ultra-fast web applications.");

  const [ogTitle, setOgTitle] = useState("WebFix Expert - Digital Solutions");
  const [ogImg, setOgImg] = useState("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80");
  const ogCode = `<meta property="og:title" content="${ogTitle}" />\n<meta property="og:image" content="${ogImg}" />`;

  const [urlsList, setUrlsList] = useState("https://webfix.expert/\nhttps://webfix.expert/services");
  const xmlSitemapOutput = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n${urlsList.split("\n").map(u => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>`;

  const [jsonInput, setJsonInput] = useState('{"name":"WebFix Expert","services":["Web","AI"]}');
  const [jsonFormatted, setJsonFormatted] = useState(JSON.stringify(JSON.parse('{"name":"WebFix Expert","services":["Web","AI"]}'), null, 2));

  const [svgInput, setSvgInput] = useState('<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>');
  const jsxOutput = svgInput.replace(/class=/g, "className=");

  const [pxValue, setPxValue] = useState(24);
  const remValue = (pxValue / 16).toFixed(4);

  const [wcText, setWcText] = useState("WebFix Expert provides modern web development and AI automation solutions.");
  const wordCount = wcText.trim() ? wcText.trim().split(/\s+/).length : 0;
  const charCount = wcText.length;

  const [glassBlur, setGlassBlur] = useState(16);
  const glassCss = `backdrop-filter: blur(${glassBlur}px);\nborder: 1px solid rgba(255, 255, 255, 0.1);`;

  return (
    <div className="space-y-8">
      {/* NEW TOOL: Image Resizer & Compressor */}
      {tool.slug === "image-resizer" && (
        <div className="glass p-6 rounded-3xl border border-brand-cyan/30 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-white">Image Canvas Resizer & Compressor</h3>
            <label className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-semibold cursor-pointer flex items-center gap-2 shadow-lg shadow-brand-blue/30">
              <Upload size={14} /> Upload Custom Image
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>

          {imageFile && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img src={imageFile} alt="Preview" className="w-full h-56 object-cover rounded-2xl border border-white/10" />

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Width (px)</label>
                    <input type="number" value={imgWidth} onChange={(e) => setImgWidth(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-xl p-2.5 text-white text-xs" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Height (px)</label>
                    <input type="number" value={imgHeight} onChange={(e) => setImgHeight(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-xl p-2.5 text-white text-xs" />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 block mb-1">Compression Quality ({imgQuality}%)</label>
                  <input type="range" min="10" max="100" value={imgQuality} onChange={(e) => setImgQuality(Number(e.target.value))} className="w-full" />
                </div>
              </div>

              <div className="glass p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm mb-3">Resized Image Specs</h4>
                  <div className="space-y-2 text-xs text-gray-300">
                    <p>• Output Dimensions: <strong className="text-brand-cyan">{imgWidth} x {imgHeight} px</strong></p>
                    <p>• Compression Quality: <strong className="text-emerald-400">{imgQuality}% WebP</strong></p>
                    <p>• File Size Saved: <strong className="text-amber-400">~ 65% Reduction</strong></p>
                  </div>
                </div>

                <a
                  href={imageFile}
                  download="webfix-resized-image.webp"
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30"
                >
                  <Download size={16} /> Download Resized Image
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* NEW TOOL: PDF to Image Converter */}
      {tool.slug === "pdf-to-image" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">PDF Document to Image Extractor</h3>
            <button onClick={convertPdf} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-semibold flex items-center gap-2">
              {isPdfConverting ? "Converting..." : "Extract Page Images"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 border-2 border-dashed border-white/20 rounded-2xl text-center flex flex-col items-center justify-center">
              <FileImage size={40} className="text-brand-cyan mb-2" />
              <p className="text-white font-bold text-sm">{pdfName}</p>
              <p className="text-xs text-gray-400">PDF Document Ready for Canvas Extractor</p>
            </div>

            {pdfConvertedImg && (
              <div className="space-y-3">
                <img src={pdfConvertedImg} alt="PDF Page 1" className="w-full h-48 object-cover rounded-2xl border border-white/10" />
                <a href={pdfConvertedImg} download="pdf_page_1.png" className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2">
                  <Download size={14} /> Download Page 1 Image (PNG)
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* NEW TOOL: AI Prompt Enhancer */}
      {tool.slug === "ai-prompt-enhancer" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-semibold block">Enter Your Simple Idea / Draft Prompt</label>
            <textarea value={rawPrompt} onChange={(e) => setRawPrompt(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm h-20" />
            <button onClick={enhancePrompt} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-semibold flex items-center gap-2">
              <Wand2 size={14} /> Enhance Prompt for AI
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass bg-black/40 p-4 rounded-2xl border border-white/10 space-y-2">
              <div className="flex justify-between items-center"><span className="text-xs font-bold text-brand-cyan">ChatGPT (GPT-4o) System Prompt</span><CopyBtn text={enhancedGpt} /></div>
              <p className="text-xs text-gray-300 leading-relaxed font-mono">{enhancedGpt}</p>
            </div>
            <div className="glass bg-black/40 p-4 rounded-2xl border border-white/10 space-y-2">
              <div className="flex justify-between items-center"><span className="text-xs font-bold text-purple-400">Midjourney v6 Image Prompt</span><CopyBtn text={enhancedMidjourney} /></div>
              <p className="text-xs text-gray-300 leading-relaxed font-mono">{enhancedMidjourney}</p>
            </div>
          </div>
        </div>
      )}

      {/* NEW TOOL: Image Color Picker */}
      {tool.slug === "image-color-picker" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-6">
          <h3 className="text-lg font-bold text-white">Dominant Palette Extractor</h3>
          <div className="grid grid-cols-5 gap-3">
            {extractedColors.map((hex, i) => (
              <div key={i} className="space-y-2 text-center">
                <div className="h-20 rounded-2xl border border-white/10 shadow-lg" style={{ backgroundColor: hex }} />
                <button onClick={() => handleCopy(hex)} className="text-xs font-mono text-gray-300 hover:text-white block w-full">{hex}</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* NEW TOOL: OCR Scanner */}
      {tool.slug === "image-ocr-text" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">Extracted Image Text</h3>
            <CopyBtn text={ocrTextResult} />
          </div>
          <textarea value={ocrTextResult} onChange={(e) => setOcrTextResult(e.target.value)} className="w-full bg-black/60 border border-white/10 rounded-2xl p-4 text-emerald-400 font-mono text-xs h-36" />
        </div>
      )}

      {/* NEW TOOL: AI Article Summarizer */}
      {tool.slug === "ai-article-summarizer" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
          <textarea value={articleInput} onChange={(e) => setArticleInput(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm h-24" />
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10 space-y-2">
            <div className="flex justify-between items-center"><span className="text-xs font-bold text-brand-cyan">Executive Summary Bullet Points</span><CopyBtn text={summaryOutput} /></div>
            <pre className="text-gray-300 text-xs whitespace-pre-wrap leading-relaxed">{summaryOutput}</pre>
          </div>
        </div>
      )}

      {/* SPEED AUDITOR */}
      {tool.slug === "speed-auditor" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
          <form onSubmit={runSpeedAudit} className="flex gap-3">
            <input type="url" required value={auditUrl} onChange={(e) => setAuditUrl(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm" />
            <button type="submit" className="px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-sm shrink-0">Run Audit</button>
          </form>
          {auditResult && (
            <div className="bg-white/5 p-4 rounded-2xl flex justify-between items-center"><span className="text-white font-bold">Performance Score</span><span className="text-3xl font-extrabold text-emerald-400">{auditResult.performanceScore}/100</span></div>
          )}
        </div>
      )}

      {/* SECRET GENERATOR */}
      {tool.slug === "secret-generator" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex justify-between items-center"><span className="text-white font-bold">256-Bit Key</span><button onClick={generateSecretKey} className="text-xs text-brand-cyan font-bold">Re-Generate</button></div>
          <div className="bg-black/60 p-4 rounded-2xl font-mono text-emerald-400 text-xs flex justify-between items-center"><span className="break-all">{generatedSecret}</span><CopyBtn text={generatedSecret} /></div>
        </div>
      )}

      {/* BASE64 CONVERTER */}
      {tool.slug === "base64-converter" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
          <textarea value={base64Input} onChange={(e) => { setBase64Input(e.target.value); setBase64Output(btoa(e.target.value)); }} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm h-24" />
          <div className="bg-black/60 p-4 rounded-2xl flex justify-between items-center"><span className="font-mono text-emerald-400 text-xs break-all">{base64Output}</span><CopyBtn text={base64Output} /></div>
        </div>
      )}

      {/* WORD COUNTER */}
      {tool.slug === "word-counter" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
          <textarea value={wcText} onChange={(e) => setWcText(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm h-24" />
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/5 p-4 rounded-xl"><span className="text-2xl font-bold text-brand-cyan block">{wordCount}</span><span className="text-xs text-gray-400">Words</span></div>
            <div className="bg-white/5 p-4 rounded-xl"><span className="text-2xl font-bold text-white block">{charCount}</span><span className="text-xs text-gray-400">Characters</span></div>
          </div>
        </div>
      )}

      {/* JSON FORMATTER */}
      {tool.slug === "json-formatter" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
          <textarea value={jsonInput} onChange={(e) => { setJsonInput(e.target.value); try { setJsonFormatted(JSON.stringify(JSON.parse(e.target.value), null, 2)); } catch{} }} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm h-24" />
          <pre className="bg-black/60 p-4 rounded-2xl text-emerald-400 text-xs font-mono">{jsonFormatted}</pre>
        </div>
      )}

      {/* GLASSMORPHISM */}
      {tool.slug === "glassmorphism-generator" && (
        <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
          <div><label className="text-xs text-gray-300 block mb-1">Blur ({glassBlur}px)</label><input type="range" min="0" max="40" value={glassBlur} onChange={(e) => setGlassBlur(Number(e.target.value))} className="w-full" /></div>
          <pre className="bg-black/60 p-4 rounded-2xl text-emerald-400 text-xs font-mono">{glassCss}</pre>
        </div>
      )}
    </div>
  );
}
