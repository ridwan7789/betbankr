import { TrendingUp } from "lucide-react";

const Hero = () => {
  // Mock data for the chart
  const chartData = [30, 35, 32, 45, 42, 48, 44, 52, 48, 55, 50, 58, 52, 48];

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Terminal */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-3 text-neon-green/60 text-sm">betverse@terminal:~$</span>
            </div>
            <div className="p-6 lg:p-8">
              <div className="mb-6">
                <p className="text-neon-green/60 text-sm mb-1">system.status: <span className="text-neon-green">ONLINE</span></p>
                <p className="text-neon-green/60 text-sm">live_predictions: <span className="text-neon-green">ACTIVE</span></p>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                <span className="text-neon-green neon-text">&gt; PREDICT</span>
                <br />
                <span className="text-neon-green neon-text">THE_FUTURE</span>
              </h1>
              
              <div className="mb-8 text-neon-green/60 text-sm lg:text-base">
                <p>// Place predictions on real-world events</p>
                <p>// Data: Polymarket + Kalshi</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  ./explore_markets
                </button>
                <button className="btn-outline">
                  cat README.md
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Market Analysis */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-3 text-neon-green/60 text-sm">market_analysis.sh</span>
            </div>
            <div className="p-6 lg:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-neon-green font-bold text-lg lg:text-xl mb-1">BTC_150K_PREDICTION</h3>
                  <p className="text-neon-green/60 text-sm">// 30-day probability trend</p>
                </div>
                <div className="text-right">
                  <p className="text-neon-green font-bold text-2xl lg:text-3xl neon-text">48.2%</p>
                  <p className="text-neon-green/60 text-xs uppercase">CURRENT_ODDS</p>
                </div>
              </div>
              
              {/* Chart */}
              <div className="h-48 lg:h-56 relative">
                <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(147 100% 50% / 0.3)" />
                      <stop offset="100%" stopColor="hsl(147 100% 50% / 0)" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line 
                      key={i} 
                      x1="0" 
                      y1={i * 45} 
                      x2="400" 
                      y2={i * 45} 
                      stroke="hsl(147 100% 50% / 0.1)" 
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Area fill */}
                  <path
                    d={`M 0 ${180 - chartData[0] * 3} ${chartData.map((val, i) => `L ${(i / (chartData.length - 1)) * 400} ${180 - val * 3}`).join(' ')} L 400 180 L 0 180 Z`}
                    fill="url(#chartGradient)"
                  />
                  
                  {/* Line */}
                  <path
                    d={`M 0 ${180 - chartData[0] * 3} ${chartData.map((val, i) => `L ${(i / (chartData.length - 1)) * 400} ${180 - val * 3}`).join(' ')}`}
                    fill="none"
                    stroke="hsl(147 100% 50%)"
                    strokeWidth="3"
                    filter="url(#glow)"
                  />
                  
                  {/* Data points */}
                  {chartData.map((val, i) => (
                    <circle
                      key={i}
                      cx={(i / (chartData.length - 1)) * 400}
                      cy={180 - val * 3}
                      r="4"
                      fill="hsl(147 100% 50%)"
                      filter="url(#glow)"
                    />
                  ))}
                </svg>
              </div>
              
              <div className="flex items-center gap-2 mt-4 text-neon-green/60 text-sm">
                <TrendingUp className="w-4 h-4 text-neon-green" />
                <span>+5.2% (24h)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
