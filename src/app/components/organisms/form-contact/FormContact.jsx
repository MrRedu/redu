'use client'

import styles from './FormContact.module.css'

import { useForm } from '@/hooks/useForm'

import { GroupForm } from './GroupForm'
import { Label } from './Label'
import { Input } from './Input'
import { TextArea } from './TextArea'
import { MultipleSelect } from '../../molecules/multiple-select/MultipleSelect'

export const FormContact = () => {
  const formDataInitialState = {
    name: '',
    email: '',
    companyName: '',
    services: [],
    message: '',
  }
  const { formData, handleChange, handleSubmit } = useForm(formDataInitialState)

  return (
    <form
      action=""
      className={styles.form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <GroupForm>
        <Label htmlFor="name" isRequired>{`What's your name?`}</Label>
        <Input
          type="text"
          id="name"
          name="name"
          handleChange={handleChange}
          value={formData.name}
          placeholder="Eduardo"
          isRequired
        />
      </GroupForm>
      <GroupForm>
        <Label htmlFor="email" isRequired>{`How can I contact you?`}</Label>
        <Input
          type="email"
          id="email"
          name="email"
          handleChange={handleChange}
          value={formData.email}
          placeholder="your@email.com"
          isRequired
        />
      </GroupForm>
      <GroupForm>
        <Label
          htmlFor="companyName"
          isRequired
        >{`What is the name of you business?`}</Label>
        <Input
          type="text"
          id="companyName"
          name="companyName"
          handleChange={handleChange}
          value={formData.companyName}
          placeholder="Company name"
          isRequired
        />
      </GroupForm>
      <GroupForm>
        <Label htmlFor="" isRequired>{`What services do you need?`}</Label>
        <MultipleSelect />
      </GroupForm>
      <GroupForm>
        <Label
          htmlFor="details"
          isRequired
        >{`Anything else you would like to share?`}</Label>
        <TextArea
          id="details"
          name="message"
          handleChange={handleChange}
          value={formData.message}
          placeholder="Share projects details"
          isRequired
        ></TextArea>
      </GroupForm>
      <GroupForm>
        <button
          type="submit"
          onClick={handleSubmit}
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
