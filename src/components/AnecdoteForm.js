import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNewAnecdote = async event => {
    event.preventDefault()
    const text = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(newAnecdote(text))
  }

  return (
    <section>
      <h3>Create new</h3>
      <form onSubmit={addNewAnecdote}>
        <div><input name="newAnecdote" /></div>
        <button>create</button>
      </form>
    </section>
  )
}

export default AnecdoteForm