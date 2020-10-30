import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, newAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = id => {
    dispatch(addVote(id))
  }

  const addNewAnecdote = event => {
    event.preventDefault()
    const text = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(newAnecdote(text))
  }

  return (
    <div>
      <h2>Anecdoteswww</h2>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} 
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input name="newAnecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App