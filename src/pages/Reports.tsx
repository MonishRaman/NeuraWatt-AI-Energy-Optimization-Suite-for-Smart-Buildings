import { useState } from "react";
import { Layout } from "@/components/neurawatt/Layout";
import { 
  FileBarChart, 
  Download, 
  Calendar, 
  Filter,
  Clock,
  Mail,
  BarChart,
  ChevronDown,
  Users,
  Cpu
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

const Reports = () => {
  const [reportPeriod, setReportPeriod] = useState("weekly");
  
  const reports = [
    {
      id: 1,
      name: "Energy Consumption Summary",
      description: "Detailed breakdown of energy usage by zone and time",
      updated: "3 hours ago",
      type: "energy",
    },
    {
      id: 2,
      name: "HVAC Performance Analysis",
      description: "Efficiency metrics and optimization opportunities",
      updated: "Yesterday",
      type: "hvac",
    },
    {
      id: 3,
      name: "Occupancy Patterns Report",
      description: "Actual vs. predicted occupancy with correlation analysis",
      updated: "3 days ago",
      type: "occupancy",
    },
    {
      id: 4,
      name: "Building Energy Score",
      description: "Overall efficiency rating compared to similar buildings",
      updated: "1 week ago",
      type: "energy",
    },
    {
      id: 5,
      name: "Cost Savings Forecast",
      description: "Projected financial benefits from optimizations",
      updated: "2 weeks ago",
      type: "financial",
    },
  ];
  
  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Reports & Analytics</h1>
              <p className="text-muted-foreground">Generate and review energy optimization insights</p>
            </div>
            <Button className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white">
              <FileBarChart className="mr-2 h-5 w-5" />
              Generate New Report
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <CardTitle>Report Configuration</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Date Range
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={reportPeriod} onValueChange={setReportPeriod} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="daily">Daily</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
                
                <TabsContent value="daily" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-dashed">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <BarChart className="mr-2 h-4 w-4" />
                          Energy Metrics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-sm">Total Usage</span>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-sm">Peak Demand</span>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-sm">By Zone</span>
                          <Switch checked={true} />
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-dashed">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Cpu className="mr-2 h-4 w-4" />
                          HVAC Stats
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-sm">Runtime Hours</span>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-sm">Efficiency Ratio</span>
                          <Switch checked={false} />
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-sm">Temperature Variance</span>
                          <Switch checked={true} />
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-dashed">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          Occupancy Data
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-sm">Actual vs. Predicted</span>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-sm">Peak Hours</span>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-sm">Zone Utilization</span>
                          <Switch checked={false} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* Similar content for weekly and monthly tabs */}
              </Tabs>
              
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Auto-generate {reportPeriod} reports</span>
                  <Switch checked={true} />
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Report
                  </Button>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <h2 className="text-xl font-bold mt-4">Recent Reports</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {reports.map((report) => (
              <Card key={report.id} className="hover:border-neurawatt-purple/50 transition-colors">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4">
                    <div>
                      <h3 className="font-medium">{report.name}</h3>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-muted-foreground">Updated {report.updated}</span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-xs font-medium px-2 py-0.5 bg-gray-100 rounded-full">{report.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4 sm:mt-0">
                      <Button variant="outline" size="sm">Preview</Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
