import styles from './FormContact.module.css'
import { GroupForm } from './GroupForm'

import { Input } from './Input'
import { Label } from './Label'

const SERVICES = ['Web Design', 'Landing Pages', 'Branding', 'Packaging']

export const FormContact = () => {
  return (
    <form action="" className={styles.form}>
      <GroupForm>
        <Label htmlFor="" isRequired>{`What's your name?`}</Label>
        <Input type="text" placeholder="Your name" />
      </GroupForm>
      <GroupForm>
        <Label htmlFor="" isRequired>{`How can I contact you?`}</Label>
        <Input type="email" placeholder="Your email" />
      </GroupForm>
      <GroupForm>
        <Label
          htmlFor=""
          isRequired
        >{`What is the name of you business?`}</Label>
        <Input type="text" placeholder="Company name" />
      </GroupForm>
      <GroupForm>
        <Label htmlFor="" isRequired>{`What services do you need?`}</Label>
        <ul className={styles['list-services']}>
          {SERVICES.map(service => (
            <li key={service} className={styles['item-list']}>
              {service}
            </li>
          ))}
        </ul>
      </GroupForm>
      <GroupForm>
        <Label
          htmlFor=""
          isRequired
        >{`Anything else you would like to share?`}</Label>
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
