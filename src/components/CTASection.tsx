const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="terminal-window neon-glow">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-3 text-neon-green/60 text-sm">init_prediction.sh</span>
          </div>
          <div className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neon-green neon-text mb-6">
              INITIALIZE_PREDICTION?
            </h2>
            
            <div className="text-neon-green/60 text-sm lg:text-base mb-8 space-y-1">
              <p>// connect wallet && start predicting</p>
              <p>// earn rewards on successful predictions</p>
              <p className="font-mono text-xs mt-2 text-neon-green/80">// BetBankr Official CA: 0xF1195bd89929B73F7C2DdC14aFCC775Bb00A7777</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://nad.fun/tokens/0xF1195bd89929B73F7C2DdC14aFCC775Bb00A7777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Buy Tokens
              </a>
              <button className="btn-primary text-lg px-8 py-4 animate-glow">
                ./start --now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
