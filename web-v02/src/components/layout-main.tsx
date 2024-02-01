import { Outlet } from "@tanstack/react-router";
import Header from "./header";
import Sidebar from "./sidebar";

export default function LayoutMain() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
