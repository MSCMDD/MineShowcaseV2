import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    rollupOptions: {
      //自定义底层的 Rollup 打包配置
      input: {
        app: resolve("", "index.html"),
      },
    },
  },
});

function resolve(folder: String, dir: String) {
  return folder + "/" + dir;
}
