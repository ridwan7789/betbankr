import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Mock data for the chart
  const chartData = [30, 35, 32, 45, 42, 48, 44, 52, 48, 55, 50, 58, 52, 48];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Panel - Terminal */}
          <motion.div 
            className="terminal-window"
            variants={itemVariants}
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-3 text-neon-green/60 text-sm">betbankr@terminal:~$</span>
            </div>
            <div className="p-6 lg:p-8">
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-neon-green/60 text-sm mb-1">system.status: <span className="text-neon-green">ONLINE</span></p>
                <p className="text-neon-green/60 text-sm">live_predictions: <span className="text-neon-green">ACTIVE</span></p>
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-neon-green neon-text">&gt; PREDICT</span>
                <br />
                <span className="text-neon-green neon-text">THE_FUTURE</span>
              </motion.h1>
              
              <motion.div
                className="mb-8 text-neon-green/60 text-sm lg:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p>// Place predictions on real-world events</p>
                <p>// Data: Polymarket + Kalshi</p>
                <p className="font-mono text-xs mt-2 text-neon-green/80">// BetBankr Official CA: 0xF1195bd89929B73F7C2DdC14aFCC775Bb00A7777</p>
              </motion.div>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a 
                  href="https://nad.fun/tokens/0xF1195bd89929B73F7C2DdC14aFCC775Bb00A7777" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary hover:scale-105 transition-transform"
                >
                  Buy Tokens
                </a>
                <Link to="/markets" className="btn-primary hover:scale-105 transition-transform">
                  ./explore_markets
                </Link>
                <Link to="/how-it-works" className="btn-outline hover:scale-105 transition-transform">
                  cat README.md
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel - Market Analysis */}
          <motion.div 
            className="terminal-window"
            variants={itemVariants}
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-3 text-neon-green/60 text-sm">market_analysis.sh</span>
            </div>
            <div className="p-6 lg:p-8">
              <motion.div 
                className="flex justify-between items-start mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div>
                  <h3 className="text-neon-green font-bold text-lg lg:text-xl mb-1">BTC_150K_PREDICTION</h3>
                  <p className="text-neon-green/60 text-sm">// 30-day probability trend</p>
                </div>
                <motion.div 
                  className="text-right"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  <p className="text-neon-green font-bold text-2xl lg:text-3xl neon-text">48.2%</p>
                  <p className="text-neon-green/60 text-xs uppercase">CURRENT_ODDS</p>
                </motion.div>
              </motion.div>
              
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
                  <motion.path
                    d={`M 0 ${180 - chartData[0] * 3} ${chartData.map((val, i) => `L ${(i / (chartData.length - 1)) * 400} ${180 - val * 3}`).join(' ')} L 400 180 L 0 180 Z`}
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                  
                  {/* Line */}
                  <motion.path
                    d={`M 0 ${180 - chartData[0] * 3} ${chartData.map((val, i) => `L ${(i / (chartData.length - 1)) * 400} ${180 - val * 3}`).join(' ')}`}
                    fill="none"
                    stroke="hsl(147 100% 50%)"
                    strokeWidth="3"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.6, duration: 1.5, ease: "easeInOut" }}
                  />
                  
                  {/* Data points */}
                  {chartData.map((val, i) => (
                    <motion.circle
                      key={i}
                      cx={(i / (chartData.length - 1)) * 400}
                      cy={180 - val * 3}
                      r="4"
                      fill="hsl(147 100% 50%)"
                      filter="url(#glow)"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.05, duration: 0.2 }}
                    />
                  ))}
                </svg>
              </div>
              
              <motion.div 
                className="flex items-center gap-2 mt-4 text-neon-green/60 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <TrendingUp className="w-4 h-4 text-neon-green" />
                <span>+5.2% (24h)</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
