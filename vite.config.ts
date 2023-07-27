import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import styleImport, { AntdResolve } from 'vite-plugin-style-import'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // styleImport({ 
    //   resolves: [
    //     AntdResolve()// antd 样式按需引入还需要引入less@2.7.1
    //   ] 
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
