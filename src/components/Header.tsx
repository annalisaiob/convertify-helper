import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-navy text-2xl font-medium hover:italic hover:underline transition-all">
            creai lab
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#business-profiles" className="text-navy hover:italic hover:underline transition-all">services</a>
          <a href="#how-it-works" className="text-navy hover:italic hover:underline transition-all">how it works</a>
          <a href="#about" className="text-navy hover:italic hover:underline transition-all">about</a>
        </nav>
        <Button asChild className="bg-secondary hover:bg-secondary/90 hover:italic hover:underline text-white rounded-full transition-all">
          <a href="#business-profiles">
            get started
          </a>
        </Button>
      </div>
    </header>
  );
};