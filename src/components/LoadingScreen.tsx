import { useState, useEffect } from "react";
import kroxyAvatar from "@/assets/kroxy-avatar.png";

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(onDone, 250);
          return 100;
        }
        return p + Math.random() * 30 + 20;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-250 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src={kroxyAvatar}
        alt="Kroxy"
        className="w-20 h-20 object-cover box-glow rounded-full mb-5"
      />
      <h2 className="text-xl font-bold gradient-text mb-3">Kroxy</h2>
      <div className="w-40 h-1 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full gradient-primary rounded-full transition-all duration-75 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
