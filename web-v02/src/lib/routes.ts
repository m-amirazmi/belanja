import {
  HiOutlineCircleStack,
  HiOutlineBookmark,
  HiOutlineHome,
} from "react-icons/hi2";

export const routes = [
  { path: "/", page: "Dashboard", icon: HiOutlineHome },
  { path: "/records", page: "Records", icon: HiOutlineCircleStack },
  { path: "/categories", page: "Categories", icon: HiOutlineBookmark },
];
