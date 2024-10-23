import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Sidebar } from '~/components/Sidebar'
import Task from '~/components/Task'

import * as S from './Home.styles'

import { TodoType } from '~/types/todo'

// const todos = [
//   {
//     todo: 'Training at the Gym',
//     completed: true,
//     id: '1',
//   },
//   {
//     todo: 'Play Paddle with friends',
//     completed: false,
//     id: '1',
//   },
//   {
//     todo: 'Burger BBQ with family',
//     completed: true,
//     id: '1',
//   },
// ]

export function Home() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [todo, setTodo] = useState<string>('')
  const [isEdit, setIsEdit] = useState<string | number | null>(null)

  const addTodo = () => {
    if (isEdit) {
      setTodos((prevTodos) => prevTodos.map((item) => (item.id === isEdit ? { ...item, todo } : item)))
      setTodo('')
      setIsEdit(null)
    } else {
      if (todo) {
        const newTodo = {
          todo,
          id: uuidv4(),
          completed: false,
        }
        setTodos((prevTodos) => [...prevTodos, newTodo])
        setTodo('')
      }
    }
  }

  const onEditTodo = (todoId: string | number) => {
    const selected = todos?.find((item) => item.id === todoId)
    if (selected) {
      setIsEdit(todoId)
      setTodo(selected.todo)
    }
  }

  const onDeleteTodo = () => {
    setTodo('')
  }

  const updateTodoStatus = (todoId: string | number) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) => (item.id === todoId ? { ...item, completed: !item.completed } : item))
    )
  }

  return (
    <S.Wrapper>
      <div className="left-container">
        <Sidebar todos={todos} onEditTodo={onEditTodo} updateTodoStatus={updateTodoStatus} />
      </div>
      <div className="right-container">
        <Task onAddTodo={addTodo} onDeleteTodo={onDeleteTodo} todo={todo} setTodo={setTodo} isEdit={!!isEdit} />
      </div>
    </S.Wrapper>
  )
}
