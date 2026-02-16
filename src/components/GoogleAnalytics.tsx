'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview } from '@/lib/gtag'

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted' && process.env.NEXT_PUBLIC_GA_ID) {
      const url = pathname + searchParams.toString()
      pageview(url)
    }
  }, [pathname, searchParams])

  return null
}