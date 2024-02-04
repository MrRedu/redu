import styles from './PersonalSummary.module.css'
export const PersonalSummary = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.paragraph}>
          {`I’m an self-taught web developer based in Venezuela and specialized in Front-End development. I mainly develop websites and web-apps. My 1+ year of experience in the field helped XXXXX XXXX XXXXX XXXXX.`}
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nemo
          consequuntur pariatur vitae quasi enim deserunt cum. Sequi vel,
          temporibus alias fugiat iure, omnis voluptas architecto repellendus
          nemo, accusantium mollitia.
        </p>
      </div>
      <div>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis
          vel iusto laudantium temporibus illum voluptatum minus veritatis quas
          tempora alias exercitationem recusandae, maxime, dignissimos, esse ut
          nulla pariatur quisquam?
        </p>
      </div>
    </div>
  )
}
