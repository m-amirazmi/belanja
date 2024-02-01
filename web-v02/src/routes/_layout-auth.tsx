import LayoutAuth from "@/components/layout-auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout-auth")({
  component: LayoutAuth,
});
