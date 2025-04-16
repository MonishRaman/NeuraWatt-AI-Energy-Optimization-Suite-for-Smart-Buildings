import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, FileDown, FileUp, Trash2 } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type BuildingControlsProps = {
  buildingName: string;
  onNameChange: (name: string) => void;
  onSave: () => void;
  onImport: (data: any) => void;
  onExport: () => void;
  onClear: () => void;
};

export const BuildingControls = ({
  buildingName,
  onNameChange,
  onSave,
  onImport,
  onClear,
}: BuildingControlsProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleExport = () => {
    const dataStr = JSON.stringify({ buildingName });
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${buildingName || "building"}.json`;
    link.click();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      try {
        const importedData = JSON.parse(result);
        onImport(importedData);
      } catch (error) {
        console.error("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  const handleSaveAsPDF = async () => {
    const input = document.getElementById("your-content-id"); // Or any specific element you want to export
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${buildingName || "Building"}.pdf`);
  };

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
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImport}
        />
        <Button
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
        >
          <FileUp className="mr-1 h-4 w-4" />
          Import
        </Button>

        <Button variant="outline" size="sm" onClick={handleExport}>
          <FileDown className="mr-1 h-4 w-4" />
          Export
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="text-red-500 hover:text-red-700"
          onClick={onClear}
        >
          <Trash2 className="mr-1 h-4 w-4" />
          Clear
        </Button>

        <Button size="sm" onClick={handleSaveAsPDF}>
          <Save className="mr-1 h-4 w-4" />
          Save as PDF
        </Button>
      </div>
    </div>
  );
};
