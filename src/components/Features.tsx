
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Waves, Satellite, Shield, Coins, BarChart3, Users } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Satellite MRV Integration",
      description: "Real-time monitoring of blue carbon ecosystems through satellite and IoT data.",
      expandedDescription: "Connect directly to satellite feeds, drone sensors, and IoT devices for continuous monitoring of mangroves, seagrass beds, and salt marshes. Automated data collection ensures accurate carbon sequestration measurements with blockchain timestamping for immutable records.",
      icon: (
        <Satellite size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Blockchain Registry",
      description: "Immutable carbon credit registry with full transparency and provenance tracking.",
      expandedDescription: "Every carbon credit is registered on the blockchain with complete lifecycle tracking from project inception to retirement. Smart contracts automate verification, transfer, and retirement processes while maintaining full audit trails and preventing double-counting.",
      icon: (
        <Shield size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Carbon Credit Trading",
      description: "Decentralized marketplace for blue carbon credit trading with real-time pricing.",
      expandedDescription: "Trade verified blue carbon credits through our automated marketplace. Real-time pricing based on supply and demand, automated escrow through smart contracts, and instant settlement. Support for both spot trading and futures contracts with integrated risk management.",
      icon: (
        <Coins size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Third-Party Verification",
      description: "Automated verification by certified third-party auditors and AI systems.",
      expandedDescription: "Integration with certified verification bodies and AI-powered validation systems. Automated quality checks, compliance verification, and certification issuance. Multi-layer verification ensures credits meet international standards and regulatory requirements.",
      icon: (
        <Shield size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Market Analytics",
      description: "Advanced analytics for carbon market trends, pricing, and ecosystem impact.",
      expandedDescription: "Comprehensive dashboards showing market trends, price history, trading volumes, and ecosystem health metrics. AI-powered insights help traders make informed decisions while tracking real environmental impact of conservation projects.",
      icon: (
        <BarChart3 size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "DAO Governance",
      description: "Decentralized governance allowing stakeholder participation in platform decisions.",
      expandedDescription: "Token-based governance system where stakeholders vote on protocol upgrades, verification standards, and ecosystem policies. Transparent decision-making process with weighted voting based on stake and participation in the blue carbon ecosystem.",
      icon: (
        <Users size={24} className="text-cosmic-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Complete Blue Carbon Ecosystem
          </h2>
          <p className="text-cosmic-muted text-lg">
            End-to-end platform for blue carbon credit registry, trading, verification, and governance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
