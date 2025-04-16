
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Building, 
  Users, 
  BarChart3, 
  Gauge, 
  Settings,
  ChevronLeft,
  Cpu,
  FileBarChart,
  Shield,
  Trophy,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Building Designer", icon: Building, path: "/building-designer" },
    { name: "Occupancy Simulator", icon: Users, path: "/simulator" },
    { name: "Waste Predictor", icon: AlertTriangle, path: "/waste-predictor" },
    { name: "HVAC Optimizer", icon: Cpu, path: "/hvac-optimizer" },
    { name: "Reports", icon: FileBarChart, path: "/reports" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "Green Score", icon: Gauge, path: "/green-score" },
    { name: "Leaderboard", icon: Trophy, path: "/leaderboard" },
    { name: "Admin Panel", icon: Shield, path: "/admin" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside className={`bg-white dark:bg-gray-800 border-r border-border h-screen ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 hidden md:block`}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-border flex justify-between items-center">
          {!collapsed && (
            <div className="font-bold text-xl text-neurawatt-purple flex items-center">
              <span className="mr-2">NeuraWatt</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronLeft className={`h-5 w-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 rounded-md hover:bg-neurawatt-gray-light hover:text-neurawatt-purple"
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-border">
          {!collapsed && (
            <div className="text-xs text-gray-500">
              <p>NeuraWatt v1.0</p>
              <p>© 2025 NeuraWatt Inc.</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
