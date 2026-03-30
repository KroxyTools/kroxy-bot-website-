import { useState, useEffect } from "react";
import {
  Shield, Zap, Terminal, Music, Crown, Users,
  Settings, MessageSquare, Image, Lock, Globe, Ticket
} from "lucide-react";

const iconMap: Record<string, any> = {
  custom_commands: Terminal,
  auto_moderation: Shield,
  welcome_system: Users,
  leveling: Crown,
  music: Music,
  ai_chat: MessageSquare,
  tickets: Ticket,
  giveaways: Zap,
  reaction_roles: Settings,
  image_tools: Image,
  security: Lock,
  server_tools: Globe,
};

interface Feature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

const FeaturesSection = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    fetch("/premfeu.json")
      .then(r => r.json())
      .then(d => setFeatures(d.features.filter((f: Feature) => f.enabled)))
      .catch(() => {});
  }, []);

  if (features.length === 0) return null;

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Packed With Power</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Premium <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
            Toggle features on or off from the config — full control over what your bot offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = iconMap[f.id] || Zap;
            return (
              <div
                key={f.id}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
