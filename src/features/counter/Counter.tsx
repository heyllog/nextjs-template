import { FC, useState } from 'react'
import styled from '@emotion/styled'

import { useAppSelector, useAppDispatch } from 'app/store'
import Button from 'app/components/Button'

import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from './counterSlice'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    margin-left: 4px;
    margin-right: 8px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

const Value = styled.span`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
`

const TextBox = styled.input`
  font-size: 32px;
  padding: 2px;
  width: 64px;
  text-align: center;
  margin-right: 4px;
`

const AsyncButton = styled(Button)`
  position: relative;

  &::after {
    content: '';
    background-color: rgb(112 76 182 / 15%);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 1s linear, opacity 0.5s ease 1s;
  }

  &:active::after {
    width: 0;
    opacity: 100%;
    transition: 0s;
  }
`

const Counter: FC = () => {
  const [incrementAmount, setIncrementAmount] = useState('2')
  const count = useAppSelector(selectCount)

  const dispatch = useAppDispatch()

  const incrementValue = Number(incrementAmount) || 0

  return (
    <>
      <Row>
        <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </Button>
        <Value>{count}</Value>
        <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </Button>
      </Row>
      <Row>
        <TextBox
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</Button>
        <AsyncButton onClick={() => dispatch(incrementAsync(incrementValue))}>Add Async</AsyncButton>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</Button>
      </Row>
    </>
  )
}

export default Counter
