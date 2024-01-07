import propTypes from 'prop-types'
import { Project } from '@/components/organisms/project/Project'
import { Grain } from '@/components/atoms/ui/grain/Grain'

// export const metadata = {
//   title: 'Redu',
//   description: 'Portfolio web',
//   keywords: ['portfolio', 'developer', 'frontend'],
// }

export default function ProjectPage({ params: { projectId } }) {
  return (
    <>
      <Grain />
      <Project projectId={projectId} />
    </>
  )
}
ProjectPage.propTypes = {
  params: propTypes.object,
  projectId: propTypes.string,
}
