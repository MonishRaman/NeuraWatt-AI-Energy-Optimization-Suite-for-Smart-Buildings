
import { Gauge } from "lucide-react";

export const GreenScore = ({ score }: { score: number }) => {
  // Calculate color - from red (0) to green (100)
  const getColor = () => {
    if (score < 40) return "text-red-500";
    if (score < 70) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border h-80 flex flex-col">
      <h3 className="text-lg font-medium mb-4">Green Score</h3>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 flex items-center justify-center">
            <Gauge className="w-full h-full opacity-10" />
            <div className="absolute flex flex-col items-center">
              <span className={`text-5xl font-bold ${getColor()}`}>{score}</span>
              <span className="text-sm text-muted-foreground">/100</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Your building is performing better than 
            <span className="font-medium"> 72% </span> 
            of similar buildings
          </p>
          <button className="text-sm text-neurawatt-purple hover:underline">
            View detailed breakdown
          </button>
        </div>
      </div>
    </div>
  );
};
