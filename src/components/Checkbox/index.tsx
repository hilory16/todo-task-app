import * as S from './Checkbox.style'

type CheckboxProps = {
  checked: boolean
  label: string
  onChange: any
}

export function Checkbox({ checked, label, onChange }: CheckboxProps) {
  return (
    <S.Wrapper>
      <label className="container">
        <span
          style={{
            textDecoration: checked ? 'line-through' : 'none',
            color: checked ? '#8D8D8D' : 'inherit',
          }}
        >
          {' '}
          {label}
        </span>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
      </label>
    </S.Wrapper>
  )
}
