import React from 'react'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = props => {

  const addNewAnecdote = async event => {
    event.preventDefault()
    const text = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    props.newAnecdote(text)
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

const mapDispatchToProps = { newAnecdote }

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm