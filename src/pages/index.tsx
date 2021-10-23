import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import Counter from 'features/counter/Counter'
import Link from 'app/components/Link'

const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`

const Container = styled.div`
  text-align: center;
`

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${floating} infinite 3s ease-in-out;
  }
`

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.secondary};
`

const IndexPage: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Logo src="/logo.svg" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </Link>
          <span>, </span>
          <Link href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </Link>
          <span>, </span>
          <Link href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
            Redux Toolkit
          </Link>
          ,<span> and </span>
          <Link href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
            React Redux
          </Link>
        </span>
      </Header>
    </Container>
  )
}

export default IndexPage
