import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Lazy-load Photoswipe when needed
    // We will attach a simple global to open images
    ;(window as any).openImage = (src: string) => {
      const overlay = document.createElement('div')
      overlay.style.position = 'fixed'
      overlay.style.inset = '0'
      overlay.style.background = 'rgba(0,0,0,0.85)'
      overlay.style.display = 'grid'
      overlay.style.placeItems = 'center'
      overlay.style.zIndex = '2000'
      const img = document.createElement('img')
      img.src = src
      img.style.maxWidth = '90vw'
      img.style.maxHeight = '90vh'
      img.style.borderRadius = '12px'
      overlay.appendChild(img)
      overlay.addEventListener('click', () => document.body.removeChild(overlay))
      document.body.appendChild(overlay)
    }
  }
})
