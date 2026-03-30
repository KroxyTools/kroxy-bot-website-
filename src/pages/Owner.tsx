import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kroxyAvatar from "@/assets/kroxy-avatar.png";
import { MessageCircle, Send, Copy, Check, X, ExternalLink } from "lucide-react";

const DISCORD_USERNAME = "qwassxg";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.085.118 18.111.137 18.128a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

const Owner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DISCORD_USERNAME).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen gradient-dark flex flex-col">
      <Navbar />

      <div className="pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center pt-12">
            <img
              src={kroxyAvatar}
              alt="Owner"
              className="w-28 h-28 mx-auto object-cover box-glow rounded-full mb-8"
              loading="lazy"
              width={512}
              height={512}
            />

            {/* Username — clickable, no dot */}
            <div className="flex items-center justify-center mb-1">
              <button
                onClick={() => setShowPopup(true)}
                className="group hover:opacity-80 transition-opacity"
                title="Click for options"
              >
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="gradient-text group-hover:underline decoration-primary/40 underline-offset-4">
                    {DISCORD_USERNAME}
                  </span>
                </h1>
              </button>
            </div>

            {/* Discord badge below username */}
            <div className="flex items-center justify-center mb-2">
              <span className="text-xs text-[#5865F2] font-medium tracking-wide bg-[#5865F2]/10 px-2.5 py-0.5 rounded-full border border-[#5865F2]/20">Discord</span>
            </div>

            <p className="text-muted-foreground text-sm mb-8">Owner & Developer of Kroxy</p>

            <div className="glass-card-strong rounded-2xl p-8 mb-8 text-left">
              <h2 className="text-xl font-bold mb-4 text-center">About</h2>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>Kroxy has been developed and maintained since 2021. What started as a personal project has grown into a powerful, feature-rich Discord bot trusted by thousands of servers.</p>
                <p>Built with passion and constantly updated with new features, Kroxy aims to be the only bot your server will ever need — powerful commands, seamless user app, and total server control.</p>
                <p>Got questions or need support? Join the support server or reach out on Telegram.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:border-primary/30 transition-colors">
                <MessageCircle className="w-4 h-4 text-primary" /> Support Server
              </a>
              <a href="https://t.me/kroxybazar" target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:border-primary/30 transition-colors">
                <Send className="w-4 h-4 text-primary" /> Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Discord Username Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative glass-card-strong rounded-2xl p-6 w-full max-w-sm border border-[#5865F2]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: "0 0 40px hsl(226 72% 65% / 0.2), 0 20px 60px rgba(0,0,0,0.5)" }}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                <DiscordIcon className="w-5 h-5 text-[#5865F2]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Discord Username</p>
                <p className="font-bold text-lg gradient-text">{DISCORD_USERNAME}</p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCopy}
                className="w-full glass-card rounded-xl px-4 py-3.5 flex items-center gap-3 hover:border-primary/30 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4 text-primary" />}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">{copied ? "Copied!" : "Copy Username"}</p>
                  <p className="text-xs text-muted-foreground">Copy to clipboard</p>
                </div>
              </button>

              <a
                href="https://discord.com/users/qwassxg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full glass-card rounded-xl px-4 py-3.5 flex items-center gap-3 hover:border-[#5865F2]/40 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#5865F2]/10 flex items-center justify-center group-hover:bg-[#5865F2]/20 transition-colors">
                  <ExternalLink className="w-4 h-4 text-[#5865F2]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">Contact Bot Owner</p>
                  <p className="text-xs text-muted-foreground">Open Discord profile</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Owner;
