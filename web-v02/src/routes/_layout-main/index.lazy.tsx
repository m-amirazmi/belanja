import useInitialPageName from "@/hooks/use-initial-page-name";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout-main/")({
  component: Index,
});

function Index() {
  useInitialPageName("Dashboard");

  return (
    <div className="">
      <h3>Welcome Home!</h3>
    </div>
  );
}