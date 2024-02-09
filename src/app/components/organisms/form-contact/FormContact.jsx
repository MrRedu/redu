'use client'

import styles from './FormContact.module.css'

import { useForm } from '@/hooks/useForm'

import { SendHorizontal } from 'lucide-react'

import { MultipleSelect } from '@/components/molecules/multiple-select/MultipleSelect'
import { Button } from '@/components/atoms/ui/buttons/Button'

import { GroupForm } from './GroupForm'
import { Label } from './Label'
import { Input } from './Input'
import { TextArea } from './TextArea'

export const FormContact = () => {
  const { formData, handleChange, handleServiceChange, handleSubmit } = useForm()

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
        <Label
          // htmlFor="#"
          isRequired
        >{`What services do you need?`}</Label>
        <MultipleSelect handleServiceChange={handleServiceChange} services={formData.services}  />
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
          placeholder="Share project details"
          isRequired
        ></TextArea>
      </GroupForm>
      <GroupForm style={{ display: 'flex', alignItems: 'end' }}>
        <Button>
          <Button.ButtonWrapper
            onClick={handleSubmit}
            size="large"
            type="primary"
          >
            <Button.Text>Submit</Button.Text>
            <Button.Icon rightIcon>
              <SendHorizontal size={18} strokeWidth={2.4} />
            </Button.Icon>
          </Button.ButtonWrapper>
        </Button>
      </GroupForm>
    </form>
  )
}
