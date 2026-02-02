import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Zap, Clock, TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";

// Market data (in production, this would come from an API)
const marketsData: Record<string, {
  id: number;
  source: "POLY" | "KLSH";
  isHot: boolean;
  question: string;
  category: string;
  yesPercent: number;
  noPercent: number;
  liquidity: string;
  timeRemaining: string;
  description: string;
  volume24h: string;
  traders: number;
  created: string;
  resolution: string;
  chartData: number[];
}> = {
  "1": {
    id: 1,
    source: "POLY",
    isHot: true,
    question: "Will Bitcoin reach $150K by Q2 2026?",
    category: "crypto",
    yesPercent: 65,
    noPercent: 35,
    liquidity: "$2.5M",
    timeRemaining: "4mo",
    description: "This market resolves YES if the price of Bitcoin (BTC) reaches or exceeds $150,000 USD on any major exchange before July 1, 2026. Price data will be sourced from CoinGecko.",
    volume24h: "$145.2K",
    traders: 2847,
    created: "Dec 15, 2025",
    resolution: "Jul 1, 2026",
    chartData: [45, 48, 52, 55, 51, 58, 62, 59, 65, 63, 67, 65],
  },
  "2": {
    id: 2,
    source: "KLSH",
    isHot: true,
    question: "Will Ethereum ETF be approved in Asia?",
    category: "crypto",
    yesPercent: 78,
    noPercent: 22,
    liquidity: "$3.2M",
    timeRemaining: "1mo",
    description: "This market resolves YES if any regulatory body in Asia (including Hong Kong, Singapore, Japan, or South Korea) approves an Ethereum spot ETF before March 1, 2026.",
    volume24h: "$289.5K",
    traders: 4521,
    created: "Jan 5, 2026",
    resolution: "Mar 1, 2026",
    chartData: [65, 68, 72, 70, 75, 74, 78, 76, 80, 78, 79, 78],
  },
  "3": {
    id: 3,
    source: "POLY",
    isHot: true,
    question: "Will Solana flip Ethereum in TVL by 2026?",
    category: "crypto",
    yesPercent: 18,
    noPercent: 82,
    liquidity: "$2.1M",
    timeRemaining: "11mo",
    description: "This market resolves YES if Solana's Total Value Locked (TVL) exceeds Ethereum's TVL at any point before January 1, 2027. Data will be sourced from DefiLlama.",
    volume24h: "$98.7K",
    traders: 1892,
    created: "Nov 20, 2025",
    resolution: "Jan 1, 2027",
    chartData: [25, 22, 20, 18, 19, 17, 16, 18, 17, 19, 18, 18],
  },
  "4": {
    id: 4,
    source: "POLY",
    isHot: true,
    question: "Will XRP reach $5 by end of 2026?",
    category: "crypto",
    yesPercent: 42,
    noPercent: 58,
    liquidity: "$1.9M",
    timeRemaining: "11mo",
    description: "This market resolves YES if XRP reaches or exceeds $5.00 USD on any major exchange before December 31, 2026.",
    volume24h: "$76.3K",
    traders: 1456,
    created: "Dec 1, 2025",
    resolution: "Dec 31, 2026",
    chartData: [38, 40, 42, 39, 44, 41, 43, 45, 42, 40, 43, 42],
  },
  "5": {
    id: 5,
    source: "KLSH",
    isHot: false,
    question: "Will a country adopt Bitcoin as legal tender in 2026?",
    category: "crypto",
    yesPercent: 35,
    noPercent: 65,
    liquidity: "$980K",
    timeRemaining: "11mo",
    description: "This market resolves YES if any new country officially adopts Bitcoin as legal tender in 2026.",
    volume24h: "$32.1K",
    traders: 876,
    created: "Jan 2, 2026",
    resolution: "Dec 31, 2026",
    chartData: [30, 32, 35, 33, 36, 34, 35, 37, 35, 34, 36, 35],
  },
  "6": {
    id: 6,
    source: "POLY",
    isHot: false,
    question: "Will Cardano launch Hydra mainnet in 2026?",
    category: "crypto",
    yesPercent: 55,
    noPercent: 45,
    liquidity: "$720K",
    timeRemaining: "11mo",
    description: "This market resolves YES if Cardano's Hydra scaling solution launches on mainnet before January 1, 2027.",
    volume24h: "$28.4K",
    traders: 654,
    created: "Dec 10, 2025",
    resolution: "Jan 1, 2027",
    chartData: [50, 52, 54, 53, 55, 54, 56, 55, 54, 56, 55, 55],
  },
  "7": {
    id: 7,
    source: "KLSH",
    isHot: true,
    question: "Will AI surpass human reasoning by 2027?",
    category: "technology",
    yesPercent: 42,
    noPercent: 58,
    liquidity: "$1.8M",
    timeRemaining: "11mo",
    description: "This market resolves YES if an AI system demonstrates superior reasoning capabilities to humans on standardized tests.",
    volume24h: "$112.3K",
    traders: 2134,
    created: "Nov 15, 2025",
    resolution: "Jan 1, 2027",
    chartData: [35, 38, 40, 42, 41, 43, 42, 44, 42, 41, 43, 42],
  },
  "8": {
    id: 8,
    source: "POLY",
    isHot: false,
    question: "Will Apple release AR Glasses in 2026?",
    category: "technology",
    yesPercent: 45,
    noPercent: 55,
    liquidity: "$890K",
    timeRemaining: "1mo",
    description: "This market resolves YES if Apple announces and releases consumer AR glasses in 2026.",
    volume24h: "$45.6K",
    traders: 987,
    created: "Jan 8, 2026",
    resolution: "Mar 1, 2026",
    chartData: [40, 42, 44, 45, 44, 46, 45, 47, 46, 45, 46, 45],
  },
  "9": {
    id: 9,
    source: "KLSH",
    isHot: true,
    question: "Will GPT-5 be released before July 2025?",
    category: "technology",
    yesPercent: 62,
    noPercent: 38,
    liquidity: "$1.8M",
    timeRemaining: "89d",
    description: "This market resolves YES if OpenAI releases GPT-5 or a successor model before July 1, 2025.",
    volume24h: "$167.8K",
    traders: 3456,
    created: "Jan 1, 2025",
    resolution: "Jul 1, 2025",
    chartData: [55, 58, 60, 62, 61, 63, 62, 64, 63, 62, 63, 62],
  },
  "10": {
    id: 10,
    source: "POLY",
    isHot: false,
    question: "Will SpaceX land humans on Mars by 2030?",
    category: "space",
    yesPercent: 23,
    noPercent: 77,
    liquidity: "$890K",
    timeRemaining: "1,825d",
    description: "This market resolves YES if SpaceX successfully lands humans on Mars before January 1, 2031.",
    volume24h: "$21.3K",
    traders: 543,
    created: "Sep 1, 2025",
    resolution: "Jan 1, 2031",
    chartData: [20, 22, 24, 23, 25, 24, 23, 24, 23, 22, 23, 23],
  },
  "11": {
    id: 11,
    source: "KLSH",
    isHot: true,
    question: "Will Fed cut rates in Q1 2025?",
    category: "economics",
    yesPercent: 71,
    noPercent: 29,
    liquidity: "$3.2M",
    timeRemaining: "28d",
    description: "This market resolves YES if the Federal Reserve cuts interest rates by at least 25 basis points in Q1 2025.",
    volume24h: "$234.5K",
    traders: 5678,
    created: "Dec 1, 2024",
    resolution: "Apr 1, 2025",
    chartData: [65, 68, 70, 72, 71, 73, 72, 74, 73, 72, 72, 71],
  },
  "12": {
    id: 12,
    source: "POLY",
    isHot: false,
    question: "Will Tesla stock reach $500 by 2026?",
    category: "automotive",
    yesPercent: 38,
    noPercent: 62,
    liquidity: "$1.5M",
    timeRemaining: "11mo",
    description: "This market resolves YES if Tesla (TSLA) stock reaches or exceeds $500 before January 1, 2027.",
    volume24h: "$67.8K",
    traders: 1234,
    created: "Nov 1, 2025",
    resolution: "Jan 1, 2027",
    chartData: [35, 36, 38, 37, 39, 38, 39, 40, 38, 37, 38, 38],
  },
  "13": {
    id: 13,
    source: "KLSH",
    isHot: true,
    question: "Will there be a US presidential debate before March 2025?",
    category: "politics",
    yesPercent: 85,
    noPercent: 15,
    liquidity: "$4.2M",
    timeRemaining: "2mo",
    description: "This market resolves YES if a televised debate between major presidential candidates occurs before March 1, 2025.",
    volume24h: "$312.4K",
    traders: 7890,
    created: "Oct 15, 2024",
    resolution: "Mar 1, 2025",
    chartData: [80, 82, 84, 83, 85, 84, 86, 85, 86, 85, 85, 85],
  },
  "14": {
    id: 14,
    source: "POLY",
    isHot: false,
    question: "Will Starship complete orbital flight in 2025?",
    category: "space",
    yesPercent: 72,
    noPercent: 28,
    liquidity: "$1.1M",
    timeRemaining: "11mo",
    description: "This market resolves YES if SpaceX Starship completes a full orbital flight before January 1, 2026.",
    volume24h: "$54.2K",
    traders: 1567,
    created: "Dec 20, 2024",
    resolution: "Jan 1, 2026",
    chartData: [68, 70, 72, 71, 73, 72, 74, 73, 72, 73, 72, 72],
  },
  "15": {
    id: 15,
    source: "KLSH",
    isHot: false,
    question: "Will inflation drop below 2% in US by 2026?",
    category: "economics",
    yesPercent: 48,
    noPercent: 52,
    liquidity: "$2.8M",
    timeRemaining: "11mo",
    description: "This market resolves YES if US CPI inflation drops below 2% before January 1, 2027.",
    volume24h: "$89.3K",
    traders: 2345,
    created: "Jan 5, 2026",
    resolution: "Jan 1, 2027",
    chartData: [45, 46, 48, 47, 49, 48, 50, 49, 48, 49, 48, 48],
  },
  "16": {
    id: 16,
    source: "POLY",
    isHot: true,
    question: "Will Rivian become profitable by 2027?",
    category: "automotive",
    yesPercent: 32,
    noPercent: 68,
    liquidity: "$650K",
    timeRemaining: "2y",
    description: "This market resolves YES if Rivian reports a profitable quarter before January 1, 2028.",
    volume24h: "$23.4K",
    traders: 456,
    created: "Nov 10, 2025",
    resolution: "Jan 1, 2028",
    chartData: [28, 30, 32, 31, 33, 32, 34, 33, 32, 33, 32, 32],
  },
};

