/* eslint-disable filename-rules/match */
import type { FC } from 'react'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from 'app/store'
import 'app/styles/global.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
