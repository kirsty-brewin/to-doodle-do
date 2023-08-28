import { useState, useEffect } from 'react'
import List from '@mui/material/List'
import Todo from './Todo'
import ToDoForm from './TodoForm'

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem('todos'))
  if (!data) return []
  return data
}

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const removeTodo = (id) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((t) => t.id !== id)
    })
  }
  const toggleTodo = (id) => {
    setTodos((oldTodos) => {
      return oldTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo
        }
      })
    })
  }

  const addTodo = (text) => {
    setTodos((oldTodos) => {
      return [
        ...oldTodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ]
    })
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#ff8e3c', color: 'white' }}
    >
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          remove={removeTodo}
          toggle={() => toggleTodo(todo.id)}
        />
      ))}
      <ToDoForm addTodo={addTodo} />
    </List>
  )
}
