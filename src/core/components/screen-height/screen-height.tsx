'use client'

import { FC } from 'react'

import Script from 'next/script'

/* https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
export const ScreenHeight: FC = () => (
  <Script>
    {`
      const onResize = () => {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', \`\${vh}px\`)
      }

      window.addEventListener('resize', onResize)
      onResize()
    `}
  </Script>
)
