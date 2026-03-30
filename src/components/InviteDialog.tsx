import { useState, useEffect } from "react";
import { Bot, User, X, ExternalLink } from "lucide-react";

interface InviteLinks {
  bot_invite: string;
  app_invite: string;
  support_server: string;
}

const InviteDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [links, setLinks] = useState<InviteLinks | null>(null);

  useEffect(() => {
    fetch("/invite.json").then(r => r.json()).then(setLinks).catch(() => {});
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative glass-card-strong rounded-2xl p-8 max-w-md w-full animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            Add <span className="gradient-text">Kroxy</span>
          </h3>
          <p className="text-sm text-muted-foreground">Choose how you want to use Kroxy</p>
        </div>

        <div className="space-y-4">
          <a
            href={links?.app_invite || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 glass-card rounded-xl p-5 hover:border-primary/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm flex items-center gap-2">
                Add User App
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Use Kroxy commands anywhere — servers, DMs, groups
              </p>
            </div>
          </a>

          <a
            href={links?.bot_invite || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 glass-card rounded-xl p-5 hover:border-accent/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm flex items-center gap-2">
                Add to Server
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Full bot experience with all features for your server
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InviteDialog;
