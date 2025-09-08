import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const showSuccess = () => {
    toast.success('Message');
  };

  return (
    <div>
      <button onClick={showSuccess} className="px-4 py-2 bg-blue-500 text-white">
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default Toast;