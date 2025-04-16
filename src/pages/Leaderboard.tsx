import { Layout } from "@/components/neurawatt/Layout";
import {
  Trophy,
  Award,
  Star,
  Calendar,
  ArrowUpRight,
  Filter,
  Users,
  Building,
  Zap,
  Cpu,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const initialBuildingLeaders = [
  { id: 1, name: "Corporate HQ", score: 92, change: "+5", efficiency: "A+", savings: "$12,450" },
  { id: 2, name: "Westside Office", score: 87, change: "+3", efficiency: "A", savings: "$9,280" },
  { id: 3, name: "Downtown Campus", score: 83, change: "+7", efficiency: "A-", savings: "$8,675" },
  { id: 4, name: "Park Avenue Branch", score: 78, change: "-2", efficiency: "B+", savings: "$6,120" },
  { id: 5, name: "Innovation Center", score: 76, change: "+1", efficiency: "B+", savings: "$5,840" },
];

const initialDepartmentLeaders = [
  { id: 1, name: "Engineering", score: 94, change: "+8", efficiency: "A+", savings: "$4,850" },
  { id: 2, name: "Marketing", score: 89, change: "+5", efficiency: "A", savings: "$3,920" },
  { id: 3, name: "Operations", score: 85, change: "+2", efficiency: "A-", savings: "$3,450" },
  { id: 4, name: "Finance", score: 80, change: "+4", efficiency: "B+", savings: "$2,780" },
  { id: 5, name: "HR", score: 78, change: "-1", efficiency: "B+", savings: "$2,540" },
];

const Leaderboard = () => {
  const [buildingLeaders, setBuildingLeaders] = useState(initialBuildingLeaders);
  const [departmentLeaders, setDepartmentLeaders] = useState(initialDepartmentLeaders);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [buildingFilters, setBuildingFilters] = useState<string[]>([]);
  const [departmentFilters, setDepartmentFilters] = useState<string[]>([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState("This Month");

  const handleTimeframeChange = () => {
    // In a real application, you would implement logic to fetch data for different timeframes
    alert(`Timeframe changed to: ${selectedTimeframe === "This Month" ? "Last Month" : "This Month"}`);
    setSelectedTimeframe(selectedTimeframe === "This Month" ? "Last Month" : "This Month");
    // You would likely call an API or update the data based on the new timeframe
  };

  const applyBuildingFilters = () => {
    const filteredBuildings = initialBuildingLeaders.filter(building =>
      buildingFilters.length === 0 || buildingFilters.includes(building.name)
    );
    setBuildingLeaders(filteredBuildings);
    setIsFilterOpen(false);
  };

  const applyDepartmentFilters = () => {
    const filteredDepartments = initialDepartmentLeaders.filter(department =>
      departmentFilters.length === 0 || departmentFilters.includes(department.name)
    );
    setDepartmentLeaders(filteredDepartments);
    setIsFilterOpen(false);
  };

  const handleBuildingFilterChange = (buildingName: string, checked: boolean) => {
    setBuildingFilters(prev => checked ? [...prev, buildingName] : prev.filter(name => name !== buildingName));
  };

  const handleDepartmentFilterChange = (departmentName: string, checked: boolean) => {
    setDepartmentFilters(prev => checked ? [...prev, departmentName] : prev.filter(name => name !== departmentName));
  };

  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Sustainability Leaderboard</h1>
              <p className="text-muted-foreground">Monitor performance and celebrate efficiency leaders</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2" onClick={handleTimeframeChange}>
                <Calendar className="h-4 w-4" />
                {selectedTimeframe}
              </Button>
              <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Filter Leaderboard</DialogTitle>
                  </DialogHeader>
                  <Tabs defaultValue="buildingFilter">
                    <TabsList className="grid grid-cols-2">
                      <TabsTrigger value="buildingFilter">Buildings</TabsTrigger>
                      <TabsTrigger value="departmentFilter">Departments</TabsTrigger>
                    </TabsList>
                    <TabsContent value="buildingFilter" className="space-y-2 py-4">
                      <Label>Filter Buildings:</Label>
                      {initialBuildingLeaders.map((building) => (
                        <div className="flex items-center space-x-2" key={building.id}>
                          <Checkbox
                            id={`building-${building.id}`}
                            checked={buildingFilters.includes(building.name)}
                            onCheckedChange={(checked) => handleBuildingFilterChange(building.name, !!checked)}
                          />
                          <Label htmlFor={`building-${building.id}`}>{building.name}</Label>
                        </div>
                      ))}
                      <Button onClick={applyBuildingFilters}>Apply Building Filters</Button>
                    </TabsContent>
                    <TabsContent value="departmentFilter" className="space-y-2 py-4">
                      <Label>Filter Departments:</Label>
                      {initialDepartmentLeaders.map((dept) => (
                        <div className="flex items-center space-x-2" key={dept.id}>
                          <Checkbox
                            id={`department-${dept.id}`}
                            checked={departmentFilters.includes(dept.name)}
                            onCheckedChange={(checked) => handleDepartmentFilterChange(dept.name, !!checked)}
                          />
                          <Label htmlFor={`department-${dept.id}`}>{dept.name}</Label>
                        </div>
                      ))}
                      <Button onClick={applyDepartmentFilters}>Apply Department Filters</Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-100 border-yellow-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-amber-700">
                  <Trophy className="mr-2 h-5 w-5 text-amber-500" />
                  Top Performer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="text-4xl font-bold text-amber-600 mb-1">
                    {buildingLeaders.length > 0 ? buildingLeaders[0].name : "N/A"}
                  </div>
                  <div className="text-amber-600 font-medium text-lg mb-4">
                    Score: {buildingLeaders.length > 0 ? `${buildingLeaders[0].score}/100` : "N/A"}
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-6 w-6 ${
                          buildingLeaders.length > 0 && buildingLeaders[0].score > (index * 20)
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-amber-700">
                    Achieved 28% energy reduction through consistent optimization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-gray-700">
                  <Award className="mr-2 h-5 w-5 text-gray-500" />
                  Most Improved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="text-4xl font-bold text-gray-600 mb-1">
                    {buildingLeaders.sort((a, b) => parseInt(b.change, 10) - parseInt(a.change, 10))[0]?.name || "N/A"}
                  </div>
                  <div className="text-gray-600 font-medium text-lg mb-4">
                    +
                    {buildingLeaders.sort((a, b) => parseInt(b.change, 10) - parseInt(a.change, 10))[0]?.change.replace('+', '') || "0"} points this month
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                    Fastest Rising
                  </div>
                  <div className="text-sm text-gray-700">
                    Implemented 15 AI recommendations in two weeks
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neurawatt-purple-light/30 to-neurawatt-purple-light/50 border-neurawatt-purple-light">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-neurawatt-purple">
                  <Users className="mr-2 h-5 w-5" />
                  Efficiency Champions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="text-4xl font-bold text-neurawatt-purple mb-1">
                    {departmentLeaders.length > 0 ? departmentLeaders[0].name : "N/A"}
                  </div>
                  <div className="text-neurawatt-purple font-medium text-lg mb-4">
                    Score: {departmentLeaders.length > 0 ? `${departmentLeaders[0].score}/100` : "N/A"}
                  </div>
                  <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                    Department Winner
                  </div>
                  <div className="text-sm text-neurawatt-purple">
                    Excelled in smart scheduling and occupancy optimization
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="buildings" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="buildings" className="flex items-center">
                <Building className="mr-2 h-4 w-4" />
                Buildings
              </TabsTrigger>
              <TabsTrigger value="departments" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Departments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buildings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Building Rankings</CardTitle>
                  <CardDescription>Performance based on energy efficiency and optimization compliance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                          <th className="px-4 py-3">Rank</th>
                          <th className="px-4 py-3">Building</th>
                          <th className="px-4 py-3">Green Score</th>
                          <th className="px-4 py-3">Change</th>
                          <th className="px-4 py-3">Efficiency Rating</th>
                          <th className="px-4 py-3">Cost Savings</th>
                          <th className="px-4 py-3"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {buildingLeaders.map((building, index) => (
                          <tr key={building.id} className="bg-white border-b">
                            <td className="px-4 py-3 font-bold">{index + 1}</td>
                            <td className="px-4 py-3 font-medium">{building.name}</td>
                            <td className="px-4 py-3">
                              <div className="font-medium">{building.score}</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className={`font-medium ${building.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                {building.change}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium inline-block w-8 text-center">
                                {building.efficiency}
                              </div>
                            </td>
                            <td className="px-4 py-3 font-medium">{building.savings}</td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm" className="p-0 h-auto">
                                <ArrowUpRight className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="departments" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department Rankings</CardTitle>
                  <CardDescription>Performance based on energy usage and conservation practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                          <th className="px-4 py-3">Rank</th>
                          <th className="px-4 py-3">Department</th>
                          <th className="px-4 py-3">Green Score</th>
                          <th className="px-4 py-3">Change</th>
                          <th className="px-4 py-3">Efficiency Rating</th>
                          <th className="px-4 py-3">Cost Savings</th>
                          <th className="px-4 py-3"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {departmentLeaders.map((dept, index) => (
                          <tr key={dept.id} className="bg-white border-b">
                            <td className="px-4 py-3 font-bold">{index + 1}</td>
                            <td className="px-4 py-3 font-medium">{dept.name}</td>
                            <td className="px-4 py-3">
                              <div className="font-medium">{dept.score}</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className={`font-medium ${dept.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                {dept.change}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium inline-block w-8 text-center">
                                {dept.efficiency}
                              </div>
                            </td>
                            <td className="px-4 py-3 font-medium">{dept.savings}</td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm" className="p-0 h-auto">
                                <ArrowUpRight className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Achievement Badges</CardTitle>
              <CardDescription>Special recognition for outstanding sustainability efforts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <div className="flex flex-col items-center p-3">
                  <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-sm font-medium text-center">Energy Star</div>
                  <div className="text-xs text-muted-foreground text-center">Top 10% Efficiency</div>
                </div>

                <div className="flex flex-col items-center p-3">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Trophy className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-sm font-medium text-center">Eco Champion</div>
                  <div className="text-xs text-muted-foreground text-center">3 Months at #1</div>
                </div>

                <div className="flex flex-col items-center p-3">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium text-center">Power Saver</div>
                  <div className="text-xs text-muted-foreground text-center">25% Below Baseline</div>
                </div>

                <div className="flex flex-col items-center p-3">
                  <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <ArrowUpRight className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-sm font-medium text-center">Fast Riser</div>
                  <div className="text-xs text-muted-foreground text-center">10+ Points in Month</div>
                </div>

                <div className="flex flex-col items-center p-3">
                  <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                    <Cpu className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-sm font-medium text-center">AI Adopter</div>
                  <div className="text-xs text-muted-foreground text-center">90% AI Compliance</div>
                </div>

                <div className="flex flex-col items-center p-3">
                  <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                    <Star className="h-8 w-8 text-pink-600" />
                  </div>
                  <div className="text-sm font-medium text-center">Innovator</div>
                  <div className="text-xs text-muted-foreground text-center">Custom Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;