import { Layout } from "@/components/neurawatt/Layout";
import { AlertTriangle, BarChart as LucideBarChart, History, ListFilter, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Dummy Data for Energy Waste Analysis
const initialWasteDataByZone = [
  { zone: 'Conference Room A', waste: 32 },
  { zone: 'Open Office Zone 3', waste: 27 },
  { zone: 'IT Server Room', waste: 22 },
  { zone: 'Kitchen Area', waste: 15 },
  { zone: 'Reception', waste: 10 },
];

const initialWasteDataByTime = [
  { time: 'Weekends', waste: 18 },
  { time: 'After Hours (6-8pm)', waste: 15 },
  { time: 'Lunch Break (1-2pm)', waste: 10 },
  { time: 'Early Morning (6-8am)', waste: 5 },
];

const initialWasteDataByType = [
  { type: 'HVAC', waste: 45 },
  { type: 'Lighting', waste: 30 },
  { type: 'Equipment', waste: 25 },
];

const WastePredictor = () => {
  const [activeTab, setActiveTab] = useState("zones");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState({
    byZone: initialWasteDataByZone,
    byTime: initialWasteDataByTime,
    byType: initialWasteDataByType,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [zoneFilters, setZoneFilters] = useState<string[]>([]);
  const [timeFilters, setTimeFilters] = useState<string[]>([]);
  const [typeFilters, setTypeFilters] = useState<string[]>([]);

  const applyFilters = () => {
    const filteredByZone = initialWasteDataByZone.filter(item => zoneFilters.length === 0 || zoneFilters.includes(item.zone));
    const filteredByTime = initialWasteDataByTime.filter(item => timeFilters.length === 0 || timeFilters.includes(item.time));
    const filteredByType = initialWasteDataByType.filter(item => typeFilters.length === 0 || typeFilters.includes(item.type));

    setAnalysisResults({ byZone: filteredByZone, byTime: filteredByTime, byType: filteredByType });
    setIsFilterOpen(false);
  };

  const handleAnalyzeNowClick = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      applyFilters(); // Apply current filters on "Analyze Now" as well
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleZoneFilterChange = (zone: string, checked: boolean) => {
    setZoneFilters(prev => checked ? [...prev, zone] : prev.filter(z => z !== zone));
  };

  const handleTimeFilterChange = (time: string, checked: boolean) => {
    setTimeFilters(prev => checked ? [...prev, time] : prev.filter(t => t !== time));
  };

  const handleTypeFilterChange = (type: string, checked: boolean) => {
    setTypeFilters(prev => checked ? [...prev, type] : prev.filter(t => t !== type));
  };

  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Waste Predictor</h1>
              <p className="text-muted-foreground">Identify and forecast energy inefficiencies</p>
            </div>
            <div className="flex gap-2">
              <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ListFilter className="h-4 w-4" />
                    Filter
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Filter Options</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label>By Zone</Label>
                      {initialWasteDataByZone.map((item) => (
                        <div className="flex items-center space-x-2" key={item.zone}>
                          <Checkbox
                            id={`zone-${item.zone}`}
                            checked={zoneFilters.includes(item.zone)}
                            onCheckedChange={(checked) => handleZoneFilterChange(item.zone, !!checked)}
                          />
                          <Label htmlFor={`zone-${item.zone}`}>{item.zone}</Label>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label>By Time</Label>
                      {initialWasteDataByTime.map((item) => (
                        <div className="flex items-center space-x-2" key={item.time}>
                          <Checkbox
                            id={`time-${item.time}`}
                            checked={timeFilters.includes(item.time)}
                            onCheckedChange={(checked) => handleTimeFilterChange(item.time, !!checked)}
                          />
                          <Label htmlFor={`time-${item.time}`}>{item.time}</Label>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label>By Type</Label>
                      {initialWasteDataByType.map((item) => (
                        <div className="flex items-center space-x-2" key={item.type}>
                          <Checkbox
                            id={`type-${item.type}`}
                            checked={typeFilters.includes(item.type)}
                            onCheckedChange={(checked) => handleTypeFilterChange(item.type, !!checked)}
                          />
                          <Label htmlFor={`type-${item.type}`}>{item.type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button onClick={applyFilters}>Apply Filters</Button>
                </DialogContent>
              </Dialog>
              <Button
                className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white"
                onClick={handleAnalyzeNowClick}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Now"}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-red-50 border-red-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-red-700 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  High Risk Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {initialWasteDataByZone
                    .sort((a, b) => b.waste - a.waste)
                    .slice(0, 3)
                    .map((item) => (
                      <div key={item.zone}>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.zone}</span>
                          <span className="text-red-600 font-medium">+{item.waste}% waste</span>
                        </div>
                        <div className="w-full bg-red-200 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{ width: `${item.waste * 2.5 > 100 ? 100 : item.waste * 2.5}%` }}></div>
                        </div>
                        <div className="text-sm text-red-700">
                          {item.zone === 'Conference Room A' ? 'HVAC running when unoccupied' :
                            item.zone === 'Open Office Zone 3' ? 'Excessive lighting during daylight hours' :
                            item.zone === 'IT Server Room' ? 'Cooling inefficiency detected' : ''}
                        </div>
                        {item.zone !== initialWasteDataByZone.slice(-1)[0]?.zone && <div className="border-b my-2 border-red-200" />}
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-yellow-700 flex items-center">
                  <History className="mr-2 h-5 w-5" />
                  Historical Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {initialWasteDataByTime
                    .sort((a, b) => b.waste - a.waste)
                    .slice(0, 3)
                    .map((item) => (
                      <div key={item.time}>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.time}</span>
                          <span className="text-yellow-600 font-medium">+{item.waste}% waste</span>
                        </div>
                        <div className="w-full bg-yellow-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: `${item.waste * 5.5 > 100 ? 100 : item.waste * 5.5}%` }}></div>
                        </div>
                        <div className="text-sm text-yellow-700">
                          {item.time === 'Weekends' ? 'Regular pattern of energy waste detected' :
                            item.time === 'After Hours (6-8pm)' ? 'Low occupancy but full energy use' :
                            item.time === 'Lunch Break (1-2pm)' ? 'Unnecessary equipment left running' : ''}
                        </div>
                        {item.time !== initialWasteDataByTime.slice(-1)[0]?.time && <div className="border-b my-2 border-yellow-200" />}
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-700 flex items-center">
                  <TrendingDown className="mr-2 h-5 w-5" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white p-3 border border-green-200">
                    <div className="font-medium text-green-700 mb-1">Adjust HVAC Schedule</div>
                    <div className="text-sm">Conference Room A should follow actual usage pattern (10am-4pm) instead of building hours.</div>
                    <div className="mt-2 text-xs text-green-600 font-medium">Potential savings: 86 kWh/week</div>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-green-200">
                    <div className="font-medium text-green-700 mb-1">Implement Daylight Harvesting</div>
                    <div className="text-sm">Install sensors to dim artificial lighting when natural light is sufficient in Open Office Zone 3.</div>
                    <div className="mt-2 text-xs text-green-600 font-medium">Potential savings: 72 kWh/week</div>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-green-200">
                    <div className="font-medium text-green-700 mb-1">Optimize Server Room Cooling</div>
                    <div className="text-sm">Raise temperature setpoint by 2°C while remaining within safe operating range.</div>
                    <div className="mt-2 text-xs text-green-600 font-medium">Potential savings: 124 kWh/week</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="flex items-center justify-between">
                  <CardTitle>Energy Waste Analysis</CardTitle>
                  <TabsList>
                    <TabsTrigger value="zones">By Zone</TabsTrigger>
                    <TabsTrigger value="time">By Time</TabsTrigger>
                    <TabsTrigger value="type">By Type</TabsTrigger>
                  </TabsList>
                </div>
              </Tabs>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              {isAnalyzing ? (
                <div className="text-center text-muted-foreground">
                  <LucideBarChart className="mx-auto h-12 w-12 mb-4 animate-spin opacity-60" />
                  <p>Analyzing energy waste...</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  {activeTab === "zones" && analysisResults.byZone && (
                    <BarChart data={analysisResults.byZone}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="zone" />
                      <YAxis label={{ value: 'Waste (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Bar dataKey="waste" fill="#a78bfa" />
                    </BarChart>
                  )}
                  {activeTab === "time" && analysisResults.byTime && (
                    <BarChart data={analysisResults.byTime}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis label={{ value: 'Waste (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Bar dataKey="waste" fill="#facc15" />
                    </BarChart>
                  )}
                  {activeTab === "type" && analysisResults.byType && (
                    <BarChart data={analysisResults.byType}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="type" />
                      <YAxis label={{ value: 'Waste (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Bar dataKey="waste" fill="#34d399" />
                    </BarChart>
                  )}
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default WastePredictor;