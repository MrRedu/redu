import styles from './ProfileInformation.module.css'

const Sector = ({ title, children }) => {
  return (
    <div className={styles.sector}>
      <h4 className={styles.title}>{title}</h4>
      <ul>{children}</ul>
    </div>
  )
}

const Item = ({ children }) => {
  return <li className={styles.item}>{children}</li>
}

const TECHNOLOGIES_AND_TOOLS = [
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'JavaScript',
  'React',
  'Next.js',
]

// const LANGUAGES = ['English', 'Spanish', 'French']

// const SOFTSKILLS = ['Teamwork', 'Leadership', 'Communication']

// const HOBBIES = ['Cooking', 'Traveling', 'Reading', 'Photography']

const SOFTWARE = ['Linux', 'Ubuntu', 'ZSH', 'BASH', 'GIT']

export const ProfileInformation = () => {
  return (
    <div className={styles.container}>
      <Sector title="Technologies and tools">
        {TECHNOLOGIES_AND_TOOLS.map(item => (
          <Item key={item}>{item}</Item>
        ))}
      </Sector>
      <Sector title="Software">
        {SOFTWARE.map(item => (
          <Item key={item}>{item}</Item>
        ))}
      </Sector>
      <Sector title="Contact">
        <li>Eduardo Rodríguez</li>
        <li>
          <a href="mailto:X">example@gmail.com</a>
        </li>
        <li>Maracay, Aragua - Venezuela</li>
      </Sector>
    </div>
  )
}
