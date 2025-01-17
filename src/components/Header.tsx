import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#221F26] text-2xl font-button hover:text-[#FF6700] hover:italic hover:underline transition-all hover:shadow-[0_0_15px_rgba(255,103,0,0.5)]">
            Creai Lab
          </span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <a href="#business-profiles" className="text-[#403E43] font-button font-bold hover:text-[#FF6700] hover:italic hover:underline transition-all hover:shadow-[0_0_15px_rgba(255,103,0,0.5)]">Services</a>
            <a href="#benefits" className="text-[#403E43] font-button font-bold hover:text-[#FF6700] hover:italic hover:underline transition-all hover:shadow-[0_0_15px_rgba(255,103,0,0.5)]">Benefits</a>
            <a href="#how-it-works" className="text-[#403E43] font-button font-bold hover:text-[#FF6700] hover:italic hover:underline transition-all hover:shadow-[0_0_15px_rgba(255,103,0,0.5)]">How It Works</a>
            <a href="#about" className="text-[#403E43] font-button font-bold hover:text-[#FF6700] hover:italic hover:underline transition-all hover:shadow-[0_0_15px_rgba(255,103,0,0.5)]">About</a>
          </nav>
          <Button asChild className="bg-[#E5DEFF] text-[#221F26] font-bold hover:bg-[#FF6700] hover:text-white hover:shadow-[0_0_15px_rgba(255,103,0,0.5)] rounded-full transition-all hover:italic hover:underline">
            <a href="#business-profiles">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};