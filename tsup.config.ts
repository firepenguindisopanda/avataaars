import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  // React MUST stay external. Inlining it puts a second React in the consumer's
  // tree, which throws the same "Element type is invalid" error this build
  // exists to eliminate.
  external: ['react', 'react-dom'],
  target: 'es2020',
})

// Note: animations.css is deliberately NOT handled here. Nothing in src/
// imports it — it is a standalone stylesheet the consumer opts into — so it is
// not in the module graph and tsup would never emit it. The `copy-styles`
// script handles it after this build. See tasks/plan.md.
