import React from 'react'
import FilterFormRedux from './filterFormRedux'

class Filter extends React.Component {
  render() {
    return (
      <div className="ui form">
        <br />
        <h2 className="ui one column stackable center aligned page grid">
          Filter
        </h2>
        <FilterFormRedux />
      </div>
    )
  }
}

export default Filter
