import { FC } from 'react'

import { CurrentStatus } from 'features/status'

const Home: FC = () => {
  return (
    <main className='flex w-screen h-screen items-center justify-center p-24'>
      <CurrentStatus />
    </main>
  )
}

export default Home
