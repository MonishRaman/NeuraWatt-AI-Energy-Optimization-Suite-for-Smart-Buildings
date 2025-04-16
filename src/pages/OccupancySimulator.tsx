
import { useState } from "react";
import { Layout } from "@/components/neurawatt/Layout";
import { Users, Calendar, Zap, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const OccupancySimulator = () => {
  const [workHours, setWorkHours] = useState([9, 17]); // 9 AM to 5 PM
  const [occupancyRate, setOccupancyRate] = useState(75); // 75% occupancy
  const [simulationDate, setSimulationDate] = useState(new Date().toISOString().split('T')[0]);
  const [specialEvent, setSpecialEvent] = useState(false);

  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Occupancy Simulator</h1>
              <p className="text-muted-foreground">Predict and simulate building occupancy patterns</p>
            </div>
            <Button className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white">
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
                      defaultValue={workHours}
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
                      defaultValue={[occupancyRate]}
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
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    "What-If" Scenarios
                  </CardTitle>
                  <CardDescription>Test different occupancy scenarios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Button variant="outline" className="justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Holiday Schedule
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Building className="mr-2 h-4 w-4" />
                      Hybrid Work Policy
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Company Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-8">
              <Card className="h-full">
                <CardHeader>
                  <Tabs defaultValue="heatmap">
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
                <CardContent className="h-[500px] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Users className="mx-auto h-12 w-12 mb-4 opacity-20" />
                    <p>Run a simulation to view occupancy patterns</p>
                    <p className="text-sm">Adjust parameters on the left panel and click "Run Simulation"</p>
                  </div>
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
