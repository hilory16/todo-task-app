import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Text } from '../Text'

import * as S from './Todos.style'

type TodoItemProps = {
  todo: string
  onEdit: () => void
  completed: boolean
}

export function TodoItem({ todo, onEdit, completed }: TodoItemProps) {
  return (
    <S.TodoItemWrapper>
      <Checkbox checked={completed} label={todo} />
      <div className="todo-button">
        <Button onClick={onEdit} variant="default" size="medium">
          Edit
        </Button>
      </div>
    </S.TodoItemWrapper>
  )
}
