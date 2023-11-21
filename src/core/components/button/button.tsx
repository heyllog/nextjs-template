import { FC, ButtonHTMLAttributes } from 'react'

import styles from './styles.module.css'

const Button: FC<ButtonHTMLAttributes<unknown>> = (props) => (
  <button type='button' className={styles.button} {...props} />
)

export default Button
