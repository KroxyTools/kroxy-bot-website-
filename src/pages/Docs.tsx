import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Terminal, Shield, BookOpen } from "lucide-react";

const sections = [
  {
    icon: Zap,
    title: "Add Kroxy to Your Server",
    content: [
      "Click the 'Add Now' button on this website or use the invite link from invite.json.",
      "Select the server where you want to add Kroxy.",
      "Grant the requested permissions — Administrator is recommended for full features.",
      "Click 'Authorize' and Kroxy will join your server instantly.",
    ],
  },
  {
    icon: Terminal,
    title: "Add as User App",
    content: [
      "Click 'Add Now' and select 'Add User App' option.",
      "Once added, you can use Kroxy commands in any server, DMs or group chats.",
      "Right-click any user or message to see Kroxy's context menu options.",
      "No server permissions needed — works everywhere instantly.",
    ],
  },
  {
    icon: Shield,
    title: "Required Permissions",
    content: [
      "Administrator — Full access to all features (recommended).",
      "Manage Messages — Required for auto-mod and message management.",
      "Manage Roles — Needed for auto-role, reaction roles and leveling rewards.",
      "Ban/Kick Members — For moderation commands.",
      "Send Messages & Embed Links — Basic requirement for bot responses.",
      "View Audit Log — For logging and security features.",
    ],
  },
  {
    icon: BookOpen,
    title: "Need Help?",
    content: [
      "Join the support server for live help from the team.",
      "Reach out on Telegram @kroxybazar for quick support.",
      "Check back here — docs are updated regularly with new features.",
    ],
  },
];

const Docs = () => (
  <div className="min-h-screen gradient-dark flex flex-col">
    <Navbar />
    <div className="pt-28 pb-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Learn</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Everything you need to set up and use Kroxy effectively.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((s) => (
            <div key={s.title} className="glass-card-strong rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold">{s.title}</h2>
              </div>
              <ul className="space-y-2">
                {s.content.map((line, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5">›</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Docs;
