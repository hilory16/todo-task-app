import { useState } from 'react'

import * as S from './Task.style'
import TaskControl from './TaskControl'
import TaskHeading from './TaskHeading'

type TaskProps = {
  onAddTodo: (todo: string) => void
}

export default function Task({ onAddTodo }: TaskProps) {
  return (
    <S.TaskWrapper>
      <TaskHeading text="Edit Task" />
      <TaskControl label="Task Name" onAddTodo={onAddTodo} />
    </S.TaskWrapper>
  )
}
