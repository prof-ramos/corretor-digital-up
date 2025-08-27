import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-full shadow-glow animate-pulse hover:animate-none transition-bounce hover:scale-110 group"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Falar no WhatsApp
      </Button>
    </div>
  );
};

export default FloatingCTA;