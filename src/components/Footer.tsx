import { Twitter, Github, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-neon-green/30 py-12 lg:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10">
                <img
                  src={logo}
                  alt="Betverse Logo"
                  className="w-full h-full object-contain"
                  style={{ filter: 'drop-shadow(0 0 10px hsl(147 100% 50% / 0.5))' }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-neon-green font-bold text-lg">BetBankr</span>
                <span className="text-neon-green/60 text-[10px] uppercase tracking-widest">PREDICTION PROTOCOL</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 border border-neon-green/30 rounded-lg flex items-center justify-center text-neon-green hover:bg-neon-green/10 hover:border-neon-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/betbankr" className="w-10 h-10 border border-neon-green/30 rounded-lg flex items-center justify-center text-neon-green hover:bg-neon-green/10 hover:border-neon-green transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-neon-green/30 rounded-lg flex items-center justify-center text-neon-green hover:bg-neon-green/10 hover:border-neon-green transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>

            <p className="text-neon-green/60 text-sm">// prediction_markets.exe</p>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-neon-green font-bold mb-4">/platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Markets</a></li>
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Rewards</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-neon-green font-bold mb-4">/resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">API</a></li>
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-neon-green font-bold mb-4">/legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="text-neon-green/60 hover:text-neon-green text-sm transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-neon-green/20">
          <p className="text-neon-green/40 text-sm text-center">
            /* © 2026 BetBankr. All rights reserved. */
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
