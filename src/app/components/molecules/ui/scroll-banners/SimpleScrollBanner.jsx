'use client'

import propTypes from 'prop-types'

import { ScrollBanner } from '@/components/molecules/ui/infinite-scroll-banner/InfiniteScrollBanner'

import { SCROLL_ITEMS } from '@/utils/constants'

export const SimpleScrollBanner = ({
  items = SCROLL_ITEMS,
  direction,
  speed,
}) => {
  return (
    <ScrollBanner>
      <ScrollBanner.InfiniteScrollBanner
        items={items}
        direction={direction}
        speed={speed}
      />
    </ScrollBanner>
  )
}

SimpleScrollBanner.propTypes = {
  items: propTypes.array,
  direction: propTypes.string,
  speed: propTypes.string,
}
