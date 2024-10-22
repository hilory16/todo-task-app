import { Heading } from '../Heading'

export default function TaskHeading({ text }: { text: string }) {
  return (
    <div>
      <Heading as="h2">{text}</Heading>
    </div>
  )
}
