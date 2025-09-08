import DataTable from './DataTable';
import Toast from './Toast';

const Dashboard = () => {
  const columns = [
    { header: 'Name', accessorKey: 'name' },
    { header: 'Value', accessorKey: 'value' },
  ];
  const data = [
    { name: 'Item 1', value: 10 },
    { name: 'Item 2', value: 20 },
  ];

  return (
    <div>
      <h1>Dashboard Content</h1>
      <DataTable columns={columns} data={data} />
      <Toast />
    </div>
  );
};

export default Dashboard;