'use client'
import styles from './ProjectList.module.css'
import { useState } from 'react'

import projectsData from '@/data/projects'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { GridListToggle } from '@/components/molecules/ui/grid-list-toggle/GridListToggle'
import { ProjectItem } from './ProjectItem'

const FROM_NEWEST_TO_OLDEST = projectsData.reverse()

export const ProjectsList = () => {
  const [isGrid, setIsGrid] = useState(true)

  const handleIsGrid = () => {
    setIsGrid(true)
  }
  const handleIsList = () => {
    setIsGrid(false)
  }

  return (
    <>
      <div className={styles.header}>
        <CategoryTitle>All projects</CategoryTitle>
        <GridListToggle
          isGrid={isGrid}
          handleIsGrid={handleIsGrid}
          handleIsList={handleIsList}
        />
      </div>
      <ul
        id="projects"
        className={`${styles['container-projects']} ${
          isGrid ? styles['is-grid'] : styles['is-list']
        }`}
      >
        {FROM_NEWEST_TO_OLDEST.map(({ id, internUrl, title, tags, images }) => (
          <ProjectItem
            key={id}
            href={internUrl}
            title={title}
            image={images[0]}
            isGrid={isGrid}
            // tags={tags}
          />
        ))}
      </ul>
    </>
  )
}
