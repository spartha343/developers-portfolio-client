import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={5000} />
    </>
  );
}

export default App;
