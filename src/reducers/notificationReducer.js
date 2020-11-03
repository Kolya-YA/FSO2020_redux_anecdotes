const notificationReducer = (state = '', action) => {
  switch(action.type) {
    case 'CREATE_NOTIFICATION':
      return action.data
    case 'DELETE_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export const createNotification = (content, duration=5000) => {
  return async dispatch => {
    dispatch({
      type: 'CREATE_NOTIFICATION',
      data: `You voted "${content.slice(0, 25)}..."`
    })
    setTimeout(() => {
      dispatch(delNotification())
    }, duration)
  }
}

export const delNotification = () => (
  {
    type: 'DELETE_NOTIFICATION',
    data: ''
  }
)

export default notificationReducer