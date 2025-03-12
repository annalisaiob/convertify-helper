
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Coffee, Wand2, Users } from "lucide-react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Anna - CreAI Lab</title>
        <meta name="description" content="Meet Anna, your tech-savvy systems whisperer who turns business chaos into zen-like efficiency." />
      </Helmet>
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <section className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8">Hey, I'm Anna!</h1>
              <p className="text-xl text-accent italic">(And yes, AI are literally my initials - but I promise I'm human!)</p>
            </section>

            <div className="prose prose-lg max-w-none space-y-12">
              <section className="bg-white/50 rounded-xl p-8 border border-border/20 space-y-4">
                <p className="text-xl leading-relaxed">
                  Think of me as Marie Kondo meets MacGyver for your business systems - but with a slightly concerning obsession for spreadsheet formulas. 
                  I've built apps, lived in 7 different countries, and get way too excited about automating things that probably didn't need automating.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/50 rounded-xl p-8 border border-border/20 space-y-4">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-2xl font-heading">Professional Nomad</h3>
                  <p>From emergency response missions to creative writing retreats, I've lived in 7 countries and counting. My laptop has more stamps than my passport!</p>
                </div>

                <div className="bg-white/50 rounded-xl p-8 border border-border/20 space-y-4">
                  <Coffee className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-2xl font-heading">Community Builder</h3>
                  <p>Running two communities in Paris where we talk about everything from AI to the meaning of life (usually over too much coffee).</p>
                </div>

                <div className="bg-white/50 rounded-xl p-8 border border-border/20 space-y-4">
                  <Wand2 className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-2xl font-heading">Tech Whisperer</h3>
                  <p>I speak fluent tech gibberish and can translate "help, my business is a mess!" into elegant, automated solutions.</p>
                </div>

                <div className="bg-white/50 rounded-xl p-8 border border-border/20 space-y-4">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-2xl font-heading">Connection Catalyst</h3>
                  <p>Because no one should face the blank page alone. I bring creators together to share the journey (and occasional existential crises).</p>
                </div>
              </div>

              <section className="bg-white/50 rounded-xl p-8 border border-border/20 space-y-6">
                <h2 className="text-3xl font-heading">Why Work With Me?</h2>
                <p className="text-lg">
                  Whether you're drowning in post-it notes, fighting with your calendar, or just need someone to tell you "yes, you can automate that!" - I'm here to help turn your chaos into zen-like efficiency.
                </p>
                <div className="flex justify-center pt-4">
                  <Button className="text-lg px-8 py-6" asChild>
                    <a href="mailto:anna@creailab.com">
                      Let's Chat! <ArrowRight className="ml-2" />
                    </a>
                  </Button>
                </div>
              </section>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
