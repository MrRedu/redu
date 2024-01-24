import { PresentationProjects } from '@/components/organisms/presentation-projects/PresentationProjects'
import { Section } from '@/components/atoms/ui/section/Section'
import { Grain } from '@/components/atoms/ui/grain/Grain'
import { ProjectsList } from '@/components/organisms/projects-list/ProjectsList'
import { DoubleScrollBanner } from '@/components/molecules/ui/scroll-banners/DoubleScrollBanner'

export default function ProjectsPage() {
  return (
    <>
      <Grain />
      <Section>
        <PresentationProjects />
      </Section>
      <DoubleScrollBanner />
      <Section>
        <ProjectsList />
      </Section>
    </>
  )
}
