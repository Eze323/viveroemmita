// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@pinia/nuxt',
    //'@sidebase/nuxt-auth',
  ],
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI
  },
  imports: {
    dirs: ['stores']
  },
  app: {
    head: {
      title: 'Vivero Emmita',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // experimental: {
  //   viewTransition: true
  // }
})
