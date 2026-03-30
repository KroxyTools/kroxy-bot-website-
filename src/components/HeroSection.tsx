import { useState, useEffect } from "react";
import kroxyAvatar from "@/assets/kroxy-avatar.png";
import InviteDialog from "./InviteDialog";
import { Sparkles, Shield, Terminal } from "lucide-react";

interface SiteData {
  tagline: string;
  description: string;
  since: string;
}

const HeroSection = () => {
  const [showInvite, setShowInvite] = useState(false);
  const [data, setData] = useState<SiteData | null>(null);

  useEffect(() => {
    fetch("/data.json").then(r => r.json()).then(setData).catch(() => {});
  }, []);

  const stats = [
    { icon: Terminal, label: "Custom Commands", value: "Unlimited" },
    { icon: Shield, label: "Server Control", value: "Full" },
    { icon: Sparkles, label: "User App", value: "Ready" },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(140_70%_45%/0.06)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(0_75%_55%/0.04)_0%,_transparent_50%)]" />

      {/* ── MOBILE layout ── */}
      <div className="relative z-10 md:hidden container mx-auto px-5 text-center pt-28 pb-12">
        <div className="mb-5 animate-float">
          <img
            src={kroxyAvatar}
            alt="Kroxy"
            className="w-28 h-28 mx-auto object-cover box-glow rounded-full"
            width={256}
            height={256}
          />
        </div>

        <div className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1 mb-4 text-xs font-medium text-muted-foreground">
          <Sparkles className="w-3 h-3 text-primary" />
          Since {data?.since || "2021"} — Trusted by Thousands
        </div>

        <h1 className="text-5xl font-black tracking-tight mb-3">
          <span className="gradient-text">Kroxy</span>
        </h1>

        <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-7 leading-relaxed">
          {data?.description || "Everything you need for the best Discord experience. Powerful commands, seamless user app, and total server control."}
        </p>

        <div className="flex flex-col items-stretch gap-3 mb-8 max-w-[260px] mx-auto">
          <button onClick={() => setShowInvite(true)} className="relative group cursor-pointer">
            <span className="absolute -inset-1 rounded-xl gradient-primary opacity-60 blur-md group-hover:opacity-100 transition-opacity" />
            <span className="relative gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-base inline-flex items-center justify-center gap-2 w-full">
              <Sparkles className="w-4 h-4" /> Add Now
            </span>
          </button>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card text-foreground px-6 py-3 rounded-xl font-semibold text-base hover:border-primary/30 transition-colors block text-center"
          >
            Support Server
          </a>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-3 flex flex-col items-center gap-1">
              <s.icon className="w-4 h-4 text-primary" />
              <div className="text-sm font-bold gradient-text leading-none">{s.value}</div>
              <div className="text-[10px] text-muted-foreground leading-tight text-center">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP layout ── full height, logo top with space, stats at bottom */}
      <div className="hidden md:block relative z-10">
        <div className="container mx-auto px-6 text-center pt-24 pb-12">
          <div className="mb-8 animate-float">
            <img
              src={kroxyAvatar}
              alt="Kroxy"
              className="w-56 h-56 lg:w-64 lg:h-64 mx-auto object-cover box-glow rounded-full"
              width={512}
              height={512}
            />
          </div>

          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-5 text-xs font-medium text-muted-foreground animate-slide-up">
            <Sparkles className="w-3 h-3 text-primary" />
            Since {data?.since || "2021"} — Trusted by Thousands
          </div>

          <h1 className="text-7xl lg:text-8xl font-black tracking-tight mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text">Kroxy</span>
          </h1>

          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {data?.description || "The most powerful Discord bot — everything you need for the best experience. Powerful commands, seamless user app, and total server control."}
          </p>

          <div className="flex items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <button onClick={() => setShowInvite(true)} className="relative group cursor-pointer">
              <span className="absolute -inset-1 rounded-2xl gradient-primary opacity-60 blur-lg group-hover:opacity-100 transition-opacity animate-pulse-glow" />
              <span className="relative gradient-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg tracking-wide inline-flex items-center gap-2 hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" /> Add Now
              </span>
            </button>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card text-foreground px-8 py-3.5 rounded-xl font-semibold text-lg tracking-wide hover:border-primary/30 transition-colors"
            >
              Support Server
            </a>
          </div>

          <div className="grid grid-cols-3 max-w-lg mx-auto gap-4 text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-4 hover:border-primary/20 transition-all">
                <s.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
                <div className="text-lg font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InviteDialog open={showInvite} onClose={() => setShowInvite(false)} />
    </section>
  );
};

export default HeroSection;
