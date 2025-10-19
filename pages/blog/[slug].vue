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

<script setup>
const route = useRoute()
const db: Record<string, any> = {
  'benefits-of-massage': { title: 'Польза массажа для здоровья', date: '2025-10-01', image: '/1kat-optimized.webp', body: 'Регулярный массаж поддерживает здоровье мышц и суставов, улучшает настроение и качество сна.' },
  'self-care-tips': { title: 'Самопомощь между сеансами', date: '2025-10-10', image: '/2kat-optimized.webp', body: 'Несколько простых практик помогут сохранить ощущение легкости и расслабленности.' }
}
const post = computed(() => db[String(route.params.slug)] || { title: 'Запись', date: '', image: '/3kat-optimized.webp', body: '' })
</script>

<style scoped>
.blog-detail { padding: 24px 0; }
.cover { width: 100%; height: 360px; object-fit: cover; border-radius: 12px; }
.content { margin-top: 16px; }
.muted { color: var(--color-muted); font-size: 14px; }
.breadcrumbs { display: flex; gap: 8px; color: var(--color-muted); font-size: 14px; margin-bottom: 12px; }
</style>
