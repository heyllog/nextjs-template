import { FC, ButtonHTMLAttributes } from 'react'

export const Button: FC<ButtonHTMLAttributes<unknown>> = (props) => (
  <button type='button' className='bg-primary px-4 py-2 rounded-md text-white' {...props} />
)
