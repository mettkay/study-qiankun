import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-app',
  server: {
    port: 3001,
    cors: true,
    origin:'//localhost:3001'
  },
  plugins: [vue(), qiankun('vue-app', {
    useDevMode: true
  })]
})
