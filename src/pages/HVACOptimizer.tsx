import { useState, useEffect } from "react";
import { Layout } from "@/components/neurawatt/Layout";
import { 
  Cpu, 
  Thermometer, 
  Clock, 
  CloudSun,
  Users,
  Zap,
  Wind,
  ToggleLeft,
  ExternalLink,
  Loader2
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { 
  checkStreamlitStatus, 
  startStreamlit, 
  StreamlitStatus 
} from "@/services/streamlitService";

const HVACOptimizer = () => {
  const [temperature, setTemperature] = useState([22]); // 22°C
  const [fanSpeed, setFanSpeed] = useState([60]); // 60%
  const [energySaving, setEnergySaving] = useState([70]); // 70% priority to energy saving vs comfort
  const [autoMode, setAutoMode] = useState(true);
  const [streamlitStatus, setStreamlitStatus] = useState<StreamlitStatus>({ running: false });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Check if Streamlit is running when the component mounts
  useEffect(() => {
    const fetchStreamlitStatus = async () => {
      try {
        const status = await checkStreamlitStatus();
        setStreamlitStatus(status);
      } catch (error) {
        console.error("Failed to check Streamlit status:", error);
      }
    };
    
    fetchStreamlitStatus();
    
    // Set up polling to periodically check status
    const intervalId = setInterval(fetchStreamlitStatus, 10000);
    
    // Clean up on unmount
    return () => clearInterval(intervalId);
  }, []);
  
  const launchStreamlitDashboard = async () => {
    setIsLoading(true);
    
    try {
      toast({
        title: "Starting HVAC Dashboard",
        description: "Please wait while we launch the Streamlit dashboard...",
      });
      
      const result = await startStreamlit('hvac_dashboard', 'dashboard');
      
      if (result.success) {
        setStreamlitStatus({
          running: true,
          url: result.url,
          pid: result.pid
        });
        
        toast({
          title: "Dashboard Ready",
          description: "The HVAC optimization dashboard is now running!",
        });
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to launch the HVAC dashboard.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Failed to launch Streamlit dashboard:", error);
      toast({
        title: "Error",
        description: "Failed to launch the HVAC dashboard. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const openStreamlit = () => {
    if (streamlitStatus.url) {
      window.open(streamlitStatus.url, "_blank");
    }
  };

  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">HVAC Optimizer</h1>
              <p className="text-muted-foreground">Optimize HVAC systems for comfort and efficiency</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">AI Control</span>
                <Switch checked={autoMode} onCheckedChange={setAutoMode} />
              </div>
              <Button className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white">
                Apply Settings
              </Button>
            </div>
          </div>
          
          {/* Streamlit Dashboard Section */}
          <Card className="border-neurawatt-purple">
            <CardHeader className="bg-neurawatt-purple/5">
              <CardTitle className="flex items-center">
                <Cpu className="mr-2 h-5 w-5 text-neurawatt-purple" />
                Smart HVAC Dashboard
              </CardTitle>
              <CardDescription>
                Interactive visualization and control of your building's HVAC system
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {streamlitStatus.running ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Dashboard Status: <span className="text-green-600">Running</span></h3>
                      <p className="text-sm text-muted-foreground">The interactive Python-based HVAC dashboard is active</p>
                    </div>
                    <Button 
                      onClick={openStreamlit}
                      className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Dashboard
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h4 className="font-medium mb-2">About the HVAC Dashboard</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The Smart HVAC Dashboard provides real-time monitoring and optimization 
                      of your building's heating, ventilation, and air conditioning systems. 
                      It features:
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      <li>Real-time occupancy detection via cameras</li>
                      <li>Environmental data tracking</li>
                      <li>AI-powered HVAC optimization</li>
                      <li>Historical performance analysis</li>
                      <li>Energy usage visualization</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Cpu className="mx-auto h-12 w-12 text-neurawatt-purple/30 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Launch Interactive Dashboard</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Start the Python-based Smart HVAC Dashboard for advanced visualization 
                    and control of your building's HVAC systems.
                  </p>
                  <Button 
                    onClick={launchStreamlitDashboard}
                    className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Launching...
                      </>
                    ) : (
                      "Launch Dashboard"
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="mr-2 h-5 w-5" />
                    HVAC Controls
                  </CardTitle>
                  <CardDescription>Fine-tune your building's climate</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Temperature</label>
                      <span className="text-sm font-medium">{temperature}°C</span>
                    </div>
                    <Slider
                      defaultValue={temperature}
                      min={18}
                      max={28}
                      step={0.5}
                      disabled={autoMode}
                      onValueChange={(value) => setTemperature(value as number[])}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Energy Saving</span>
                      <span>Comfort</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Fan Speed</label>
                      <span className="text-sm font-medium">{fanSpeed}%</span>
                    </div>
                    <Slider
                      defaultValue={fanSpeed}
                      min={0}
                      max={100}
                      step={5}
                      disabled={autoMode}
                      onValueChange={(value) => setFanSpeed(value as number[])}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Energy vs. Comfort Balance</label>
                      <span className="text-sm font-medium"></span>
                    </div>
                    <Slider
                      defaultValue={energySaving}
                      min={0}
                      max={100}
                      step={5}
                      onValueChange={(value) => setEnergySaving(value as number[])}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Prioritize Comfort</span>
                      <span>Prioritize Energy</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 space-y-2">
                    <label className="text-sm font-medium">Quick Settings</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="justify-start" disabled={autoMode}>
                        <Zap className="mr-2 h-4 w-4 text-yellow-500" />
                        Eco Mode
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start" disabled={autoMode}>
                        <Wind className="mr-2 h-4 w-4 text-blue-500" />
                        Max Comfort
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start" disabled={autoMode}>
                        <Users className="mr-2 h-4 w-4 text-purple-500" />
                        Meeting Mode
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start" disabled={autoMode}>
                        <CloudSun className="mr-2 h-4 w-4 text-orange-500" />
                        Weather Adapt
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Smart Scheduling
                  </CardTitle>
                  <CardDescription>Set optimal running times</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="weekdays">
                    <TabsList className="w-full mb-4">
                      <TabsTrigger value="weekdays" className="flex-1">Weekdays</TabsTrigger>
                      <TabsTrigger value="weekend" className="flex-1">Weekend</TabsTrigger>
                      <TabsTrigger value="special" className="flex-1">Special</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="weekdays" className="space-y-3">
                      <div className="flex justify-between items-center p-2 border rounded bg-gray-50">
                        <div>
                          <div className="font-medium">Morning Warmup</div>
                          <div className="text-xs text-muted-foreground">7:00 AM - 9:00 AM</div>
                        </div>
                        <Switch checked={true} />
                      </div>
                      
                      <div className="flex justify-between items-center p-2 border rounded bg-gray-50">
                        <div>
                          <div className="font-medium">Working Hours</div>
                          <div className="text-xs text-muted-foreground">9:00 AM - 5:00 PM</div>
                        </div>
                        <Switch checked={true} />
                      </div>
                      
                      <div className="flex justify-between items-center p-2 border rounded bg-gray-50">
                        <div>
                          <div className="font-medium">Evening Setback</div>
                          <div className="text-xs text-muted-foreground">5:00 PM - 7:00 PM</div>
                        </div>
                        <Switch checked={true} />
                      </div>
                      
                      <Button className="w-full mt-2" variant="outline" size="sm">
                        <ToggleLeft className="mr-2 h-4 w-4" />
                        Add Time Period
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-8">
              <Card className="h-[300px] mb-6">
                <CardHeader>
                  <Tabs defaultValue="realtime">
                    <div className="flex items-center justify-between">
                      <CardTitle>HVAC Performance</CardTitle>
                      <TabsList>
                        <TabsTrigger value="realtime">Real-time</TabsTrigger>
                        <TabsTrigger value="predicted">Predicted</TabsTrigger>
                        <TabsTrigger value="historical">Historical</TabsTrigger>
                      </TabsList>
                    </div>
                  </Tabs>
                </CardHeader>
                <CardContent className="h-[220px] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Cpu className="mx-auto h-12 w-12 mb-4 opacity-20" />
                    <p>HVAC performance data will appear here</p>
                    <p className="text-sm">Real-time energy usage and temperature trends</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wind className="mr-2 h-5 w-5" />
                      Air Quality Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">CO₂ Level</span>
                        <span className="font-medium text-green-600">620 ppm</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm">Humidity</span>
                        <span className="font-medium text-blue-600">43%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-sm">VOC Level</span>
                        <span className="font-medium text-green-600">Low</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-5 w-5" />
                      Energy Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium">Current Power Usage</div>
                          <div className="text-2xl font-bold">4.2 kW</div>
                        </div>
                        <div className="text-green-600 bg-green-50 px-2 py-1 rounded text-sm flex items-center">
                          <span>↓</span> 18% below baseline
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <div className="text-sm font-medium mb-1">AI Optimization Impact</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-neurawatt-purple h-2 rounded-full" style={{ width: '68%' }}></div>
                          </div>
                          <span className="text-sm font-medium">68%</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Efficiency improvement from AI-driven control
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HVACOptimizer;