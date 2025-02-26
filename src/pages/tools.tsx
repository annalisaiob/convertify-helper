
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const ToolsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-12 text-center">Tools & Resources</h1>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Template Card */}
            <div className="border border-border/20 p-8 rounded-lg bg-white/50">
              <h3 className="font-heading text-2xl mb-4">Workflow Templates</h3>
              <p className="text-accent mb-6">Ready-to-use templates for common business processes</p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2" /> Download
              </Button>
            </div>
            
            {/* Guide Card */}
            <div className="border border-border/20 p-8 rounded-lg bg-white/50">
              <h3 className="font-heading text-2xl mb-4">Setup Guides</h3>
              <p className="text-accent mb-6">Step-by-step guides for tool implementation</p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2" /> Access Guides
              </Button>
            </div>
            
            {/* Resource Card */}
            <div className="border border-border/20 p-8 rounded-lg bg-white/50">
              <h3 className="font-heading text-2xl mb-4">Resource Library</h3>
              <p className="text-accent mb-6">Curated collection of helpful resources</p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2" /> Browse Library
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
