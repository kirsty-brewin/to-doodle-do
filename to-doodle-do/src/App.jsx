import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import TodoList from './TodoList'

function App() {
  return (
    <>
      <CssBaseline />
      <h1>
        To<span id="doodle">Doodle</span>Do
      </h1>
      <TodoList />
    </>
  )
}

export default App
