import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Vite 서버의 포트 설정
    proxy: {
      '/auth': { // 백엔드의 경로 (/auth/register 등)와 일치하는 프록시 설정
        target: 'http://localhost:3000', // 백엔드 서버 주소
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
