
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./layout/HomePage";
import AuthCheck from "./layout/common/AuthCheck";
import { lazy, Suspense } from 'react';
import Loader from "./layout/common/Loader";


const Login = lazy(() => import('./layout/Login'));
const Dashboard = lazy(() => import("./layout/Dashboard"));
const TeacherDashboard = lazy(() => import("./layout/TeacherDashboard"));
const HwDetails = lazy(() => import("./layout/common/HomeWork/HwDetails"))


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/homeworks/detail/:hwId",
      element: <Suspense fallback={<Loader />} >
        <HwDetails />
      </Suspense>,
    },
    {
      path: "/login",
      element: <AuthCheck>
        <Suspense fallback={<Loader />} >
          <Login />
        </Suspense>
      </AuthCheck>,
    },
    {
      path: "/dashboard",
      element: <AuthCheck>
        <Suspense fallback={<Loader />}>
          <Dashboard />
        </Suspense>
      </AuthCheck>,
    },
    {
      path: "/dashboard/teachers",
      element: <AuthCheck>
        <Suspense fallback={<Loader />}>
          <TeacherDashboard />
        </Suspense>
      </AuthCheck>,
    },
  ]);

  return (

    <RouterProvider router={router} />

  )
}

export default App
