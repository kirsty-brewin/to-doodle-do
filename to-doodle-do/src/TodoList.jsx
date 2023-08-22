import { useState } from 'react'
import List from '@mui/material/List'
import Todo from './Todo'

const initialTodos = [
  { id: 1, text: 'practice drawing basic lines and curves', completed: false },
  { id: 1, text: 'draw a shape and use shading', completed: false },
  { id: 1, text: 'practice drawing shadows', completed: true },
  { id: 1, text: 'draw in proportion using grids', completed: false },
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  const removeTodo = (id) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((t) => t.id !== id)
    })
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} removeTodo={removeTodo} />
      ))}
    </List>
  )
}

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (