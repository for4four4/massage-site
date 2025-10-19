export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/scss/_variables.scss";
            @import "~/assets/scss/_mixins.scss";
            @import "~/assets/scss/_base.scss";
          `
        }
      }
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Студия аппаратного и ручного массажа в Туле',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&family=Sofia+Sans+Condensed:wght@400;500;600;700&display=swap' }
      ]
    }
  }
})