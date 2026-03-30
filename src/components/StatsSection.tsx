import { useState } from "react";
import kroxyAvatar from "@/assets/kroxy-avatar.png";
import InviteDialog from "./InviteDialog";
import { ArrowRight } from "lucide-react";

const StatsSection = () => {
  const [showInvite, setShowInvite] = useState(false);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-card-strong rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(140_70%_45%/0.05)_0%,_transparent_60%)]" />
          <div className="relative">
            <img src={kroxyAvatar} alt="Kroxy" className="w-20 h-20 mx-auto rounded-full mb-6 box-glow" loading="lazy" width={512} height={512} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm">
              Add Kroxy now and unlock the full Discord experience. Powerful commands, seamless user app, total server control — all in one.
            </p>
            <button
              onClick={() => setShowInvite(true)}
              className="relative inline-block group cursor-pointer"
            >
              <span className="absolute -inset-1 rounded-2xl gradient-primary opacity-50 blur-lg group-hover:opacity-100 transition-opacity" />
              <span className="relative gradient-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg tracking-wide inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Add Now <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <InviteDialog open={showInvite} onClose={() => setShowInvite(false)} />
    </section>
  );
};

export default StatsSection;
