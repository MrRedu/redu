import styles from './FormContact.module.css'
import { GroupForm } from './GroupForm'

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  )
}

const Input = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className={styles.input} />
  )
}

export const FormContact = () => {
  return (
    <form action="" className={styles.form}>
      <GroupForm>
        <Label htmlFor="">{`What's your name?`}</Label>
        <Input type="text" placeholder="Your name" />
      </GroupForm>
      <GroupForm>
        <Label htmlFor="">{`How can I contact you?`}</Label>
        <Input type="email" placeholder="Your email" />
      </GroupForm>
      <GroupForm>
        <Label htmlFor="">{`What is the name of you business?`}</Label>
        <Input type="text" placeholder="Company name" />
      </GroupForm>
      <GroupForm>
        <Label htmlFor="">{`What services do you need?`}</Label>
        <ul className={styles['list-services']}>
          <li className={styles['item-list']}>Web Design</li>
          <li className={styles['item-list']}>Landing Pages</li>
          <li className={styles['item-list']}>Branding</li>
          <li className={styles['item-list']}>Packaging</li>
          <li className={styles['item-list']}>Consulting</li>
        </ul>
      </GroupForm>
      <GroupForm>
        <Label htmlFor="">{`Anything else you would like to share?`}</Label>
        <textarea
          className={styles['text-area']}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
      </GroupForm>
    </form>
  )
}
