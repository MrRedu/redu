import { ServicesSection } from '@/components/organisms/services-section/ServicesSection'
import { CardConnect } from './components/molecules/card-connect/CardConnect'
// import { AboutMe } from './components/molecules/about-me/AboutMe'

export const metadata = {
  title: 'Portfolio',
}

export default function HomePage() {
  return (
    <>
      {/* <AboutMe /> */}
      <CardConnect />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, omnis
          modi, molestiae laudantium eveniet dolorum, delectus nobis nam fuga
          commodi dicta officia? Cupiditate nisi, laudantium officia ex numquam
          ipsa mollitia.
        </p>
      </div>
      <ServicesSection />
    </>
  )
}
