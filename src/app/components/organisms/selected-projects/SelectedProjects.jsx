import styles from './SelectedProjects.module.css'
import projectsData from '@/data/projects'
import { ArrowRight } from 'lucide-react'
import { SelectedProject } from './SelectedProject'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { Button } from '@/components/atoms/ui/buttons/Button'

const LAST_FOUR_PROJECTS = projectsData.slice(-4).reverse()

export const SelectedProjects = () => {
  return (
    <>
      <CategoryTitle>Selected projects</CategoryTitle>
      <div className={styles.container}>
        {LAST_FOUR_PROJECTS.map(
          ({ id, title, internUrl, images, roles, year }, index) => (
            <SelectedProject
              key={id}
              index={index}
              title={title}
              internUrl={internUrl}
              roles={roles}
              year={year}
              image={images[0]}
            />
          )
        )}
        <Button>
          <Button.LinkWrapper href="/projects">
            <Button.Text>
              View all projects {`(${projectsData.length})`}
            </Button.Text>
            <Button.Icon rightIcon>
              <ArrowRight size={18} strokeWidth={2.4} />
            </Button.Icon>
          </Button.LinkWrapper>
        </Button>
      </div>
    </>
  )
}
