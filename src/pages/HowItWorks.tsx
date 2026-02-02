import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Terminal, Wallet, TrendingUp, CheckCircle, Coins, Shield, Zap, Database } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Wallet,
      title: "CONNECT_WALLET",
      description: "Link your Phantom or Solflare wallet to access the prediction protocol. Your keys, your control.",
      command: "wallet.connect()",
    },
    {
      step: "02",
      icon: TrendingUp,
      title: "EXPLORE_MARKETS",
      description: "Browse real-time prediction markets from Polymarket and Kalshi. Filter by category, source, or trending status.",
      command: "markets.fetch()",
    },
    {
      step: "03",
      icon: Coins,
      title: "PLACE_PREDICTIONS",
      description: "Choose YES or NO on any market. Set your stake amount and confirm the transaction through your wallet.",
      command: "prediction.submit()",
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "COLLECT_REWARDS",
      description: "When markets resolve, winning predictions are automatically paid out to your connected wallet.",
      command: "rewards.claim()",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "SECURE_PROTOCOL",
      description: "All transactions are secured on Solana blockchain with instant finality.",
    },
    {
      icon: Zap,
      title: "INSTANT_SETTLEMENT",
      description: "No waiting periods. Winnings are distributed immediately upon market resolution.",
    },
    {
      icon: Database,
      title: "AGGREGATED_DATA",
      description: "Markets aggregated from top prediction platforms for maximum liquidity.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 lg:pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="terminal-window max-w-4xl mx-auto p-6 lg:p-8">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-neon-green/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-neon-green/60 text-xs font-mono ml-2">how_it_works.sh</span>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Terminal className="w-6 h-6 text-neon-green" />
                <span className="text-neon-green/60 text-sm font-mono">betverse@terminal:~$</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-neon-green mb-4">
                {'>'} HOW_IT_WORKS
              </h1>
              <p className="text-neon-green/60 text-sm lg:text-base font-mono">
                // step-by-step guide to prediction markets
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="terminal-window p-6 lg:p-8 relative overflow-hidden group">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl lg:text-8xl font-bold text-neon-green/10">
                    {step.step}
                  </div>

                  <div className="flex items-start gap-4 lg:gap-6 relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-neon-green" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-neon-green mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neon-green/70 text-sm lg:text-base mb-4">
                        {step.description}
                      </p>
                      <code className="inline-block px-3 py-1.5 bg-black/50 border border-neon-green/30 rounded text-neon-green/80 text-xs lg:text-sm font-mono">
                        $ {step.command}
                      </code>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-10 lg:left-12 bottom-0 translate-y-full w-0.5 h-6 lg:h-8 bg-gradient-to-b from-neon-green/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neon-green mb-2">
                {'>'} PROTOCOL_FEATURES
              </h2>
              <p className="text-neon-green/60 text-sm font-mono">
                // built for speed, security, and transparency
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="terminal-window p-6 text-center group hover:border-neon-green/60 transition-colors">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-neon-green" />
                  </div>
                  <h3 className="text-lg font-bold text-neon-green mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neon-green/60 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 py-12">
          <div className="terminal-window max-w-2xl mx-auto p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-neon-green mb-4">
              READY_TO_PREDICT?
            </h2>
            <p className="text-neon-green/60 text-sm lg:text-base font-mono mb-6">
              // connect wallet && explore markets
            </p>
            <a
              href="/markets"
              className="inline-flex items-center gap-2 bg-neon-green text-black font-bold px-6 py-3 rounded-lg hover:bg-neon-green/90 transition-colors"
              style={{ boxShadow: "0 0 20px hsl(var(--neon-green) / 0.4)" }}
            >
              <Terminal className="w-4 h-4" />
              ./explore_markets
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
