import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

import Filter from './Filter'

const AnecdoteList = props => {
  
  const voteHandler = ({ id, content  }) => {
    props.addVote(id)
    props.createNotification(content, 5000)
  }

  const Anecdote = ({ anecdote, voteHandler }) => (
    <li key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        Has {anecdote.votes} 
        <button onClick={voteHandler}>Vote</button>
      </div>
    </li>
  )
  
  return (
    <section>
      <h3>Anecdote list</h3>
      <Filter />
      <ul>
        {props.anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const mapStateToProps = state => state.filter
  ? { anecdotes: state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase())) }
  : { anecdotes: state.anecdotes }

const mapDispatchToProps = {
  addVote,
  createNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList