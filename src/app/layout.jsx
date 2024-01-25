import propTypes from 'prop-types'

import { Inter } from 'next/font/google'

import './globals.css'
import '#/node_modules/minireset.css/minireset.min.css'

import { Toaster } from 'sonner'
import { Header, Footer } from './components/organisms/ui'
import { FollowMousePointer } from '#/src/app/components/atoms/ui/follow-mouse-pointer/FollowMousePointer'

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
        <main style={{ maxWidth: '1440px', margin: '0 auto' }}>{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
        <FollowMousePointer />
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: propTypes.node,
}
