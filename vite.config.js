import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    assetsInclude: ["**/*.glb", "**/*.gltf"],
    base: '/monopoly',
    server: {
        host: true,
        port: 5173,
        watch: {
            usePolling: true
        }
    }
})
