import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/records")({
  component: Records,
});

function Records() {
  return <div>This is records page</div>;
}
