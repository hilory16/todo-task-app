import { Checkbox } from '../Checkbox'
import { Text } from '../Text'

type TodoItemProps = {
  todo: string
  onEdit: () => void
  completed: boolean
}

export function TodoItem({ todo, onEdit, completed }: TodoItemProps) {
  return (
    <div>
      <div className="todo-checkbox-container">
        <Checkbox checked={completed} />
      </div>
      <div className="todo-text-container">
        <Text as="p">{todo}</Text>
      </div>
      <div className="todo-button">
        <button onClick={onEdit}></button>
      </div>
    </div>
  )
}
