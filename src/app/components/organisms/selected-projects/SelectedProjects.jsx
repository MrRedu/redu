import styles from './SelectedProjects.module.css'

import projectsData from '@/data/projects'

import { ArrowRight } from 'lucide-react'
import { SelectedProject } from './SelectedProject'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { Button } from '@/components/atoms/ui/buttons/Button'

export const SelectedProjects = () => {
  return (
    <>
      <CategoryTitle>Selected projects</CategoryTitle>
      <div className={styles.container}>
        {projectsData.map(({ id, title, internUrl, images, roles, year }) => (
          <SelectedProject
            key={id}
            title={title}
            internUrl={internUrl}
            roles={roles}
            year={year}
            image={images[0]}
          />
        ))}
        <Button>
          <Button.LinkWrapper href="/projects">
            <Button.Text>View all projects</Button.Text>
            <Button.Icon rightIcon>
              <ArrowRight size={18} strokeWidth={2.4} />
            </Button.Icon>
          </Button.LinkWrapper>
        </Button>
      </div>
    </>
  )
}
