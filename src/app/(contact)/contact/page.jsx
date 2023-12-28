import { Section } from '@/components/atoms/ui/section/Section'
import { FormContact } from '@/components/organisms/form-contact/FormContact'
import { CategoryTitle } from '../../components/molecules/category-title/CategoryTitle'

export const metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <>
      <Section>
        <CategoryTitle>Contact me</CategoryTitle>
        <strong>Algo va acá 🚧🚧🚧</strong>
      </Section>
      <Section>
        <FormContact />
      </Section>
    </>
  )
}
