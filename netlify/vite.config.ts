import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [],
  build: {
    lib: {
      entry: "./functions/gitlabCommit.ts",
      name: "...",
    },
  },
});
