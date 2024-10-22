import { TodoItem } from './TodoItem'

type TodoListProps = {
  todos: {
    todo: string
    completed: boolean
    id: string
  }[]
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <div>
      {todos.map(({ id, todo, completed }) => (
        <TodoItem
          key={id}
          todo={todo}
          completed={completed}
          onEdit={() => {
            console.log('object')
          }}
        />
      ))}
    </div>
  )
}
