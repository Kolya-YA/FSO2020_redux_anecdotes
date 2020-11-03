import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VOTE':
      const id = action.data.id
      const addOneVote = ancdote => ({
        ...ancdote,
        votes: ancdote.votes + 1
      })
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : addOneVote(anecdote)
      )
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({ type: "INIT_ANECDOTES", data: anecdotes })
  }
}

export const addVote = id => {
  return async dispatch => {
    const newContent = await anecdoteService.addVote(id)
    dispatch({ type: 'ADD_VOTE', data: newContent })
  }
}

export const newAnecdote = content => {
  return async dispatch => {
    const newContent = await anecdoteService.createNew(content)
    dispatch({ type: 'NEW_ANECDOTE', data: newContent })
  }
}

export default anecdoteReducer