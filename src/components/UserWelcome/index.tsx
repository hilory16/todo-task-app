import { Heading } from '../Heading'
import { Image } from '../Image'
import { Text } from '../Text'

import * as S from './UserWelcome.style'

type UserWelcomeProps = {
  greeting: string
  welcomeText: string
  img: string
}

export function UserWelcome({ greeting, welcomeText, img }: UserWelcomeProps) {
  return (
    <S.Wrapper>
      <div className="user-avatar-container">
        <Image src={img} alt="user" width="50px" height="50px" />
      </div>
      <div className="user-text-container">
        <Heading as="h1">{greeting}</Heading>
        <Text as="p">{welcomeText}</Text>
      </div>
    </S.Wrapper>
  )
}
