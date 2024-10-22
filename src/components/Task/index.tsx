import { useState } from 'react'

import * as S from './Task.style'
import TaskControl from './TaskControl'
import TaskHeading from './TaskHeading'

export default function Task() {
  const [todo, setTodo] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }
  return (
    <S.Wrapper>
      <TaskHeading text="Edit Task" />
      <TaskControl label="Task Name" value={todo} onChange={handleChange} />
    </S.Wrapper>
  )
}
