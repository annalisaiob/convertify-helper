import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">CreAI Lab</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#business-profiles" className="text-gray-600 hover:text-primary transition-colors">Select Your Option</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How It Works</a>
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
        </nav>
        <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
          Get Started
        </Button>
      </div>
    </header>
  );
};