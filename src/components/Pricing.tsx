import React from 'react';
import { BarChart3, TrendingUp, Globe, Wind } from 'lucide-react';

const ImpactAnalytics = () => {
  const metrics = [
    {
      title: "Global AQI Index",
      value: "82",
      unit: "avg AQI",
      description: "Average real-time AQI level across monitored cities",
      trend: "-12%",
      icon: <Globe className="h-8 w-8 text-cosmic-accent" />,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Active Monitoring Stations",
      value: "312",
      unit: "stations",
      description: "IoT-based sensors deployed in urban and rural locations",
      trend: "+8%",
      icon: <Wind className="h-8 w-8 text-cosmic-accent" />,
      gradient: "from-sky-500/20 to-cyan-500/20"
    },
    {
      title: "Emission Reduction",
      value: "24.6K",
      unit: "tons CO₂",
      description: "Measured reduction in greenhouse gases this quarter",
      trend: "+19%",
      icon: <TrendingUp className="h-8 w-8 text-cosmic-accent" />,
      gradient: "from-orange-500/20 to-amber-500/20"
    }
  ];

  const analyticsFeatures = [
    {
      title: "Real-Time Air Quality Monitoring",
      description: "Continuous AQI data collection from distributed IoT sensors and satellites.",
      metrics: ["Live AQI readings", "PM2.5 & PM10 levels", "CO, NO₂, O₃ tracking"]
    },
    {
      title: "Predictive Pollution Analytics",
      description: "AI-powered forecasting for upcoming air quality patterns and hotspot predictions.",
      metrics: ["ML prediction models", "Weather-AQI correlation", "Anomaly detection"]
    },
    {
      title: "Health & Impact Visualization",
      description: "Interactive dashboards linking AQI levels with respiratory health data and alerts.",
      metrics: ["Geo heatmaps", "Health risk index", "Custom city reports"]
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Global <span className="text-green-500">Air Quality</span> Impact
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-time air quality data and pollution insights from smart monitoring networks
          </p>
        </div>
        
        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl border border-cosmic-light/20 cosmic-gradient bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-cosmic-light/40"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.gradient}`}>
                  {metric.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm text-cosmic-accent font-medium">{metric.trend}</div>
                  <div className="text-xs text-cosmic-muted">vs last month</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium tracking-tighter text-foreground">{metric.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tighter text-foreground">{metric.value}</span>
                  <span className="text-sm text-cosmic-muted">{metric.unit}</span>
                </div>
                <p className="text-sm text-cosmic-muted">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Features */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-medium tracking-tighter text-foreground mb-2">
              Advanced Air Analytics Suite
            </h3>
            <p className="text-cosmic-muted">
              AI-driven air quality monitoring, forecasting, and health impact visualization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-cosmic-light/20 cosmic-gradient bg-card transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-cosmic-accent" />
                  <h4 className="text-lg font-medium tracking-tighter text-foreground">{feature.title}</h4>
                </div>
                
                <p className="text-cosmic-muted mb-6">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-cosmic-accent"></div>
                      <span className="text-sm text-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <div className="mx-auto inline-flex items-center justify-start text-left gap-2 px-3 sm:px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-6 mb-0 rounded-full bg-cosmic-light/10 border border-cosmic-light/20 max-w-[92vw]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-green-500 animate-pulse inline-block"></span>
            <span className="text-[11px] sm:text-xs md:text-sm whitespace-nowrap text-cosmic-muted leading-none text-left">
              Live AQI updated every 15 minutes from {Math.floor(Math.random() * 80) + 150}+ monitoring stations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAnalytics;
