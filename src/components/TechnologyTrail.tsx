import React from 'react';
import type { IconType } from 'react-icons';
import {
  SiPolygon,
  SiSolidity,
  SiIpfs,
  SiNodedotjs,
  SiReact,
  SiTensorflow,
  SiDji,
  SiExpo,
} from 'react-icons/si';

const TechnologyTrail = () => {
  const technologies: { name: string; icon: IconType; description: string }[] = [
    { name: 'Polygon', icon: SiPolygon, description: 'Blockchain' },
    { name: 'Solidity', icon: SiSolidity, description: 'Smart Contracts' },
    { name: 'IPFS', icon: SiIpfs, description: 'Storage' },
    { name: 'Node.js', icon: SiNodedotjs, description: 'Backend' },
    { name: 'React', icon: SiReact, description: 'Frontend' },
    { name: 'React Native', icon: SiExpo, description: 'Mobile' },
    { name: 'TensorFlow', icon: SiTensorflow, description: 'AI Models' },
    { name: 'DJI SDK', icon: SiDji, description: 'Drone Integration' },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="w-full py-4 md:py-6 overflow-hidden edge-fade-mask">
      <div className="relative">
        {/* Scrolling container: icons only */}
        <div className="flex items-center gap-10 md:gap-16 animate-marquee will-change-transform w-max whitespace-nowrap">
          {duplicatedTechs.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="min-w-[80px] flex items-center justify-center shrink-0"
                aria-label={tech.name}
                title={tech.name}
              >
                <IconComponent
                  className="h-8 w-8 md:h-12 md:w-12 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  aria-hidden="true"
                />
                <span className="sr-only">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default TechnologyTrail;