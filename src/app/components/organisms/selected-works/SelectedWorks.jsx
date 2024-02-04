import styles from './SelectedWorks.module.css'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'

import projectsData from '@/data/projects'
import { SelectedWork } from './SelectedWork'

export const SelectedWorks = () => {
  return (
    <>
      <CategoryTitle>Selected works</CategoryTitle>
      <div className={styles.container}>
        {projectsData.map(({ id, title, internUrl, images, roles, year }) => (
          <SelectedWork
            key={id}
            title={title}
            internUrl={internUrl}
            roles={roles}
            year={year}
            image={images[0]}
          />
        ))}
      </div>
    </>
  )
}
