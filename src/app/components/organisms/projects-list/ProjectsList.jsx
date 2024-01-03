import styles from './ProjectList.module.css'

import { PROJECTS } from '@/utils/constants'
import { ProjectItemList } from './ProjectItemList'

export const ProjectsList = () => {
  return (
    <ul id="projects" className={styles.list}>
      {PROJECTS.map(({ id, href, title, description, image }) => (
        <ProjectItemList
          key={id}
          id={id}
          href={href}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </ul>
  )
}
