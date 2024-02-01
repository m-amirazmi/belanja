import {
  HiOutlineCircleStack,
  HiOutlineBookmark,
  HiOutlineHome,
} from "react-icons/hi2";

export const routes = [
  { isAuth: false, path: "/", page: "Dashboard", icon: HiOutlineHome },
  {
    isAuth: false,
    path: "/records",
    page: "Records",
    icon: HiOutlineCircleStack,
  },
  {
    isAuth: false,
    path: "/categories",
    page: "Categories",
    icon: HiOutlineBookmark,
  },
  { isAuth: true, path: "/login", page: "Login", icon: HiOutlineBookmark },
];
