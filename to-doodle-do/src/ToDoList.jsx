import { useState } from 'react'
import * as React from 'react'
import List from '@mui/material/List'
import ToDo from './ToDo'

const initialTodos = [
  { id: 1, text: 'practice drawing basic lines and curves', completed: false },
  { id: 1, text: 'draw a shape and use shading', completed: false },
  { id: 1, text: 'practice drawing shadows', completed: true },
  { id: 1, text: 'draw in proportion using grids', completed: false },
]

export default function ToDoList() {
  const [todos, setTodos] = useState(initialTodos)
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <ToDo todo={todo} key={todo.id} />
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
