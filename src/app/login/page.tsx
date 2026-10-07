"use client";

import { useState, useEffect, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Lock, User as UserIcon, Eye, EyeOff, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "register" ? "register" : "login";

  const [activeTab, setActiveTab] = useState<"login" | "register">(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setSuccessMsg("Registration successful! Please sign in.");
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        // If live MongoDB is not active or credentials match demo
        if (res.error.includes("FetchError") || res.error.includes("No user found") || res.error.includes("Invalid password")) {
          // Provide clear message or demo success
          setErrorMsg(res.error === "No user found with this email" ? "Account not found. Please register first!" : "Invalid email or password.");
        } else {
          setErrorMsg("Login failed: " + res.error);
        }
        setLoading(false);
      } else {
        setSuccessMsg("Logged in successfully! Redirecting...");
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 1000);
      }
    } catch (err: any) {
      setErrorMsg("An unexpected error occurred.");
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Registration failed");
        setLoading(false);
      } else {
        setSuccessMsg("Account created successfully! You can now log in.");
        setActiveTab("login");
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg("Failed to register. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan selection:text-black flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-6 md:px-12 flex items-center justify-center relative">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-brand-blue/30 to-brand-cyan/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {/* Main Card */}
          <div className="glass rounded-3xl p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
            {/* Header Badge */}
            <div className="text-center mb-8">
              <Image
                src="/logo4.png"
                alt="WebFix Expert Logo"
                width={280}
                height={90}
                className="h-16 sm:h-20 md:h-24 w-auto mx-auto object-contain mb-4"
              />
              <h1 className="text-2xl font-bold text-white tracking-tight">
                {activeTab === "login" ? "Welcome Back" : "Join WebFix Expert"}
              </h1>
              <p className="text-gray-400 text-xs mt-1">
                {activeTab === "login"
                  ? "Sign in to access your projects and dashboard"
                  : "Create an account to start your web development journey"}
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="grid grid-cols-2 p-1.5 rounded-2xl glass bg-white/5 border border-white/10 mb-6">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("login");
                  setErrorMsg("");
                  setSuccessMsg("");
                }}
                className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "login"
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("register");
                  setErrorMsg("");
                  setSuccessMsg("");
                }}
                className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "register"
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Success & Error Banners */}
            {successMsg && (
              <div className="mb-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {errorMsg && (
              <div className="mb-4 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Forms */}
            {activeTab === "login" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-medium text-gray-300">Password</label>
                    <a href="#" className="text-[11px] text-brand-cyan hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-blue/30 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Sign In <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Full Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 6 characters"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-blue/30 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Create Free Account <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Social Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <span className="relative px-3 text-[11px] text-gray-400 glass bg-brand-dark uppercase tracking-wider">
                Or continue with
              </span>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="py-2.5 rounded-xl glass hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all"
              >
                <FaGoogle className="text-rose-400" /> Google
              </button>
              <button
                type="button"
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="py-2.5 rounded-xl glass hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all"
              >
                <FaGithub /> GitHub
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6 flex items-center justify-center gap-1">
            <ShieldCheck size={14} className="text-brand-cyan" /> Protected by 256-bit SSL encryption
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-dark flex items-center justify-center text-white text-sm">
        Loading...
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
