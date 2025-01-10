import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Save Countless Hours",
    description: "Automate repetitive tasks and focus on what truly matters - growing your business."
  },
  {
    title: "Increase Revenue",
    description: "Streamlined processes mean faster delivery and more capacity to serve clients."
  },
  {
    title: "Reduce Errors",
    description: "Automated workflows ensure consistency and eliminate human error."
  },
  {
    title: "Scale Efficiently",
    description: "Build systems that grow with your business without adding overhead."
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Transform Your Business Operations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};