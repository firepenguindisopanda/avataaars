import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The package is linked with `file:..`, so its own node_modules/react
  // (auto-installed as a peer) would otherwise load alongside the demo's,
  // giving two Reacts and an "Invalid hook call". Not an issue for a
  // published install, where the package sits inside the consumer's tree.
  resolve: { dedupe: ['react', 'react-dom'] },
})
