import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/homePage";
import MainLayout from "./Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/report/:reportId",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
