import { PresentationProjects } from '@/components/organisms/presentation-projects/PresentationProjects'
import { Section } from '@/components/atoms/ui/section/Section'
import { ScrollingBanner } from '@/components/molecules/ui/scrolling-banner/ScrollingBanner'
import { Grain } from '@/components/atoms/ui/grain/Grain'
import { ProjectsList } from '@/components/organisms/projects-list/ProjectsList'


export default function ProjectsPage() {
  return (
    <>
      <Grain />
      <Section>
        <PresentationProjects />
      </Section>
      <ScrollingBanner />
      <Section>
        <ProjectsList />
      </Section>
    </>
  )
}
