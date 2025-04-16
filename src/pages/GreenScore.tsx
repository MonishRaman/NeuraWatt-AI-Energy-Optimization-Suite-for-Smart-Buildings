import { Layout } from "@/components/neurawatt/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Leaf, TrendingUp } from "lucide-react";

const GreenScore = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Green Score</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Overall Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-center my-4">85/100</div>
              <Progress value={85} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-500" />
                Sustainability Index
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-center my-4">92%</div>
              <Progress value={92} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Monthly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-center my-4">+15%</div>
              <Progress value={75} className="h-2" />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Improvement Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">1</span>
                <span>Optimize HVAC schedules during off-peak hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">2</span>
                <span>Implement motion sensors in low-traffic areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">3</span>
                <span>Upgrade to energy-efficient lighting systems</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default GreenScore;