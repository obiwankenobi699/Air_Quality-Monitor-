
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "OceanSutra transformed our mangrove restoration project. The satellite MRV integration provides real-time verification that our investors trust completely.",
      author: "Dr. Maria Santos",
      position: "Director at Blue Coast Conservation",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "The blockchain registry gives us complete transparency in our carbon credit trading. We've processed over $2M in credits with zero disputes thanks to the immutable audit trail.",
      author: "James Mitchell",
      position: "Carbon Markets Lead at EcoTrade Partners",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "Compliance reporting used to take weeks. Now our blue carbon projects are automatically verified and certified through the platform's AI systems.",
      author: "Aisha Patel",
      position: "Sustainability Manager at Coastal Ventures",
      avatar: "bg-cosmic-light/20"
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Trusted by conservation leaders globally
          </h2>
          <p className="text-muted-foreground text-lg">
            See how our platform transforms blue carbon projects and ecosystem restoration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
