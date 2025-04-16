import { Layout } from "@/components/neurawatt/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Mail, Shield } from "lucide-react";

const Settings = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-alerts">Email Alerts</Label>
                <Switch id="email-alerts" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <Switch id="push-notifications" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Alert Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="energy-threshold">Energy Usage Threshold (kWh)</Label>
                <Input id="energy-threshold" type="number" placeholder="1000" />
              </div>
              <div>
                <Label htmlFor="cost-threshold">Cost Alert Threshold ($)</Label>
                <Input id="cost-threshold" type="number" placeholder="500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline">Change Password</Button>
              <Button variant="outline">Enable Two-Factor Authentication</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;