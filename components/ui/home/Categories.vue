<template>
  <section v-reveal>
    <div id="categories" class="categories-title page-width">
      Категории услуг
    </div>
    <div class="categories page-width">
      <a
          v-for="category in categories"
          :key="category.id"
          class="categories-item"
          :href="category.href"
          :data-attr="category.attr"
          v-tilt
          @click.prevent="showElements(category.attr)"
      >
        <img class="categories-item_background" :src="category.image" alt="" />
        <span class="categories-item_title" :style="category.titleStyle">{{ category.title }}</span>
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
      </a>
    </div>
  </section>
</template>

<script setup>
const activeCategory = ref(null)

const categories = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
    title: 'Массаж лица и тела',
    titleStyle: 'left:-45px;',
    href: '#massage_services',
    attr: 'massage',
    services: ['Общий массаж', 'Массаж ног', 'Массаж спины', 'Массаж лица']
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556229151-88bfa57658f2?q=80&w=1200&auto=format&fit=crop',
    title: 'СПА-процедуры',
    titleStyle: 'top:-15px;',
    href: '#SPA',
    attr: 'SPA',
    services: ['Кедровая бочка', 'Обертывание', 'Скрабирование', 'Вакуумные банки']
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop',
    title: 'Аппаратные процедуры',
    titleStyle: 'right:-45px;',
    href: '#techique',
    attr: 'massage',
    services: ['Массаж LPG', 'Массаж миостимуляции']
  }
]

const showElements = (attr) => {
  activeCategory.value = attr

  // Анимация (опционально)
  const serviceList = document.getElementById(attr)
  const arrow = document.getElementById(`${attr}-arrow`)

  if (serviceList && arrow) {
    serviceList.animate([
      {opacity: 0, transform: 'scale(0.9)'},
      {opacity: 1, transform: 'scale(1)'}
    ], { duration: 500, easing: 'ease' })

    arrow.animate([
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(180deg)'}
    ], { duration: 500, easing: 'ease' })
  }
}
</script>