
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./layout/HomePage";
import Login from "./layout/Login";
import Dashboard from "./layout/Dashboard";
import AuthCheck from "./layout/common/AuthCheck";
import TeacherDashboard from "./layout/TeacherDashboard";
import HwDetails from "./layout/common/HomeWork/HwDetails";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/homeworks/detail/:hwId",  // Corrected route parameter
      element: <HwDetails />,
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
    {
      path: "/dashboard/teachers",
      element: <AuthCheck>
        <TeacherDashboard />
      </AuthCheck>,
    },
  ]);

  return (

    <RouterProvider router={router} />

  )
}

export default App
