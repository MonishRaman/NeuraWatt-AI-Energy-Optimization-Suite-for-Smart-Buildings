
import { Layout } from "@/components/neurawatt/Layout";
import { 
  Shield, 
  Users, 
  Settings, 
  Database,
  Terminal,
  PlugZap,
  AlertTriangle,
  UserPlus,
  RefreshCw,
  Activity,
  Download
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

const AdminPanel = () => {
  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Admin Panel</h1>
              <p className="text-muted-foreground">System configuration and user management</p>
            </div>
            <Button className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white">
              <UserPlus className="mr-2 h-5 w-5" />
              Add User
            </Button>
          </div>
          
          <Tabs defaultValue="users" className="w-full">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="users" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">Users</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">Settings</span>
              </TabsTrigger>
              <TabsTrigger value="systems" className="flex items-center">
                <PlugZap className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">Systems</span>
              </TabsTrigger>
              <TabsTrigger value="logs" className="flex items-center">
                <Terminal className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">Logs</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="users" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>User Management</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Refresh
                      </Button>
                    </div>
                  </div>
                  <CardDescription>Manage user accounts and access control</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto rounded-md border">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                          <th className="px-4 py-3">Name</th>
                          <th className="px-4 py-3">Email</th>
                          <th className="px-4 py-3">Role</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3">Last Login</th>
                          <th className="px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-4 py-3 font-medium">John Doe</td>
                          <td className="px-4 py-3">john.doe@example.com</td>
                          <td className="px-4 py-3">Admin</td>
                          <td className="px-4 py-3">
                            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">Active</span>
                          </td>
                          <td className="px-4 py-3">10 minutes ago</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-4 py-3 font-medium">Jane Smith</td>
                          <td className="px-4 py-3">jane.smith@example.com</td>
                          <td className="px-4 py-3">Manager</td>
                          <td className="px-4 py-3">
                            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">Active</span>
                          </td>
                          <td className="px-4 py-3">3 hours ago</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-4 py-3 font-medium">Robert Johnson</td>
                          <td className="px-4 py-3">robert.j@example.com</td>
                          <td className="px-4 py-3">Operator</td>
                          <td className="px-4 py-3">
                            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">Inactive</span>
                          </td>
                          <td className="px-4 py-3">2 days ago</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>System Settings</CardTitle>
                    <CardDescription>Configure global system parameters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Data Retention</div>
                        <div className="text-sm text-muted-foreground">Store data for 12 months</div>
                      </div>
                      <Switch checked={true} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">AI Model Updates</div>
                        <div className="text-sm text-muted-foreground">Auto-update ML models</div>
                      </div>
                      <Switch checked={true} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email Notifications</div>
                        <div className="text-sm text-muted-foreground">Send system alerts via email</div>
                      </div>
                      <Switch checked={true} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Debug Mode</div>
                        <div className="text-sm text-muted-foreground">Enable verbose logging</div>
                      </div>
                      <Switch checked={false} />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Threshold Configuration</CardTitle>
                    <CardDescription>Set alert and notification thresholds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Energy Usage Alert (%)</label>
                      <div className="flex items-center mt-1">
                        <input type="number" value="120" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                        <span className="ml-2 text-sm text-muted-foreground">% of baseline</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Temperature Deviation (°C)</label>
                      <div className="flex items-center mt-1">
                        <input type="number" value="2.5" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                        <span className="ml-2 text-sm text-muted-foreground">degrees</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Occupancy Prediction Error (%)</label>
                      <div className="flex items-center mt-1">
                        <input type="number" value="15" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                        <span className="ml-2 text-sm text-muted-foreground">% variance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="systems" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>Monitor connected systems and integrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 border rounded-md bg-green-50 border-green-200">
                      <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <Database className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Database System</div>
                        <div className="text-sm text-green-600">Connected - Performance Normal</div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">Details</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 border rounded-md bg-green-50 border-green-200">
                      <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <Activity className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">AI Processing Engine</div>
                        <div className="text-sm text-green-600">Connected - All Models Operational</div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">Details</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 border rounded-md bg-yellow-50 border-yellow-200">
                      <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Weather Data API</div>
                        <div className="text-sm text-yellow-600">Connected - Intermittent Delays</div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">Details</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 border rounded-md bg-green-50 border-green-200">
                      <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <PlugZap className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Integration Services</div>
                        <div className="text-sm text-green-600">Connected - 5/5 Services Running</div>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="logs" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>System Logs</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Refresh
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>
                  <CardDescription>System activity and error logs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black text-green-400 font-mono text-xs p-4 rounded-md h-80 overflow-y-auto">
                    <p>[2025-04-16 08:02:14] INFO: System startup completed successfully</p>
                    <p>[2025-04-16 08:05:27] INFO: User john.doe@example.com logged in</p>
                    <p>[2025-04-16 08:12:45] INFO: AI model "occupancy-predictor-v3" loaded</p>
                    <p>[2025-04-16 08:15:11] WARNING: Weather API response delayed by 3.2s</p>
                    <p>[2025-04-16 08:20:05] INFO: HVAC optimization routine executed</p>
                    <p>[2025-04-16 08:22:33] INFO: Energy report generated for building "Corporate HQ"</p>
                    <p>[2025-04-16 08:30:10] INFO: Database backup completed</p>
                    <p>[2025-04-16 08:35:22] ERROR: Failed to connect to external sensor network, retrying...</p>
                    <p>[2025-04-16 08:36:05] INFO: Connection to external sensor network established</p>
                    <p>[2025-04-16 08:40:12] INFO: User jane.smith@example.com logged in</p>
                    <p>[2025-04-16 08:42:59] INFO: Building simulation parameters updated</p>
                    <p>[2025-04-16 08:45:33] INFO: New waste prediction model analysis started</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPanel;
