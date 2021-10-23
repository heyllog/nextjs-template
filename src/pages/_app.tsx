import { FC } from 'react'
import { Provider } from 'react-redux'
import { css, ThemeProvider, Global } from '@emotion/react'
import type { AppProps } from 'next/app'

import store from 'app/store'
import theme from 'app/theme'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Global
          styles={css`
            /* Box sizing rules */
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            /* Remove default padding */
            ul[class],
            ol[class] {
              padding: 0;
            }

            /* Remove default margin */
            body,
            h1,
            h2,
            h3,
            h4,
            p,
            ul[class],
            ol[class],
            li,
            figure,
            figcaption,
            blockquote,
            dl,
            dd {
              margin: 0;
            }

            /* Set core body defaults */
            body {
              font-family: 'Roboto', sans-serif;
              min-height: 100vh;
              scroll-behavior: smooth;
              text-rendering: optimizeSpeed;
              line-height: 1.5;
              background: ${theme.colors.background};
            }

            /* Make images easier to work with */
            img {
              max-width: 100%;
              display: block;
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
              font: inherit;
            }
          `}
        />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
