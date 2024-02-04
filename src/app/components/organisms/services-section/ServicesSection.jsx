import styles from './ServicesSection.module.css'

import { SERVICES } from '@/utils/constants'

import { ServiceItem } from './ServiceItem'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'

export const ServicesSection = () => {
  return (
    <>
      <CategoryTitle>Services</CategoryTitle>
      <ul className={styles.list}>
        {SERVICES.map(({ id, title, description }) => (
          <ServiceItem
            key={id}
            id={id}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </>
  )
}
