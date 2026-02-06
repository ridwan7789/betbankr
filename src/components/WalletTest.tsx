import { useState } from 'react';
import { useWalletContext } from '../contexts/WalletContext';

const WalletTest = () => {
  const { address, isConnected, connect, disconnect, connector, switchToMonad } = useWalletContext();
  const [chainId, setChainId] = useState<string | null>(null);

  const getChainId = async () => {
    if (window.ethereum) {
      try {
        const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
        setChainId(chainIdHex);
      } catch (error) {
        console.error('Error getting chain ID:', error);
      }
    }
  };

  return (
    <div className="p-4 border border-neon-green rounded-lg bg-gray-900">
      <h3 className="text-neon-green mb-2">Wallet Connection Test</h3>
      
      <div className="space-y-2 text-sm">
        <p><span className="text-neon-green/70">Status:</span> {isConnected ? 'Connected' : 'Disconnected'}</p>
        {isConnected && address && (
          <p><span className="text-neon-green/70">Address:</span> {address}</p>
        )}
        {chainId && (
          <p><span className="text-neon-green/70">Chain ID:</span> {chainId} ({parseInt(chainId, 16)})</p>
        )}
        <p><span className="text-neon-green/70">Expected Chain ID:</span> 143 (Monad)</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {!isConnected ? (
          <button 
            onClick={() => connect({ connector })}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <button 
              onClick={disconnect}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm"
            >
              Disconnect
            </button>
            <button 
              onClick={switchToMonad}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm"
            >
              Switch to Monad
            </button>
            <button 
              onClick={getChainId}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm"
            >
              Get Chain ID
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WalletTest;