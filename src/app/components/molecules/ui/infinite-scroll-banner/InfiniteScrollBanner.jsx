'use client'

import propTypes from 'prop-types'

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import styles from './InfiniteScrollBanner.module.css'
import { TagItem } from './tag-item/TagItem'

const InfiniteScrollBanner = ({
  items = [],
  direction = 'right',
  speed = 'fast',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <>
      <div
        className={`${styles.scroller} 
       ${direction === 'right' ? styles['to-right'] : styles['to-left']} ${
         speed === 'fast' ? styles.fast : styles.slow
       }
      ${
        prefersReducedMotion
          ? styles['reduced-motion']
          : styles['normal-motion']
      }
      `}
      >
        <ul className={`${styles['tag-list']} ${styles['scroller-inner']}`}>
          {items.map(({ id, title, dividerIcon, ariaHidden }) => (
            <TagItem
              key={id}
              title={title}
              dividerIcon={dividerIcon}
              ariaHidden={ariaHidden}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export const ScrollBanner = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

ScrollBanner.InfiniteScrollBanner = InfiniteScrollBanner

ScrollBanner.propTypes = {
  children: propTypes.node,
}

InfiniteScrollBanner.propTypes = {
  items: propTypes.array,
  direction: propTypes.string,
  speed: propTypes.string,
}

// Wrapper.propTypes = {
//   children: propTypes.node,
// }
