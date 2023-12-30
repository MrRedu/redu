import { Section } from '@/components/atoms/ui/section/Section'
import { FormContact } from '@/components/organisms/form-contact/FormContact'
import { Grain } from '@/components/atoms/ui/grain/Grain'

export const metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <>
      <Grain />

      <Section>
        <FormContact />
      </Section>
    </>
  )
}
