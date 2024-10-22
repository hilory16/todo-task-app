import styled from 'styled-components'

type ImageProps = {
  src: string
  alt: string
  width?: string
  height?: string
  borderRadius?: string // Optional prop for border radius
  objectFit?: 'cover' | 'contain' | 'fill' // Optional object-fit prop for how the image should behave
}

const StyledImage = styled.img<ImageProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
`

const Image = ({ src, alt, width, height, borderRadius, objectFit }: ImageProps) => (
  <StyledImage src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} objectFit={objectFit} />
)

export { Image }
