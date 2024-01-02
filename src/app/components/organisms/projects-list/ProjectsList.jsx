import propTypes from 'prop-types'

const ProjectItemList = ({ id, title, description }) => {
  return (
    <li>
      <a href="">
        <span className={title}>{title}</span>
        <span className={description}>{description}</span>
      </a>
    </li>
  )
}

const PROJECTS = [
  {
    id: '1',
    title: 'Project 1',
    description: 'Description 1',
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'Description 2',
  },
  {
    id: '3',
    title: 'Project 3',
    description: 'Description 3',
  },
]

export const ProjectsList = () => {
  return (
    <ul>
      {PROJECTS.map(({ id, title, description }) => (
        <ProjectItemList
          key={id}
          id={id}
          title={title}
          description={description}
        />
      ))}
    </ul>
  )
}

ProjectItemList.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
}
