import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { createNotification, delNotification } from '../reducers/notificationReducer'

import Filter from './Filter'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return filter
      ? anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
      : anecdotes
  })
  // const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  
  const voteHandler = ({ id, content }) => {
    dispatch(addVote(id))
    dispatch(createNotification(content))
    setTimeout(() => {
      dispatch(delNotification())
    }, 5000);
  }

  const Anecdote = ({ anecdote, voteHandler }) => (
    <li key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes} 
        <button onClick={voteHandler}>Vote</button>
      </div>
    </li>
  )

  return (
    <section>
      <h3>Anecdote list</h3>
      <Filter />
      <ul>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote = {anecdote}
            voteHandler={() => voteHandler(anecdote)}
          />
        )}
      </ul>
    </section>
  )
}

export default AnecdoteList