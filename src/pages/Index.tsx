import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UserAppSection from "@/components/UserAppSection";
import CommandSection from "@/components/CommandSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen gradient-dark flex flex-col">
      <Navbar />
      <HeroSection />
      <UserAppSection />
      <CommandSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
