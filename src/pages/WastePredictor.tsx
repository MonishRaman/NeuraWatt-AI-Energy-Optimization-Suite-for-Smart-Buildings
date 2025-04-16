
import { Layout } from "@/components/neurawatt/Layout";
import { AlertTriangle, BarChart, History, ListFilter, TrendingDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const WastePredictor = () => {
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
              <Button variant="outline" className="flex items-center gap-2">
                <ListFilter className="h-4 w-4" />
                Filter
              </Button>
              <Button className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white">
                Analyze Now
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
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Conference Room A</span>
                    <span className="text-red-600 font-medium">+32% waste</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <div className="text-sm text-red-700">
                    HVAC running when unoccupied
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-medium">Open Office Zone 3</span>
                    <span className="text-red-600 font-medium">+27% waste</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <div className="text-sm text-red-700">
                    Excessive lighting during daylight hours
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-medium">IT Server Room</span>
                    <span className="text-red-600 font-medium">+22% waste</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="text-sm text-red-700">
                    Cooling inefficiency detected
                  </div>
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
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Weekends</span>
                    <span className="text-yellow-600 font-medium">+18% waste</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '58%' }}></div>
                  </div>
                  <div className="text-sm text-yellow-700">
                    Regular pattern of energy waste detected
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-medium">After Hours (6-8pm)</span>
                    <span className="text-yellow-600 font-medium">+15% waste</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '48%' }}></div>
                  </div>
                  <div className="text-sm text-yellow-700">
                    Low occupancy but full energy use
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-medium">Meeting Rooms</span>
                    <span className="text-yellow-600 font-medium">+12% waste</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  <div className="text-sm text-yellow-700">
                    Energy use doesn't match booking patterns
                  </div>
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
              <Tabs defaultValue="zones">
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
              <div className="text-center text-muted-foreground">
                <BarChart className="mx-auto h-12 w-12 mb-4 opacity-20" />
                <p>Energy waste analytics visualization will appear here</p>
                <p className="text-sm">Run the analyzer to view detailed waste prediction data</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default WastePredictor;
