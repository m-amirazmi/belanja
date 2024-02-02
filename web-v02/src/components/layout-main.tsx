import { Outlet, useNavigate } from "@tanstack/react-router";
import Header from "./header";
import Sidebar from "./sidebar";
import useAuthStore from "@/store/auth-store";
import { useEffect } from "react";

export default function LayoutMain() {
  const { isAuthenticate } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticate) navigate({ to: "/login" });
  }, [isAuthenticate, navigate]);

  if (!isAuthenticate) return null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
