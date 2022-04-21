export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mad Hare Society | Exclusively on Crypto.com/NFT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'description', content: 'Mad Hare Society: The most anticipated drop of 2022. The Mad Hares journey has just begun. Should we be afraid?' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'facebook-domain-verification', content: 'za64ix2a8c7ekabon6j8vjpw36uxcf' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { 'data-n-head': 'ssr', rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Urbanist:400,600,700' }
    ],
    script: [
      {
        hid: 'facebook-pixel-code',
        src: '/fb.js'
      }
    ],
    noscript: [
      {
        hid: 'facebook-pixel-code-noscript',
        innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=844032102956173&ev=PageView&noscript=1" />'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  axios: {
    credentials: true,
    baseURL: 'https://api.madharesociety.com',
    https: true
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['portal-vue/nuxt', '@nuxtjs/axios',],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
