import * as S from './Task.style'
import TaskControl from './TaskControl'
import TaskHeading from './TaskHeading'

type TaskProps = {
  onAddTodo: () => void
  todo: string
  setTodo: (todo: string) => void
  onDeleteTodo: () => void
  isEdit: boolean
}

export default function Task({ onAddTodo, todo, setTodo, isEdit, onDeleteTodo }: TaskProps) {
  const textContent = isEdit ? 'Edit' : 'Add'

  return (
    <S.TaskWrapper>
      <TaskHeading text={`${textContent} Task`} />
      <TaskControl
        value={todo}
        onDeleteTodo={onDeleteTodo}
        onChange={setTodo}
        label="Task Name"
        onAddTodo={onAddTodo}
      />
    </S.TaskWrapper>
  )
}
