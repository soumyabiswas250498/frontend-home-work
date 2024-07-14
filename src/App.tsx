
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./layout/HomePage";
import Login from "./layout/Login";
import Dashboard from "./layout/Dashboard";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return (

    <RouterProvider router={router} />

  )
}

export default App
