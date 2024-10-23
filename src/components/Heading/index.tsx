import styled from 'styled-components'

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: string
}

const Heading = styled.h1.attrs<HeadingProps>(({ as }) => ({
  as: as,
}))<HeadingProps>`
  font-size: ${({ as }) => {
    switch (as) {
      case 'h1':
        return '32px'
      case 'h2':
        return '28px'
      case 'h3':
        return '24px'
      case 'h4':
        return '20px'
      case 'h5':
        return '18px'
      case 'h6':
      default:
        return '16px'
    }
  }};
  font-weight: 700;
  color: ${({ color, theme }) => color || theme.colors.base};
`

export { Heading }
