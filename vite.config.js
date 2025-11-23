import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Bind to all network interfaces for Render
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Use Render's PORT or default
    strictPort: false, // Allow port fallback
    allowedHosts: [
      "craftconnect-2-0.onrender.com",
      ".onrender.com", // Allow all Render subdomains
    ],
  },
  preview: {
    host: "0.0.0.0", // Bind preview server to all interfaces
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    strictPort: false,
    allowedHosts: [
      "craftconnect-2-0.onrender.com",
      ".onrender.com", // Allow all Render subdomains
    ],
  },
  resolve: {
    alias: {
      "@": "/src", // now you can import like "@/components/..."
    },
  },
});
