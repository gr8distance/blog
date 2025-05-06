// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            if (id.includes('src/templates')) {
              return 'templates';
            }
            if (id.includes('src/components')) {
              return 'components';
            }
            if (id.includes('src/pages/articles')) {
              const filename = id.split('/').pop().split('.')[0];
              return `article-${filename}`;
            }
            return null;
          }
        }
      }
    }
  },
  build: {
    format: 'file',
    inlineStylesheets: 'never'
  }
});
