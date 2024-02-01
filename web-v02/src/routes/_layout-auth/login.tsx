import useInitialPageName from "@/hooks/use-initial-page-name";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout-auth/login")({
  component: Login,
});

function Login() {
  useInitialPageName("Login");
  return <>THis is login page</>;
}
