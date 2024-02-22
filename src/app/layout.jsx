import propTypes from 'prop-types'

// import { Inter } from 'next/font/google'

import './globals.css'
import '#/node_modules/minireset.css/minireset.min.css'

import { Toaster } from 'sonner'
import { Header, Footer } from '@/components/organisms/ui'
import { CustomCursor } from '@/components/atoms/ui/custom-cursor/CustomCursor'
import { Grain } from '@/components/atoms/ui/grain/Grain'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Redu',
    default: 'Redu',
  },
  authors: [{ name: 'Eduardo', url: 'https://github.com/MrRedu' }],
  creator: 'Eduardo',
  description:
    'Explore my portfolio to see my web development projects. Discover my creativity and skills through my most recent and outstanding works.',
  keywords: ['Portfolio', 'Developer', 'Front-End'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <Header />
          <main style={{ maxWidth: '1440px', margin: '0 auto' }}>
            {children}
          </main>
        <Footer />
        <Grain />
        <Toaster position="bottom-right" />
        <CustomCursor />
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
}
