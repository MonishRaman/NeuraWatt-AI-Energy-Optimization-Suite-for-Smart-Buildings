
import { DollarSign, Zap, BarChart3 } from "lucide-react";

export const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-neurawatt-purple-light rounded-full flex items-center justify-center">
            <Zap className="h-6 w-6 text-neurawatt-purple" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Energy Saved</p>
            <h3 className="text-2xl font-bold">462 kWh</h3>
            <p className="text-xs text-green-500 flex items-center">
              <span className="inline-block mr-1">↑</span> 12% from last month
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-neurawatt-green-light rounded-full flex items-center justify-center">
            <BarChart3 className="h-6 w-6 text-neurawatt-green" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">CO₂ Reduction</p>
            <h3 className="text-2xl font-bold">289 kg</h3>
            <p className="text-xs text-green-500 flex items-center">
              <span className="inline-block mr-1">↑</span> 8% from last month
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Cost Savings</p>
            <h3 className="text-2xl font-bold">$1,245</h3>
            <p className="text-xs text-green-500 flex items-center">
              <span className="inline-block mr-1">↑</span> 15% from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
