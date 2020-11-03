import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, clearFilter } from '../reducers/filterReducer'


const Filter = () => {
  const dispatch = useDispatch()
  const filterStr = useSelector(state => state.filter)

  const handleChange = e => {
    console.log('Filter: ', e.target.value)
    dispatch(setFilter(e.target.value))
  }

  const handleClear = () => {
    dispatch(clearFilter())
  }

  return (
    <section>
      <label htmlFor='filter'>Filter </label>
      <input name='filter' type='text' onChange={handleChange} value={filterStr} />
      <button onClick={handleClear}>Clear</button>
    </section>
  )
}

export default Filter