import React, {Component} from 'react'
import {
  fetchAllRestaurantsFromServer,
  gotOneRestaurant
} from '../store/restaurant'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const mapStateToProps = state => {
  return {
    allRestaurants: state.restaurant.allRestaurants,
    allFetching: state.restaurant.allFetching
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllRestaurantsFromServer: () =>
    dispatch(fetchAllRestaurantsFromServer()),
  gotOneRestaurant: restaurant => dispatch(gotOneRestaurant(restaurant))
})

export class AllRestaurants extends Component {
  handleClick = event => {
    event.preventDefault()
    this.props.fetchAllRestaurantsFromServer()
  }
  handleRestaurantClick = value => {
    const selectedRestaurant = this.props.allRestaurants.filter(
      restaurant => restaurant.name === value
    )
    this.props.gotOneRestaurant(selectedRestaurant[0])
  }
  render() {
    const allRestaurants = this.props.allRestaurants
    if (this.props.allFetching) {
      return (
        <div>
          <button type="button" onClick={this.handleClick}>
            {' '}
            Fetch Restaurants
          </button>
        </div>
      )
    } else
      return (
        <div>
          <h1>All Restaurants</h1>
          {allRestaurants.map((restaurant, idx) => {
            return (
              <div key={restaurant.id}>
                <Link
                  to={`/restaurants/${restaurant.name}`}
                  onClick={() => this.handleRestaurantClick(restaurant.name)}
                >
                  {restaurant.name}
                </Link>
                <p>
                  Price level: {restaurant.price_level} ---------- ||Yelp Price
                  level: {restaurant.yelpResults.price}
                </p>
                <p>
                  Google Rating: {restaurant.rating} ---------- ||Yelp Rating:{' '}
                  {restaurant.yelpResults.rating}{' '}
                </p>
                <p>
                  ---------------------------------------------------------------------------------------------
                </p>
              </div>
            )
          })}
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRestaurants)
