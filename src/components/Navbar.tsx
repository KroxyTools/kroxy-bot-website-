import { Link, useLocation } from "react-router-dom";
import kroxyAvatar from "@/assets/kroxy-avatar.png";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import InviteDialog from "./InviteDialog";

const links = [
  { to: "/", label: "Home" },
  { to: "/docs", label: "Docs" },
  { to: "/owner", label: "Owner" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [showInvite, setShowInvite] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card-strong border-b border-border/50">
        <div className="container mx-auto px-6 flex items-center justify-between" style={{ height: "56px" }}>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={kroxyAvatar}
              alt="Kroxy"
              className="w-9 h-9 object-contain flex-shrink-0"
              style={{ display: "block" }}
            />
            <span className="text-lg font-bold tracking-wide leading-none">
              <span className="gradient-text">Kroxy</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`transition-colors hover:text-foreground ${pathname === l.to ? "text-primary" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowInvite(true)}
              className="hidden sm:inline-flex gradient-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm items-center gap-2 hover:opacity-90 transition-opacity box-glow cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> Add Now
            </button>
            <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden glass-card-strong border-t border-border/30 px-6 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium transition-colors ${pathname === l.to ? "text-primary" : "text-muted-foreground"}`}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); setShowInvite(true); }}
              className="w-full gradient-primary text-primary-foreground py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 mt-2"
            >
              <Sparkles className="w-4 h-4" /> Add Now
            </button>
          </div>
        )}
      </nav>
      <InviteDialog open={showInvite} onClose={() => setShowInvite(false)} />
    </>
  );
};

export default Navbar;
