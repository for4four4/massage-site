<template>
  <article class="page-width blog-detail">
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <NuxtLink to="/blog">Блог</NuxtLink>
      <span aria-hidden="true">/</span>
      <span>{{ post.title }}</span>
    </nav>

    <header class="blog-header">
      <h1>{{ post.title }}</h1>
      <span class="muted">{{ post.date }}</span>
    </header>

    <img :src="post.image" :alt="post.title" class="cover"/>

    <div class="content">
      <p>{{ post.body }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'
const route = useRoute()
const db: Record<string, any> = {
  'benefits-of-massage': { title: 'Польза массажа для здоровья', date: '2025-10-01', image: '/1kat-optimized.webp', body: 'Регулярный массаж поддерживает здоровье мышц и суставов, улучшает настроение и качество сна.' },
  'self-care-tips': { title: 'Самопомощь между сеансами', date: '2025-10-10', image: '/2kat-optimized.webp', body: 'Несколько простых практик помогут сохранить ощущение легкости и расслабленности.' },
  'lpg-explained': { title: 'LPG: как это работает', date: '2025-10-12', image: '/lpg.webp', body: 'Технология LPG основана на механостимуляции тканей. Рассмотрим показания и эффекты.' },
  'sports-recovery': { title: 'Восстановление после спорта', date: '2025-10-14', image: '/sport.webp', body: 'Массаж ускоряет восстановление и снижает риск травм.' },
  'facial-massage-benefits': { title: 'Преимущества массажа лица', date: '2025-10-16', image: '/lico.webp', body: 'Лимфодренаж и лифтинг-эффект улучшают тонус и цвет кожи.' }
}
const post = computed(() => db[String(route.params.slug)] || { title: 'Статья не найдена', date: '', image: '/3kat-optimized.webp', body: 'К сожалению, статья не найдена.' })

useSeo({
  title: () => `${post.value.title} — Блог Relaxation Studio`,
  description: () => post.value.body?.slice(0, 150) || 'Статья блога.',
  image: () => post.value.image,
  url: () => `https://relaxation-studio.ru/blog/${route.params.slug}`
} as any)
</script>

<style scoped>
.blog-detail { padding: 24px 0; }
.cover { width: 100%; height: 360px; object-fit: cover; border-radius: 12px; }
.content { margin-top: 16px; }
.muted { color: var(--color-muted); font-size: 14px; }
.breadcrumbs { display: flex; gap: 8px; color: var(--color-muted); font-size: 14px; margin-bottom: 12px; }
</style>
