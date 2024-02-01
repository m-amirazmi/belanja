import { Link, Outlet } from "@tanstack/react-router";

export default function LayoutAuth() {
  return (
    <div>
      <Link to="/">Login</Link>
      <Outlet />
    </div>
  );
}
