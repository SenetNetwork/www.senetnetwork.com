// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'
export default defineNuxtConfig({
  ssr: false,
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url))
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Senet - The next generation of games',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || ''
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }]
    }
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/fonts/fonts.css',
    '@/assets/css/variables.css',
    // CSS file in the project
    '@/assets/css/main.css'
  ]
})
