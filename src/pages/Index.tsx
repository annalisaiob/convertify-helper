
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NotionUpdates } from "@/components/NotionUpdates";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Helmet>
        <title>CreAI Lab: AI & Automation Tools for Small Businesses | Save 10+ Hours Weekly</title>
        <meta name="description" content="Smart automation tools and AI solutions to help small businesses and freelancers save time, serve more clients, and grow without hiring extra help." />
        <meta name="keywords" content="small business automation, freelancer tools, AI for business, time-saving tools, client management, workflow automation, tech setup for small business" />
        <meta property="og:title" content="CreAI Lab: AI & Automation Tools for Small Businesses | Save 10+ Hours Weekly" />
        <meta property="og:description" content="Smart automation tools and AI solutions to help small businesses and freelancers save time, serve more clients, and grow without hiring extra help." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://creailab.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreAI Lab: AI & Automation Tools for Small Businesses | Save 10+ Hours Weekly" />
        <meta name="twitter:description" content="Smart automation tools and AI solutions to help small businesses and freelancers save time, serve more clients, and grow without hiring extra help." />
      </Helmet>
      <Header />
      <main className="w-full flex-grow">
        <Hero />
        <section className="py-16">
          <NotionUpdates />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
