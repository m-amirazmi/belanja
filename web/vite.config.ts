import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(root, "components"),
      pages: resolve(root, "pages"),
      utils: resolve(root, "utils"),
    },
  },
});
