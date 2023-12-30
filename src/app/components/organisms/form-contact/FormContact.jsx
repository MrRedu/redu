import styles from './FormContact.module.css'
import { GroupForm } from './GroupForm'

import { Input } from './Input'
import { Label } from './Label'
import { TextArea } from './TextArea'

const SERVICES = ['Web Design', 'Landing Pages', 'Branding', 'Packaging']

export const FormContact = () => {
  return (
    <form action="" className={styles.form}>
      <GroupForm>
        <Label htmlFor="name" isRequired>{`What's your name?`}</Label>
        <Input type="text" id="name" placeholder="Eduardo" isRequired />
      </GroupForm>
      <GroupForm>
        <Label htmlFor="email" isRequired>{`How can I contact you?`}</Label>
        <Input
          type="email"
          id="email"
          placeholder="your@email.com"
          isRequired
        />
      </GroupForm>
      <GroupForm>
        <Label
          htmlFor="company"
          isRequired
        >{`What is the name of you business?`}</Label>
        <Input type="text" id="company" placeholder="Company name" isRequired />
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
          htmlFor="details"
          isRequired
        >{`Anything else you would like to share?`}</Label>
        <TextArea
          placeholder="Share projects details"
          id="details"
          isRequired
        ></TextArea>
      </GroupForm>
      <GroupForm>
        <button
          style={{
            minHeight: '44px',
            borderRadius: 'var(--main-border-radius)',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </GroupForm>
    </form>
  )
}
