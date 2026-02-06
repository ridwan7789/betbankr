import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wallet, TrendingUp, Clock, DollarSign } from "lucide-react";
import { useWalletContext } from "../contexts/WalletContext";

const Portfolio = () => {
  const { address, isConnected } = useWalletContext();

  // Mock portfolio data for connected state
  const portfolioStats = {
    totalValue: "$2,450.00",
    activePredictions: 8,
    winRate: "67%",
    totalPnL: "+$450.00",
  };

  const activePredictions = [
    {
      id: 1,
      question: "Will BTC reach $150K by March 2026?",
      position: "YES",
      amount: "$250",
      odds: "48.2%",
      source: "POLY",
      status: "active",
    },
    {
      id: 2,
      question: "Will GPT-5 be released in Q1 2026?",
      position: "NO",
      amount: "$150",
      odds: "32.5%",
      source: "KLSH",
      status: "active",
    },
    {
      id: 3,
      question: "Will Tesla stock hit $500 by June 2026?",
      position: "YES",
      amount: "$300",
      odds: "55.8%",
      source: "POLY",
      status: "active",
    },
  ];

  if (!isConnected || !address) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20 lg:pt-24 pb-16 px-4">
          <div className="terminal-window max-w-lg w-full p-8 lg:p-12 text-center">
            {/* Wallet Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <Wallet className="w-12 h-12 text-neon-green" strokeWidth={1.5} />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-neon-green mb-4">
              Connect Wallet
            </h1>

            {/* Description */}
            <p className="text-neon-green/70 text-sm lg:text-base mb-6">
              Connect your wallet to view your prediction portfolio.
            </p>

            {/* Connect Button */}
            <button
              onClick={() => window.dispatchEvent(new Event('wallet-connect-request'))}
              className="purple-gradient px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 inline-flex items-center gap-2"
              style={{ boxShadow: "0 0 20px hsl(270 100% 60% / 0.4)" }}
            >
              <Wallet className="w-4 h-4" />
              Select Wallet
            </button>
          </div>
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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-neon-green mb-2">
              {'>'} MY_PORTFOLIO
            </h1>
            <p className="text-neon-green/60 text-sm font-mono">
              // wallet: {address?.slice(0, 8)}...{address?.slice(-8)}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="terminal-window p-4 lg:p-6">
              <p className="text-neon-green/60 text-xs uppercase mb-1">Total Value</p>
              <p className="text-xl lg:text-2xl font-bold text-neon-green">{portfolioStats.totalValue}</p>
            </div>
            <div className="terminal-window p-4 lg:p-6">
              <p className="text-neon-green/60 text-xs uppercase mb-1">Active Predictions</p>
              <p className="text-xl lg:text-2xl font-bold text-neon-green">{portfolioStats.activePredictions}</p>
            </div>
            <div className="terminal-window p-4 lg:p-6">
              <p className="text-neon-green/60 text-xs uppercase mb-1">Win Rate</p>
              <p className="text-xl lg:text-2xl font-bold text-neon-green">{portfolioStats.winRate}</p>
            </div>
            <div className="terminal-window p-4 lg:p-6">
              <p className="text-neon-green/60 text-xs uppercase mb-1">Total P&L</p>
              <p className="text-xl lg:text-2xl font-bold text-green-400">{portfolioStats.totalPnL}</p>
            </div>
          </div>

          {/* Active Predictions */}
          <div className="terminal-window p-4 lg:p-6">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-neon-green/30">
              <TrendingUp className="w-5 h-5 text-neon-green" />
              <h2 className="text-lg font-bold text-neon-green">ACTIVE_PREDICTIONS</h2>
            </div>

            <div className="space-y-4">
              {activePredictions.map((prediction) => (
                <div
                  key={prediction.id}
                  className="p-4 bg-black/30 border border-neon-green/20 rounded-lg hover:border-neon-green/40 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 bg-neon-green/20 text-neon-green rounded font-mono">
                          [{prediction.source}]
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-bold ${
                            prediction.position === "YES"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {prediction.position}
                        </span>
                      </div>
                      <p className="text-neon-green text-sm lg:text-base">{prediction.question}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-neon-green/60 text-xs">Stake</p>
                        <p className="text-neon-green font-bold">{prediction.amount}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-neon-green/60 text-xs">Current Odds</p>
                        <p className="text-neon-green font-bold">{prediction.odds}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
