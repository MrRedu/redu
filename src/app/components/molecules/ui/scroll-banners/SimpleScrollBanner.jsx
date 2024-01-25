'use client'

import propTypes from 'prop-types'

import { ScrollBanner } from '@/components/molecules/ui/infinite-scroll-banner/InfiniteScrollBanner'

import { SCROLL_ITEMS } from '@/utils/constants'

export const SimpleScrollBanner = ({ direction, speed }) => {
  return (
    <ScrollBanner>
      <ScrollBanner.InfiniteScrollBanner
        items={SCROLL_ITEMS}
        direction={direction}
        speed={speed}
      />
    </ScrollBanner>
  )
}

SimpleScrollBanner.propTypes = {
  direction: propTypes.string,
  speed: propTypes.string,
}
