import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Breadcrumbs from './Breadcrumbs';

const Layout = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Placeholder auth check
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;