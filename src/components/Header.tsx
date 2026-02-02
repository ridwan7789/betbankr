import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-neon-green">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
              <img 
                src={logo} 
                alt="Betverse Logo" 
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 0 10px hsl(147 100% 50% / 0.5))' }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-neon-green font-bold text-lg lg:text-xl tracking-wider">Betverse</span>
              <span className="text-neon-green/60 text-[10px] lg:text-xs uppercase tracking-widest">PREDICTION PROTOCOL</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#markets" className="text-neon-green hover:text-neon-green/80 text-sm uppercase tracking-wider transition-colors">
              Markets
            </a>
            <a href="#portfolio" className="text-neon-green hover:text-neon-green/80 text-sm uppercase tracking-wider transition-colors">
              Portfolio
            </a>
            <a href="#how" className="text-neon-green hover:text-neon-green/80 text-sm uppercase tracking-wider transition-colors">
              How_It_Works
            </a>
          </nav>

          {/* Wallet Button */}
          <button className="purple-gradient px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90" style={{ boxShadow: '0 0 20px hsl(270 100% 60% / 0.4)' }}>
            Select Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
