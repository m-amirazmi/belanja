import { Outlet } from "@tanstack/react-router";

export default function LayoutAuth() {
  return (
    <div className="flex h-screen w-screen bg-slate-900">
      <div className="flex-1 bg-slate-900 p-4">
        <span className="text-lg font-bold tracking-widest text-[#f8fafc]">
          BELANJA.
        </span>
      </div>
      <div className="flex-1 bg-background">
        <div className="flex flex-col h-full items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
