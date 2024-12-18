import { Section } from '@/components/atoms/ui/section/Section'
import { FormContact } from '@/components/organisms/form-contact/FormContact'

export const metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <>
      <Section isTheFirstSection>
        <FormContact />
      </Section>
    </>
  )
}
