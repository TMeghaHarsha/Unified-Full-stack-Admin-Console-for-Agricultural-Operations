import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SuperAdminDashboard } from "@/components/dashboard/SuperAdminDashboard";
import { ManagerDashboard } from "@/components/dashboard/ManagerDashboard";
import { AgronomistDashboard } from "@/components/dashboard/AgronomistDashboard";
import { SupportDashboard } from "@/components/dashboard/SupportDashboard";
import { DevelopmentDashboard } from "@/components/dashboard/DevelopmentDashboard";
import { BusinessDashboard } from "@/components/dashboard/BusinessDashboard";
import { AnalyticsDashboard } from "@/components/dashboard/AnalyticsDashboard";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const getDashboardComponent = () => {
    switch (user.role) {
      case 'super-admin':
        return <SuperAdminDashboard />;
      case 'manager':
        return <ManagerDashboard />;
      case 'agronomist':
        return <AgronomistDashboard />;
      case 'support':
        return <SupportDashboard />;
      case 'development':
        return <DevelopmentDashboard />;
      case 'business':
        return <BusinessDashboard />;
      case 'analytics':
        return <AnalyticsDashboard />;
      default:
        return <SuperAdminDashboard />;
    }
  };

  const getDashboardTitle = () => {
    const titles: Record<string, string> = {
      'super-admin': 'Super Admin Dashboard',
      'manager': 'Manager Dashboard',
      'agronomist': 'Agronomist Dashboard',
      'support': 'Support Dashboard',
      'development': 'Development Dashboard',
      'business': 'Business Dashboard',
      'analytics': 'Analytics Dashboard'
    };
    return titles[user.role] || 'Dashboard';
  };

  const getDashboardSubtitle = () => {
    const subtitles: Record<string, string> = {
      'super-admin': 'Complete system control and management',
      'manager': 'Farm oversight and team performance',
      'agronomist': 'Field expertise and crop management',
      'support': 'Customer service and troubleshooting',
      'development': 'System development and maintenance',
      'business': 'Commercial and subscription management',
      'analytics': 'Data analysis and reporting'
    };
    return subtitles[user.role] || '';
  };

  return (
    <DashboardLayout 
      title={getDashboardTitle()}
      subtitle={getDashboardSubtitle()}
    >
      {getDashboardComponent()}
    </DashboardLayout>
  );
};


export default Index;
