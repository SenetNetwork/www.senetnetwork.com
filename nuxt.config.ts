// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: `${process.env.npm_package_name} - ${process.env.npm_package_description}` || '',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || ''
        }
      ],
    },
  },
  css: [
    '@/assets/fonts/fonts.css',
    '@/assets/css/variables.css',
    // CSS file in the project
    '@/assets/css/main.css'
  ]
})
