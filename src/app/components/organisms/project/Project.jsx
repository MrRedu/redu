import propTypes from 'prop-types'
import Image from 'next/image'

import projectsData from '@/data/projects'

import styles from './Project.module.css'

import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/atoms/ui/section/Section'
import { Button } from '@/components/atoms/ui/buttons/Button'
import { Divider } from '@/components/atoms/ui/divider/Divider'
import { DetailsProject } from './DetailsProject'
import { ScrollingBanner } from '@/components/molecules/ui/scrolling-banner/ScrollingBanner'

export function Project({ projectId }) {
  const project = projectsData.find(project => project.id === projectId)
  const { title, url, description, toolsAndTechnologies, image } = project

  if (!project) {
    return <h2>Project not found</h2>
  }

  return (
    <>
      <Section>
        <article className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <Button>
              <Button.LinkWrapper
                href={url}
                size="large"
                type="secondary"
                target="_blank"
              >
                <Button.Text>View website</Button.Text>
                <Button.Icon rightIcon>
                  <ArrowRight size={18} strokeWidth={2.4} />
                </Button.Icon>
              </Button.LinkWrapper>
            </Button>
          </header>

          <Divider />

          <DetailsProject
            description={description}
            toolsAndTechnologies={toolsAndTechnologies}
          />
        </article>
      </Section>
      {image && (
        <Section>
          <div>
            <Image
              src={image}
              alt={`${title} image`}
              width={1200}
              height={736}
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                objectFit: 'cover',
                borderRadius: 'var(--main-border-radius)',
              }}
              //   className={styles.image}
            />
          </div>
        </Section>
      )}
      <ScrollingBanner />
    </>
  )
}

Project.propTypes = {
  projectId: propTypes.string,
}

DetailsProject.propTypes = {
  description: propTypes.string,
}
