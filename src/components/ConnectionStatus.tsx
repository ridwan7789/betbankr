import { Wifi, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConnectionStatusProps {
  isConnected: boolean;
  className?: string;
}

const ConnectionStatus = ({ isConnected, className }: ConnectionStatusProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono",
        isConnected
          ? "border-neon-green/30 bg-neon-green/5 text-neon-green"
          : "border-red-500/30 bg-red-500/5 text-red-400",
        className
      )}
    >
      {isConnected ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
          </span>
          <Wifi className="w-3 h-3" />
          <span>LIVE</span>
        </>
      ) : (
        <>
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          <WifiOff className="w-3 h-3" />
          <span>OFFLINE</span>
        </>
      )}
    </div>
  );
};

export default ConnectionStatus;
