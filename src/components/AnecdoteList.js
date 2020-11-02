import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

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
        <ul>
          {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
            <Anecdote
             key={anecdote.id}
             anecdote = {anecdote}
             voteHandler={() => dispatch(addVote(anecdote.id))}
            />
          )}
      </ul>
    </section>
  )
}

export default AnecdoteList