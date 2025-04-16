
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, FileDown, FileUp, Trash2 } from "lucide-react";

type BuildingControlsProps = {
  buildingName: string;
  onNameChange: (name: string) => void;
  onSave: () => void;
};

export const BuildingControls = ({ 
  buildingName, 
  onNameChange,
  onSave 
}: BuildingControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4">
      <div className="flex items-center gap-3">
        <Input
          value={buildingName}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-64"
          placeholder="Building Name"
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">
          <FileUp className="mr-1 h-4 w-4" />
          Import
        </Button>
        <Button variant="outline" size="sm">
          <FileDown className="mr-1 h-4 w-4" />
          Export
        </Button>
        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
          <Trash2 className="mr-1 h-4 w-4" />
          Clear
        </Button>
        <Button size="sm" onClick={onSave}>
          <Save className="mr-1 h-4 w-4" />
          Save
        </Button>
      </div>
    </div>
  );
};
