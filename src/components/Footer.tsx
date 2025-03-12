
import { Linkedin, Newspaper, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 mt-auto bg-white/80 backdrop-blur-sm border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-xl font-heading font-bold">CreAI Lab</h3>
            <p className="text-sm text-center max-w-md">
              Think of me as Marie Kondo meets MacGyver for your business systems. I help creative businesses shine through streamlined processes and automation.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/annalisa-iob-a94484a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#221F26] hover:text-navy transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://annalisaiob.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#221F26] hover:text-navy transition-colors"
            >
              <Newspaper className="w-5 h-5" />
              <span>Substack</span>
            </a>
            <a
              href="mailto:anna@creailab.com"
              className="flex items-center space-x-2 text-[#221F26] hover:text-navy transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </a>
          </div>
          
          <div className="text-sm text-gray-600 pt-4 border-t border-gray-200 w-full text-center">
            <p>© {currentYear} CreAI Lab. All rights reserved.</p>
            <p className="mt-2 text-xs">
              <a href="https://www.flaticon.com/free-icons/dinosaur" title="dinosaur icons" className="hover:underline">
                Dinosaur icons created by Freepik - Flaticon
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
