
import { useState } from "react";
import { Layout } from "@/components/neurawatt/Layout";
import { Grid } from "@/components/neurawatt/building-designer/Grid";
import { BuildingControls } from "@/components/neurawatt/building-designer/BuildingControls";
import { RoomSelector } from "@/components/neurawatt/building-designer/RoomSelector";
import { useToast } from "@/hooks/use-toast";

// Room types
export type RoomType = {
  id: string;
  name: string;
  color: string;
  icon: string;
  usagePattern: string;
  averageOccupancy: number;
};

// Cell in the grid
export type Cell = {
  id: string;
  roomType: RoomType | null;
};

const BuildingDesigner = () => {
  const [selectedRoomType, setSelectedRoomType] = useState<RoomType | null>(null);
  const [buildingName, setBuildingName] = useState("New Building");
  const { toast } = useToast();
  
  const handleSaveBuilding = () => {
    // In a real app, we would save to a database
    toast({
      title: "Building saved",
      description: `"${buildingName}" has been saved successfully.`,
    });
  };
  
  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Virtual Building Designer</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-border p-6">
              <BuildingControls 
                buildingName={buildingName} 
                onNameChange={setBuildingName}
                onSave={handleSaveBuilding}
              />
              
              <div className="mt-6">
                <Grid selectedRoomType={selectedRoomType} />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-border p-6">
              <h3 className="text-lg font-medium mb-4">Room Types</h3>
              <RoomSelector 
                selectedRoomType={selectedRoomType}
                onSelect={setSelectedRoomType}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuildingDesigner;
