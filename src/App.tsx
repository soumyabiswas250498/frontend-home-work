
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./layout/HomePage";
import Login from "./layout/Login";
import Dashboard from "./layout/Dashboard";
import AuthCheck from "./layout/common/AuthCheck";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <AuthCheck>
        <Login />
      </AuthCheck>,
    },
    {
      path: "/dashboard",
      element: <AuthCheck>
        <Dashboard />
      </AuthCheck>,
    },
  ]);

  return (

    <RouterProvider router={router} />

  )
}

export default App
