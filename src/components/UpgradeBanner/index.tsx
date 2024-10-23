import { Heading } from '../Heading'
import { Image } from '../Image'
import { Text } from '../Text'

import * as S from './UpgradeBanner.style'

export default function UpgradeBanner() {
  return (
    <S.Wrapper>
      <div className="trophy-container">
        <Image src="/assets/icons/trophy.svg" alt="trophy" width="53.1px" height="40.89px" />
      </div>
      <Heading as="h5" className="plan-heading">
        Go Pro Upgrade Now
      </Heading>
      <div className="upgrade-cost">
        <Text as="p" className="upgrade-cost-text">
          $1
        </Text>
      </div>
    </S.Wrapper>
  )
}
