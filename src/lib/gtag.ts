// Global type declarations
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: {
        page_path?: string
        event_category?: string
        event_label?: string
        value?: number
        linker?: {
          domains: string[]
        }
      }
    ) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (GA_TRACKING_ID && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track blog navigation
export const trackBlogClick = () => {
  event({
    action: 'click',
    category: 'Navigation',
    label: 'Blog Link',
  })
}