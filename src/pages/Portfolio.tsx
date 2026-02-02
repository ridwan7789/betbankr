import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wallet } from "lucide-react";

const Portfolio = () => {
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
            Connect your Phantom wallet to view your prediction portfolio.
          </p>

          {/* Instruction */}
          <p className="text-neon-green/50 text-xs lg:text-sm font-mono">
            Use the Connect button in the top navigation
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
