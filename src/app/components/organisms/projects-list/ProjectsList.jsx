import styles from './ProjectList.module.css'

import { ProjectItemList } from './ProjectItemList'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'

import projectsData from '@/data/projects'

export const ProjectsList = () => {
  return (
    <>
      <CategoryTitle>Last projects</CategoryTitle>
      <ul id="projects" className={styles.list}>
        {projectsData.map(({ id, internUrl, title, tags, images }) => (
          <ProjectItemList
            key={id}
            id={id}
            href={internUrl}
            title={title}
            tags={tags}
            image={images[0]}
          />
        ))}
      </ul>
    </>
  )
}
