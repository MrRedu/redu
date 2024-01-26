import propTypes from 'prop-types'
import { Project } from '@/components/organisms/project/Project'

// export const metadata = {
//   title: 'Redu',
//   description: 'Portfolio web',
//   keywords: ['portfolio', 'developer', 'frontend'],
// }

export default function ProjectPage({ params: { projectId } }) {
  return (
    <>
      <Project projectId={projectId} />
    </>
  )
}
ProjectPage.propTypes = {
  params: propTypes.object,
  projectId: propTypes.string,
}
