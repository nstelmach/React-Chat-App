/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/React-Chat-App/",
  test: {
    include: ["**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
  },
});
