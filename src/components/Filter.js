import React from 'react'
import { connect } from 'react-redux'
import { setFilter, clearFilter } from '../reducers/filterReducer'

const Filter = props => {

  const handleChange = e => {
    props.setFilter(e.target.value)
  }

  const handleClear = () => {
    props.clearFilter()
  }

  return (
    <section>
      <label htmlFor='filter'>Filter </label>
      <input name='filter' type='text' onChange={handleChange} value={props.filterStr} />
      <button onClick={handleClear}>Clear</button>
    </section>
  )
}

const mapStateToProps = state => ({ filterStr: state.filter })
const mapDispatchToProps = { setFilter, clearFilter }

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default ConnectedFilter