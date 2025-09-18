import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Code, Server, Database, Activity, TrendingUp, GitBranch,
  Plus, MoreHorizontal, Filter, RefreshCw
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

export function DevelopmentDashboard() {
  const metrics = [
    { title: "Active Deployments", value: "8", change: "+2 this week", trend: 'up' as const, icon: Server },
    { title: "API Calls Today", value: "24.7K", change: "+15% from yesterday", trend: 'up' as const, icon: Database },
    { title: "System Uptime", value: "99.9%", change: "Stable performance", trend: 'up' as const, icon: Activity },
    { title: "Code Commits", value: "156", change: "+23 this week", trend: 'up' as const, icon: Code },
  ];

  const deployments = [
    { id: 1, name: "Production API v2.4.1", environment: "Production", status: "Running", health: 98, uptime: "15 days", lastDeploy: "Mar 1" },
    { id: 2, name: "Staging Platform v2.5.0", environment: "Staging", status: "Running", health: 95, uptime: "3 days", lastDeploy: "Mar 13" },
    { id: 3, name: "Development Build", environment: "Development", status: "Deploying", health: 85, uptime: "2 hours", lastDeploy: "Today" },
    { id: 4, name: "Test Environment", environment: "Testing", status: "Healthy", health: 92, uptime: "8 days", lastDeploy: "Mar 8" },
  ];

  const apiEndpoints = [
    { endpoint: "/api/crops", requests: "8.2K", avgResponse: "142ms", errors: "0.02%", status: "Healthy" },
    { endpoint: "/api/users", requests: "5.7K", avgResponse: "89ms", errors: "0.01%", status: "Healthy" },
    { endpoint: "/api/notifications", requests: "12.3K", avgResponse: "234ms", errors: "0.08%", status: "Warning" },
    { endpoint: "/api/reports", requests: "3.1K", avgResponse: "567ms", errors: "0.05%", status: "Healthy" },
  ];

  const systemLogs = [
    { id: 1, level: "INFO", message: "Database backup completed successfully", service: "backup-service", time: "5 min ago" },
    { id: 2, level: "WARN", message: "High memory usage detected", service: "api-gateway", time: "12 min ago" },
    { id: 3, level: "INFO", message: "New deployment started", service: "deployment-manager", time: "1 hour ago" },
    { id: 4, level: "ERROR", message: "Rate limit exceeded for user endpoint", service: "rate-limiter", time: "2 hours ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running': case 'Healthy': return 'text-success border-success';
      case 'Warning': return 'text-warning border-warning';
      case 'Deploying': return 'text-accent border-accent';
      case 'Error': return 'text-destructive border-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'INFO': return 'text-accent';
      case 'WARN': return 'text-warning';
      case 'ERROR': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Development Console</h2>
          <p className="text-muted-foreground">Monitor system health and manage deployments</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button className="agricultural-gradient text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Deploy
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
        {/* Active Deployments */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Active Deployments</CardTitle>
                <CardDescription>Current environment status and health</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deployments.map((deployment) => (
                <div key={deployment.id} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{deployment.name}</h4>
                      <p className="text-sm text-muted-foreground">{deployment.environment} • Last deploy: {deployment.lastDeploy}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getStatusColor(deployment.status)}>
                        {deployment.status}
                      </Badge>
                      <Badge variant="secondary">
                        {deployment.uptime}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Health Score</span>
                      <span>{deployment.health}%</span>
                    </div>
                    <Progress value={deployment.health} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Logs */}
        <Card>
          <CardHeader>
            <CardTitle>System Logs</CardTitle>
            <CardDescription>Recent system events and alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemLogs.map((log) => (
              <div key={log.id} className="p-3 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    log.level === 'INFO' ? 'bg-accent' :
                    log.level === 'WARN' ? 'bg-warning' : 'bg-destructive'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className={getLogLevelColor(log.level)}>
                        {log.level}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{log.service}</span>
                    </div>
                    <p className="text-sm text-foreground">{log.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{log.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* API Performance & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>API Performance</CardTitle>
            <CardDescription>Endpoint metrics and health status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {apiEndpoints.map((api, index) => (
              <div key={index} className="p-3 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                    {api.endpoint}
                  </code>
                  <Badge variant="outline" className={getStatusColor(api.status)}>
                    {api.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Requests</p>
                    <p className="font-medium">{api.requests}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg Response</p>
                    <p className="font-medium">{api.avgResponse}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Error Rate</p>
                    <p className="font-medium">{api.errors}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Development and deployment tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <GitBranch className="mr-2 h-4 w-4" />
              Create New Branch
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Server className="mr-2 h-4 w-4" />
              Deploy to Staging
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Database className="mr-2 h-4 w-4" />
              Run Database Migration
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Activity className="mr-2 h-4 w-4" />
              View System Metrics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}