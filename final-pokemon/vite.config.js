import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id, { getModuleInfo, getModuleIds }) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
