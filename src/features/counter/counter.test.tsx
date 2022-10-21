import { ThemeProvider } from '@emotion/react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

import { makeStore } from 'app/store'
import theme from 'app/theme'

import Counter from './counter'

jest.mock('./counter-api', () => ({
  fetchCount: (amount: number): Promise<{ data: number }> =>
    new Promise<{ data: number }>((resolve) => {
      setTimeout(() => resolve({ data: amount }), 500)
    }),
}))

describe('<Counter />', () => {
  it('renders the component', () => {
    const store = makeStore()

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </ThemeProvider>,
    )

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('decrements the value', () => {
    const store = makeStore()

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </ThemeProvider>,
    )

    fireEvent.click(screen.getByRole('button', { name: /decrement value/i }))

    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('increments the value', () => {
    const store = makeStore()

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </ThemeProvider>,
    )

    fireEvent.click(screen.getByRole('button', { name: /increment value/i }))

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('increments by amount', async () => {
    const user = userEvent.setup()
    const store = makeStore()

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </ThemeProvider>,
    )

    await user.type(screen.getByLabelText(/set increment amount/i), '{backspace}5')
    fireEvent.click(screen.getByRole('button', { name: /add amount/i }))

    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('increments async', async () => {
    const user = userEvent.setup()
    const store = makeStore()

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </ThemeProvider>,
    )

    await user.type(screen.getByLabelText(/set increment amount/i), '{backspace}3')
    fireEvent.click(screen.getByRole('button', { name: /add async/i }))

    await expect(screen.findByText('3')).resolves.toBeInTheDocument()
  })

  it('increments if amount is odd', async () => {
    const user = userEvent.setup()
    const store = makeStore()

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </ThemeProvider>,
    )

    fireEvent.click(screen.getByRole('button', { name: /add if odd/i }))

    expect(screen.getByText('0')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /increment value/i }))
    await user.type(screen.getByLabelText(/set increment amount/i), '{backspace}8')
    fireEvent.click(screen.getByRole('button', { name: /add if odd/i }))

    await expect(screen.findByText('9')).resolves.toBeInTheDocument()
  })
})
