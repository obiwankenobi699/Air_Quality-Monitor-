import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TaskBoard from "./TaskBoard";
import TechnologyTrail from "./TechnologyTrail";
import { Loader } from "lucide-react";
import PrismaticBurst from "./PrismaticBurstUser";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Prismatic burst animation */}
      <div className="relative z-10 w-full max-w-screen-xl rounded-2xl lg:rounded-3xl border border-border/60 overflow-hidden px-6 py-6 md:px-12 md:py-10 lg:px-16 lg:py-12 min-h-[520px] md:min-h-[620px] lg:min-h-[700px] xl:min-h-[760px]">
        <div className="absolute inset-0 pointer-events-none">
          <PrismaticBurst
            animationType="rotate3d"
            intensity={3.0}
            speed={0.5}
            distort={1.0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={24}
            mixBlendMode="normal"
          />
        </div>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 pointer-events-none bg-transparent dark:bg-black/45 md:dark:bg-black/35" aria-hidden="true" />

        {/* Hero content */}
        <div
          className={`relative z-10 max-w-6xl mx-auto text-center space-y-6 transition-all duration-700 transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Theme Prompt */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              Air Quality Monitoring System
              <Loader className="h-3 w-3 animate-spin text-primary" />
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Real-Time <span className="text-white">Air Quality</span> Index Dashboard
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto text-balance drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Monitor air pollution levels, visualize AQI metrics, and track particulate matter (PM2.5, PM10), CO₂, NO₂, and O₃ concentrations in real-time across different regions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
            <Button
              variant="default"
              className="w-full sm:w-auto bg-white text-black hover:bg-white/90 text-base h-12 px-8 transition-all duration-200 min-h-[48px] shadow-lg shadow-black/30"
            >
              View Live AQI
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto text-white border-white/20 hover:border-white/30 text-base h-12 px-8 transition-all duration-200 min-h-[48px] bg-black/55 hover:bg-black/65 backdrop-blur supports-[backdrop-filter]:bg-black/45 shadow-md shadow-black/30"
            >
              Analyze Trends
            </Button>
          </div>

          {/* Technology Trail */}
          <TechnologyTrail />

          <div className="pt-3 md:pt-4 text-xs md:text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            Real-time Data • Sensor Network • AQI Insights • Geo Visualization
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div
        className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-foreground"></div>
                </div>
                <span id= "analysis" className="text-foreground font-medium">
                  AQI Monitoring Dashboard
                </span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-border p-4 space-y-4 hidden md:block bg-card">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">
                    Sections
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted text-foreground">
                      <div className="h-3 w-3 rounded-sm bg-foreground"></div>
                      <span>Live AQI</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Pollutant Stats</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Historical Data</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>City Comparison</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <div className="text-xs text-muted-foreground uppercase">
                    Sensors
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      <span>PM2.5</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <span>CO₂</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <span>NO₂</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                      <span>O₃</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Dashboard */}
              <div className="flex-1 p-4 bg-background overflow-hidden">
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-medium text-foreground">
                      Regional AQI Overview
                    </h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      Updated 5 min ago
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 px-3 rounded-md bg-foreground text-background flex items-center justify-center text-sm font-medium whitespace-nowrap">
                      Refresh Data
                    </div>
                  </div>
                </div>

                {/* Visualization / Task Board placeholder */}
                <div className="overflow-hidden">
                  <TaskBoard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
