import { Outlet } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="border-b p-4 flex items-center">
        <div className="w-60 flex items-center">
          <span className="text-lg font-bold tracking-widest">BELANJA.</span>
        </div>
        <p className="text-lg">Dashboard</p>
        <div className="ml-auto flex items-center gap-2">
          <div>Avatar</div>
          <ModeToggle />
        </div>
      </div>
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
