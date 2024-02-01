import useInitialPageName from "@/hooks/use-initial-page-name";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout-main/categories")({
  component: Categories,
});

function Categories() {
  useInitialPageName("Categories");
  return <div>This is category page</div>;
}
