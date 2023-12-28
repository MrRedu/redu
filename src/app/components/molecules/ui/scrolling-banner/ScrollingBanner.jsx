import { SCROLL_ITEMS } from '@/libs/constants'
import styles from './ScrollingBanner.module.css'

import { ScrollItem } from './ScrollItem'

export const ScrollingBanner = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.marquee}>
        <div className={styles['marquee-inner']}>
          {SCROLL_ITEMS.map(({ id, title, dividerIcon }) => (
            <ScrollItem key={id} title={title} dividerIcon={dividerIcon} />
          ))}
        </div>
      </div>
    </div>
  )
}
