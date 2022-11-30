// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '@/assets/fonts/fonts.css',
    '@/assets/css/variables.css',
    // CSS file in the project
    '@/assets/css/main.css'
  ]
})
