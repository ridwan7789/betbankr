import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Clock, Search, TrendingUp } from "lucide-react";

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

const allMarkets: Market[] = [
  {
    id: 1,
    source: "POLY",
    isHot: true,
    question: "Will Bitcoin reach $150K by Q2 2026?",
    category: "crypto",
    yesPercent: 65,
    noPercent: 35,
    liquidity: "$2.5M",
    timeRemaining: "4mo",
  },
  {
    id: 2,
    source: "KLSH",
    isHot: true,
    question: "Will Ethereum ETF be approved in Asia?",
    category: "crypto",
    yesPercent: 78,
    noPercent: 22,
    liquidity: "$3.2M",
    timeRemaining: "1mo",
  },
  {
    id: 3,
    source: "POLY",
    isHot: true,
    question: "Will Solana flip Ethereum in TVL by 2026?",
    category: "crypto",
    yesPercent: 18,
    noPercent: 82,
    liquidity: "$2.1M",
    timeRemaining: "11mo",
  },
  {
    id: 4,
    source: "POLY",
    isHot: true,
    question: "Will XRP reach $5 by end of 2026?",
    category: "crypto",
    yesPercent: 42,
    noPercent: 58,
    liquidity: "$1.9M",
    timeRemaining: "11mo",
  },
  {
    id: 5,
    source: "KLSH",
    isHot: false,
    question: "Will a country adopt Bitcoin as legal tender in 2026?",
    category: "crypto",
    yesPercent: 35,
    noPercent: 65,
    liquidity: "$980K",
    timeRemaining: "11mo",
  },
  {
    id: 6,
    source: "POLY",
    isHot: false,
    question: "Will Cardano launch Hydra mainnet in 2026?",
    category: "crypto",
    yesPercent: 55,
    noPercent: 45,
    liquidity: "$720K",
    timeRemaining: "11mo",
  },
  {
    id: 7,
    source: "KLSH",
    isHot: true,
    question: "Will AI surpass human reasoning by 2027?",
    category: "technology",
    yesPercent: 42,
    noPercent: 58,
    liquidity: "$1.8M",
    timeRemaining: "11mo",
  },
  {
    id: 8,
    source: "POLY",
    isHot: false,
    question: "Will Apple release AR Glasses in 2026?",
    category: "technology",
    yesPercent: 45,
    noPercent: 55,
    liquidity: "$890K",
    timeRemaining: "1mo",
  },
  {
    id: 9,
    source: "KLSH",
    isHot: true,
    question: "Will GPT-5 be released before July 2025?",
    category: "technology",
    yesPercent: 62,
    noPercent: 38,
    liquidity: "$1.8M",
    timeRemaining: "89d",
  },
  {
    id: 10,
    source: "POLY",
    isHot: false,
    question: "Will SpaceX land humans on Mars by 2030?",
    category: "space",
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
    category: "economics",
    yesPercent: 71,
    noPercent: 29,
    liquidity: "$3.2M",
    timeRemaining: "28d",
  },
  {
    id: 12,
    source: "POLY",
    isHot: false,
    question: "Will Tesla stock reach $500 by 2026?",
    category: "automotive",
    yesPercent: 38,
    noPercent: 62,
    liquidity: "$1.5M",
    timeRemaining: "11mo",
  },
  {
    id: 13,
    source: "KLSH",
    isHot: true,
    question: "Will there be a US presidential debate before March 2025?",
    category: "politics",
    yesPercent: 85,
    noPercent: 15,
    liquidity: "$4.2M",
    timeRemaining: "2mo",
  },
  {
    id: 14,
    source: "POLY",
    isHot: false,
    question: "Will Starship complete orbital flight in 2025?",
    category: "space",
    yesPercent: 72,
    noPercent: 28,
    liquidity: "$1.1M",
    timeRemaining: "11mo",
  },
  {
    id: 15,
    source: "KLSH",
    isHot: false,
    question: "Will inflation drop below 2% in US by 2026?",
    category: "economics",
    yesPercent: 48,
    noPercent: 52,
    liquidity: "$2.8M",
    timeRemaining: "11mo",
  },
  {
    id: 16,
    source: "POLY",
    isHot: true,
    question: "Will Rivian become profitable by 2027?",
    category: "automotive",
    yesPercent: 32,
    noPercent: 68,
    liquidity: "$650K",
    timeRemaining: "2y",
  },
];

const categories = ["All", "Crypto", "Technology", "Space", "Economics", "Automotive", "Politics"];
const sources = ["All", "Polymarket", "Kalshi"];

