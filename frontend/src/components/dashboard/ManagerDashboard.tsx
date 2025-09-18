import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, Sprout, CheckCircle, AlertCircle, TrendingUp, Calendar,
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

export function ManagerDashboard() {
  const metrics = [
    { title: "Team Members", value: "24", change: "+2 this month", trend: 'up' as const, icon: Users },
    { title: "Active Projects", value: "12", change: "+3 from last month", trend: 'up' as const, icon: Sprout },
    { title: "Completed Tasks", value: "89", change: "+15% from last week", trend: 'up' as const, icon: CheckCircle },
    { title: "Pending Issues", value: "7", change: "-23% from last week", trend: 'up' as const, icon: AlertCircle },
  ];

  const teamMembers = [
    { id: 1, name: "John Agronomist", role: "Agronomist", projects: 3, performance: 92, status: "Active" },
    { id: 2, name: "Sarah Field", role: "Agronomist", projects: 2, performance: 88, status: "Active" },
    { id: 3, name: "Mike Support", role: "Support", projects: 1, performance: 95, status: "Active" },
    { id: 4, name: "Lisa Data", role: "Analytics", projects: 4, performance: 90, status: "Leave" },
  ];

  const projects = [
    { id: 1, name: "Wheat Season 2024", region: "North Region", progress: 85, status: "On Track", dueDate: "Mar 15" },
    { id: 2, name: "Corn Optimization", region: "South Region", progress: 60, status: "On Track", dueDate: "Apr 20" },
    { id: 3, name: "Rice Monitoring", region: "East Region", progress: 95, status: "Nearly Complete", dueDate: "Feb 28" },
    { id: 4, name: "Soybean Analysis", region: "West Region", progress: 45, status: "Behind", dueDate: "May 10" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Track': return 'text-success border-success';
      case 'Nearly Complete': return 'text-accent border-accent';
      case 'Behind': return 'text-destructive border-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Farm Operations</h2>
          <p className="text-muted-foreground">Oversee team performance and project progress</p>
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
            New Project
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
        {/* Active Projects */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Current farm projects and their progress</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">{project.region}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge variant="secondary">
                        <Calendar className="mr-1 h-3 w-3" />
                        {project.dueDate}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <CardDescription>Individual team member metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="p-3 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
                    {member.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Performance</span>
                    <span>{member.performance}%</span>
                  </div>
                  <Progress value={member.performance} className="h-1.5" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{member.projects} active projects</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Resource Overview */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resource Allocation</CardTitle>
            <CardDescription>Team and equipment utilization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Team Utilization</span>
                <span>87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Equipment Usage</span>
                <span>72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Budget Allocation</span>
                <span>94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest team updates and milestones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Wheat project milestone reached</span>
              <Badge variant="outline" className="text-success border-success">
                Complete
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">New team member onboarded</span>
              <Badge variant="outline">
                Today
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Equipment maintenance scheduled</span>
              <Badge variant="outline" className="text-warning border-warning">
                Pending
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Monthly review completed</span>
              <Badge variant="outline" className="text-success border-success">
                Complete
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}