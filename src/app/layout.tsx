import { FC, PropsWithChildren } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ScreenHeight } from 'core/components/screen-height'

import 'core/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>

      <ScreenHeight />
    </html>
  )
}

export default RootLayout