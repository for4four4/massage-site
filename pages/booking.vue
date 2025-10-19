<template>
  <section class="page-width booking-page">
    <header>
      <h1>Онлайн-запись</h1>
      <p>Выберите услугу, дату и время. Запись займет меньше минуты.</p>
    </header>

    <BookingWidget />
  </section>
</template>

<script setup>
import BookingWidget from '~/components/ui/common/BookingWidget.vue'
</script>

<style scoped>
.booking-page { padding: 32px 0; }
</style>
