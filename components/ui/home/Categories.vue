<template>
  <section v-reveal>
    <div id="categories" class="categories-title page-width">
      Категории услуг
    </div>
    <div class="categories page-width">
      <NuxtLink
          v-for="category in categories"
          :key="category.id"
          class="categories-item"
          :to="category.href"
          :data-attr="category.attr"
      >
        <img class="categories-item_background" :src="category.image" :alt="category.title" />
        <span class="categories-item_title">{{ category.title }}</span>
        <div
            class="categories-item_list-services"
            :style="{
            display: activeCategory === category.attr ? 'flex' : 'none',
            opacity: activeCategory === category.attr ? 1 : 0,
            transform: activeCategory === category.attr ? 'scale(1)' : 'scale(0.9)'
          }"
        >
          <span v-for="service in category.services" :key="service" class="list-services-item">{{ service }}</span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const activeCategory = ref(null)

const categories = [
  { id: 1, image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop', title: 'Массаж лица и тела', href: '/services/relax', attr: 'massage', services: ['Общий массаж', 'Массаж ног', 'Массаж спины', 'Массаж лица'] },
  { id: 2, image: 'https://images.unsplash.com/photo-1556229151-88bfa57658f2?q=80&w=1200&auto=format&fit=crop', title: 'СПА-процедуры', href: '/services', attr: 'SPA', services: ['Кедровая бочка', 'Обертывание', 'Скрабирование', 'Вакуумные банки'] },
  { id: 3, image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop', title: 'Аппаратные процедуры', href: '/services/lpg', attr: 'apparatus', services: ['Массаж LPG', 'Миостимуляция'] }
]

const showElements = (attr) => { activeCategory.value = attr }
</script>