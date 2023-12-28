import propTypes from 'prop-types'

import { Inter } from 'next/font/google'

import './globals.css'
import '#/node_modules/minireset.css/minireset.min.css'

import { Header, Footer } from './components/organisms/ui'
import { FollowMousePointer } from '#/src/app/components/atoms/ui/follow-mouse-pointer/FollowMousePointer'

// import { Grain } from '@/components/atoms/ui/grain/Grain'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Redu',
    title: 'Redu',
  },
  description: 'Portfolio web',
  keywords: ['portfolio', 'developer', 'frontend'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <Grain /> */}
        <main>{children}</main>
        <Footer />
        <FollowMousePointer />
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
}
