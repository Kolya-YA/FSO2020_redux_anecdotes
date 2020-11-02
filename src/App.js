import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <Notification />
      <AnecdoteList />
    </div>
  )
}

export default App