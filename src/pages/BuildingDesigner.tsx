import { useState, useRef } from "react";
import { Layout } from "@/components/neurawatt/Layout";
// import { useRef } from "react";
import { Grid } from "@/components/neurawatt/building-designer/Grid";
import { BuildingControls } from "@/components/neurawatt/building-designer/BuildingControls";
import { RoomSelector } from "@/components/neurawatt/building-designer/RoomSelector";
import { useToast } from "@/hooks/use-toast";
import html2pdf from "html2pdf.js";


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
  const exportRef = useRef<HTMLDivElement>(null);

  const handleSaveBuilding = () => {
    if (!gridRef.current) {
      console.error("Grid element not found");
      return;
    }
  
    const element = gridRef.current;
  
    const opt = {
      margin: 0.5,
      filename: `${buildingName.replace(/\s+/g, "_")}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
  
    html2pdf().set(opt).from(element).save();
  };
  
  
  

  const handleImport = async () => {
    const file = await selectFile();
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);
        if (importedData.buildingName) {
          setBuildingName(importedData.buildingName);
        }
        toast({ title: "Import Successful", description: "Building data imported." });
      } catch (err) {
        toast({ title: "Import Failed", description: "Invalid file format." });
      }
    };
    reader.readAsText(file);
  };

  const handleExport = () => {
    const data = { buildingName };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${buildingName}.json`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setBuildingName("New Building");
    setSelectedRoomType(null);
    toast({ title: "Cleared", description: "Building reset to default." });
  };

  const selectFile = (): Promise<File | null> => {
    return new Promise((resolve) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";
      input.onchange = () => {
        resolve(input.files?.[0] || null);
      };
      input.click();
    });
  };

  const gridRef = useRef<HTMLDivElement>(null);


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
                onImport={handleImport}
                onExport={handleExport}
                onClear={handleClear}
              />

<div className="mt-6" ref={gridRef}>
  <div id="grid-capture">
    <Grid selectedRoomType={selectedRoomType} />
  </div>
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
