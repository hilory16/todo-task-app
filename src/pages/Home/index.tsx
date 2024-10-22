import Sidebar from '~/components/Sidebar'
import Task from '~/components/Task'

import * as S from './Home.styles'

const todos = [
  {
    todo: 'Training at the Gym',
    completed: true,
    id: '1',
  },
  {
    todo: 'Play Paddle with friends',
    completed: true,
    id: '1',
  },
  {
    todo: 'Burger BBQ with family',
    completed: true,
    id: '1',
  },
]

export function Home() {
  return (
    <S.Wrapper>
      <Sidebar todos={todos} />
      <Task />
    </S.Wrapper>
  )
}
