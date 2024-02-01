import usePageStore from "@/store/page-store";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/_layout-main/about")({
  component: About,
});

function About() {
  const { setPageName } = usePageStore();

  useEffect(() => {
    setPageName("About");
  }, []);

  return <div className="p-2">Hello from About!</div>;
}
