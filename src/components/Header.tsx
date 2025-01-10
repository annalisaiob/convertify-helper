import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">CreAI Lab</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
          <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">Benefits</a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
        </nav>
        <Button className="bg-accent hover:bg-accent/90">Get Started</Button>
      </div>
    </header>
  );
};