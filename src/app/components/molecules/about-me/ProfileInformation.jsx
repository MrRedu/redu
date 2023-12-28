import styles from './ProfileInformation.module.css'
export const ProfileInformation = () => {
  return (
    <div className={styles.container}>
      <div>
        <h4>Tools and technologies</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div>
        <h4>Software</h4>
        <ul>
          <li>Linux</li>
          <li>Ubuntu</li>
          <li>ZSH</li>
          <li>BASH</li>
          <li>GIT</li>
        </ul>
      </div>
      <div>
        <h4>Title</h4>
        <ul>
          <li>avecesa</li>
          <li>aveces</li>
          <li>aveces</li>
          <li>aveces</li>
          <li>aveces</li>
        </ul>
      </div>
    </div>
  )
}
