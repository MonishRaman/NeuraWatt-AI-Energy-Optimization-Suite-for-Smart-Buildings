
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: '8 AM', Room1: 24, Room2: 18, Room3: 12, Room4: 8 },
  { name: '10 AM', Room1: 45, Room2: 38, Room3: 28, Room4: 14 },
  { name: '12 PM', Room1: 56, Room2: 42, Room3: 36, Room4: 18 },
  { name: '2 PM', Room1: 48, Room2: 36, Room3: 32, Room4: 22 },
  { name: '4 PM', Room1: 52, Room2: 34, Room3: 28, Room4: 16 },
  { name: '6 PM', Room1: 30, Room2: 26, Room3: 22, Room4: 10 },
];

export const EnergyUsageChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border h-80">
      <h3 className="text-lg font-medium mb-4">Energy Usage by Room</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Room1" name="Conference Room" fill="#9b87f5" />
          <Bar dataKey="Room2" name="Open Office" fill="#4ADE80" />
          <Bar dataKey="Room3" name="Meeting Room" fill="#F97316" />
          <Bar dataKey="Room4" name="Lobby" fill="#0EA5E9" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
