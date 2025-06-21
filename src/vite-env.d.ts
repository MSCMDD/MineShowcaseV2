/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 声明全局变量
declare global {
  interface Window {
    marked: any;
    $: any;
    jQuery: any;
  }

  // 全局jQuery和marked
  const $: any;
  const jQuery: any;
  const marked: any;
}
