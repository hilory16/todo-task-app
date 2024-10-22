type CheckboxProps = {
  checked: boolean
}

export function Checkbox({ checked }: CheckboxProps) {
  return (
    <div>
      <input type="checkbox" checked={checked} />
    </div>
  )
}
