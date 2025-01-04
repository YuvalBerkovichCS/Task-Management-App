import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Proxy API requests to backend
    },
  },
  plugins: [react()],
});
