import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2"><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
        <li className="mb-2"><Link to="/crops" className="hover:text-gray-300">Crops</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;