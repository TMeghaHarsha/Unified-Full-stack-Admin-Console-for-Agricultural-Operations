import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, PieChart, TrendingUp, Users, Eye, MousePointer,
  Plus, MoreHorizontal, Filter, Download
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

export function AnalyticsDashboard() {
  const metrics = [
    { title: "Total Page Views", value: "142K", change: "+12.5% this month", trend: 'up' as const, icon: Eye },
    { title: "Active Users", value: "8.9K", change: "+8.2% this month", trend: 'up' as const, icon: Users },
    { title: "Engagement Rate", value: "73.2%", change: "+5.8% improvement", trend: 'up' as const, icon: MousePointer },
    { title: "Data Points", value: "2.4M", change: "+23.1% this month", trend: 'up' as const, icon: BarChart3 },
  ];

  const topContent = [
    { title: "Wheat Cultivation Guide", category: "Crops", views: "12.4K", engagement: 87, trend: "+15%" },
    { title: "Pest Management Strategies", category: "Protection", views: "9.8K", engagement: 92, trend: "+8%" },
    { title: "Irrigation Best Practices", category: "Water", views: "8.2K", engagement: 79, trend: "+22%" },
    { title: "Harvest Timing Optimization", category: "Harvest", views: "6.9K", engagement: 94, trend: "+11%" },
  ];

  const userSegments = [
    { segment: "Agronomists", users: 3420, percentage: 38, growth: "+12%", color: "text-accent border-accent" },
    { segment: "Farm Managers", users: 2890, percentage: 32, growth: "+8%", color: "text-success border-success" },
    { segment: "Researchers", users: 1650, percentage: 18, growth: "+25%", color: "text-warning border-warning" },
    { segment: "Students", users: 1040, percentage: 12, growth: "+35%", color: "text-primary border-primary" },
  ];

  const reportTemplates = [
    { name: "User Engagement Report", description: "Weekly user activity and interaction metrics", lastRun: "2 days ago", frequency: "Weekly" },
    { name: "Content Performance", description: "Most viewed and shared agricultural content", lastRun: "5 days ago", frequency: "Monthly" },
    { name: "Crop Data Analytics", description: "Agricultural data trends and insights", lastRun: "1 week ago", frequency: "Bi-weekly" },
    { name: "Platform Health Metrics", description: "System performance and user satisfaction", lastRun: "3 days ago", frequency: "Daily" },
  ];

  const notificationMetrics = [
    { type: "Crop Alerts", sent: "45.2K", opened: "38.1K", clicked: "12.4K", rate: "84.3%" },
    { type: "Weather Updates", sent: "67.8K", opened: "52.3K", clicked: "8.9K", rate: "77.1%" },
    { type: "Educational Content", sent: "23.5K", opened: "19.8K", clicked: "15.2K", rate: "84.3%" },
    { type: "System Notifications", sent: "12.1K", opened: "11.8K", clicked: "3.2K", rate: "97.5%" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Analytics Overview</h2>
          <p className="text-muted-foreground">Deep insights into platform usage and performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Data
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

      {/* Content Performance & User Segments */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription>Most engaging agricultural content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topContent.map((content, index) => (
              <div key={index} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-foreground">{content.title}</h4>
                    <p className="text-sm text-muted-foreground">{content.category}</p>
                  </div>
                  <Badge variant="outline" className="text-success border-success">
                    {content.trend}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Views</p>
                    <p className="font-bold text-foreground">{content.views}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Engagement</p>
                    <div className="flex items-center gap-2">
                      <Progress value={content.engagement} className="h-2 flex-1" />
                      <span className="text-sm font-medium">{content.engagement}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Segments</CardTitle>
            <CardDescription>Platform users by role and activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {userSegments.map((segment, index) => (
              <div key={index} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-foreground">{segment.segment}</h4>
                    <p className="text-sm text-muted-foreground">{segment.users.toLocaleString()} users</p>
                  </div>
                  <Badge variant="outline" className={segment.color}>
                    {segment.growth}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Share</span>
                    <span>{segment.percentage}%</span>
                  </div>
                  <Progress value={segment.percentage} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Notification Analytics */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Notification Performance</CardTitle>
              <CardDescription>Engagement metrics for different notification types</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {notificationMetrics.map((metric, index) => (
              <div key={index} className="p-4 rounded-lg border border-border">
                <h4 className="font-medium text-foreground mb-3">{metric.type}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sent</span>
                    <span className="font-medium">{metric.sent}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Opened</span>
                    <span className="font-medium">{metric.opened}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Clicked</span>
                    <span className="font-medium">{metric.clicked}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Open Rate</span>
                      <Badge variant="outline" className="text-success border-success">
                        {metric.rate}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <CardDescription>Saved report configurations and schedules</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {reportTemplates.map((template, index) => (
            <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{template.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant="secondary">{template.frequency}</Badge>
                    <span className="text-xs text-muted-foreground">Last run: {template.lastRun}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    Run Now
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}