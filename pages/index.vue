<template>
  <Layout>
    <Video />
    <Categories />
    <Services />
    <Gallery />
  </Layout>
</template>

<script setup>
import Layout from '~/components/ui/layouts/Layout.vue'
import Video from '~/components/ui/home/Video.vue'
import Categories from '~/components/ui/home/Categories.vue'
import Services from '~/components/ui/home/Services.vue'
import Gallery from '~/components/ui/home/Gallery.vue'
</script>