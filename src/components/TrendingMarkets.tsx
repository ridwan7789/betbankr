import { motion } from "framer-motion";
import { Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Market {
  id: number;
  source: "POLY" | "KLSH";
  isHot: boolean;
  question: string;
  category: string;
  yesPercent: number;
  noPercent: number;
  liquidity: string;
  timeRemaining: string;
}

const markets: Market[] = [
  {
    id: 1,
    source: "POLY",
    isHot: true,
    question: "Will Bitcoin reach $150K by end of 2025?",
    category: "#crypto",
    yesPercent: 48,
    noPercent: 52,
    liquidity: "$2.4M",
    timeRemaining: "45d 12h",
  },
  {
    id: 9,
    source: "KLSH",
    isHot: true,
    question: "Will GPT-5 be released before July 2025?",
    category: "#technology",
    yesPercent: 62,
    noPercent: 38,
    liquidity: "$1.8M",
    timeRemaining: "89d 6h",
  },
  {
    id: 10,
    source: "POLY",
    isHot: false,
    question: "Will SpaceX land humans on Mars by 2030?",
    category: "#space",
    yesPercent: 23,
    noPercent: 77,
    liquidity: "$890K",
    timeRemaining: "1,825d",
  },
  {
    id: 11,
    source: "KLSH",
    isHot: true,
    question: "Will Fed cut rates in Q1 2025?",
    category: "#finance",
    yesPercent: 71,
    noPercent: 29,
    liquidity: "$3.2M",
    timeRemaining: "28d 4h",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const TrendingMarkets = () => {
  return (
    <section id="markets" className="py-16 lg:py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-neon-green neon-text mb-2">
            &gt; TRENDING_MARKETS
          </h2>
          <p className="text-neon-green/60 text-sm">// most active predictions</p>
        </motion.div>

        {/* Markets Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {markets.map((market) => (
            <motion.div
              key={market.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 0 30px hsl(147 100% 50% / 0.3)",
                borderColor: "hsl(147 100% 50% / 0.8)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link 
                to={`/market/${market.id}`} 
                className="market-card cursor-pointer block h-full"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${market.source === "POLY" ? "bg-neon-green/20 text-neon-green" : "bg-purple-500/20 text-purple-400"}`}>
                    [{market.source}]
                  </span>
                  {market.isHot && (
                    <motion.span 
                      className="flex items-center gap-1 text-yellow-500 text-xs"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Zap className="w-3 h-3" />
                      HOT
                    </motion.span>
                  )}
                </div>

                {/* Question */}
                <h3 className="text-neon-green font-semibold text-sm lg:text-base mb-3 line-clamp-2 min-h-[2.5rem] lg:min-h-[3rem]">
                  {market.question}
                </h3>

                {/* Category */}
                <span className="text-neon-green/60 text-xs mb-4 block">{market.category}</span>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neon-green">YES {market.yesPercent}%</span>
                    <span className="text-red-400">NO {market.noPercent}%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-neon-green to-neon-green/70 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${market.yesPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-xs text-neon-green/60">
                  <span>💰 {market.liquidity}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {market.timeRemaining}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Analysis Badge */}
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-neon-green/30 rounded-full bg-neon-green/5">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
            <span className="text-neon-green text-sm">AI_ANALYSIS: READY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingMarkets;
