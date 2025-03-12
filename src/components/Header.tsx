
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [buttonText, setButtonText] = useState("tell me your star sign");
  const [communityText, setCommunityText] = useState("community & events");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setButtonText("just kidding");
    }, 2000);
    
    const timer2 = setTimeout(() => {
      setButtonText("get in touch");
    }, 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Add animation for community menu item
  useEffect(() => {
    // Initial state is "community & events"
    
    // After the initial animation, start the loop
    const initialTimer = setTimeout(() => {
      setCommunityText("community");
      
      // Setup the toggling loop
      const toggleText = () => {
        setCommunityText(prev => prev === "community" ? "events" : "community");
      };
      
      // Start toggling every 10 seconds instead of 3
      const intervalId = setInterval(toggleText, 10000);
      
      return () => clearInterval(intervalId);
    }, 4000); // Wait for the initial button animation to finish
    
    return () => clearTimeout(initialTimer);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-3xl font-heading hover:italic transition-all">
            creai lab
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <a href="/services" className="text-3xl font-heading hover:text-primary/80 transition-colors">services</a>
            <a href="/tools" className="text-3xl font-heading hover:text-primary/80 transition-colors">tools</a>
            <a href="/community" className="text-3xl font-heading hover:text-primary/80 transition-colors">
              {communityText}
            </a>
            <a href="/about" className="text-3xl font-heading hover:text-primary/80 transition-colors">about</a>
            <Button asChild size="sm" className="text-lg min-w-40 transition-all duration-300">
              <a href="https://polished-care-fbe.notion.site/1b4195d3201d8095bb2cc810ebd5c696?pvs=105" target="_blank" rel="noopener noreferrer">
                {buttonText}
              </a>
            </Button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md py-4 animate-fadeIn rounded-lg mt-2">
            <nav className="flex flex-col items-center space-y-6 py-4">
              <a 
                href="/services" 
                className="text-2xl font-heading hover:text-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                services
              </a>
              <a 
                href="/tools" 
                className="text-2xl font-heading hover:text-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                tools
              </a>
              <a 
                href="/community" 
                className="text-2xl font-heading hover:text-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {communityText}
              </a>
              <a 
                href="/about" 
                className="text-2xl font-heading hover:text-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                about
              </a>
              <Button 
                asChild 
                size="sm" 
                className="text-lg min-w-40 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a 
                  href="https://polished-care-fbe.notion.site/1b4195d3201d8095bb2cc810ebd5c696?pvs=105" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {buttonText}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
