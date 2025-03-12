import React, { useState } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Workflow,
  Zap,
  Database,
  FileText,
  CalendarCheck,
  GitBranch,
  Settings,
  BookOpen,
  Code,
  Users,
  BarChart3,
  Coffee,
  MessageSquare,
  Layers,
  Shield,
  Key,
  Search,
  X,
  ChevronDown,
  ChevronUp
} from "lucide-react";

type ServiceCategory = {
  title: string;
  description: string;
  icon: React.ElementType;
  services: Service[];
};

type Service = {
  title: string;
  description: string;
  extendedDescription: string;
  keywords: string[];
  tools?: { name: string; icon: React.ElementType }[];
};

type FAQItem = {
  question: string;
  answer: string;
};

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);
  const [openCategories, setOpenCategories] = useState<number[]>([0]);

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const serviceCategories: ServiceCategory[] = [
    {
      title: "Technology Integration & Setup",
      description: "Streamline your business with expert technology implementation and personalized tool setups.",
      icon: Layers,
      services: [
        {
          title: "Tools Setup & Configuration",
          description: "Expert setup and customization of productivity tools like Notion, Monday.com, ClickUp, and various CRM systems.",
          extendedDescription: "We'll analyze your business needs, create custom templates, workflows, and automations in your preferred tools. Our Notion consulting and CRM setup services ensure your systems are tailored specifically to your workflow, saving you hours of configuration time and maximizing ROI from day one.",
          keywords: ["tech stack consulting", "CRM setup", "Notion consulting", "freelancer tools", "small business automation"],
          tools: [
            { name: "Notion", icon: FileText },
            { name: "Monday.com", icon: CalendarCheck },
            { name: "ClickUp", icon: GitBranch },
            { name: "CRM Systems", icon: Users }
          ]
        },
        {
          title: "No-Code Tool Implementation",
          description: "Build powerful systems without coding using platforms like Softr, Lovable, and other no-code solutions.",
          extendedDescription: "Transform your ideas into functional apps, websites, and internal tools without writing a single line of code. Our no-code workflow automation experts will help you leverage these platforms to create databases, client portals, dashboards, and other business systems that look professional and work flawlessly.",
          keywords: ["no-code workflow automation", "small business automation", "tech stack consulting", "process optimization consulting"],
          tools: [
            { name: "Softr", icon: Settings },
            { name: "Lovable", icon: BookOpen },
            { name: "Airtable", icon: Database },
            { name: "Other no-code platforms", icon: Code }
          ]
        }
      ]
    },
    {
      title: "Workflow & Process Automation",
      description: "Eliminate repetitive tasks and streamline operations with custom automation solutions.",
      icon: Workflow,
      services: [
        {
          title: "Workflow Automation",
          description: "Connect your tools and automate processes using platforms like n8n, Make, and Zapier.",
          extendedDescription: "Our Zapier automation experts will identify tasks that can be automated, design custom workflows that connect all your business tools, and implement robust solutions that eliminate manual data entry, reduce errors, and save you 10+ hours per week. Perfect for freelancers and small businesses looking to scale their operations.",
          keywords: ["automation", "process optimization", "Zapier automation", "automation services for small businesses", "business process management"],
          tools: [
            { name: "n8n", icon: GitBranch },
            { name: "Make", icon: Settings },
            { name: "Zapier", icon: Zap }
          ]
        },
        {
          title: "AI Agent Development",
          description: "Create custom AI assistants that handle specific tasks in your business workflow.",
          extendedDescription: "Leverage cutting-edge AI technology to create specialized agents that can manage customer support, data analysis, content creation, and more. Our AI tools for freelancers are designed to augment your capabilities, allowing you to deliver better results with less effort while maintaining complete control over the process.",
          keywords: ["AI", "AI agent development", "AI tools for freelancers", "AI readiness assessment", "small business automation"],
          tools: [
            { name: "OpenAI", icon: MessageSquare },
            { name: "Anthropic", icon: Users },
            { name: "Custom AI Agents", icon: Code }
          ]
        }
      ]
    },
    {
      title: "Data & Project Management",
      description: "Transform chaos into clarity with structured project management and data organization.",
      icon: Database,
      services: [
        {
          title: "Data & Information Management",
          description: "Organize your business data, implement systems to maintain information flow and accessibility.",
          extendedDescription: "Implement comprehensive data lifecycle management systems that ensure your critical information is organized, accessible, and secure. We'll set up databases, knowledge management systems, and documentation frameworks that grow with your business and make information retrieval effortless.",
          keywords: ["data lifecycle management", "process optimization", "small business automation", "tech stack consulting"],
          tools: [
            { name: "Notion", icon: FileText },
            { name: "Airtable", icon: Database },
            { name: "Coda", icon: BookOpen }
          ]
        },
        {
          title: "Business Process Management",
          description: "Streamline operations with comprehensive process mapping, optimization, and implementation.",
          extendedDescription: "Our business process management services help you identify bottlenecks, streamline workflows, and implement systems that ensure consistency and efficiency. We'll map your current processes, identify improvement opportunities, and create standardized procedures that can be easily followed by your team or virtual assistants.",
          keywords: ["business process management", "process optimization consulting", "automation services for small businesses", "personal tech navigation"],
          tools: [
            { name: "Miro", icon: GitBranch },
            { name: "ClickUp", icon: CalendarCheck },
            { name: "Asana", icon: Coffee }
          ]
        }
      ]
    }
  ];

  const faqItems: FAQItem[] = [
    {
      question: "Who should consider these services?",
      answer: "Our services are ideal for freelancers, solopreneurs, and small business owners who feel overwhelmed by administrative tasks, want to leverage technology more effectively, or are looking to scale their operations without hiring additional staff."
    },
    {
      question: "Why should I invest in process optimization and automation?",
      answer: "If you ever feel like your business operations are filled with repetitive tasks that could be automated, you're investing in too many tools without a streamlined workflow, your data is scattered across platforms, or your growth is limited by your capacity to handle administrative tasks - our services will help you overcome these challenges and focus on what truly matters in your business."
    },
    {
      question: "What results can I expect?",
      answer: "Our clients typically experience a fully integrated tech stack where tools communicate seamlessly, automated workflows that handle routine tasks, AI assistants that augment capabilities, and clear systems for managing projects and data that scale with business growth - all leading to saving 10+ hours per week."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on project complexity. Simple automations can be completed in 1-2 weeks, while comprehensive system setups may take 4-8 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer: "Yes, we offer various support packages to ensure your systems continue running smoothly. These range from monthly check-ins to comprehensive management and optimization services."
    },
    {
      question: "How do I know if my business is ready for AI implementation?",
      answer: "Take our free AI readiness assessment to evaluate your current processes and data structure. We'll provide recommendations on where AI can make the biggest impact in your specific business context."
    }
  ];

  const handleServiceClick = (service: Service) => {
    if (selectedService === service) {
      setSelectedService(null);
    } else {
      setSelectedService(service);
    }
  };

  const handleRequestQuote = () => {
    window.open("https://calendly.com/anna-creailab/", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>CreAI Lab Services - AI & Automation for Freelancers & Small Businesses</title>
        <meta name="description" content="Expert process optimization, workflow automation, and AI solutions for freelancers and small businesses. Save time and scale your operations with our specialized services." />
        <meta name="keywords" content="process optimization, automation, AI, freelancer tools, small business automation, process optimization consulting, automation services for small businesses, AI tools for freelancers, no-code workflow automation, tech stack consulting, business process management, data lifecycle management, personal tech navigation, AI readiness assessment, freelancer community, CRM setup, Notion consulting, Zapier automation, AI agent development" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">AI & Automation Solutions</h1>
            <p className="text-xl text-accent max-w-2xl mx-auto">
              Save 10+ hours weekly with streamlined workflows and AI-powered tools custom-built for freelancers and small businesses.
            </p>
          </div>
          
          <div className="mb-24">
            <h2 className="text-4xl font-heading mb-12 text-center" id="services">Our Specialized Services</h2>
            
            <div className="space-y-8">
              {serviceCategories.map((category, idx) => (
                <div key={idx} className="border border-primary/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                  <button
                    onClick={() => toggleCategory(idx)} 
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <category.icon className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="text-2xl font-heading">{category.title}</h3>
                        <p className="text-accent mt-1">{category.description}</p>
                      </div>
                    </div>
                    {openCategories.includes(idx) ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openCategories.includes(idx) && (
                    <div className="p-6 pt-0 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {category.services.map((service, serviceIdx) => (
                          <div 
                            key={serviceIdx}
                            className={`transition-all duration-300 bg-white/5 backdrop-blur-sm rounded-xl hover:shadow-xl overflow-hidden border border-primary/10 ${selectedService === service ? 'md:col-span-2' : ''}`}
                          >
                            <div 
                              className="p-6 cursor-pointer"
                              onClick={() => handleServiceClick(service)}
                            >
                              <div className="flex justify-between items-start">
                                <h4 className="text-xl font-heading mb-3">{service.title}</h4>
                                {selectedService === service ? (
                                  <Button variant="ghost" size="sm" onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedService(null);
                                  }} className="p-1">
                                    <X className="h-5 w-5" />
                                  </Button>
                                ) : null}
                              </div>
                              <p className="text-accent mb-4">{service.description}</p>
                              
                              {service.tools && (
                                <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-primary/10">
                                  {service.tools.map((tool, toolIdx) => (
                                    <div key={toolIdx} className="flex items-center gap-1 text-xs">
                                      <tool.icon className="h-4 w-4 text-primary" />
                                      <span>{tool.name}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {selectedService === service && (
                                <div className="mt-6 animate-fadeIn">
                                  <p className="text-accent mb-6">{service.extendedDescription}</p>
                                  <div className="flex flex-wrap gap-2 mb-6">
                                    {service.keywords.map((keyword, keywordIdx) => (
                                      <span key={keywordIdx} className="text-xs bg-white/10 text-primary px-3 py-1 rounded-full">
                                        {keyword}
                                      </span>
                                    ))}
                                  </div>
                                  <Button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleRequestQuote();
                                    }}
                                    className="w-full"
                                  >
                                    Request Quote for {service.title} <ArrowRight className="ml-2" />
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-heading mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-primary/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-5xl font-heading text-primary/50 mb-6">01</div>
                <h3 className="text-2xl font-heading mb-4">Discovery</h3>
                <p className="text-accent">We analyze your current workflows, tools, and pain points to identify optimization opportunities.</p>
              </div>
              
              <div className="p-8 border border-primary/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-5xl font-heading text-primary/50 mb-6">02</div>
                <h3 className="text-2xl font-heading mb-4">Solution Design</h3>
                <p className="text-accent">We create a customized implementation plan that addresses your specific business challenges.</p>
              </div>
              
              <div className="p-8 border border-primary/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-5xl font-heading text-primary/50 mb-6">03</div>
                <h3 className="text-2xl font-heading mb-4">Implementation</h3>
                <p className="text-accent">We set up your systems, automate workflows, and train you to leverage your new tools effectively.</p>
              </div>
            </div>
          </div>

          <div className="mb-24 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-4xl font-heading mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-primary/10 rounded-xl overflow-hidden"
                >
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-heading">{faq.question}</h3>
                    {openFAQs.includes(index) ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQs.includes(index) && (
                    <div className="p-5 pt-0 animate-fadeIn">
                      <p className="text-accent">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-accent mb-8 max-w-2xl mx-auto">
              Request a personalized quote for any of our services. We'll analyze your needs and provide a detailed proposal within 24 hours.
            </p>
            <Button 
              onClick={() => window.open("https://polished-care-fbe.notion.site/1b4195d3201d8095bb2cc810ebd5c696?pvs=105", "_blank")}
              className="text-lg px-8 py-6 hover:scale-105"
            >
              Request Your Free Quote <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
