import useInitialPageName from "@/hooks/use-initial-page-name";
import LoginPage from "@/pages/login";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout-auth/login")({
  component: Login,
});

function Login() {
  useInitialPageName("Login");
  return <LoginPage />;
}
