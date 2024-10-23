import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'

import * as S from './Task.style'

import { TodoType } from '~/types/todo'

type TaskControlProps = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onAddTodo: (todo: string) => void
}

export default function TaskControl({ label, onAddTodo }: TaskControlProps) {
  const [todo, setTodo] = useState<string>('')
  const onDeleteTask = () => {}

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const onSubmitTodo = () => {
    onAddTodo(todo)
    setTodo('')
  }

  return (
    <S.TaskControlWrapper>
      <div className="input-area">
        <Input {...{ label, value: todo, onChange: handleChange }} />
      </div>

      <div className="button-container">
        <div className="delete-button">
          <Button variant="danger" size="large" onClick={onDeleteTask}>
            Delete
          </Button>
        </div>

        <Button variant="primary" size="large" onClick={onSubmitTodo}>
          Save
        </Button>
      </div>
    </S.TaskControlWrapper>
  )
}
