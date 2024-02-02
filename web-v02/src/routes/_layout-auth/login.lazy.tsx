import LoginPage from "@/pages/login";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout-auth/login")({
  component: LoginPage,
});
