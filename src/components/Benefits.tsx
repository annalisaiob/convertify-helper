import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "save countless hours",
    description: "automate repetitive tasks and focus on what truly matters - growing your business."
  },
  {
    title: "increase revenue",
    description: "streamlined processes mean faster delivery and more capacity to serve clients."
  },
  {
    title: "reduce errors",
    description: "automated workflows ensure consistency and eliminate human error."
  },
  {
    title: "scale efficiently",
    description: "build systems that grow with your business without adding overhead."
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#221F26] mb-12">
          transform your business operations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CheckCircle2 className="w-12 h-12 text-[#221F26] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#221F26]">{benefit.title}</h3>
              <p className="text-[#221F26]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};