
import React from 'react';
import { BarChart3, TrendingUp, Globe, Waves } from 'lucide-react';

const ImpactAnalytics = () => {
  const metrics = [
    {
      title: "Global Impact",
      value: "2.4M",
      unit: "tCO₂",
      description: "Carbon sequestered through verified blue carbon projects",
      trend: "+18%",
      icon: <Globe className="h-8 w-8 text-cosmic-accent" />,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Active Projects",
      value: "847",
      unit: "sites",
      description: "Mangrove, seagrass, and salt marsh restoration projects",
      trend: "+24%",
      icon: <Waves className="h-8 w-8 text-cosmic-accent" />,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Market Volume",
      value: "$12.8M",
      unit: "traded",
      description: "Total value of carbon credits traded on the platform",
      trend: "+35%",
      icon: <TrendingUp className="h-8 w-8 text-cosmic-accent" />,
      gradient: "from-purple-500/20 to-indigo-500/20"
    }
  ];

  const analyticsFeatures = [
    {
      title: "Real-Time Monitoring",
      description: "Live satellite and IoT data streams providing instant ecosystem health updates",
      metrics: ["24/7 monitoring", "Sub-meter accuracy", "99.9% uptime"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered insights forecasting carbon sequestration potential and market trends",
      metrics: ["ML algorithms", "Climate modeling", "Risk assessment"]
    },
    {
      title: "Impact Visualization",
      description: "Interactive dashboards showing environmental and economic impact of conservation efforts",
      metrics: ["3D mapping", "Time-series analysis", "Custom reports"]
    }
  ];
  
  return (
    <section id="impact" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Global Blue Carbon Impact
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-time analytics and verified environmental impact across the blue carbon ecosystem
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
              Advanced Analytics Suite
            </h3>
            <p className="text-cosmic-muted">
              Comprehensive monitoring and insights powered by AI and satellite technology
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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cosmic-light/10 border border-cosmic-light/20">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-cosmic-muted">
              Live data updated every 15 minutes from {Math.floor(Math.random() * 50) + 200}+ monitoring stations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAnalytics;
