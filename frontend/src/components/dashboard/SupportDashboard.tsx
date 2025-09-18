import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Ticket, MessageCircle, Clock, CheckCircle, TrendingUp, Users,
  Plus, MoreHorizontal, Filter, Search
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

export function SupportDashboard() {
  const metrics = [
    { title: "Open Tickets", value: "23", change: "-12% from yesterday", trend: 'up' as const, icon: Ticket },
    { title: "Avg Response Time", value: "2.4h", change: "-15% improvement", trend: 'up' as const, icon: Clock },
    { title: "Resolved Today", value: "18", change: "+25% from yesterday", trend: 'up' as const, icon: CheckCircle },
    { title: "Customer Rating", value: "4.8", change: "+0.2 this month", trend: 'up' as const, icon: MessageCircle },
  ];

  const tickets = [
    { id: 1, title: "Crop data sync issue", user: "John Farmer", priority: "High", status: "Open", time: "2 hours ago", category: "Technical" },
    { id: 2, title: "Payment processing error", user: "Sarah Agri", priority: "Critical", status: "In Progress", time: "4 hours ago", category: "Billing" },
    { id: 3, title: "Mobile app login problem", user: "Mike Johnson", priority: "Medium", status: "Open", time: "6 hours ago", category: "Account" },
    { id: 4, title: "Report generation failed", user: "Lisa Chen", priority: "Medium", status: "Pending", time: "1 day ago", category: "Technical" },
  ];

  const knowledgeBase = [
    { id: 1, title: "How to sync crop data", category: "Technical", views: 234, updated: "2 days ago" },
    { id: 2, title: "Subscription management guide", category: "Billing", views: 189, updated: "1 week ago" },
    { id: 3, title: "Mobile app troubleshooting", category: "Account", views: 156, updated: "3 days ago" },
    { id: 4, title: "Report generation tutorial", category: "Technical", views: 145, updated: "5 days ago" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'text-destructive border-destructive bg-destructive/10';
      case 'High': return 'text-warning border-warning bg-warning/10';
      case 'Medium': return 'text-accent border-accent bg-accent/10';
      case 'Low': return 'text-success border-success bg-success/10';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-destructive border-destructive';
      case 'In Progress': return 'text-warning border-warning';
      case 'Pending': return 'text-accent border-accent';
      case 'Resolved': return 'text-success border-success';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Support Center</h2>
          <p className="text-muted-foreground">Help users and resolve technical issues</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Search className="mr-2 h-4 w-4" />
            Search KB
          </Button>
          <Button className="agricultural-gradient text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Ticket
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
        {/* Active Tickets */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Active Tickets</CardTitle>
                <CardDescription>Support requests requiring attention</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        #{ticket.id}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{ticket.title}</h4>
                        <p className="text-sm text-muted-foreground">by {ticket.user} • {ticket.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      {ticket.category}
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
            <CardDescription>Your support metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Resolution Rate</span>
                <span>94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Customer Satisfaction</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>First Response Goal</span>
                <span>89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-medium mb-3">This Week</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tickets Resolved</span>
                  <span className="font-medium">67</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Avg Response Time</span>
                  <span className="font-medium">1.8h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Customer Feedback</span>
                  <span className="font-medium">4.9/5</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Knowledge Base & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Knowledge Base</CardTitle>
            <CardDescription>Most accessed help articles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {knowledgeBase.map((article) => (
              <div key={article.id} className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">{article.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.views} views</span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{article.updated}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common support operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Ticket className="mr-2 h-4 w-4" />
              Create New Ticket
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageCircle className="mr-2 h-4 w-4" />
              Send Notification
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              View User Details
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Search Knowledge Base
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}