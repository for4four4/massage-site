<template>
  <section id="services" class="services page-width">
    <!-- ... ваш существующий HTML код Services ... -->

    <div class="services-item">
      <div class="services-item_button" data-attr="massage" @click="serviceToggle('massage')">
        <span class="item-button_title">Массаж</span>
        <img
            class="item-button_arrow"
            :id="'massage-arrow'"
            src="/arrow_services.svg"
            alt="Развернуть список"
            :style="{ transform: openSections.massage ? 'rotate(180deg)' : 'rotate(0deg)' }"
        />
      </div>
      <div
          class="services-item_list"
          id="massage"
          :style="{
          display: openSections.massage ? 'flex' : 'none',
          opacity: openSections.massage ? 1 : 0,
          transform: openSections.massage ? 'scale(1)' : 'scale(0.9)'
        }"
      >
        <!-- ваши услуги массажа -->
      </div>
    </div>

    <div class="services-item" style="margin-top: 40px;">
      <div class="services-item_button" data-attr="SPA" @click="serviceToggle('SPA')">
        <span class="item-button_title">СПА-услуги</span>
        <img
            class="item-button_arrow"
            :id="'SPA-arrow'"
            src="/arrow_services.svg"
            alt="Развернуть список"
            :style="{ transform: openSections.spa ? 'rotate(180deg)' : 'rotate(0deg)' }"
        />
      </div>
      <div
          class="services-item_list"
          id="SPA"
          :style="{
          display: openSections.spa ? 'flex' : 'none',
          opacity: openSections.spa ? 1 : 0,
          transform: openSections.spa ? 'scale(1)' : 'scale(0.9)'
        }"
      >
        <!-- ваши СПА услуги -->
      </div>
    </div>
  </section>
</template>

<script setup>
const openSections = ref({
  massage: false,
  spa: false
})

const serviceToggle = (type) => {
  openSections.value[type] = !openSections.value[type]

  // Анимации (опционально)
  const serviceList = document.getElementById(type)
  const arrow = document.getElementById(`${type}-arrow`)

  if (serviceList && arrow) {
    if (openSections.value[type]) {
      serviceList.animate([
        {opacity: 0, transform: 'scale(0.9)'},
        {opacity: 1, transform: 'scale(1)'}
      ], { duration: 500, easing: 'ease' })

      arrow.animate([
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(180deg)'}
      ], { duration: 500, easing: 'ease' })
    } else {
      serviceList.animate([
        {opacity: 1, transform: 'scale(1)'},
        {opacity: 0, transform: 'scale(0.9)'}
      ], { duration: 500, easing: 'ease' })

      arrow.animate([
        {transform: 'rotate(180deg)'},
        {transform: 'rotate(0deg)'}
      ], { duration: 500, easing: 'ease' })
    }
  }
}
</script>