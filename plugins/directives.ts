import { defineNuxtPlugin } from '#app'
import type { Directive } from 'vue'

const revealDirective: Directive = {
  // SSR-safe: return empty props
  getSSRProps() {
    return {}
  },
  mounted(el, binding) {
    if (typeof window === 'undefined') return
    const cls = typeof binding.value === 'string' ? binding.value : 'up'
    el.classList.add('reveal', `reveal-${cls}`)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed')
          observer.unobserve(el)
        }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 })
    observer.observe(el)
  }
}

const tiltDirective: Directive = {
  getSSRProps() {
    return {}
  },
  mounted(el) {
    if (typeof window === 'undefined') return
    const strength = 10
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -strength
      const ry = ((e.clientX - rect.left) / rect.width - 0.5) * strength
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
    }
    const onLeave = () => { el.style.transform = 'rotateX(0) rotateY(0)' }
    el.__tiltListeners__ = { onMove, onLeave } as any
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
  },
  unmounted(el: any) {
    if (typeof window === 'undefined') return
    const l = el.__tiltListeners__
    if (l) {
      el.removeEventListener('mousemove', l.onMove)
      el.removeEventListener('mouseleave', l.onLeave)
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', revealDirective)
  nuxtApp.vueApp.directive('tilt', tiltDirective)
})