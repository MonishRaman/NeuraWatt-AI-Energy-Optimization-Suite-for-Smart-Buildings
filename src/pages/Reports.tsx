import { useState, useRef } from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import html2pdf from "html2pdf.js";

const Reports = () => {
  const [reportPeriod, setReportPeriod] = useState("weekly");

  const reports = [
    {
      id: 1,
      name: "Energy Consumption Summary",
      description: "Detailed breakdown of energy usage by zone and time",
      updated: "3 hours ago",
      type: "energy",
      url: "/reports/Energy_Consumption_Summary.pdf"
    },
    {
      id: 2,
      name: "HVAC Performance Analysis",
      description: "Efficiency metrics and optimization opportunities",
      updated: "Yesterday",
      type: "hvac",
      url: "/reports/HVAC_Performance_Analysis.pdf"
    },
    {
      id: 3,
      name: "Occupancy Patterns Report",
      description: "Actual vs. predicted occupancy with correlation analysis",
      updated: "3 days ago",
      type: "occupancy",
      url: "/reports/Occupancy_Patterns_Report.pdf"
    },
    {
      id: 4,
      name: "Building Energy Score",
      description: "Overall efficiency rating compared to similar buildings",
      updated: "1 week ago",
      type: "energy",
      url: "/reports/Building_Energy_Score.pdf"
    },
    {
      id: 5,
      name: "Cost Savings Forecast",
      description: "Projected financial benefits from optimizations",
      updated: "2 weeks ago",
      type: "financial",
      url: "/reports/Cost_Savings_Forecast.pdf"
    }
  ];

  const reportRef = useRef(null);

  const handleDownloadPDF = () => {
    if (reportRef.current) {
      html2pdf()
        .from(reportRef.current)
        .set({
          margin: 0.5,
          filename: `report-${reportPeriod}.pdf`,
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
        })
        .save();
    }
  };

  const handleExportPDF = () => {
    const element = reportRef.current;
    const opt = {
      margin: 0.3,
      filename: "report-summary.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Reports & Analytics</h1>
              <p className="text-muted-foreground">
                Generate and review energy optimization insights
              </p>
            </div>
            <Button className="bg-neurawatt-purple hover:bg-neurawatt-purple/90 text-white">
              <FileBarChart className="mr-2 h-5 w-5" />
              Generate New Report
            </Button>
          </div>

          {/* Report Configuration Section */}
          <Card ref={reportRef}>
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
                    {/* Energy Card */}
                    <Card className="border-dashed">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <BarChart className="mr-2 h-4 w-4" />
                          Energy Metrics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {["Total Usage", "Peak Demand", "By Zone"].map((label) => (
                          <div key={label} className="flex items-center justify-between py-1">
                            <span className="text-sm">{label}</span>
                            <Switch checked={true} />
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* HVAC Card */}
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

                    {/* Occupancy Card */}
                    <Card className="border-dashed">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          Occupancy Data
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {[
                          ["Actual vs. Predicted", true],
                          ["Peak Hours", true],
                          ["Zone Utilization", false]
                        ].map(([label, checked]) => (
                          <div key={label} className="flex items-center justify-between py-1">
                            <span className="text-sm">{label}</span>
                            <Switch checked={checked} />
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Auto-generate {reportPeriod} reports
                  </span>
                  <Switch checked={true} />
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Report
                  </Button>
                  <Button size="sm" onClick={handleDownloadPDF}>
                    <Download className="mr-2 h-4 w-4" />
                    Export PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Reports Section */}
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
                      <Button variant="outline" size="sm" onClick={() => window.open(report.url, "_blank")}>
                        Preview
                      </Button>
                      <a
                        href={report.url}
                        download
                        className="inline-flex items-center px-3 py-1 text-sm border border-input rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
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
