import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Reveal on scroll
  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
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
  })

  // Tilt hover 3D
  nuxtApp.vueApp.directive('tilt', {
    mounted(el) {
      const strength = 10
      el.style.transformStyle = 'preserve-3d'
      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -strength
        const ry = ((e.clientX - rect.left) / rect.width - 0.5) * strength
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
      })
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'rotateX(0) rotateY(0)'
      })
    }
  })
})
