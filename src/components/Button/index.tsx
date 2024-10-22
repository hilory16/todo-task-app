type ButtonProps = {
  text: string
  variant: 'danger' | 'primary' | 'default'
  onClick: () => void
}

export function Button({ text }: ButtonProps) {
  return <button>{text}</button>
}
