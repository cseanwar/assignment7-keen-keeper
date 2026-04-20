import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Timelines from "../pages/Timeline/Timelines";
import Stats from "../pages/Stats/Stats";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import LoadingSpinner from "../components/ui/LoadingSpinner";

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
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader: () => fetch("/friends.json"),
        HydrateFallback: LoadingSpinner,
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