import { useState, useEffect } from "react";
import kroxyAvatar from "@/assets/kroxy-avatar.png";
import { Link } from "react-router-dom";

interface SiteData {
  copyright: string;
}

const Footer = () => {
  const [data, setData] = useState<SiteData | null>(null);

  useEffect(() => {
    fetch("/data.json").then(r => r.json()).then(setData).catch(() => {});
  }, []);

  return (
    <footer className="py-16 border-t border-border mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={kroxyAvatar} alt="Kroxy" className="w-8 h-8 rounded-full" loading="lazy" width={512} height={512} />
              <span className="font-bold text-lg gradient-text">Kroxy</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The most powerful Discord bot.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">Pages</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/" className="block hover:text-primary transition-colors">Home</Link>
              <Link to="/docs" className="block hover:text-primary transition-colors">Docs</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">Links</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">Support Server</a>
              <a href="https://t.me/kroxybazar" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">Telegram</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">About</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/owner" className="block hover:text-primary transition-colors">Owner</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          {data?.copyright || "© 2021 Kroxy · All rights reserved"}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
