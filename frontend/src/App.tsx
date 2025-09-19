import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { LoginForm } from "@/components/auth/LoginForm";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { AgronomistDashboard } from "@/components/dashboard/AgronomistDashboard";
import { AnalyticsDashboard } from "@/components/dashboard/AnalyticsDashboard";
import { BusinessDashboard } from "@/components/dashboard/BusinessDashboard";
import { DevelopmentDashboard } from "@/components/dashboard/DevelopmentDashboard";
import { ManagerDashboard } from "@/components/dashboard/ManagerDashboard";
import { SuperAdminDashboard } from "@/components/dashboard/SuperAdminDashboard";
import { SupportDashboard } from "@/components/dashboard/SupportDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />

            {/* Dashboard Routes */}
            <Route path="/agronomist" element={
              <ProtectedRoute>
                <AgronomistDashboard />
              </ProtectedRoute>
            } />

            <Route path="/analytics" element={
              <ProtectedRoute>
                <AnalyticsDashboard />
              </ProtectedRoute>
            } />

            <Route path="/business" element={
              <ProtectedRoute>
                <BusinessDashboard />
              </ProtectedRoute>
            } />

            <Route path="/development" element={
              <ProtectedRoute>
                <DevelopmentDashboard />
              </ProtectedRoute>
            } />

            <Route path="/manager" element={
              <ProtectedRoute>
                <ManagerDashboard />
              </ProtectedRoute>
            } />

            <Route path="/superadmin" element={
              <ProtectedRoute>
                <SuperAdminDashboard />
              </ProtectedRoute>
            } />

            <Route path="/support" element={
              <ProtectedRoute>
                <SupportDashboard />
              </ProtectedRoute>
            } />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
