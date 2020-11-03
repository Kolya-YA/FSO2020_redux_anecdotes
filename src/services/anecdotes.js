import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const toObject = content => ({ content, votes: 0 })
  const response = await axios.post(baseUrl, toObject(content))
  return response.data
}

const addVote = async id => {
  const currentUrl = `${baseUrl}/${id}`
  const currentAnecdote = await axios.get(currentUrl)
  const updatedAnecdote = { ...currentAnecdote.data, votes: currentAnecdote.data.votes + 1}
  const response = await axios.put(currentUrl, updatedAnecdote)
  return response.data
}

export default { getAll, createNew, addVote }