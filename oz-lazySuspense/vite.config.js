import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Option 2: Function form for more dynamic control (e.g., all node_modules)
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Bundle all node_modules into a 'vendor' chunk
          }
        },
      },
    },
  },
});
