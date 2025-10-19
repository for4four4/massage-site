<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: 'Студия аппаратного и ручного массажа в Туле | Отдых для тела и души Тула',
  meta: [
    { name: 'description', content: 'Студия аппаратного и ручного массажа - это место, где вы можете получить максимально полезный и эффективный массаж для укрепления здоровья и красоты.' },
    { name: 'keywords', content: 'массаж, аппаратный массаж, ручной массаж, спа, спа-услуги' },
    { property: 'og:title', content: 'Студия аппаратного и ручного массажа в Туле' },
    { property: 'og:description', content: 'Студия аппаратного и ручного массажа - это место, где вы можете получить максимально полезный и эффективный массаж.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://relaxation-studio.ru/' },
    { property: 'og:image', content: 'https://relaxation-studio.ru/mainlogo.svg' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },

    // Предзагрузка критичных ресурсов
    { rel: 'preload', href: '/video-poster-optimized.webp', as: 'image' },
    { rel: 'preload', href: '/1kat-optimized.webp', as: 'image' },

    // Google Fonts с отложенной загрузкой
    {
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&family=Sofia+Sans+Condensed:wght@400;500;600;700&display=swap',
      as: 'style',
      onload: "this.onload=null;this.rel='stylesheet'"
    },

    // Fallback для шрифтов
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&family=Sofia+Sans+Condensed:wght@400;500;600;700&display=swap',
      media: 'print',
      onload: "this.media='all'"
    }
  ],

  // Убираем инлайновые скрипты - они будут загружены позже
  script: []
})

// Загружаем аналитику после полной загрузки страницы
onMounted(() => {
  setTimeout(() => {
    loadAnalytics()
  }, 4000) // Загружаем через 4 секунды
})

const loadAnalytics = () => {
  // Яндекс.Метрика
  const yaScript = document.createElement('script')
  yaScript.innerHTML = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(94045123, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true});
  `
  document.head.appendChild(yaScript)

  // Top.Mail.Ru counter
  const mailScript = document.createElement('script')
  mailScript.src = 'https://top-fwz1.mail.ru/js/code.js'
  mailScript.async = true
  document.head.appendChild(mailScript)

  // YClients widget
  const ycScript = document.createElement('script')
  ycScript.src = 'https://w922239.yclients.com/widgetJS'
  ycScript.async = true
  ycScript.charset = 'UTF-8'
  document.head.appendChild(ycScript)
}
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';
</style>