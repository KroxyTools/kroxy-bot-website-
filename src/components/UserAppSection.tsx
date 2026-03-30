import { Globe, MessageSquare, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const perks = [
  { icon: Globe, title: "Use Anywhere", desc: "Access Kroxy commands in any server, DMs, or group chats — no bot invite needed" },
  { icon: MessageSquare, title: "Instant Actions", desc: "Right-click any user or message for quick actions like translate, bookmark, or report" },
  { icon: Zap, title: "Zero Setup", desc: "No permissions required — just add the app and start using it immediately" },
];

const UserAppSection = () => (
  <AnimatedSection>
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Next Level</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Most Powerful Discord <span className="gradient-text">User App</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm">
            Kroxy works as a Discord User App — use powerful commands anywhere without adding a bot to the server. The best way to enhance your Discord experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {perks.map((p) => (
            <div key={p.title} className="glass-card-strong rounded-2xl p-8 text-center group hover:border-primary/30 transition-all">
              <div className="w-14 h-14 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <p.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </AnimatedSection>
);

export default UserAppSection;
