import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thanks for reaching out!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Let's Transform Your Business
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input required placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input required type="email" placeholder="your@email.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea required placeholder="Tell us about your business and what you'd like to automate..." className="h-32" />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Get Started"}
          </Button>
        </form>
      </div>
    </section>
  );
};