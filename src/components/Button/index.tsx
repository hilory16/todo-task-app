import styled, { css } from 'styled-components'

interface ButtonProps {
  children: any
  variant?: 'primary' | 'danger' | 'default'
  as?: 'a' | 'button' //render button as either a link or a button
  href?: string // Only needed if the component is rendered as a link
  onClick?: () => void
  size?: 'small' | 'medium' | 'large' //size of the button
}

const Button = styled(({ as: Component = 'button', ...props }: ButtonProps) => <Component {...props} />)<ButtonProps>`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base};
  font-size: 16px;
  font-weight: 500;
  line-height: 18.75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          height: 41px;
          font-size: 14px;
          border-radius: 4px;
        `
      case 'large':
        return css`
          height: 61px;
          font-size: 18px;
          border-radius: 6px;
          box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);
          text-shadow: 0px 2.5px black;
        `
      case 'medium':
      default:
        return css`
          height: 45px;
          font-size: 16px;
          border-radius: 4px;
        `
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: ${({ theme }) => theme.colors.base};
          border: 2px solid ${({ theme }) => theme.colors.primary2};
          background: ${({ theme }) => theme.colors.primary};
          &:hover {
            background-color: ${({ theme }) => theme.colors.primary2};
          }
        `
      case 'danger':
        return css`
          color: ${({ theme }) => theme.colors.base};
          border: 2px solid ${({ theme }) => theme.colors.danger2};
          background: ${({ theme }) => theme.colors.danger};
          &:hover {
            background: ${({ theme }) => theme.colors.danger2};
          }
        `
      default:
        return css`
          border: 2px solid ${({ theme }) => theme.colors.textColor2};
          background: ${({ theme }) => theme.colors.transparent};
          color: ${({ theme }) => theme.colors.textColor2};
          &:hover {
            background: ${({ theme }) => theme.colors.transparent};
          }
        `
    }
  }}

  // To handle the case where the button is rendered as a link
  ${({ as }) =>
    as === 'a' &&
    `
    display: inline-block;
  `}
`

export { Button }
