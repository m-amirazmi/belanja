import useInitialPageName from "@/hooks/use-initial-page-name";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/categories")({
  component: Categories,
});

function Categories() {
  useInitialPageName("Categories");
  return <div>This is category page</div>;
}
