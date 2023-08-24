import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Create from '@mui/icons-material/Create'
import { IconButton } from '@mui/material'
import { InputAdornment } from '@mui/material'

export default function ToDoForm({ addTodo }) {
  const [text, setText] = useState('')
  const handleChange = (evt) => {
    setText(evt.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined"
          label="What needs doing?"
          variant="outlined"
          color="secondary"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="new todo" edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  )
}
