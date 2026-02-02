import { Zap, Clock } from "lucide-react";

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
    id: 2,
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
    id: 3,
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
    id: 4,
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

const TrendingMarkets = () => {
  return (
    <section id="markets" className="py-16 lg:py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-neon-green neon-text mb-2">
            &gt; TRENDING_MARKETS
          </h2>
          <p className="text-neon-green/60 text-sm">// most active predictions</p>
        </div>

        {/* Markets Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {markets.map((market) => (
            <div key={market.id} className="market-card cursor-pointer">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold px-2 py-1 rounded ${market.source === "POLY" ? "bg-neon-green/20 text-neon-green" : "bg-purple-500/20 text-purple-400"}`}>
                  [{market.source}]
                </span>
                {market.isHot && (
                  <span className="flex items-center gap-1 text-yellow-500 text-xs">
                    <Zap className="w-3 h-3" />
                    HOT
                  </span>
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
                  <div 
                    className="h-full bg-gradient-to-r from-neon-green to-neon-green/70 rounded-full"
                    style={{ width: `${market.yesPercent}%` }}
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
            </div>
          ))}
        </div>

        {/* AI Analysis Badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-neon-green/30 rounded-full bg-neon-green/5">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
            <span className="text-neon-green text-sm">AI_ANALYSIS: READY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingMarkets;
