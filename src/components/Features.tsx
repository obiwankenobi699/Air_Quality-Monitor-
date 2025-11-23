import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Satellite, Shield, BarChart3, Users, Waves, Coins } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Satellite AQI Integration",
      description: "Real-time air quality monitoring through satellite and IoT sensor networks.",
      expandedDescription: "Integrate live data from ground-based sensors, drones, and satellites to track PM2.5, PM10, CO₂, NO₂, and O₃ levels. Automatic updates every few minutes ensure continuous and accurate AQI tracking with real-time geographic mapping.",
      icon: (
        <Satellite size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Air Quality Data Registry",
      description: "Immutable AQI record system for transparency and reliability.",
      expandedDescription: "All collected air quality data is logged and time-stamped to ensure authenticity. Blockchain-backed storage ensures no data manipulation and allows public or authorized access for research and environmental governance.",
      icon: (
        <Shield size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Pollution Source Tracking",
      description: "Identify and analyze major contributors to air pollution in real-time.",
      expandedDescription: "Use spatial data and AI-driven analytics to trace emission hotspots from industries, vehicles, or other sources. Enables policymakers to take immediate corrective action with accurate localization and trend prediction.",
      icon: (
        <Coins size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "AI Verification System",
      description: "Automated verification of AQI data quality and anomaly detection.",
      expandedDescription: "AI models verify the integrity and validity of sensor readings. Outliers and false readings are filtered automatically using adaptive calibration algorithms to maintain reliable environmental statistics.",
      icon: (
        <Shield size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Environmental Analytics Dashboard",
      description: "Comprehensive AQI analytics with trend visualization and prediction models.",
      expandedDescription: "Visual dashboards display historical AQI trends, pollutant composition, and future forecasts. Interactive charts help users understand local air quality variations and predict hazardous pollution periods.",
      icon: (
        <BarChart3 size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Community Governance",
      description: "Citizen-driven environmental governance through data sharing and reporting.",
      expandedDescription: "A participatory system where local citizens and organizations can contribute data, report anomalies, and vote on air quality improvement initiatives — enhancing transparency and accountability in AQI management.",
      icon: (
        <Users size={24} className="text-cosmic-accent" />
      )
    }
  ];

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <section id="features" className="w-full py-12 md:py-16 px-3 md:px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Intelligent <span className="text-blue-500">Air Quality</span> Monitoring System
          </h2>
          <p className="text-cosmic-muted text-lg">
            End-to-end platform for AQI tracking, pollution analytics, and community-based environmental governance
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
