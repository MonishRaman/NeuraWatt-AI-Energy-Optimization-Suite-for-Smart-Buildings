import { useState } from "react";
import { Layout } from "@/components/neurawatt/Layout";
import { Users, Calendar, Zap, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ZONES = ["Lobby", "Office", "Cafeteria", "Conference", "Restroom"];

const generateSimulationData = (workHours: number[], occupancyRate: number, specialEvent: boolean) => {
  const data: Record<string, number[]> = {};

  ZONES.forEach(zone => {
    const hours = Array.from({ length: 24 }, (_, i) => {
      if (i < workHours[0] || i >= workHours[1]) return 0;
      let base = Math.random() * occupancyRate;
      if (specialEvent && zone === "Conference") base += 20;
      return Math.min(100, Math.round(base));
    });
    data[zone] = hours;
  });

  return data;
};

const OccupancySimulator = () => {
  const [workHours, setWorkHours] = useState([9, 17]);
  const [occupancyRate, setOccupancyRate] = useState(75);
  const [simulationDate, setSimulationDate] = useState(new Date().toISOString().split('T')[0]);
  const [specialEvent, setSpecialEvent] = useState(false);
  const [simulationData, setSimulationData] = useState<Record<string, number[]> | null>(null);
  const [activeTab, setActiveTab] = useState("heatmap");

  const runSimulation = () => {
    const data = generateSimulationData(workHours, occupancyRate, specialEvent);
    setSimulationData(data);
  };

  const getColor = (value: number) => {
    if (value > 75) return "bg-red-500";
    if (value > 50) return "bg-orange-400";
    if (value > 25) return "bg-yellow-300";
    if (value > 0) return "bg-blue-200";
    return "bg-gray-100";
  };

  const getTimelineChartData = () => {
    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    const datasets = ZONES.map(zone => ({
      label: zone,
      data: simulationData ? simulationData[zone] : [],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    }));
    return {
      labels,
      datasets,
    };
  };

  const getStatistics = () => {
    if (!simulationData) return null;

    const stats = ZONES.map(zone => {
      const occupancy = simulationData[zone];
      const avg = occupancy.reduce((a, b) => a + b, 0) / occupancy.length;
      const peak = Math.max(...occupancy);
      return {
        zone,
        avg,
        peak,
      };
    });

    const overallAvg = ZONES.reduce((sum, zone) => sum + simulationData[zone].reduce((a, b) => a + b, 0), 0) / (ZONES.length * 24);
    const overallPeak = Math.max(...ZONES.flatMap(zone => simulationData[zone]));

    return {
      stats,
      overallAvg,
      overallPeak,
    };
  };

  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Occupancy Simulator</h1>
              <p className="text-muted-foreground">Predict and simulate building occupancy patterns</p>
            </div>
            <Button className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white" onClick={runSimulation}>
              Run Simulation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Simulation Parameters
                  </CardTitle>
                  <CardDescription>Adjust the occupancy model inputs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date</label>
                    <Input
                      type="date"
                      value={simulationDate}
                      onChange={(e) => setSimulationDate(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Working Hours</label>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{workHours[0]}:00</span>
                      <span className="text-sm text-muted-foreground">{workHours[1]}:00</span>
                    </div>
                    <Slider
                      value={workHours}
                      min={0}
                      max={24}
                      step={1}
                      onValueChange={(value) => setWorkHours(value as number[])}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Expected Occupancy Rate</label>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">0%</span>
                      <span className="text-sm font-medium">{occupancyRate}%</span>
                      <span className="text-sm text-muted-foreground">100%</span>
                    </div>
                    <Slider
                      value={[occupancyRate]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(value) => setOccupancyRate(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Special Event</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="special-event"
                        checked={specialEvent}
                        onChange={(e) => setSpecialEvent(e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="special-event" className="text-sm">Include special event</label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full">Apply Parameters</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-8">
              <Card className="h-full">
                <CardHeader>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <div className="flex items-center justify-between">
                      <CardTitle>Occupancy Visualization</CardTitle>
                      <TabsList>
                        <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
                        <TabsTrigger value="timeline">Timeline</TabsTrigger>
                        <TabsTrigger value="stats">Statistics</TabsTrigger>
                      </TabsList>
                    </div>
                  </Tabs>
                </CardHeader>
                <CardContent className="h-[500px] overflow-auto">
                  {simulationData ? (
                    activeTab === "heatmap" ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-25 text-sm font-medium">
                          <span className="font-semibold">Zone / Hour</span>
                          {Array.from({ length: 24 }, (_, i) => (
                            <span key={i} className="text-center">{i}</span>
                          ))}
                        </div>
                        {ZONES.map(zone => (
                          <div key={zone} className="grid grid-cols-25 items-center text-sm">
                            <span className="font-medium">{zone}</span>
                            {simulationData[zone].map((val, i) => (
                              <div
                                key={i}
                                className={clsx(
                                  "h-6 w-full rounded-sm text-[10px] text-center text-white",
                                  getColor(val)
                                )} title={`${val}%`}
                              >
                                {val > 70 ? val : ""}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : activeTab === "timeline" ? (
                      <div>
                        <Line data={getTimelineChartData()} options={{
                          responsive: true,
                          plugins: {
                            title: {
                              display: true,
                              text: 'Occupancy Over Time',
                            },
                            tooltip: {
                              callbacks: {
                                title: (tooltipItem) => `Time: ${tooltipItem[0].label}`,
                                label: (tooltipItem) => `Occupancy: ${tooltipItem.raw}%`,
                              }
                            },
                          },
                          scales: {
                            x: { title: { display: true, text: "Time (hours)" } },
                            y: { title: { display: true, text: "Occupancy (%)" }, min: 0, max: 100 },
                          },
                        }} />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Building Occupancy Stats</h3>
                        {getStatistics() && getStatistics()?.stats.map(stat => (
                          <div key={stat.zone} className="space-y-2">
                            <div>{stat.zone}: Avg: {stat.avg.toFixed(2)}%, Peak: {stat.peak}%</div>
                          </div>
                        ))}
                        <div>
                          <div>Overall Average: {getStatistics()?.overallAvg.toFixed(2)}%</div>
                          <div>Overall Peak: {getStatistics()?.overallPeak}%</div>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Users className="mx-auto h-12 w-12 mb-4 opacity-20" />
                      <p>Run a simulation to view occupancy patterns</p>
                      <p className="text-sm">Adjust parameters on the left panel and click "Run Simulation"</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OccupancySimulator;
