import styled from 'styled-components'

type TextProps = {
  as: 'p' | 'span' | 'div' | 'label' // You can extend this with other tags as needed
  fontSize?: string // Optional prop to override font size if needed
}

const Text = styled.p.attrs<TextProps>(({ as }) => ({
  as: as,
}))<TextProps>`
  font-size: ${({ fontSize }) => fontSize || '1rem'}; // Default font size if not provided
  line-height: 1.5;
  color: ${({ color, theme }) => color || theme.colors.textColor};
`

export { Text }
