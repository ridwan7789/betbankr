import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiveProgressBarProps {
  yesPercent: number;
  noPercent: number;
  showLabels?: boolean;
  className?: string;
}

const LiveProgressBar = ({
  yesPercent,
  noPercent,
  showLabels = true,
  className,
}: LiveProgressBarProps) => {
  return (
    <div className={cn("", className)}>
      {showLabels && (
        <div className="flex justify-between text-xs mb-1">
          <motion.span
            key={`yes-${yesPercent}`}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            className="text-neon-green tabular-nums"
          >
            YES {yesPercent.toFixed(1)}%
          </motion.span>
          <motion.span
            key={`no-${noPercent}`}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            className="text-red-400 tabular-nums"
          >
            NO {noPercent.toFixed(1)}%
          </motion.span>
        </div>
      )}
      <div className="h-2 bg-black/50 rounded-full overflow-hidden flex">
        <motion.div
          className="h-full bg-neon-green rounded-l-full"
          initial={false}
          animate={{ width: `${yesPercent}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <motion.div
          className="h-full bg-red-500/60 rounded-r-full"
          initial={false}
          animate={{ width: `${noPercent}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );
};

export default LiveProgressBar;
