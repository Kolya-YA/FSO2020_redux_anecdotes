const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => (
  {
    content: anecdote,
    id: getId(),
    votes: 0
  }
)

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

export const addVote = id => (
  {
    type: 'ADD_VOTE',
    data: { id }
  }
)

export const newAnecdote = content => (
  {
    type: 'NEW_ANECDOTE',
    data: content
  }
)

export default anecdoteReducer