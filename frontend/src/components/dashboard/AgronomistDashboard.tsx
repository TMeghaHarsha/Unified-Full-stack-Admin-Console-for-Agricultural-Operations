import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Sprout, Calendar, Camera, FileText, TrendingUp, Droplets,
  Plus, MoreHorizontal, Filter, Upload
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ComponentType<any>;
}

function MetricCard({ title, value, change, trend, icon: Icon }: MetricCardProps) {
  return (
    <Card className="hover-lift transition-smooth">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <p className={`text-xs ${trend === 'up' ? 'text-success' : 'text-destructive'} flex items-center gap-1`}>
          <TrendingUp className="h-3 w-3" />
          {change}
        </p>
      </CardContent>
    </Card>
  );
}

export function AgronomistDashboard() {
  const metrics = [
    { title: "Assigned Crops", value: "18", change: "+2 this month", trend: 'up' as const, icon: Sprout },
    { title: "Pending Tasks", value: "5", change: "-3 from yesterday", trend: 'up' as const, icon: Calendar },
    { title: "Reports Filed", value: "23", change: "+8 this week", trend: 'up' as const, icon: FileText },
    { title: "Field Photos", value: "145", change: "+12 today", trend: 'up' as const, icon: Camera },
  ];

  const crops = [
    { id: 1, name: "Wheat Block A", variety: "Winter Wheat", stage: "Flowering", health: 92, nextTask: "Irrigation", dueDate: "Today", priority: "High" },
    { id: 2, name: "Corn Field 3", variety: "Sweet Corn", stage: "Vegetative", health: 88, nextTask: "Pest Check", dueDate: "Tomorrow", priority: "Medium" },
    { id: 3, name: "Rice Paddy 2", variety: "Basmati", stage: "Tillering", health: 95, nextTask: "Fertilization", dueDate: "Mar 15", priority: "Low" },
    { id: 4, name: "Soybean Plot", variety: "Roundup Ready", stage: "Germination", health: 85, nextTask: "Monitoring", dueDate: "Mar 18", priority: "Medium" },
  ];

  const recentActivities = [
    { id: 1, action: "Uploaded field photos", crop: "Wheat Block A", time: "2 hours ago", type: "photo" },
    { id: 2, action: "Completed irrigation", crop: "Corn Field 3", time: "5 hours ago", type: "task" },
    { id: 3, action: "Pest report filed", crop: "Rice Paddy 2", time: "1 day ago", type: "report" },
    { id: 4, action: "Growth measurement", crop: "Soybean Plot", time: "2 days ago", type: "data" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-destructive border-destructive';
      case 'Medium': return 'text-warning border-warning';
      case 'Low': return 'text-success border-success';
      default: return 'text-muted-foreground';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'photo': return <Camera className="h-4 w-4" />;
      case 'task': return <Calendar className="h-4 w-4" />;
      case 'report': return <FileText className="h-4 w-4" />;
      case 'data': return <TrendingUp className="h-4 w-4" />;
      default: return <Sprout className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Field Operations</h2>
          <p className="text-muted-foreground">Manage your assigned crops and daily activities</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Upload Media
          </Button>
          <Button className="agricultural-gradient text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* My Crops */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>My Crops</CardTitle>
                <CardDescription>Crops assigned to your care</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crops.map((crop) => (
                <div key={crop.id} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{crop.name}</h4>
                      <p className="text-sm text-muted-foreground">{crop.variety} • {crop.stage}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getPriorityColor(crop.priority)}>
                        {crop.priority}
                      </Badge>
                      <Badge variant="secondary">
                        {crop.dueDate}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Crop Health</span>
                        <span>{crop.health}%</span>
                      </div>
                      <Progress value={crop.health} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Next Task:</span>
                      <Badge variant="outline">
                        {crop.nextTask}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest field work and reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="p-3 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.crop}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Field Conditions & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Field Conditions</CardTitle>
            <CardDescription>Current environmental conditions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-1">
                  <Droplets className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">Soil Moisture</span>
                </div>
                <p className="text-lg font-bold text-foreground">68%</p>
                <p className="text-xs text-success">Optimal</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">Temperature</span>
                </div>
                <p className="text-lg font-bold text-foreground">24°C</p>
                <p className="text-xs text-success">Good</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">Humidity</span>
                </div>
                <p className="text-lg font-bold text-foreground">72%</p>
                <p className="text-xs text-success">Normal</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">pH Level</span>
                </div>
                <p className="text-lg font-bold text-foreground">6.8</p>
                <p className="text-xs text-success">Ideal</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common field operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Camera className="mr-2 h-4 w-4" />
              Capture Field Photos
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Log Field Activity
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Droplets className="mr-2 h-4 w-4" />
              Record Irrigation
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              Submit Growth Data
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}