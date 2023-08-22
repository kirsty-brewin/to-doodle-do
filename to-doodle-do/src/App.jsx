import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import ToDoList from './ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <h1>to doodles</h1>
      <ToDoList />
    </>
  )
}

export default App
