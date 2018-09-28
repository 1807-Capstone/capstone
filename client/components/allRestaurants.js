import React, {Component} from 'react'
import {getRestaurantsFromExternalAPIs} from '../store/restaurant'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {SingleRestaurant} from './singleRestaurant'

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants
  }
}

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(getRestaurantsFromExternalAPIs())
})

export class AllRestaurants extends Component {
  async componentDidMount() {
    await this.props.getRestaurants()
  }

  render() {
    console.log('restaurants', this.props.restaurants)
    if (this.props.restaurants.length) {
      return (
        <div>
          <h2>All Restaurants</h2>
          {this.props.restaurants.map(restaurant => {
            return (
              <div key={restaurant.id}>
                <NavLink
                  to={`/restaurants/${restaurant.id}`}
                  className="item"
                  restaurant={restaurant}
                  render={props => (
                    <SingleRestaurant {...props} restaurant={restaurant} />
                  )}
                >
                  <h4>{restaurant.name}</h4>
                </NavLink>
                <p>{restaurant.location}</p>
                <p>{restaurant.price}</p>
                <p>{restaurant.yelpRating}</p>
                <p>{restaurant.googleRating}</p>
                <p>{restaurant.radiusRating}</p>
              </div>
            )
          })}
        </div>
      )
    } else return <h3>Sorry, we could not find any restaurants</h3>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRestaurants)
