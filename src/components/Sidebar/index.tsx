import { Text } from '../Text'
import { TodoList } from '../Todos'
import UpgradeBanner from '../UpgradeBanner'
import { UserWelcome } from '../UserWelcome'

import * as S from './Sidebar.style'

type TodoListProps = {
  todos: {
    todo: string
    completed: boolean
    id: string
  }[]
}

export default function Sidebar({ todos }: TodoListProps) {
  return (
    <S.Wrapper>
      <UserWelcome
        greeting="Hello, Jhon"
        welcomeText="What are your plans  for today?"
        img="/assets/images/user-avi.png"
      />
      <UpgradeBanner />
      <TodoList todos={todos} />

      <div className="add-new-todo">
        <Text as="p">+</Text>
      </div>
    </S.Wrapper>
  )
}
