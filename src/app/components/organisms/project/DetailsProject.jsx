import propTypes from 'prop-types'
import styles from './DetailsProject.module.css'
export const DetailsProject = ({ description, toolsAndTechnologies }) => {
  return (
    <>
      <section className={styles.container}>
        <div>
          <h3 className={styles.title}>Description</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div>
          <h4 className={styles.title}>Tools and technologies</h4>

          {toolsAndTechnologies && (
            <ul className={styles['tags-list']}>
              {toolsAndTechnologies.map(tool => (
                <li key={tool} className={styles.tag}>
                  {tool}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

DetailsProject.propTypes = {
  description: propTypes.string,
  toolsAndTechnologies: propTypes.array,
}
