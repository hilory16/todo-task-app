import { TodoItem } from './TodoItem'
import * as S from './Todos.style'

import { TodoType } from '~/types/todo'

type TodoListProps = {
  todos: TodoType[]
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <S.TodoListWrapper>
      {todos?.map(({ id, todo, completed }) => (
        <TodoItem
          key={id}
          todo={todo}
          completed={completed}
          onEdit={() => {
            console.log('object')
          }}
        />
      ))}
    </S.TodoListWrapper>
  )
}
