import { Text } from '../Text'

import * as S from './Input.style'

type InputProps = { label: string; value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }

export function Input({ label, value, onChange }: InputProps) {
  return (
    <S.Wrapper>
      <Text as="label">{label}</Text>
      <input type="text" value={value} onChange={onChange} />
    </S.Wrapper>
  )
}
