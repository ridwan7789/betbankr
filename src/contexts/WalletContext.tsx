import { FC, ReactNode, createContext, useContext } from "react";
import { WagmiProvider, createConfig, useAccount, useConnect, useDisconnect, useSwitchChain } from 'wagmi';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';
import { monad } from '../lib/chains';

// Create a context for wallet state
interface WalletContextType {
  address: `0x${string}` | undefined;
  isConnected: boolean;
  connect: any;
  disconnect: any;
  connector: any;
  isConnecting: boolean;
  pendingConnector: any;
  switchToMonad: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Configure wagmi
const config = createConfig({
  chains: [monad],
  connectors: [
    injected({ shimDisconnect: true }),
    metaMask(),
    walletConnect({
      projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'YOUR_WALLETCONNECT_PROJECT_ID', // Get from environment variable
    }),
  ],
  ssr: false,
});

interface WalletContextProviderProps {
  children: ReactNode;
}

export const WalletContextProvider: FC<WalletContextProviderProps> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <WalletContextProviderInner>
        {children}
      </WalletContextProviderInner>
    </WagmiProvider>
  );
};

const WalletContextProviderInner: FC<{ children: ReactNode }> = ({ children }) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isConnecting, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();

  const switchToMonad = async () => {
    if (switchChain) {
      try {
        await switchChain({ chainId: monad.id });
      } catch (error: any) {
        // If switching fails because the chain isn't added, try to add it
        if (error.code === 4902) {
          try {
            await window.ethereum?.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: `0x${monad.id.toString(16)}`,
                chainName: monad.name,
                nativeCurrency: monad.nativeCurrency,
                rpcUrls: monad.rpcUrls.default.http,
                blockExplorerUrls: [monad.blockExplorers?.default.url],
              }],
            });
          } catch (addError) {
            console.error('Failed to add Monad network:', addError);
            throw addError;
          }
        } else {
          console.error('Failed to switch to Monad network:', error);
          throw error;
        }
      }
    }
  };

  const contextValue: WalletContextType = {
    address,
    isConnected,
    connect,
    disconnect,
    connector: connectors.length > 0 ? connectors[0] : null,
    isConnecting,
    pendingConnector,
    switchToMonad,
  };

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook to use the wallet context
export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletContextProvider');
  }
  return context;
};
