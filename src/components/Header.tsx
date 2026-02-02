import { Link, useLocation } from "react-router-dom";
import { TrendingUp, Briefcase, HelpCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-neon-green">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
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
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/markets" 
              className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${
                isActive('/markets') ? 'text-neon-green neon-text' : 'text-neon-green/70 hover:text-neon-green'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Markets
            </Link>
            <Link 
              to="/portfolio" 
              className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${
                isActive('/portfolio') ? 'text-neon-green neon-text' : 'text-neon-green/70 hover:text-neon-green'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Portfolio
            </Link>
            <Link 
              to="/how-it-works" 
              className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${
                isActive('/how-it-works') ? 'text-neon-green neon-text' : 'text-neon-green/70 hover:text-neon-green'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              How_It_Works
            </Link>
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
