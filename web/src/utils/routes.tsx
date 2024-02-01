import Layout from "components/layout";
import DashboardPage from "pages/dashboard";
import { createBrowserRouter } from "react-router-dom";
import {
  RiHomeLine,
  RiFileList2Line,
  RiFileList2Fill,
  RiPriceTagLine,
  RiHomeFill,
  RiPriceTagFill,
} from "react-icons/ri";
import RecordsPage from "pages/records";
import CategoriesPage from "pages/categories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/records",
        element: <RecordsPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
    ],
  },
]);

export const routes = [
  {
    path: "/",
    pagename: "Dashboard",
    icon: RiHomeLine,
    iconSelected: RiHomeFill,
  },
  {
    path: "/records",
    pagename: "Records",
    icon: RiFileList2Line,
    iconSelected: RiFileList2Fill,
  },
  {
    path: "/categories",
    pagename: "Categories",
    icon: RiPriceTagLine,
    iconSelected: RiPriceTagFill,
  },
];
