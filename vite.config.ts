import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './packages'),
      '@components': path.resolve(__dirname, './packages/components'),
      '@utils': path.resolve(__dirname, './packages/utils'),
    },
  },
  build: {
    outDir: 'dist', //输出文件名称
    lib: {
      entry: 'packages/index.js',
      name: 'gy-element',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
  },
})
