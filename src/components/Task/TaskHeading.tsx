import { Heading } from '../Heading'

import * as S from './Task.style'

export default function TaskHeading({ text }: { text: string }) {
  return (
    <S.TaskHeadingWrapper>
      <Heading as="h2">{text}</Heading>
    </S.TaskHeadingWrapper>
  )
}
