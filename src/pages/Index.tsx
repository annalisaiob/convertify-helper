
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Helmet>
        <title>CreAI Lab: AI & Automation for Freelancers & Small Businesses</title>
        <meta name="description" content="CreAI Lab helps freelancers and small businesses optimize processes, automate workflows, and leverage AI. Get expert consultancy, personalized tech navigation, and join our community." />
        <meta name="keywords" content="process optimization, automation, AI, freelancer tools, small business automation, no-code workflow automation, tech stack consulting, business process management" />
        <meta property="og:title" content="CreAI Lab: AI & Automation for Freelancers & Small Businesses" />
        <meta property="og:description" content="Streamline your workflow and free up time with process optimization and automation solutions for freelancers and small businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creailab.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreAI Lab: AI & Automation for Freelancers & Small Businesses" />
        <meta name="twitter:description" content="Streamline your workflow and free up time with process optimization and automation solutions for freelancers and small businesses." />
      </Helmet>
      <Header />
      <main className="w-full flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
