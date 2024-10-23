import * as S from './Checkbox.style'

type CheckboxProps = {
  checked: boolean
  label: string
}

export function Checkbox({ checked, label }: CheckboxProps) {
  return (
    <S.Wrapper>
      <label className="container">
        <span> {label}</span>
        <input type="checkbox" checked={checked} />
        <span className="checkmark"></span>
      </label>
    </S.Wrapper>
  )
}
