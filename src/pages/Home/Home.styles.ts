import styled, { css } from 'styled-components'

export const Page = styled.div``

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 10px;
    background: ${theme.colors.primary};
  `}
`
