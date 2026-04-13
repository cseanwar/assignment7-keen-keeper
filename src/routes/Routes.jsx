import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Timelines from "../pages/Timeline/Timelines";
import Stats from "../pages/Stats/Stats";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timelines />,
      },
      {
        path: "/stats",
        element: <Stats />,
      }
    ],
    errorElement: <ErrorPage />
  },
]);