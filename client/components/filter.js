import React from 'react'
import FilterFormRedux from './filterFormRedux'
import RestaurantList from './allRestaurants'
import {fetchAllRestaurantsFromServer} from '../store/restaurant'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  allRestaurants: state.restaurant.allRestaurants
})

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(fetchAllRestaurantsFromServer())
})

class Filter extends React.Component {
  filter = evt => {
    evt.preventDefault()
    this.props.getRestaurants()
  }
  render() {
    return (
      <div className="ui form">
        <br />
        <h2 className="ui one column stackable center aligned page grid">
          Filter
        </h2>
        <FilterFormRedux handleSubmit={this.filter} />
        <RestaurantList />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
