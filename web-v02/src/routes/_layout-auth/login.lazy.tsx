import { Card } from "@/components/ui/card";
import useInitialPageName from "@/hooks/use-initial-page-name";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout-auth/login")({
  component: Login,
});

function Login() {
  useInitialPageName("Login");
  return <Card>THis is login page</Card>;
}
