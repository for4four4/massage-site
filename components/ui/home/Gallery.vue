<template>
  <section v-reveal>
    <div class="gallery-title page-width" id="gallery">
      Фотогалерея
    </div>
    <div class="gallery page-width">
      <div class="gallery-item">
        <img src="/galery1-optimized.webp" class="gallery-item_image" alt="Nature" loading="lazy" decoding="async" @click="open('/galery1-optimized.webp')">
      </div>
      <div class="gallery-item">
        <img src="/galery2-optimized.webp" class="gallery-item_image" alt="Snow" loading="lazy" decoding="async" @click="open('/galery2-optimized.webp')">
      </div>
      <div class="gallery-item">
        <img src="/galery3-optimized.webp" class="gallery-item_image" alt="Mountains" loading="lazy" decoding="async" @click="open('/galery3-optimized.webp')">
      </div>
    </div>
  </section>
</template>

<script setup>
const open = (src) => {
  // @ts-ignore
  if (window.openImage) window.openImage(src)
}
</script>

<style scoped>
/* Стили уже в SCSS файлах */
</style>
