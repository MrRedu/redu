import styles from './StatusTag.module.css'
import { Highlight } from '@/components/atoms/ui/highlight/Highlight'
export const StatusTag = () => {
  return (
    <div className={styles.container}>
      <Highlight />
      <span className={styles.text}>Available for hire</span>
    </div>
  )
}
