import useInitialPageName from "@/hooks/use-initial-page-name";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout-main/records")({
  component: Records,
});

function Records() {
  useInitialPageName("Records");
  return <div>This is records page</div>;
}
