import styles from './ServicesSection.module.css'

import { SERVICES } from '@/utils/constants'

import { ServiceItem } from './ServiceItem'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { Section } from '@/components/atoms/ui/section/Section'

export const ServicesSection = () => {
  return (
    <>
      <Section>
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
      </Section>
    </>
  )
}
