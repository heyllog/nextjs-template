import { FC, useState } from 'react'

import Button from 'core/components/button/button'
import { useAppDispatch, useAppSelector } from 'core/store'

import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from './counter-slice'

const Counter: FC = () => {
  const [incrementAmount, setIncrementAmount] = useState('2')
  const count = useAppSelector(selectCount)

  const dispatch = useAppDispatch()

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div
      style={{
        height: '100vh',
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div>
        <Button
          aria-label='Decrement value'
          onClick={(): void => {
            dispatch(decrement())
          }}
        >
          -
        </Button>
        <span
          style={{
            fontSize: '78px',
            paddingLeft: '16px',
            paddingRight: '16px',
            marginTop: '2px',
            color: 'white',
          }}
        >
          {count}
        </span>
        <Button
          aria-label='Increment value'
          onClick={(): void => {
            dispatch(increment())
          }}
        >
          +
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <input
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e): void => setIncrementAmount(e.target.value)}
        />
        <Button
          onClick={(): void => {
            dispatch(incrementByAmount(incrementValue))
          }}
        >
          Add Amount
        </Button>
        <Button
          onClick={(): void => {
            void dispatch(incrementAsync(incrementValue))
          }}
        >
          Add Async
        </Button>
        <Button
          onClick={(): void => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        >
          Add If Odd
        </Button>
      </div>
    </div>
  )
}

export default Counter
