import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    base: '/назва-репозиторію-на-github/', // важливо для GitHub Pages
    build: {
      sourcemap: true,
      rollupOptions: {
        // Підключаємо всі HTML-сторінки як entry, щоб працювали partials
        input: glob.sync('./src/.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
      // Додаємо обробку .scss у HTML через assets
      assetsDir: 'assets',
      cssCodeSplit: true, // щоб CSS зберігався окремо
    },
    plugins: [injectHTML(), FullReload(['./src/**/.html'])],
    css: {
      preprocessorOptions: {
        scss: {
          // Це дозволить писати шляхи без @import "../"
          additionalData: '',
        },
      },
    },
  };
});
