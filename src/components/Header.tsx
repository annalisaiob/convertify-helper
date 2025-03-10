
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Header = () => {
  const [buttonText, setButtonText] = useState("tell me your star sign");
  
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setButtonText("just kidding");
    }, 2000);
    
    const timer2 = setTimeout(() => {
      setButtonText("get a free quote");
    }, 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-3xl font-heading hover:italic transition-all">
            creai lab
          </a>
          
          <nav className="hidden md:flex items-center gap-4">
            <a href="/services" className="text-3xl font-heading hover:text-primary/80 transition-colors">services</a>
            <a href="/tools" className="text-3xl font-heading hover:text-primary/80 transition-colors">tools</a>
            <a href="/community" className="text-3xl font-heading hover:text-primary/80 transition-colors">community</a>
            <a href="/about" className="text-3xl font-heading hover:text-primary/80 transition-colors">about</a>
            <Button asChild size="sm" className="text-lg min-w-40 transition-all duration-300">
              <a href="#contact">
                {buttonText}
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
