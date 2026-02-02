import { useState, useEffect, useCallback } from "react";

interface MarketPrice {
  id: number;
  yesPercent: number;
  noPercent: number;
  change: number; // positive = up, negative = down
  lastUpdated: Date;
}

interface UseRealtimePricesOptions {
  marketIds: number[];
  initialPrices: Record<number, { yesPercent: number; noPercent: number }>;
  updateInterval?: number; // in milliseconds
}

export const useRealtimePrices = ({
  marketIds,
  initialPrices,
  updateInterval = 3000,
}: UseRealtimePricesOptions) => {
  const [prices, setPrices] = useState<Record<number, MarketPrice>>(() => {
    const initial: Record<number, MarketPrice> = {};
    marketIds.forEach((id) => {
      const price = initialPrices[id] || { yesPercent: 50, noPercent: 50 };
      initial[id] = {
        id,
        yesPercent: price.yesPercent,
        noPercent: price.noPercent,
        change: 0,
        lastUpdated: new Date(),
      };
    });
    return initial;
  });

  const [isConnected, setIsConnected] = useState(false);

  // Simulate WebSocket price updates
  const simulatePriceUpdate = useCallback(() => {
    setPrices((prev) => {
      const updated = { ...prev };
      
      // Randomly update 1-3 markets
      const numUpdates = Math.floor(Math.random() * 3) + 1;
      const shuffledIds = [...marketIds].sort(() => Math.random() - 0.5);
      const idsToUpdate = shuffledIds.slice(0, numUpdates);

      idsToUpdate.forEach((id) => {
        if (updated[id]) {
          // Generate a small random change (-3 to +3 percentage points)
          const change = (Math.random() - 0.5) * 6;
          let newYesPercent = updated[id].yesPercent + change;
          
          // Keep within bounds (5% - 95%)
          newYesPercent = Math.max(5, Math.min(95, newYesPercent));
          const newNoPercent = 100 - newYesPercent;

          updated[id] = {
            ...updated[id],
            yesPercent: Math.round(newYesPercent * 10) / 10,
            noPercent: Math.round(newNoPercent * 10) / 10,
            change: change,
            lastUpdated: new Date(),
          };
        }
      });

      return updated;
    });
  }, [marketIds]);

  useEffect(() => {
    // Simulate connection establishment
    const connectionTimeout = setTimeout(() => {
      setIsConnected(true);
    }, 500);

    // Start price updates
    const interval = setInterval(simulatePriceUpdate, updateInterval);

    return () => {
      clearTimeout(connectionTimeout);
      clearInterval(interval);
      setIsConnected(false);
    };
  }, [simulatePriceUpdate, updateInterval]);

  const getPrice = useCallback(
    (id: number): MarketPrice | undefined => {
      return prices[id];
    },
    [prices]
  );

  return {
    prices,
    getPrice,
    isConnected,
  };
};

// Global price store for sharing across components
let globalPrices: Record<number, MarketPrice> = {};
let globalListeners: Set<() => void> = new Set();

export const subscribeToGlobalPrices = (listener: () => void) => {
  globalListeners.add(listener);
  return () => globalListeners.delete(listener);
};

export const getGlobalPrices = () => globalPrices;

export const updateGlobalPrices = (newPrices: Record<number, MarketPrice>) => {
  globalPrices = newPrices;
  globalListeners.forEach((listener) => listener());
};
