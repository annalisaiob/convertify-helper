const testimonials = [
  {
    quote: "CreAI Lab transformed our agency operations. We're now able to handle 3x more clients with the same team size.",
    author: "Sarah Johnson",
    role: "Agency Owner"
  },
  {
    quote: "The automation solutions they implemented saved us over 20 hours per week. Game changer!",
    author: "Michael Chen",
    role: "Solopreneur"
  },
  {
    quote: "Finally, I can focus on strategy instead of getting bogged down by repetitive tasks.",
    author: "Emma Davis",
    role: "Service Provider"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="bg-white/10 p-6 rounded-lg animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
              <cite className="not-italic">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-secondary">{testimonial.role}</div>
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};