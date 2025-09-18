import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, CreditCard, Users, TrendingUp, Calendar, FileText,
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

export function BusinessDashboard() {
  const metrics = [
    { title: "Monthly Revenue", value: "$47,249", change: "+18.2% from last month", trend: 'up' as const, icon: DollarSign },
    { title: "Active Subscriptions", value: "1,892", change: "+12.5% this month", trend: 'up' as const, icon: CreditCard },
    { title: "New Customers", value: "234", change: "+25% this month", trend: 'up' as const, icon: Users },
    { title: "Churn Rate", value: "2.4%", change: "-0.8% improvement", trend: 'up' as const, icon: TrendingUp },
  ];

  const subscriptionPlans = [
    { plan: "Basic", subscribers: 834, revenue: "$12,510", growth: "+8%", color: "text-accent border-accent" },
    { plan: "Professional", subscribers: 567, revenue: "$28,350", growth: "+15%", color: "text-success border-success" },
    { plan: "Enterprise", subscribers: 234, revenue: "$23,400", growth: "+22%", color: "text-warning border-warning" },
    { plan: "Premium", subscribers: 257, revenue: "$19,275", growth: "+31%", color: "text-primary border-primary" },
  ];

  const recentInvoices = [
    { id: "INV-2024-001", client: "Green Valley Farms", amount: "$2,450", status: "Paid", date: "Mar 15", plan: "Enterprise" },
    { id: "INV-2024-002", client: "Sunrise Agriculture", amount: "$850", status: "Pending", date: "Mar 14", plan: "Professional" },
    { id: "INV-2024-003", client: "Harvest Solutions", amount: "$1,200", status: "Paid", date: "Mar 13", plan: "Premium" },
    { id: "INV-2024-004", client: "Farm Tech Co", amount: "$450", status: "Overdue", date: "Mar 10", plan: "Basic" },
  ];

  const clients = [
    { name: "Green Valley Farms", plan: "Enterprise", revenue: "$29,400", status: "Active", renewal: "Jun 2024" },
    { name: "Sunrise Agriculture", plan: "Professional", revenue: "$10,200", status: "Active", renewal: "May 2024" },
    { name: "Harvest Solutions", plan: "Premium", revenue: "$14,400", status: "Trial", renewal: "Apr 2024" },
    { name: "Farm Tech Co", plan: "Basic", revenue: "$5,400", status: "Active", renewal: "Jul 2024" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': case 'Active': return 'text-success border-success';
      case 'Pending': case 'Trial': return 'text-warning border-warning';
      case 'Overdue': return 'text-destructive border-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Business Intelligence</h2>
          <p className="text-muted-foreground">Monitor revenue, subscriptions, and customer growth</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button className="agricultural-gradient text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Plan
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Revenue & Subscription Analysis */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Subscription Plans Performance</CardTitle>
            <CardDescription>Revenue and growth by plan type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {subscriptionPlans.map((plan, index) => (
              <div key={index} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-foreground">{plan.plan} Plan</h4>
                    <p className="text-sm text-muted-foreground">{plan.subscribers} subscribers</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{plan.revenue}</p>
                    <Badge variant="outline" className={plan.color}>
                      {plan.growth}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Market Share</span>
                    <span>{Math.round((plan.subscribers / 1892) * 100)}%</span>
                  </div>
                  <Progress value={(plan.subscribers / 1892) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
            <CardDescription>Latest billing and payment activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentInvoices.map((invoice) => (
              <div key={invoice.id} className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-foreground">{invoice.id}</p>
                    <p className="text-sm text-muted-foreground">{invoice.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{invoice.amount}</p>
                    <Badge variant="outline" className={getStatusColor(invoice.status)}>
                      {invoice.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="secondary">{invoice.plan}</Badge>
                  <span className="text-muted-foreground">{invoice.date}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Client Management */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Top Clients</CardTitle>
                <CardDescription>Highest value customers and their status</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clients.map((client, index) => (
                <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{client.name}</h4>
                        <p className="text-sm text-muted-foreground">{client.plan} Plan</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">{client.revenue}</p>
                      <Badge variant="outline" className={getStatusColor(client.status)}>
                        {client.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Renewal: {client.renewal}
                    </span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common business operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <CreditCard className="mr-2 h-4 w-4" />
              Create New Plan
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Generate Invoice
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Manage Clients
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Review
            </Button>
            
            <div className="pt-4 border-t">
              <h4 className="font-medium mb-3">Revenue Goals</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monthly Target</span>
                  <span>94%</span>
                </div>
                <Progress value={94} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Quarterly Target</span>
                  <span>87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}