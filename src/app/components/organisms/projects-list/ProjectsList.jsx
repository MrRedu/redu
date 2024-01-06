import styles from './ProjectList.module.css'

import { PROJECTS } from '@/utils/constants'
import { ProjectItemList } from './ProjectItemList'
import { CategoryTitle } from '../../molecules/category-title/CategoryTitle'

export const ProjectsList = () => {
  return (
    <>
      <CategoryTitle>Last Projects</CategoryTitle>
      <ul id="projects" className={styles.list}>
        {PROJECTS.map(({ id, href, title, tags, image }) => (
          <ProjectItemList
            key={id}
            id={id}
            href={href}
            title={title}
            tags={tags}
            image={image}
          />
        ))}
      </ul>
    </>
  )
}
