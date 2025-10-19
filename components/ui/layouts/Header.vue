<template>
  <header id="header" class="sticky">
    <div class="header page-width" role="navigation" aria-label="Главная навигация">
      <NuxtLink class="header-logo" to="/" aria-label="Relaxation Studio">
        <img class="header-logo_image" src="/mainlogo.svg" alt="Relaxation Studio логотип"/>
        <span class="header-logo_title">Relaxation Studio</span>
      </NuxtLink>

      <nav class="header-navbar" itemscope itemtype="http://schema.org/SiteNavigationElement">
        <NuxtLink to="/services" itemprop="url" class="header-navbar_item">Услуги</NuxtLink>
        <NuxtLink to="/about" itemprop="url" class="header-navbar_item">О нас</NuxtLink>
        <NuxtLink to="/gallery" itemprop="url" class="header-navbar_item">Галерея</NuxtLink>
        <NuxtLink to="/blog" itemprop="url" class="header-navbar_item">Блог</NuxtLink>
        <NuxtLink to="/faq" itemprop="url" class="header-navbar_item">FAQ</NuxtLink>
      </nav>

      <div class="header-actions">
        <button class="btn btn-ghost theme-toggle" @click="toggleTheme" :aria-pressed="isDark">
          <span class="sr-only">Переключить тему</span>
          <svg v-if="isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="1.5"/></svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0L17.95 7.05M7.05 16.95l-1.414 1.414" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
        <a class="btn btn-primary ms_booking" href="#" @click.prevent="openBooking">Записаться</a>
      </div>

      <button class="header-burger" @click="toggleMenu" aria-label="Меню">
        <span></span><span></span><span></span>
      </button>
    </div>

    <transition name="slide">
      <div v-if="menuOpen" class="mobile-menu glass" @click.self="toggleMenu">
        <div class="mobile-menu_inner">
          <NuxtLink to="/services" class="mobile-link" @click="toggleMenu">Услуги</NuxtLink>
          <NuxtLink to="/about" class="mobile-link" @click="toggleMenu">О нас</NuxtLink>
          <NuxtLink to="/gallery" class="mobile-link" @click="toggleMenu">Галерея</NuxtLink>
          <NuxtLink to="/blog" class="mobile-link" @click="toggleMenu">Блог</NuxtLink>
          <NuxtLink to="/faq" class="mobile-link" @click="toggleMenu">FAQ</NuxtLink>
          <div class="mobile-actions">
            <button class="btn btn-ghost" @click="toggleTheme">Тема</button>
            <a class="btn btn-primary ms_booking" href="#" @click.prevent="openBooking">Записаться</a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
const menuOpen = ref(false)
const isDark = ref(false)

onMounted(() => {
  try {
    isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
  } catch {}
})

const toggleMenu = () => { menuOpen.value = !menuOpen.value }

const toggleTheme = () => {
  try {
    const current = document.documentElement.getAttribute('data-theme') || 'light'
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    isDark.value = next === 'dark'
  } catch {}
}

const openBooking = () => {
  // YClients widget open if available
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window && window.yc && typeof window.yc.open === 'function') {
      // @ts-ignore
      window.yc.open()
    }
  } catch {}
}
</script>

<style scoped>
.sr-only { @apply visually-hidden; }

.header { backdrop-filter: saturate(1.2) blur(8px); background: color-mix(in oklab, var(--color-bg) 80%, transparent); border-bottom: 1px solid rgba(0,0,0,0.06); }
.header-actions { display: flex; gap: 12px; align-items: center; }
.theme-toggle { color: var(--color-text); }

.header-burger { display: none; background: transparent; border: 0; width: 44px; height: 44px; border-radius: 12px; cursor: pointer; }
.header-burger span { display: block; width: 24px; height: 2px; background: var(--color-text); margin: 5px auto; border-radius: 2px; }

@media (max-width: 900px) {
  .header-navbar { display: none; }
  .header-burger { display: inline-flex; align-items: center; justify-content: center; }
}

.mobile-menu { position: fixed; inset: 0; z-index: $z-overlay; display: grid; place-items: end; padding: 0; }
.mobile-menu_inner { width: 100%; padding: 20px; display: flex; flex-direction: column; gap: 12px; border-top-left-radius: $radius-xl; border-top-right-radius: $radius-xl; background: var(--color-surface); box-shadow: var(--shadow-elevated); }
.mobile-link { padding: 12px 8px; color: var(--color-text); text-decoration: none; font-weight: 600; }
.mobile-actions { display: flex; gap: 12px; margin-top: 8px; }

.slide-enter-active, .slide-leave-active { transition: transform var(--transition-normal), opacity var(--transition-normal); }
.slide-enter-from, .slide-leave-to { transform: translateY(100%); opacity: 0; }
</style>
