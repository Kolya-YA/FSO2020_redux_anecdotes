import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNewAnecdote = async event => {
    event.preventDefault()
    const text = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    const newA = await anecdoteService.createNew(text)
    dispatch(newAnecdote(newA))
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