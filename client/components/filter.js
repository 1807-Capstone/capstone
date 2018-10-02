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
  constructor() {
    super()
    this.state = {
      cuisine: ''
    }
  }
  select = evt => {
    evt.preventDefault()
    this.setState({cuisine: evt.target.elements.cuisine.value})
  }
  filter = evt => {
    evt.preventDefault()
    console.log('evt target', evt.target.elements.cuisine.value)
    // this.props.getRestaurants()
  }
  render() {
    return (
      <div className="ui form">
        <br />
        <h2 className="ui one column stackable center aligned page grid">
          Filter
        </h2>
        <br />
        <br />
        <FilterFormRedux
          handleSubmit={this.filter}
          handleSelect={this.select}
        />
        <br />
        <br />
        <RestaurantList />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
