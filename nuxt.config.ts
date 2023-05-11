// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt', 
        '@pinia-plugin-persistedstate/nuxt',
      
    ],
    pages: true,
    plugins: [
        { src: '~plugins/quill.js', ssr: false }
      ],
})