const Markets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSource, setSelectedSource] = useState("All");
  const [hotOnly, setHotOnly] = useState(false);

  const filteredMarkets = useMemo(() => {
    return allMarkets.filter((market) => {
      // Search filter
      if (searchQuery && !market.question.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (selectedCategory !== "All" && market.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      
      // Source filter
      if (selectedSource === "Polymarket" && market.source !== "POLY") {
        return false;
      }
      if (selectedSource === "Kalshi" && market.source !== "KLSH") {
        return false;
      }
      
      // Hot only filter
      if (hotOnly && !market.isHot) {
        return false;
      }
      
      return true;
    });
  }, [searchQuery, selectedCategory, selectedSource, hotOnly]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl lg:text-4xl font-bold text-neon-green neon-text mb-2">
              &gt; Prediction_Markets
            </h1>
            <p className="text-neon-green/60 text-sm lg:text-base">
              Browse and participate in prediction markets from Polymarket and Kalshi
            </p>
          </div>

          {/* Search & Filters */}
          <div className="terminal-window p-4 lg:p-6 mb-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neon-green/60" />
              <input
                type="text"
                placeholder="$ grep -i 'search markets...'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black border border-neon-green/30 rounded-lg py-3 pl-12 pr-4 text-neon-green placeholder:text-neon-green/40 focus:outline-none focus:border-neon-green transition-colors"
              />
            </div>

            {/* Filter Row */}
            <div className="flex flex-wrap items-start gap-6 lg:gap-8">
              {/* Category Filter */}
              <div>
                <span className="text-neon-green/60 text-xs mb-2 block">// Category</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                        selectedCategory === cat
                          ? "bg-neon-green text-black border-neon-green"
                          : "border-neon-green/50 text-neon-green hover:bg-neon-green/10"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Source Filter */}
              <div>
                <span className="text-neon-green/60 text-xs mb-2 block">// Source</span>
                <div className="flex flex-wrap gap-2">
                  {sources.map((src) => (
                    <button
                      key={src}
                      onClick={() => setSelectedSource(src)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                        selectedSource === src
                          ? "bg-neon-green text-black border-neon-green"
                          : "border-neon-green/50 text-neon-green hover:bg-neon-green/10"
                      }`}
                    >
                      {src}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Toggle */}
              <div>
                <span className="text-neon-green/60 text-xs mb-2 block">// Trending</span>
                <button
                  onClick={() => setHotOnly(!hotOnly)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                    hotOnly
                      ? "bg-neon-green text-black border-neon-green"
                      : "border-neon-green/50 text-neon-green hover:bg-neon-green/10"
                  }`}
                >
                  <TrendingUp className="w-3 h-3" />
                  HOT_ONLY
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <span className="text-neon-green text-sm">
              &gt; Found <span className="font-bold">{filteredMarkets.length}</span> markets
            </span>
          </div>

          {/* Markets Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredMarkets.map((market) => (
              <div key={market.id} className="market-card cursor-pointer group">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded border ${
                    market.source === "POLY" 
                      ? "bg-neon-green/10 text-neon-green border-neon-green/50" 
                      : "bg-purple-500/10 text-purple-400 border-purple-500/50"
                  }`}>
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
                  &gt; {market.question}
                </h3>

                {/* Category */}
                <span className="inline-block text-neon-green/60 text-xs mb-4 px-2 py-0.5 border border-neon-green/30 rounded">
                  #{market.category}
                </span>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neon-green">YES: {market.yesPercent}%</span>
                    <span className="text-red-400">NO: {market.noPercent}%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-neon-green rounded-l-full"
                      style={{ width: `${market.yesPercent}%` }}
                    />
                    <div 
                      className="h-full bg-red-500/60 rounded-r-full"
                      style={{ width: `${market.noPercent}%` }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-xs text-neon-green/60 pb-3 border-b border-neon-green/20">
                  <span>$ {market.liquidity}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {market.timeRemaining}
                  </span>
                </div>

                {/* AI Analysis */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                  <span className="text-neon-green/60 text-xs">AI_ANALYSIS: READY</span>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredMarkets.length === 0 && (
            <div className="terminal-window p-8 text-center">
              <p className="text-neon-green/60 text-sm">
                // No markets found matching your filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedSource("All");
                  setHotOnly(false);
                }}
                className="mt-4 btn-outline text-xs"
              >
                ./clear_filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Markets;
