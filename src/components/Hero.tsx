import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [lines, setLines] = useState<string[]>([]);
  const text = ["let's make your business", "systems work", "for you"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLines(text);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Text content */}
            <div className="relative z-10">
              <div className="space-y-2">
                {lines.map((line, index) => (
                  <div
                    key={index}
                    className={`
                      ${index === 2 ? 'text-lg md:text-xl lg:text-2xl mt-4 italic lowercase' : 'text-3xl md:text-5xl lg:text-7xl mt-2 lowercase'} 
                      font-bold text-[#221F26] leading-tight
                    `}
                  >
                    {line}
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate("/business-profiles")}
                  className="bg-[#FF6700] hover:bg-[#FF6700]/90 text-white rounded-full group"
                >
                  see how
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/lovable-uploads/f450c520-5b7c-4783-acd7-c50620bc4077.png"
                alt="Background pattern"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};