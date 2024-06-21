import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  base: "/React-Chat-App/",
  test: {
    include: ["**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
  },
});
