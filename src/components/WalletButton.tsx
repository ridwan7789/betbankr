import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Wallet, LogOut, Copy, Check } from "lucide-react";
import { useState, useCallback } from "react";

const WalletButton = () => {
  const { publicKey, disconnect, connected } = useWallet();
  const { setVisible } = useWalletModal();
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleConnect = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  const handleCopy = useCallback(async () => {
    if (publicKey) {
      await navigator.clipboard.writeText(publicKey.toBase58());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [publicKey]);

  const handleDisconnect = useCallback(() => {
    disconnect();
    setShowDropdown(false);
  }, [disconnect]);

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (!connected || !publicKey) {
    return (
      <button
        onClick={handleConnect}
        className="purple-gradient px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 flex items-center gap-2"
        style={{ boxShadow: "0 0 20px hsl(270 100% 60% / 0.4)" }}
      >
        <Wallet className="w-4 h-4" />
        <span className="hidden sm:inline">Select Wallet</span>
        <span className="sm:hidden">Connect</span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="purple-gradient px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 flex items-center gap-2"
        style={{ boxShadow: "0 0 20px hsl(270 100% 60% / 0.4)" }}
      >
        <Wallet className="w-4 h-4" />
        <span>{truncateAddress(publicKey.toBase58())}</span>
      </button>

      {showDropdown && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-black border border-neon-green/50 rounded-lg overflow-hidden z-50 shadow-lg"
               style={{ boxShadow: "0 0 20px hsl(var(--neon-green) / 0.2)" }}>
            <button
              onClick={handleCopy}
              className="w-full px-4 py-3 text-left text-neon-green/80 hover:bg-neon-green/10 flex items-center gap-2 text-sm transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Copy Address"}
            </button>
            <button
              onClick={handleDisconnect}
              className="w-full px-4 py-3 text-left text-red-400 hover:bg-red-500/10 flex items-center gap-2 text-sm transition-colors border-t border-neon-green/20"
            >
              <LogOut className="w-4 h-4" />
              Disconnect
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WalletButton;
