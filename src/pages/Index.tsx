
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Helmet>
        <title>CreAI Lab: AI & Automation Tools for Freelancers | Save 10+ Hours Weekly</title>
        <meta name="description" content="Freelancer-focused automation tools and AI solutions to help you save time, serve more clients, and grow your business without hiring help." />
        <meta name="keywords" content="freelancer automation, AI for small business, time-saving tools, client management, workflow automation, tech setup for freelancers" />
        <meta property="og:title" content="CreAI Lab: AI & Automation Tools for Freelancers | Save 10+ Hours Weekly" />
        <meta property="og:description" content="Automation tools and AI solutions to help freelancers save time, serve more clients, and grow without hiring help." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creailab.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreAI Lab: AI & Automation Tools for Freelancers | Save 10+ Hours Weekly" />
        <meta name="twitter:description" content="Automation tools and AI solutions to help freelancers save time, serve more clients, and grow without hiring help." />
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
