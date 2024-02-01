import { createRootRoute } from "@tanstack/react-router";
import Layout from "@/components/layout";
import { ThemeProvider } from "@/components/theme-provider";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout />
      </ThemeProvider>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
