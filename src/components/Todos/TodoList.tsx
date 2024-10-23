import { TodoItem } from './TodoItem'
import * as S from './Todos.style'

import { TodoType } from '~/types/todo'

type TodoListProps = {
  todos: TodoType[]
  onEdit: (todoId: string | number) => void
  updateTodoStatus: (todoId: string | number) => void
}

export function TodoList({ todos, onEdit, updateTodoStatus }: TodoListProps) {
  return (
    <S.TodoListWrapper>
      {todos?.map(({ id, todo, completed }) => (
        <TodoItem
          key={id}
          todo={todo}
          completed={completed}
          onEdit={() => onEdit(id)}
          updateTodoStatus={() => updateTodoStatus(id)}
        />
      ))}
    </S.TodoListWrapper>
  )
}
