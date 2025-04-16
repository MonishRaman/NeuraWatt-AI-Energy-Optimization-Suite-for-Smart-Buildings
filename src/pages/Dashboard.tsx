
import { useState } from "react";
import { Layout } from "@/components/neurawatt/Layout";
import { EnergyUsageChart } from "@/components/neurawatt/dashboard/EnergyUsageChart";
import { GreenScore } from "@/components/neurawatt/dashboard/GreenScore";
import { AIRecommendations } from "@/components/neurawatt/dashboard/AIRecommendations";
import { Stats } from "@/components/neurawatt/dashboard/Stats";

const Dashboard = () => {
  const [buildingId] = useState("demo-building-1");
  
  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Energy Dashboard</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Building:</span>
              <select 
                className="py-1 px-3 rounded-md border border-input bg-background"
                value={buildingId}
                onChange={(e) => console.log("Changed to", e.target.value)}
              >
                <option value="demo-building-1">Corporate HQ</option>
                <option value="demo-building-2">Westside Office</option>
                <option value="demo-building-3">Downtown Campus</option>
              </select>
            </div>
          </div>
          
          <Stats />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <EnergyUsageChart />
            </div>
            <div>
              <GreenScore score={78} />
            </div>
          </div>
          
          <AIRecommendations />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
