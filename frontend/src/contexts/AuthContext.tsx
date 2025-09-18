import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'super-admin' | 'manager' | 'agronomist' | 'support' | 'development' | 'business' | 'analytics';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  permissions: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  switchRole: (role: UserRole) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth state
    const storedUser = localStorage.getItem('farmingPlatformUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: 'user-1',
      name: 'John Agricultural',
      email,
      phone: '+1 (555) 123-4567',
      role,
      avatar: '/api/placeholder/40/40',
      permissions: getPermissionsByRole(role)
    };
    
    setUser(mockUser);
    localStorage.setItem('farmingPlatformUser', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('farmingPlatformUser');
  };

  const switchRole = (role: UserRole) => {
    if (user) {
      const updatedUser = {
        ...user,
        role,
        permissions: getPermissionsByRole(role)
      };
      setUser(updatedUser);
      localStorage.setItem('farmingPlatformUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

function getPermissionsByRole(role: UserRole): string[] {
  const permissions: Record<UserRole, string[]> = {
    'super-admin': ['*'], // All permissions
    'manager': ['crops.read', 'crops.write', 'teams.manage', 'notifications.send', 'analytics.view'],
    'agronomist': ['crops.read', 'crops.write', 'tasks.manage', 'media.upload', 'reports.create'],
    'support': ['tickets.manage', 'crops.read', 'users.view', 'notifications.send'],
    'development': ['system.config', 'apis.manage', 'logs.view', 'deployments.manage'],
    'business': ['plans.manage', 'invoices.view', 'clients.manage', 'revenue.analytics'],
    'analytics': ['reports.advanced', 'data.export', 'filters.advanced', 'dashboards.custom']
  };
  
  return permissions[role] || [];
}