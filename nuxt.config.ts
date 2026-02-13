export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  ssr: true,
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },
})
