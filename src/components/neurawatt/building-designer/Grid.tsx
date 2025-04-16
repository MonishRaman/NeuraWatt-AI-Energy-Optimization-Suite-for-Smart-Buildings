import { useState, useEffect } from "react";
import { RoomType } from "@/pages/BuildingDesigner";

type GridProps = {
  selectedRoomType: RoomType | null;
  rows?: number;
  cols?: number;
};

type Cell = {
  id: string;
  roomType: RoomType | null;
};

export const Grid = ({ selectedRoomType, rows = 10, cols = 10 }: GridProps) => {
  const [grid, setGrid] = useState<Cell[][]>([]);

  // Initialize grid
  useEffect(() => {
    const newGrid = Array(rows)
      .fill(null)
      .map((_, rowIndex) =>
        Array(cols)
          .fill(null)
          .map((_, colIndex) => ({
            id: `${rowIndex}-${colIndex}`,
            roomType: null,
          }))
      );
    setGrid(newGrid);
  }, [rows, cols]);

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = {
      ...newGrid[rowIndex][colIndex],
      roomType: selectedRoomType,
    };
    setGrid(newGrid);
  };

  return (
    <div className="overflow-auto pb-4">
      <div className="grid-container border border-gray-200 inline-block">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <div
                key={cell.id}
                className={`w-20 h-20 border border-gray-200 cursor-pointer transition-colors flex items-center justify-center text-3xl`}
                style={{ backgroundColor: cell.roomType?.color || "white" }}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell.roomType && cell.roomType.icon}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        <p>Click on a cell to place the selected room type. Each cell represents a 10x10 ft area.</p>
      </div>
    </div>
  );
};