const MarketDetail = () => {
  const { id } = useParams<{ id: string }>();
  const market = id ? marketsData[id] : null;

  if (!market) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20 lg:pt-24 pb-16 px-4">
          <motion.div 
            className="terminal-window max-w-lg w-full p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-2xl font-bold text-neon-green mb-4">MARKET_NOT_FOUND</h1>
            <p className="text-neon-green/60 text-sm mb-6">// The requested market does not exist</p>
            <Link to="/markets" className="btn-primary">
              ./back_to_markets
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 lg:pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link 
              to="/markets" 
              className="inline-flex items-center gap-2 text-neon-green/60 hover:text-neon-green transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              ./back_to_markets
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Market Header */}
              <div className="terminal-window p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded border ${
                    market.source === "POLY" 
                      ? "bg-neon-green/10 text-neon-green border-neon-green/50" 
                      : "bg-purple-500/10 text-purple-400 border-purple-500/50"
                  }`}>
                    [{market.source}]
                  </span>
                  {market.isHot && (
                    <span className="flex items-center gap-1 text-yellow-500 text-sm">
                      <Zap className="w-4 h-4" />
                      HOT
                    </span>
                  )}
                  <span className="text-neon-green/60 text-sm border border-neon-green/30 px-2 py-0.5 rounded">
                    #{market.category}
                  </span>
                </div>

                <h1 className="text-xl lg:text-2xl font-bold text-neon-green mb-4">
                  {market.question}
                </h1>

                <p className="text-neon-green/70 text-sm lg:text-base leading-relaxed">
                  {market.description}
                </p>
              </div>

              {/* Chart */}
              <div className="terminal-window p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="w-5 h-5 text-neon-green" />
                  <h2 className="text-lg font-bold text-neon-green">PROBABILITY_TREND</h2>
                  <span className="text-neon-green/60 text-sm ml-auto">// 30-day chart</span>
                </div>

                <div className="h-48 lg:h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradientDetail" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(147 100% 50% / 0.3)" />
                        <stop offset="100%" stopColor="hsl(147 100% 50% / 0)" />
                      </linearGradient>
                      <filter id="glowDetail">
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
                      d={`M 0 ${180 - market.chartData[0] * 1.8} ${market.chartData.map((val, i) => `L ${(i / (market.chartData.length - 1)) * 400} ${180 - val * 1.8}`).join(' ')} L 400 180 L 0 180 Z`}
                      fill="url(#chartGradientDetail)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                    
                    {/* Line */}
                    <motion.path
                      d={`M 0 ${180 - market.chartData[0] * 1.8} ${market.chartData.map((val, i) => `L ${(i / (market.chartData.length - 1)) * 400} ${180 - val * 1.8}`).join(' ')}`}
                      fill="none"
                      stroke="hsl(147 100% 50%)"
                      strokeWidth="3"
                      filter="url(#glowDetail)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                    
                    {/* Data points */}
                    {market.chartData.map((val, i) => (
                      <motion.circle
                        key={i}
                        cx={(i / (market.chartData.length - 1)) * 400}
                        cy={180 - val * 1.8}
                        r="4"
                        fill="hsl(147 100% 50%)"
                        filter="url(#glowDetail)"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                      />
                    ))}
                  </svg>
                </div>

                <div className="flex items-center gap-2 mt-4 text-neon-green/60 text-sm">
                  <TrendingUp className="w-4 h-4 text-neon-green" />
                  <span>Current: {market.yesPercent}% YES</span>
                </div>
              </div>

              {/* Market Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: DollarSign, label: "LIQUIDITY", value: market.liquidity },
                  { icon: BarChart3, label: "VOLUME_24H", value: market.volume24h },
                  { icon: Users, label: "TRADERS", value: market.traders.toLocaleString() },
                  { icon: Clock, label: "ENDS_IN", value: market.timeRemaining },
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="terminal-window p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <stat.icon className="w-5 h-5 text-neon-green/60 mb-2" />
                    <p className="text-neon-green/60 text-xs mb-1">{stat.label}</p>
                    <p className="text-neon-green font-bold text-lg">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar - Trade Panel */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Trade Card */}
              <div className="terminal-window p-6">
                <h2 className="text-lg font-bold text-neon-green mb-4">PLACE_PREDICTION</h2>

                {/* Yes/No Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button className="bg-neon-green/20 border-2 border-neon-green text-neon-green font-bold py-4 rounded-lg hover:bg-neon-green hover:text-black transition-all">
                    <span className="text-2xl">{market.yesPercent}%</span>
                    <span className="block text-sm mt-1">YES</span>
                  </button>
                  <button className="bg-red-500/20 border-2 border-red-500 text-red-400 font-bold py-4 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                    <span className="text-2xl">{market.noPercent}%</span>
                    <span className="block text-sm mt-1">NO</span>
                  </button>
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                  <label className="text-neon-green/60 text-xs mb-2 block">// Amount (USDC)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full bg-black border border-neon-green/30 rounded-lg py-3 px-4 text-neon-green placeholder:text-neon-green/40 focus:outline-none focus:border-neon-green transition-colors"
                  />
                </div>

                {/* Quick Amounts */}
                <div className="flex gap-2 mb-6">
                  {["$10", "$50", "$100", "MAX"].map((amount) => (
                    <button
                      key={amount}
                      className="flex-1 px-2 py-2 text-xs border border-neon-green/30 text-neon-green/70 rounded hover:bg-neon-green/10 transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>

                {/* Submit Button */}
                <button 
                  className="w-full btn-primary"
                  onClick={() => alert("Connect wallet to place prediction")}
                >
                  ./submit_prediction
                </button>

                <p className="text-neon-green/50 text-xs text-center mt-4">
                  // Connect wallet to trade
                </p>
              </div>

              {/* Market Info */}
              <div className="terminal-window p-6">
                <h3 className="text-sm font-bold text-neon-green mb-4">MARKET_INFO</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neon-green/60">Created</span>
                    <span className="text-neon-green">{market.created}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neon-green/60">Resolution</span>
                    <span className="text-neon-green">{market.resolution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neon-green/60">Source</span>
                    <span className="text-neon-green">{market.source === "POLY" ? "Polymarket" : "Kalshi"}</span>
                  </div>
                </div>
              </div>

              {/* AI Analysis */}
              <div className="terminal-window p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                  <h3 className="text-sm font-bold text-neon-green">AI_ANALYSIS</h3>
                </div>
                <p className="text-neon-green/70 text-sm leading-relaxed">
                  Based on current trends and market sentiment, this prediction shows {market.yesPercent > 50 ? "bullish" : "bearish"} momentum. 
                  Consider market volatility and time remaining before placing your prediction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketDetail;
