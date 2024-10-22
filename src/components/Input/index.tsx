import { Text } from '../Text'

type InputProps = { label: string; value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }

export function Input({ label, value, onChange }: InputProps) {
  return (
    <div>
      <Text as="label">{label}</Text>
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}
