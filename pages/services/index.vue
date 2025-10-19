<template>
  <section class="page-width services-page">
    <header class="services-header">
      <h1>Услуги</h1>
      <p>Выберите категорию и откройте подробности процедур.</p>
    </header>

    <div class="services-grid">
      <NuxtLink v-for="s in services" :key="s.slug" :to="`/services/${s.slug}`" class="card service-card">
        <img :src="s.image" :alt="s.title"/>
        <div class="service-card_body">
          <strong>{{ s.title }}</strong>
          <span>{{ s.short }}</span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { slug: 'relax', title: 'Расслабляющий массаж', short: '60 мин · от 2 900 ₽', image: '/spina.webp' },
  { slug: 'lpg', title: 'LPG массаж', short: '40 мин · от 2 500 ₽', image: '/lpg.webp' },
  { slug: 'face', title: 'Массаж лица', short: '30 мин · от 1 500 ₽', image: '/lico.webp' },
  { slug: 'sport', title: 'Спортивный массаж', short: '60 мин · от 3 200 ₽', image: '/sport.webp' }
]
</script>

<style scoped>
.services-page { padding: 32px 0; }
.services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.service-card { overflow: hidden; }
.service-card img { width: 100%; height: 220px; object-fit: cover; }
.service-card_body { padding: 12px; display: grid; gap: 6px; }
@media (max-width: 1200px) { .services-grid { grid-template-columns: repeat(3, 1fr) } }
@media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) } }
@media (max-width: 600px) { .services-grid { grid-template-columns: 1fr } }
</style>
