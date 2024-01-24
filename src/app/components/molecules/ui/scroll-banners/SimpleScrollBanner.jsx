'use client'
import { ScrollBanner } from '@/components/molecules/ui/infinite-scroll-banner/InfiniteScrollBanner'

import { SCROLL_ITEMS } from '@/utils/constants'

export const DoubleScrollBanner = () => {
  return (
    <ScrollBanner>
      <ScrollBanner.InfiniteScrollBanner
        items={SCROLL_ITEMS}
        direction="right"
        speed="slow"
      />
      <ScrollBanner.InfiniteScrollBanner
        items={SCROLL_ITEMS}
        direction="left"
        speed="fast"
      />
    </ScrollBanner>
  )
}
