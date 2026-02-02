import { Brain, Shield, Zap, Activity } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI_PREDICTIONS",
    description: "Advanced machine learning models analyze market sentiment and historical data for accurate probability forecasting.",
  },
  {
    icon: Shield,
    title: "SECURE_ESCROW",
    description: "Smart contract-based escrow system ensures your funds are protected until market resolution.",
  },
  {
    icon: Zap,
    title: "INSTANT_PAYOUT",
    description: "Automated settlement system processes winning predictions within seconds of market resolution.",
  },
  {
    icon: Activity,
    title: "REALTIME_DATA",
    description: "Live feeds from Polymarket and Kalshi provide up-to-the-minute odds and market movements.",
  },
];

const SystemFeatures = () => {
  return (
    <section id="how" className="py-16 lg:py-24 px-4 bg-black/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-neon-green neon-text mb-2">
            &gt; SYSTEM_FEATURES
          </h2>
          <p className="text-neon-green/60 text-sm">// advanced prediction protocol with AI + blockchain</p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center group-hover:border-neon-green transition-colors" style={{ boxShadow: '0 0 15px hsl(147 100% 50% / 0.2)' }}>
                <feature.icon className="w-8 h-8 text-neon-green" />
              </div>
              
              {/* Title */}
              <h3 className="text-neon-green font-bold text-lg mb-3">{feature.title}</h3>
              
              {/* Description */}
              <p className="text-neon-green/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemFeatures;
