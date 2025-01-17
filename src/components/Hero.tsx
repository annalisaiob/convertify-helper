import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
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