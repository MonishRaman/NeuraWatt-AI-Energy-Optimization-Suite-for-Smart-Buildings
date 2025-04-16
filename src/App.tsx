import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import BuildingDesigner from "./pages/BuildingDesigner";
import OccupancySimulator from "./pages/OccupancySimulator";
import WastePredictor from "./pages/WastePredictor";
import HVACOptimizer from "./pages/HVACOptimizer";
import Reports from "./pages/Reports";
import AdminPanel from "./pages/AdminPanel";
import Leaderboard from "./pages/Leaderboard";
import Analytics from "./pages/Analytics";
import GreenScore from "./pages/GreenScore";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/building-designer" element={<BuildingDesigner />} />
          <Route path="/simulator" element={<OccupancySimulator />} />
          <Route path="/waste-predictor" element={<WastePredictor />} />
          <Route path="/hvac-optimizer" element={<HVACOptimizer />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/green-score" element={<GreenScore />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;