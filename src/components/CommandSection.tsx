import { Terminal, Shield, Settings, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  { icon: Terminal, title: "Custom Commands", desc: "Create unlimited commands with embeds, buttons, variables and advanced logic" },
  { icon: Shield, title: "Server Management", desc: "Full control over roles, channels, permissions, logging and server settings" },
  { icon: Settings, title: "Automation", desc: "Auto-mod, auto-role, welcome system, auto-responders and scheduled actions" },
  { icon: Wrench, title: "Advanced Tools", desc: "Tickets, giveaways, reaction roles, polls, embeds and utility commands" },
];

const CommandSection = () => (
  <AnimatedSection>
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Full Control</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Powerful Kroxy <span className="gradient-text">Commands</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm">
            Everything you need to manage your Discord server. From custom commands to full automation — Kroxy gives you complete control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {highlights.map((h) => (
            <div key={h.title} className="glass-card rounded-xl p-6 flex gap-4 items-start group hover:border-primary/30 transition-all">
              <div className="w-10 h-10 shrink-0 rounded-lg gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <h.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </AnimatedSection>
);

export default CommandSection;
