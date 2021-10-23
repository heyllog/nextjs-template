import styled from '@emotion/styled'

const Button = styled.button`
  appearance: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 4px;
  cursor: pointer;
  background: rgba(112, 76, 182, 10%) none;
  border-radius: 2px;
  transition: all 0.15s;

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

export default Button
