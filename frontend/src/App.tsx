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
import { Agronomist } from "@/components/dashboard/AgronomistDashboard";
import { Analytics } from "@/components/dashboard/AnalyticsDashboard";
import { Business } from "@/components/dashboard/BusinessDashboard";
import { Development } from "@/components/dashboard/DevelopmentDashboard";
import { Manager } from "@/components/dashboard/ManagerDashboard";
import { SuperAdmin } from "@/components/dashboard/SuperAdminDashboard";
import { Support } from "@/components/dashboard/SupportDashboard";

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
                <Agronomist />
              </ProtectedRoute>
            } />

            <Route path="/analytics" element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            } />

            <Route path="/business" element={
              <ProtectedRoute>
                <Business />
              </ProtectedRoute>
            } />

            <Route path="/development" element={
              <ProtectedRoute>
                <Development />
              </ProtectedRoute>
            } />

            <Route path="/manager" element={
              <ProtectedRoute>
                <Manager />
              </ProtectedRoute>
            } />

            <Route path="/superadmin" element={
              <ProtectedRoute>
                <SuperAdmin />
              </ProtectedRoute>
            } />

            <Route path="/support" element={
              <ProtectedRoute>
                <Support />
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
