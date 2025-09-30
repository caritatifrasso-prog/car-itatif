import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ remplace 'ton-utilisateur' et 'ton-repo' par tes infos GitHub
export default defineConfig({
  plugins: [react()],
  base: '/car-itatif/', 
})
________________________________________
3. tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#e50914",
        black: "#000000",
        white: "#ffffff",
      }
    },
  },
  plugins: [],
}
