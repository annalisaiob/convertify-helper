import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/f450c520-5b7c-4783-acd7-c50620bc4077.png" 
            alt="creai lab logo" 
            className="h-12"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#business-profiles" className="text-gray-600 hover:text-primary transition-colors">services</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">how it works</a>
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">about</a>
        </nav>
        <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
          <a href="#business-profiles">
            get started
          </a>
        </Button>
      </div>
    </header>
  );
};