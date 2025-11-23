import React from 'react';
import bg1Video from './bg1.mp4';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AeroSutra completely revolutionized our city’s air monitoring system. The IoT sensor integration provides real-time AQI data our citizens can actually trust.",
      author: "Dr. Neha Verma",
      position: "Chief Environmental Scientist, Delhi Clean Air Mission",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "The analytics dashboard helped us identify pollution hotspots in record time. We reduced PM2.5 levels by 14% within three months of deployment.",
      author: "Rohit Mehra",
      position: "Head of Urban Sustainability, Pune Smart City",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "With AeroSutra’s predictive AQI engine, we can now forecast hazardous air days and alert schools and hospitals before the exposure begins.",
      author: "Dr. Laila Rahman",
      position: "Director, National Air Quality Observatory",
      avatar: "bg-cosmic-light/20"
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Big rounded ratings box - with video background */}
        <div className="relative w-full rounded-[20px] overflow-hidden border border-white/20">
          {/* Background video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            src={bg1Video}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/40 to-green-900/30" />
          
          {/* Content */}
          <div className="relative z-10 p-4 md:p-5 space-y-8">
            <div className="text-left space-y-2">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-white">
                Trusted by air quality and environmental leaders worldwide
              </h2>
              <p className="text-white/85 text-base md:text-lg max-w-2xl">
                Discover how AeroSutra is empowering cities and scientists with AI-driven air quality insights
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
