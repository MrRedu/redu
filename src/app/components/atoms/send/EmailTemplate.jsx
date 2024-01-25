// https://resend.com/docs/send-with-nextjs
import propTypes from 'prop-types'
import styles from './EmailTemplate.module.css'
export const EmailTemplate = ({
  name,
  email,
  companyName,
  services,
  message,
}) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Email from my portfolio web</h1>
    <p className={`${styles.text} ${styles.name}`}>
      {`I'm <strong>${name}</strong>`}
    </p>
    <p className={`${styles.text} ${styles.email}`}>
      E-mail: <strong>{email}</strong>
    </p>
    <p className={`${styles.text} ${styles.company}`}>
      Company name: <strong>{companyName}</strong>
    </p>
    <p className={`${styles.text} ${styles.services}`}>
      {`Services requested: <strong>${services.join(', ')}</strong>`}
    </p>
    <p className={`${styles.text} ${styles.message}`}>
      Project details: <strong>{message}</strong>
    </p>
  </div>
)
EmailTemplate.propTypes = {
  name: propTypes.string,
  email: propTypes.string,
  companyName: propTypes.string,
  services: propTypes.array,
  message: propTypes.string,
}
