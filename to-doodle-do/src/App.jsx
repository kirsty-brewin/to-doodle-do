import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import ToDoList from './ToDoList'

function App() {
  return (
    <>
      <CssBaseline />
      <h1>To doodles</h1>
      <ToDoList />
    </>
  )
}

export default App
