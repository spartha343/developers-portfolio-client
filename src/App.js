import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer
        autoClose={5000}
      />
    </div>
  );
}

export default App;
