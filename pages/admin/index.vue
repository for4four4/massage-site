<template>
  <section class="page-width admin">
    <header>
      <h1>Админ-панель</h1>
      <p>Настройки SEO и управление блогом</p>
    </header>

    <div class="grid">
      <form class="card" @submit.prevent="saveSeo">
        <h2>SEO сайта</h2>
        <label>Title<input v-model="seo.title" type="text" /></label>
        <label>Description<textarea v-model="seo.description" rows="3"/></label>
        <label>Image URL<input v-model="seo.image" type="text" /></label>
        <label>Canonical URL<input v-model="seo.url" type="text" /></label>
        <button class="btn btn-primary" type="submit">Сохранить</button>
      </form>

      <div class="card">
        <h2>Посты</h2>
        <ul>
          <li v-for="p in posts" :key="p.slug">
            <NuxtLink :to="`/blog/${p.slug}`">{{ p.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const seo = reactive({ title: '', description: '', image: '', url: '' })
const posts = ref([])

onMounted(async () => {
  const s = await $fetch('/api/seo')
  Object.assign(seo, s.site)
  posts.value = await $fetch('/api/posts')
})

const saveSeo = async () => {
  await $fetch('/api/seo', { method: 'POST', body: { site: seo } })
  alert('Сохранено (mock)')
}
</script>

<style scoped>
.admin { padding: 24px 0; }
.grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 16px; }
form { display: grid; gap: 10px; padding: 16px; }
label { display: grid; gap: 6px; }
input, textarea { padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.12); background: var(--color-surface); color: var(--color-text); }
</style>
