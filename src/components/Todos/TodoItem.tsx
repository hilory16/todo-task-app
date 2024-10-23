import { Button } from '../Button'
import { Checkbox } from '../Checkbox'

import * as S from './Todos.style'

type TodoItemProps = {
  todo: string
  onEdit: () => void
  completed: boolean
  updateTodoStatus: (todoId: string | number) => void
}

export function TodoItem({ todo, onEdit, completed, updateTodoStatus }: TodoItemProps) {
  return (
    <S.TodoItemWrapper>
      <Checkbox checked={completed} label={todo} onChange={updateTodoStatus} />
      <div className="todo-button">
        <Button onClick={onEdit} variant="default" size="medium">
          Edit
        </Button>
      </div>
    </S.TodoItemWrapper>
  )
}
