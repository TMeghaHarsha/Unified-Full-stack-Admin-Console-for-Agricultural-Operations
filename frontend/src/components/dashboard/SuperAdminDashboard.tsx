import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, Sprout, CreditCard, Bell, TrendingUp, AlertTriangle,
  Plus, MoreHorizontal, Filter, Download
} from "lucide-react";
import { useState } from "react";

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

export function SuperAdminDashboard() {
  const [filter, setFilter] = useState('all');

  const metrics = [
    { title: "Total Users", value: "12,847", change: "+12.5% from last month", trend: 'up' as const, icon: Users },
    { title: "Active Crops", value: "3,249", change: "+8.2% from last month", trend: 'up' as const, icon: Sprout },
    { title: "Subscriptions", value: "1,892", change: "+23.1% from last month", trend: 'up' as const, icon: CreditCard },
    { title: "Notifications Sent", value: "45,123", change: "-2.4% from last month", trend: 'down' as const, icon: Bell },
  ];

  const recentUsers = [
    { id: 1, name: "John Farmer", email: "john@farm.com", role: "Agronomist", status: "Active", joinDate: "2024-01-15" },
    { id: 2, name: "Sarah Manager", email: "sarah@agri.com", role: "Manager", status: "Active", joinDate: "2024-01-14" },
    { id: 3, name: "Mike Support", email: "mike@help.com", role: "Support", status: "Pending", joinDate: "2024-01-13" },
    { id: 4, name: "Lisa Analytics", email: "lisa@data.com", role: "Analytics", status: "Active", joinDate: "2024-01-12" },
  ];

  const systemAlerts = [
    { id: 1, message: "Database backup completed successfully", type: "success", time: "2 minutes ago" },
    { id: 2, message: "High CPU usage detected on server 3", type: "warning", time: "15 minutes ago" },
    { id: 3, message: "New user registration spike detected", type: "info", time: "1 hour ago" },
  ];

  const getRoleBadgeClass = (role: string) => {
    const classes: Record<string, string> = {
      'Agronomist': 'role-badge-agronomist',
      'Manager': 'role-badge-manager',
      'Support': 'role-badge-support',
      'Analytics': 'role-badge-analytics',
    };
    return classes[role] || 'bg-muted';
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">System Overview</h2>
          <p className="text-muted-foreground">Manage your farming platform with complete administrative control</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="agricultural-gradient text-white">
            <Plus className="mr-2 h-4 w-4" />
            Add User
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
        {/* Recent Users */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Latest user registrations and activity</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getRoleBadgeClass(user.role)}>
                      {user.role}
                    </Badge>
                    <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              System Status
            </CardTitle>
            <CardDescription>Real-time system alerts and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className="p-3 rounded-lg border border-border">
                <div className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.type === 'success' ? 'bg-success' :
                    alert.type === 'warning' ? 'bg-warning' : 'bg-accent'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Usage Statistics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Storage Usage</CardTitle>
            <CardDescription>Platform storage utilization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Database</span>
                <span>142 GB / 500 GB</span>
              </div>
              <Progress value={28} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Media Storage</span>
                <span>89 GB / 200 GB</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Backup Storage</span>
                <span>234 GB / 1 TB</span>
              </div>
              <Progress value={23} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Platform Health</CardTitle>
            <CardDescription>System performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">API Response Time</span>
              <Badge variant="outline" className="text-success border-success">
                142ms
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Server Uptime</span>
              <Badge variant="outline" className="text-success border-success">
                99.9%
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Active Connections</span>
              <Badge variant="outline">
                1,247
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Error Rate</span>
              <Badge variant="outline" className="text-success border-success">
                0.02%
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}