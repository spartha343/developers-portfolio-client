import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build" // Specify the output directory for the production build
    // You can optionally configure other build settings here
    // For example, if you need to prefix the assets path for deployment
    // assetsDir: 'assets',
    // or if you need to configure chunk splitting or minification:
    // terserOptions: {},
    // chunkSizeWarningLimit: 500, // Adjust according to your project's needs
  }
});
