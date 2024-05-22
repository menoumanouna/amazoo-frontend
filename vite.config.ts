import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

/**
 * @see https://vitejs.dev/config/
 *
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env": JSON.stringify(env),
    },
    plugins: [
      react(),
    ],
    build: {
      target: "esnext",
    },
  };
});
