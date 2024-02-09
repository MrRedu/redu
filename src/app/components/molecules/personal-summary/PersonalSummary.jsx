import styles from './PersonalSummary.module.css'
export const PersonalSummary = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.paragraph}>
          {`I’m an self-taught web developer based in Venezuela and specialized in Front-End development. I mainly develop websites and web-apps. I'm passionate about crafting experiences that are engaging, accessible, and user-centric.`}
        </p>
        <p className={styles.paragraph}>
          {`The projects where I have generated more knowledge have been open-source, so I will always be open to collaborate in them.`}
        </p>
      </div>
      <div>
        <p
          className={styles.paragraph}
        >{`I'm open to evolving and experimenting with everything. It's okay if not all of it succeeds; the value lies in the attempt and the lessons from the process.`}</p>
        <p className={styles.paragraph}>
          {`I'm interested to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.`}
        </p>
      </div>
    </div>
  )
}
