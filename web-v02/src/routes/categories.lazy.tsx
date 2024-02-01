import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/categories")({
  component: Categories,
});

function Categories() {
  return <div>This is category page</div>;
}
