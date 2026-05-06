import { defineConfig } from "vite";
import { resolve } from "path";
import Inspect from "vite-plugin-inspect";
import injectHTML from "vite-plugin-html-inject";
export default defineConfig({
  plugins: [[Inspect()], [injectHTML()]],
  base: "",
  build: {
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        404: resolve("404.html"),
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        sequences: true,
        conditionals: true,
        booleans: true,
        unused: true,
        dead_code: true,
        collapse_vars: true,
        reduce_vars: true,
        inline: true,
      },
      format: {
        comments: false,
      },
    },
  },
});
