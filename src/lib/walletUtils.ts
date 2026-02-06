import { createWalletClient, custom, http } from 'viem';
import { monad } from './chains';
import { InjectedConnector } from 'wagmi/connectors';

// Function to check if the wallet is connected to the Monad network
export const checkNetwork = async (walletClient: any) => {
  try {
    const chainId = await walletClient.getChainId();
    return chainId === monad.id;
  } catch (error) {
    console.error('Error checking network:', error);
    return false;
  }
};

// Function to switch to Monad network if needed
export const switchToMonadNetwork = async (walletClient: any) => {
  try {
    // Try to switch to Monad network
    await walletClient.switchChain({ id: monad.id });
    return true;
  } catch (switchError: any) {
    // If switching fails, try to add the network
    if (switchError.code === 4902) { // Unrecognized chain ID
      try {
        await walletClient.addChain({
          chain: {
            id: monad.id,
            name: monad.name,
            network: monad.network,
            nativeCurrency: monad.nativeCurrency,
            rpcUrls: {
              default: { http: [monad.rpcUrls.default.http[0]] },
              public: { http: [monad.rpcUrls.public.http[0]] },
            },
            blockExplorers: {
              default: {
                name: monad.blockExplorers?.default.name || 'Explorer',
                url: monad.blockExplorers?.default.url || '',
              },
            },
          },
        });
        return true;
      } catch (addError) {
        console.error('Error adding Monad network:', addError);
        throw addError;
      }
    }
    throw switchError;
  }
};

// Utility function to get wallet client
export const getWalletClientForMonad = async (connector: any) => {
  if (!connector) {
    throw new Error('No connector available');
  }

  // Get the wallet client from the connector
  const client = await connector.getWalletClient();
  
  // Check if the current network is Monad
  const isOnMonad = await checkNetwork(client);
  
  if (!isOnMonad) {
    // Try to switch to Monad network
    await switchToMonadNetwork(client);
  }
  
  return client;
};