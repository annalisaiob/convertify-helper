
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-4xl font-heading hover:italic transition-all">
            creai lab
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-4xl font-heading hover:text-primary/80 transition-colors">services</a>
            <a href="/tools" className="text-4xl font-heading hover:text-primary/80 transition-colors">tools</a>
            <a href="/community" className="text-4xl font-heading hover:text-primary/80 transition-colors">community</a>
            <a href="/about" className="text-4xl font-heading hover:text-primary/80 transition-colors">about</a>
            <Button asChild size="lg" className="text-xl">
              <a href="#contact">
                work with me
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
