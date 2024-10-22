import { Heading } from '../Heading'
import { Image } from '../Image'
import { Text } from '../Text'

export default function UpgradeBanner() {
  return (
    <div>
      <div className="trophy-container">
        <Image src="/assets/icons/trophy.svg" alt="trophy" width="53.1px" height="40.89px" />
        <Heading as="h6">Go Pro Upgrade Now</Heading>
        <div className="upgrade-cost">
          <Text as="p">$1</Text>
        </div>
      </div>
    </div>
  )
}
