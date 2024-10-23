import { Button } from '../Button'
import { Input } from '../Input'

import * as S from './Task.style'

type TaskControlProps = {
  label: string
  value: string
  onChange: (value: string) => void
  onAddTodo: () => void
  onDeleteTodo: () => void
}

export default function TaskControl({ value, label, onChange, onAddTodo, onDeleteTodo }: TaskControlProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <S.TaskControlWrapper>
      <div className="input-area">
        <Input {...{ label, value, onChange: handleChange }} />
      </div>

      <div className="button-container">
        <div className="delete-button">
          <Button variant="danger" size="large" onClick={onDeleteTodo}>
            Delete
          </Button>
        </div>

        <Button variant="primary" size="large" onClick={onAddTodo}>
          Save
        </Button>
      </div>
    </S.TaskControlWrapper>
  )
}
