import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const isSsrBuild =
    (env as { ssrBuild?: boolean }).ssrBuild === true || process.env.VITE_SSR === '1';

  return {
    plugins: [react()],
    base: '/',
    build: {
      rollupOptions: {
        output: isSsrBuild
          ? undefined
          : {
              manualChunks: {
                vendor: ['react', 'react-dom'],
                router: ['react-router-dom'],
                supabase: ['@supabase/supabase-js'],
                icons: ['lucide-react']
              }
            }
      },
      cssCodeSplit: true,
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    optimizeDeps: {
      exclude: ['lucide-react']
    },
    ssr: {
      noExternal: ['react-router-dom', 'react-router']
    },
    server: env.command === 'serve'
      ? {
          headers: {
            'Cache-Control': 'no-store'
          }
        }
      : undefined
  };
});
