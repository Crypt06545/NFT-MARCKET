import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>THis is error</h1>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
    ],
  },
]);

export default router;
