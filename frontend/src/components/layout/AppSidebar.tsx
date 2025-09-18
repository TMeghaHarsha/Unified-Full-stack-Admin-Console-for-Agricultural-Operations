import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home, Sprout, CreditCard, Bell, BarChart3, Users, Settings, User,
  UsersRound, Clipboard, Image, FileText, Ticket, Database, Activity,
  DollarSign, FileBarChart, Wrench, Code
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";

interface SidebarItem {
  title: string;
  url: string;
  icon: React.ComponentType<any>;
  roles: UserRole[];
}

const sidebarItems: SidebarItem[] = [
  { title: "Dashboard", url: "/", icon: Home, roles: ['super-admin', 'manager', 'agronomist', 'support', 'development', 'business', 'analytics'] },
  { title: "Crops", url: "/crops", icon: Sprout, roles: ['super-admin', 'manager', 'agronomist', 'support'] },
  { title: "Subscriptions", url: "/subscriptions", icon: CreditCard, roles: ['super-admin', 'business'] },
  { title: "Teams", url: "/teams", icon: UsersRound, roles: ['super-admin', 'manager'] },
  { title: "Tasks", url: "/tasks", icon: Clipboard, roles: ['agronomist', 'manager'] },
  { title: "Media", url: "/media", icon: Image, roles: ['agronomist'] },
  { title: "Tickets", url: "/tickets", icon: Ticket, roles: ['support', 'super-admin'] },
  { title: "Knowledge Base", url: "/knowledge", icon: FileText, roles: ['support'] },
  { title: "Deployments", url: "/deployments", icon: Code, roles: ['development'] },
  { title: "APIs", url: "/apis", icon: Database, roles: ['development'] },
  { title: "System Logs", url: "/logs", icon: Activity, roles: ['development', 'super-admin'] },
  { title: "Plans", url: "/plans", icon: DollarSign, roles: ['business', 'super-admin'] },
  { title: "Invoices", url: "/invoices", icon: FileBarChart, roles: ['business'] },
  { title: "Clients", url: "/clients", icon: Users, roles: ['business', 'super-admin'] },
  { title: "Reports", url: "/reports", icon: BarChart3, roles: ['analytics', 'super-admin'] },
  { title: "Notifications", url: "/notifications", icon: Bell, roles: ['super-admin', 'manager', 'agronomist', 'support', 'business'] },
  { title: "Analytics", url: "/analytics", icon: BarChart3, roles: ['super-admin', 'manager', 'analytics'] },
  { title: "Users", url: "/users", icon: Users, roles: ['super-admin'] },
  { title: "Settings", url: "/settings", icon: Settings, roles: ['super-admin', 'manager', 'agronomist', 'support', 'development', 'business', 'analytics'] },
  { title: "Profile", url: "/profile", icon: User, roles: ['super-admin', 'manager', 'agronomist', 'support', 'development', 'business', 'analytics'] },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-primary font-medium" : "hover:bg-sidebar-accent/50";

  // Filter items based on user role
  const filteredItems = sidebarItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  const getRoleColor = (role: UserRole) => {
    const colors: Record<UserRole, string> = {
      'super-admin': 'role-badge-super-admin',
      'manager': 'role-badge-manager',
      'agronomist': 'role-badge-agronomist',
      'support': 'role-badge-support',
      'development': 'role-badge-support',
      'business': 'role-badge-business',
      'analytics': 'role-badge-analytics'
    };
    return colors[role];
  };

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg agricultural-gradient flex items-center justify-center text-white font-bold">
              F
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <h2 className="font-semibold text-sidebar-foreground">FarmPlatform</h2>
                {user && (
                  <Badge className={`text-xs px-2 py-0.5 ${getRoleColor(user.role)}`}>
                    {user.role.replace('-', ' ').toUpperCase()}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup className="flex-1">
          <SidebarGroupLabel className="text-sidebar-foreground/70 px-4 py-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2">
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-5 h-5 shrink-0" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Profile */}
        {user && (
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                {user.name.charAt(0)}
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-sidebar-foreground truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-sidebar-foreground/70 truncate">
                    {user.email}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}