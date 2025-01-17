import { useEffect, useState } from "react";

export const About = () => {
  const [text, setText] = useState("");
  const fullText = "about CreAI Lab";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#221F26]">
                  {text}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};