import { useHead } from '#imports'

export interface SeoOptions {
  title?: string
  description?: string
  image?: string
  url?: string
  keywords?: string
  noindex?: boolean
}

export function useSeo(opts: SeoOptions) {
  const title = opts.title || 'Relaxation Studio — массаж и SPA'
  const description = opts.description || 'Премиальные процедуры массажа и SPA в спокойной атмосфере.'
  const image = opts.image || '/mainlogo.svg'
  const url = opts.url || 'https://relaxation-studio.ru/'
  const keywords = opts.keywords || 'массаж, спа, студия массажа, спа процедуры, тула'
  const robots = opts.noindex ? 'noindex,nofollow' : 'index,follow'

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: robots },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ],
    link: [
      { rel: 'canonical', href: url }
    ]
  })
}
