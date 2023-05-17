// noinspection JSUnusedGlobalSymbols

import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { presetIcons, presetUno } from 'unocss'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss({
      presets: [presetUno(), presetIcons()],
    }),
    viteMockServe(),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'src/types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
