import useInitialPageName from "@/hooks/use-initial-page-name";
import DashboardPage from "@/pages/dashboard";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout-main/")({
  component: Index,
});

function Index() {
  useInitialPageName("Dashboard");
  return <DashboardPage />;
}
