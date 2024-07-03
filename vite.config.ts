import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: "/button/",
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }]
  }
});
