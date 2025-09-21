
import React from 'react';
import bg1Video from './bg1.mp4';

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
    <section className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Big rounded ratings box - now with video background */}
        <div className="relative w-full rounded-[20px] overflow-hidden border border-white/20">
          {/* Background video (bundled via Vite asset import) */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            src={bg1Video}
          />
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/40 to-blue-900/30" />
          {/* Content */}
          <div className="relative z-10 p-4 md:p-5 space-y-8">
            <div className="text-left space-y-2">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-white">
                Trusted by conservation leaders globally
              </h2>
              <p className="text-white/85 text-base md:text-lg max-w-2xl">
                See how our platform transforms blue carbon projects and ecosystem restoration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-white inline-block mr-1 opacity-95">★</span>
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-white/95 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto pt-4">
                    <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-white/20`}></div>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.author}</h4>
                      <p className="text-sm text-white/80">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
