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

  const addTodo = (todo: TodoType) => {
    const newTodo = {
      todo,
      id: uuidv4(),
      completed: false,
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const updateTodoStatus = () => {
    console.log('object')
  }

  return (
    <S.Wrapper>
      <div className="left-container">
        <Sidebar todos={todos} />
      </div>
      <div className="right-container">
        <Task onAddTodo={addTodo} />
      </div>
    </S.Wrapper>
  )
}
