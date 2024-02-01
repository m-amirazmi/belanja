import LayoutMain from "@/components/layout-main";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout-main")({
  component: LayoutMain,
});
