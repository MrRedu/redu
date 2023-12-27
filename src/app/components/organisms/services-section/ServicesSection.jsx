import styles from './ServicesSection.module.css'

import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'

import { ServiceItem } from './ServiceItem'
import { Section } from '../../atoms/ui/section/Section'

const SERVICES = [
  {
    id: '01',
    title: 'Webflow Development',
    description:
      'Crafting responsive websites in Webflow for flawless user experiences.',
  },
  {
    id: '02',
    title: 'Webflow Development',
    description:
      'Crafting responsive websites in Webflow for flawless user experiences.',
  },
  {
    id: '03',
    title: 'Webflow Development',
    description:
      'Crafting responsive websites in Webflow for flawless user experiences.',
  },
]

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
