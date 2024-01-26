import { PresentationProjects } from '@/components/organisms/presentation-projects/PresentationProjects'
import { Section } from '@/components/atoms/ui/section/Section'
import { ProjectsList } from '@/components/organisms/projects-list/ProjectsList'
import { SimpleScrollBanner } from '@/components/molecules/ui/scroll-banners/SimpleScrollBanner'

export const metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <PresentationProjects />
      </Section>
      <SimpleScrollBanner direction={'left'} speed={'slow'} />
      <Section>
        <ProjectsList />
      </Section>
    </>
  )
}
