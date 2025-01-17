import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#221F26] text-2xl font-button hover:text-[#FF6700] hover:italic hover:underline transition-all lowercase">
            creai lab
          </span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <a href="#business-profiles" className="text-[#403E43] font-button font-bold hover:text-[#FF6700] hover:italic hover:underline transition-all lowercase">what</a>
            <a href="#benefits" className="text-[#403E43] font-button font-bold hover:text-[#FF6700] hover:italic hover:underline transition-all lowercase">why</a>
            <a href="#how-it-works" className="text-[#403E43] font-button font-bold hover:text-[#FF6700] hover:italic hover:underline transition-all lowercase">how it works</a>
            <a href="#about" className="text-[#403E43] font-button font-bold hover:text-[#FF6700] hover:italic hover:underline transition-all lowercase">about</a>
          </nav>
          <Button asChild className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 rounded-full transition-all hover:italic hover:underline lowercase">
            <a href="#business-profiles">
              get started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};