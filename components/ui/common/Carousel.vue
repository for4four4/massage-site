<template>
  <div class="carousel" :aria-label="ariaLabel">
    <div class="viewport" ref="viewport">
      <div class="track" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
        <slot />
      </div>
    </div>
    <div class="controls">
      <button class="btn btn-ghost" @click="prev" aria-label="Предыдущий">‹</button>
      <button class="btn btn-ghost" @click="next" aria-label="Следующий">›</button>
    </div>
    <div class="dots">
      <button v-for="(d, i) in count" :key="i" class="dot" :class="{ active: i===activeIndex }" @click="go(i)"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ autoplay?: boolean; interval?: number; ariaLabel?: string }>(), { autoplay: false, interval: 5000, ariaLabel: 'Карусель' })

const viewport = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const count = ref(0)
let timer: any

onMounted(() => {
  count.value = viewport.value?.querySelectorAll('.track > *').length || 0
  if (props.autoplay) timer = setInterval(next, props.interval)
})

onBeforeUnmount(() => { if (timer) clearInterval(timer) })

function next() { activeIndex.value = (activeIndex.value + 1) % count.value }
function prev() { activeIndex.value = (activeIndex.value - 1 + count.value) % count.value }
function go(i: number) { activeIndex.value = i }
</script>

<style scoped>
.carousel { position: relative; }
.viewport { overflow: hidden; }
.track { display: grid; grid-auto-flow: column; grid-auto-columns: 100%; transition: transform var(--transition-normal); gap: 12px; }
.controls { position: absolute; inset: 0; display: flex; justify-content: space-between; align-items: center; pointer-events: none; }
.controls .btn { pointer-events: all; }
.dots { display: flex; justify-content: center; gap: 6px; margin-top: 8px; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(0,0,0,0.2); border: 0; }
.dot.active { background: var(--color-primary); }
</style>
