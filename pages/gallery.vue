<template>
  <section class="page-width gallery-page">
    <header>
      <h1>Галерея</h1>
      <p>Наши кабинеты, процедуры и атмосфера спокойствия.</p>
    </header>
    <div class="masonry">
      <img v-for="(img, i) in images" :key="i" class="masonry-img" :src="img" :alt="`Фото ${i+1}`" loading="lazy"/>
    </div>
  </section>
</template>

<script setup>
import { useSeo } from '~/composables/useSeo'
useSeo({ title: 'Галерея — Relaxation Studio', description: 'Фотографии наших процедур, интерьеров и атмосферы студии.' })
const images = ['/galery1-optimized.webp','/galery2-optimized.webp','/galery3-optimized.webp','/1kat-optimized.webp','/2kat-optimized.webp','/3kat-optimized.webp']
</script>

<style scoped>
.gallery-page { padding: 32px 0; }
.masonry { columns: 3; column-gap: 12px; }
.masonry-img { width: 100%; display: block; margin-bottom: 12px; border-radius: 12px; break-inside: avoid; }
@media (max-width: 900px) { .masonry { columns: 2 } }
@media (max-width: 600px) { .masonry { columns: 1 } }
</style>
