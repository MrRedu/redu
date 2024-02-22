'use client'
import styles from './ProjectList.module.css'
import { useState } from 'react'

import projectsData from '@/data/projects'

import { ProjectItemList } from './ProjectItemList'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { GridListToggle } from '@/components/molecules/ui/grid-list-toggle/GridListToggle'

export const ProjectsList = () => {
  const [isGrid, setIsGrid] = useState(false)
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
        // className={`${isGrid ? styles.grid : styles.list}`}
      >
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
