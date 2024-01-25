import { PresentationProjects } from '@/components/organisms/presentation-projects/PresentationProjects'
import { Section } from '@/components/atoms/ui/section/Section'
import { Grain } from '@/components/atoms/ui/grain/Grain'
import { ProjectsList } from '@/components/organisms/projects-list/ProjectsList'
import { SimpleScrollBanner } from '@/components/molecules/ui/scroll-banners/SimpleScrollBanner'

export default function ProjectsPage() {
  return (
    <>
      <Grain />
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
