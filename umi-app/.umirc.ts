import { defineConfig } from "umi";

export default defineConfig({
  base: '/umi-app',
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/qiankun'],
  qiankun: {
    slave: {}
  }
});
