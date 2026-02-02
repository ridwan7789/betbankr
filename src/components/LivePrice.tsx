import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LivePriceProps {
  yesPercent: number;
  change?: number;
  size?: "sm" | "md" | "lg";
  showChange?: boolean;
  className?: string;
}

const LivePrice = ({
  yesPercent,
  change = 0,
  size = "md",
  showChange = true,
  className,
}: LivePriceProps) => {
  const isUp = change > 0;
  const isDown = change < 0;

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <motion.span
        key={yesPercent}
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "font-bold text-neon-green tabular-nums",
          sizeClasses[size],
          isUp && "text-green-400",
          isDown && "text-red-400"
        )}
      >
        {yesPercent.toFixed(1)}%
      </motion.span>

      {showChange && change !== 0 && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className={cn(
            "flex items-center text-xs",
            isUp && "text-green-400",
            isDown && "text-red-400"
          )}
        >
          {isUp ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
        </motion.span>
      )}
    </div>
  );
};

export default LivePrice;
