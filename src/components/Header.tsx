import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Briefcase, HelpCircle, Menu, X, Home } from "lucide-react";
import logo from "@/assets/logo.png";
import WalletButton from "./WalletButton";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/markets", label: "Markets", icon: TrendingUp },
    { to: "/portfolio", label: "Portfolio", icon: Briefcase },
    { to: "/how-it-works", label: "How_It_Works", icon: HelpCircle },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-neon-green">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 z-10">
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <img 
                  src={logo} 
                  alt="Betverse Logo" 
                  className="w-full h-full object-contain"
                  style={{ filter: 'drop-shadow(0 0 10px hsl(147 100% 50% / 0.5))' }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-neon-green font-bold text-lg lg:text-xl tracking-wider">BetBankr</span>
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

            {/* Right side - Wallet & Menu */}
            <div className="flex items-center gap-3">
              {/* Wallet Button - hidden on mobile when menu is open */}
              <div className={isMobileMenuOpen ? "hidden" : "block"}>
                <WalletButton />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-neon-green border border-neon-green/50 rounded-lg hover:bg-neon-green/10 transition-colors z-50"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-out Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-72 bg-black border-l border-neon-green z-40 md:hidden"
              style={{ boxShadow: "-10px 0 40px hsl(147 100% 50% / 0.1)" }}
            >
              {/* Menu Header */}
              <div className="h-16 flex items-center px-6 border-b border-neon-green/30">
                <span className="text-neon-green/60 text-sm font-mono">// betbankr.sh</span>
              </div>

              {/* Menu Content */}
              <div className="p-6">
                {/* Nav Links */}
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={link.to}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                          isActive(link.to)
                            ? "bg-neon-green/20 text-neon-green border border-neon-green/50"
                            : "text-neon-green/70 hover:bg-neon-green/10 hover:text-neon-green border border-transparent"
                        }`}
                      >
                        <link.icon className="w-5 h-5" />
                        <span className="uppercase tracking-wider text-sm font-semibold">
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-6 border-t border-neon-green/20" />

                {/* Wallet Section */}
                <motion.div
                  custom={navLinks.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <p className="text-neon-green/50 text-xs uppercase mb-3 px-4">
                    // Wallet
                  </p>
                  <WalletButton />
                </motion.div>

                {/* Status */}
                <motion.div
                  custom={navLinks.length + 1}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-8 px-4"
                >
                  <div className="flex items-center gap-2 text-neon-green/60 text-xs">
                    <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    <span>SYSTEM: ONLINE</span>
                  </div>
                </motion.div>
              </div>

              {/* Terminal-style footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neon-green/20">
                <p className="text-neon-green/40 text-xs font-mono text-center">
                  betbankr@terminal:~$ _
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
