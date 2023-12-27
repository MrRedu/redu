import { Section } from '@/components/atoms/ui/section/Section'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'

export const AboutMe = () => {
  return (
    <Section>
      <CategoryTitle>About Me</CategoryTitle>
      <h2>{`Hi, I'm Eduardo lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique. Doloribus, eligendi. Alias quam distinctio officia possimus, accusantium dignissimos voluptate.`}</h2>
    </Section>
  )
}
