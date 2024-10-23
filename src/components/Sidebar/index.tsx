import { Text } from '../Text'
import { TodoList } from '../Todos'
import UpgradeBanner from '../UpgradeBanner'
import { UserWelcome } from '../UserWelcome'

import * as S from './Sidebar.style'

import { TodoType } from '~/types/todo'

type TodoListProps = {
  todos: TodoType[] | []
  onEditTodo: (todoId: string | number) => void
  updateTodoStatus: (todoId: string | number) => void
}

export function Sidebar({ todos, onEditTodo, updateTodoStatus }: TodoListProps) {
  return (
    <S.Wrapper>
      <UserWelcome
        greeting="Hello, Jhon"
        welcomeText="What are your plans  for today?"
        img="/assets/images/user-avi.png"
      />
      <UpgradeBanner />
      <TodoList todos={todos} onEdit={onEditTodo} updateTodoStatus={updateTodoStatus} />

      <button type="button" className="add-new-todo">
        <Text className="add-text" as="p">
          +
        </Text>
      </button>
    </S.Wrapper>
  )
}
