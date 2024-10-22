import styled from 'styled-components'

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = styled.h1.attrs<HeadingProps>(({ as }) => ({
  as: as,
}))<HeadingProps>`
  font-size: ${({ as }) => {
    switch (as) {
      case 'h1':
        return '2.5rem'
      case 'h2':
        return '2rem'
      case 'h3':
        return '1.75rem'
      case 'h4':
        return '1.5rem'
      case 'h5':
        return '1.25rem'
      case 'h6':
        return '1rem'
      default:
        return '1rem'
    }
  }};
  font-weight: bold;
`

export { Heading }
