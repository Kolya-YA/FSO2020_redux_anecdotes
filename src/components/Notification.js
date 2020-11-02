import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    marginTop: '1rem',
    border: '1px solid #ddd',
    borderRadius: 5,
    backgroundColor: '#eee',
    padding: '10px 15px',
  }
  return notification && (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification