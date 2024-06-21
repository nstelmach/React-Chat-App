/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],

  // @ts-ignore
  test: {
    include: ["**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
  },
});
