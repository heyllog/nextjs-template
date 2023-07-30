import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from 'features/counter/counter'

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Next JS Template</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Counter />
  </>
)

export default IndexPage
