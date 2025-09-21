import React from 'react';
import { 
  Layers, 
  Shield, 
  Database, 
  Server, 
  Smartphone, 
  Brain, 
  Zap,
  Code
} from 'lucide-react';

const TechnologyTrail = () => {
  const technologies = [
    { name: 'Polygon', icon: Layers, description: 'Blockchain' },
    { name: 'Solidity', icon: Code, description: 'Smart Contracts' },
    { name: 'IPFS', icon: Database, description: 'Storage' },
    { name: 'Node.js', icon: Server, description: 'Backend' },
    { name: 'React', icon: Zap, description: 'Frontend' },
    { name: 'React Native', icon: Smartphone, description: 'Mobile' },
    { name: 'TensorFlow', icon: Brain, description: 'AI Models' },
    { name: 'DJI SDK', icon: Shield, description: 'Drone Integration' },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground">
          Built with industry-leading technologies
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex animate-[scroll_30s_linear_infinite] gap-8">
          {duplicatedTechs.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center min-w-[120px] p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="mb-2 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent size={24} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground">{tech.name}</span>
                <span className="text-xs text-muted-foreground">{tech.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyTrail;