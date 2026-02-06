import { Wallet, LogOut, Copy, Check, ExternalLink } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useWalletContext } from "../contexts/WalletContext";

const WalletButton = () => {
  const { address, isConnected, connect, disconnect, connector, isConnecting, switchToMonad } = useWalletContext();
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentChainId, setCurrentChainId] = useState<number | null>(null);

  // Check current chain when wallet is connected
  useEffect(() => {
    if (isConnected && window.ethereum) {
      const getChainId = async () => {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          setCurrentChainId(parseInt(chainId, 16));
        } catch (error) {
          console.error('Error getting chain ID:', error);
        }
      };
      
      getChainId();
    }
  }, [isConnected]);

  const handleConnect = useCallback(async () => {
    if (connector) {
      try {
        await connect({ connector });
        
        // After connecting, ensure we're on the Monad network
        setTimeout(() => {
          switchToMonad().catch(console.error);
        }, 500); // Small delay to ensure connection is established
      } catch (error) {
        console.error('Connection error:', error);
      }
    }
  }, [connect, connector, switchToMonad]);

  const handleCopy = useCallback(async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [address]);

  const handleDisconnect = useCallback(() => {
    disconnect();
    setShowDropdown(false);
  }, [disconnect]);

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const isOnMonad = currentChainId === 143;

  if (!isConnected || !address) {
    return (
      <button
        onClick={handleConnect}
        disabled={isConnecting}
        className={`purple-gradient px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 flex items-center gap-2 ${isConnecting ? 'opacity-70 cursor-not-allowed' : ''}`}
        style={{ boxShadow: "0 0 20px hsl(270 100% 60% / 0.4)" }}
      >
        <Wallet className="w-4 h-4" />
        <span className="hidden sm:inline">{isConnecting ? 'Connecting...' : 'Connect Monad'}</span>
        <span className="sm:hidden">{isConnecting ? '...' : 'Connect'}</span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-white font-semibold text-sm transition-all flex items-center gap-2 ${
          isOnMonad 
            ? 'purple-gradient' 
            : 'bg-yellow-600 hover:bg-yellow-700'
        }`}
        style={{ 
          boxShadow: isOnMonad 
            ? "0 0 20px hsl(270 100% 60% / 0.4)" 
            : "0 0 20px rgba(255, 193, 7, 0.4)" 
        }}
      >
        <Wallet className="w-4 h-4" />
        <span>{truncateAddress(address)}</span>
        {!isOnMonad && (
          <span className="text-xs bg-yellow-500 px-1.5 py-0.5 rounded">Wrong Network</span>
        )}
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
            {!isOnMonad && (
              <button
                onClick={switchToMonad}
                className="w-full px-4 py-3 text-left text-yellow-400 hover:bg-yellow-500/10 flex items-center gap-2 text-sm transition-colors border-b border-neon-green/20"
              >
                <ExternalLink className="w-4 h-4" />
                Switch to Monad
              </button>
            )}
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
