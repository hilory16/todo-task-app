import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 10px;
    background: ${theme.colors.primary};
  `}
`
