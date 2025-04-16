
import { RoomType } from "@/pages/BuildingDesigner";

type RoomSelectorProps = {
  selectedRoomType: RoomType | null;
  onSelect: (roomType: RoomType) => void;
};

export const RoomSelector = ({ selectedRoomType, onSelect }: RoomSelectorProps) => {
  const roomTypes: RoomType[] = [
    {
      id: "office",
      name: "Office Space",
      color: "#E5DEFF",
      icon: "🖥️",
      usagePattern: "9am-5pm weekdays",
      averageOccupancy: 80
    },
    {
      id: "conference",
      name: "Conference Room",
      color: "#D3E4FD",
      icon: "🪑",
      usagePattern: "Variable",
      averageOccupancy: 40
    },
    {
      id: "lobby",
      name: "Lobby",
      color: "#FDE1D3",
      icon: "🚪",
      usagePattern: "8am-6pm weekdays",
      averageOccupancy: 30
    },
    {
      id: "cafeteria",
      name: "Cafeteria",
      color: "#FEF7CD",
      icon: "🍽️",
      usagePattern: "11am-2pm weekdays",
      averageOccupancy: 90
    },
    {
      id: "hallway",
      name: "Hallway",
      color: "#F2FCE2",
      icon: "🚶",
      usagePattern: "8am-6pm weekdays",
      averageOccupancy: 20
    },
    {
      id: "restroom",
      name: "Restroom",
      color: "#FFDEE2",
      icon: "🚾",
      usagePattern: "8am-6pm daily",
      averageOccupancy: 15
    },
    {
      id: "server",
      name: "Server Room",
      color: "#FEC6A1",
      icon: "💻",
      usagePattern: "24/7",
      averageOccupancy: 5
    },
  ];
  
  return (
    <div className="space-y-3">
      {roomTypes.map((roomType) => (
        <div
          key={roomType.id}
          className={`p-3 rounded-md cursor-pointer border transition-all ${
            selectedRoomType?.id === roomType.id 
              ? 'border-neurawatt-purple bg-neurawatt-purple bg-opacity-5' 
              : 'border-gray-200 hover:border-neurawatt-purple-light'
          }`}
          onClick={() => onSelect(roomType)}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded flex items-center justify-center text-lg" 
              style={{ backgroundColor: roomType.color }}
            >
              {roomType.icon}
            </div>
            <div>
              <div className="font-medium">{roomType.name}</div>
              <div className="text-xs text-muted-foreground">{roomType.usagePattern}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
