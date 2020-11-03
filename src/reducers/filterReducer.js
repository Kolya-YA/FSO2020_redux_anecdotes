const filterReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.data
    case 'CLEAR_FILTER':
      return ''
    default:
      return state
  }
}

export const setFilter = filterStr => (
  {
    type: 'SET_FILTER',
    data: filterStr
  }
)

export const clearFilter = () => (
  {
    type: 'CLEAR_FILTER',
    data: ''
  }
)

export default filterReducer